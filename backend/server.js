const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require('cors');
const session = require('express-session');
const crypto = require('crypto');
const { error } = require("console");

const app = express();
const port = 2003;

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const secretKey = crypto.randomBytes(64).toString('hex');


app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true,
}));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"rafikimali",
})
db.connect((err)=>{
    if(err)throw err;
    console.log("connection to database successful");
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
//============================= AUTHENTICATION =====================================================
//login and validation
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: true,
      message: 'Both email and password are required fields',
    });
  }

  // Query to check if the user with the given email and password exists
  const checkUserQuery = 'SELECT * FROM users WHERE email = ? AND password = ?';

  db.query(checkUserQuery, [email, password], (error, results) => {
    if (error) {
      console.error('Error checking user:', error);
      return res.status(500).json({
        error: true,
        message: 'Error checking user',
      });
    }

    if (results.length === 0) {
      return res.status(401).json({
        error: true,
        message: 'Invalid email or password',
      });
    }

    const user = results[0];
    req.session.userID = user.id, user.fname, user.lname; 
    //console.log(req.session.userID)

    return res.status(200).json({
      error: false,
      message: 'Login successful',
      user: {
        id: user.id,
        fname: user.fname,
        lname: user.lname,
      },
    });
  });
});

  //registration
  app.post('/registration', (req, res) => {
    const { fname, lname, email, mobileNo, password } = req.body;
  
    if (!fname || !lname || !email || !mobileNo || !password) {
      return res.status(400).json({
        error: true,
        message: 'All fields are required for registration',
      });
    }
  
    // Query to insert a new user into the users table
    const insertUserQuery = 'INSERT INTO users (fname, lname, email, mobileNo, password) VALUES (?, ?, ?, ?, ?)';
  
    db.query(insertUserQuery, [fname, lname, email, mobileNo, password], (error, results) => {
      if (error) {
        console.error('Error inserting user:', error);
        return res.status(500).json({
          error: true,
          message: 'Error registering user',
        });
      }
  
      // User is successfully registered
      return res.status(200).json({
        error: false,
        message: 'Registration successful',
        user: results.insertId, // You can send the newly inserted user's ID if needed
      });
    });
  });
  
  
// Define a route to fetch all users
app.post('/api/users', (req, res) => {
  const {id}=req.body;
  const query = 'SELECT * FROM users WHERE id = ? ';
  db.query(query,[id], (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});


//========================================== INCOME ===================================================
//add income tracking
  app.post('/api/income-tracking',(req, res)=>{
    const {source, amount, date, userId} = req.body;

    if (!source || !amount || !date || !userId) {
      return res.status(400).json({
        error: true,
        message: 'All fields are required for registration',
      });
    }
    const query ='INSERT INTO income (source, amount, date, userId) VALUES (?, ?, ?, ?)';
    db.query(query, [source, amount, date, userId], (error, results) => {
      if (error) {
        console.error('Error inserting user:', error);
        return res.status(500).json({
          error: true,
          message: 'Error inserting income data',
        });
      }
  
      return res.status(200).json({
        error: false,
        message: 'Data inserted successful',
        user: results,
      });
    });


  })





//get tracking element by id 
app.get('/api/income-report/:userId', (req, res) => {
  // Extract the user ID from the request parameters
  const userId = req.params.userId;

  // Construct the SQL query to retrieve all income records for the specified user
  const query = 'SELECT * FROM income WHERE userId = ?';

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: true, message: 'Failed to fetch data' });
    }

    return res.status(200).json({ 
      error: false, 
      data: results 
    });
  });
});


//delete income data
app.delete('/api/income-delete/:id', (req, res) => {
  const incomeId = req.params.id;

  // Construct the SQL query to delete the row by ID
  const deleteQuery = 'DELETE FROM income WHERE id = ?';

  db.query(deleteQuery, [incomeId], (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).json({ error: true, message: 'Failed to delete data' });
    }

    if (result.affectedRows === 0) {
      // No rows were deleted (row with the specified ID not found)
      return res.status(404).json({ error: true, message: 'Income record not found' });
    }

    // Row deleted successfully
    return res.status(200).json({ error: false, message: 'Income record deleted successfully' });
  });
});

//total income
app.get('/api/total-income/:userId', (req, res) => {
  const userId = req.params.userId;
  const sqlQuery = `
    SELECT SUM(amount) AS total_amount
    FROM income
    WHERE userId = ?`;
 

  db.query(sqlQuery, [userId], (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: true, message: 'Failed to fetch data' });
    }

    // Extract the total amount from the query results
    const totalAmount = results[0].total_amount;

    res.status(200).json({ 
      error: false, 
      totalAmount: totalAmount 
    });
  });
});



//================================================= EXPENSES =============================================

  //add expenses tracking
  app.post('/api/expenses-tracking',(req, res)=>{
    const {expensesDetails, amount, date, userId} = req.body;

    if (!expensesDetails || !amount || !date || !userId) {
      return res.status(400).json({
        error: true,
        message: 'All fields are required for registration',
      });
    }
    const query ='INSERT INTO expenses (expensesDetails, amount, date, userId) VALUES (?, ?, ?, ?)';
    db.query(query, [expensesDetails, amount, date, userId], (error, results) => {
      if (error) {
        console.error('Error inserting user:', error);
        return res.status(500).json({
          error: true,
          message: error,
        });
      }
  
      return res.status(200).json({
        error: false,
        message: 'Data inserted successful',
        user: results,
      });
    });


  })


//get expenses element by id 
app.get('/api/expenses-report/:userId', (req, res) => {
  // Extract the user ID from the request parameters
  const userId = req.params.userId;

  // Construct the SQL query to retrieve all income records for the specified user
  const query = 'SELECT * FROM expenses WHERE userId = ?';

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: true, message: 'Failed to fetch data' });
    }

    return res.status(200).json({ 
      error: false, 
      data: results 
    });
  });
});

//total expenses
app.get('/api/total-expenses/:userId', (req, res) => {
  const userId = req.params.userId;
  const sqlQuery = `
    SELECT SUM(amount) AS total_amount
    FROM expenses
    WHERE userId = ?`;
 

  db.query(sqlQuery, [userId], (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: true, message: 'Failed to fetch data' });
    }

    // Extract the total amount from the query results
    const totalAmount = results[0].total_amount;

    res.status(200).json({ 
      error: false, 
      totalAmount: totalAmount 
    });
  });
});

//=================================== SAVINGS =======================================================
  //add savings
  app.post('/add-savings', (req, res) => {
    const {
      purpose, numDays, totalAmount, savingType, savingFreq, currentAmount, remainingAmount ,userId} = req.body;
      console.log(req.body);
    // if (!purpose || !numDays || !totalAmount || !savingType || !savingFreq|| !currentAmount || !remainingAmount|| !userId) {
    //   return res.status(400).json({
    //     error: true,
    //     message: error,
    //   });
    // }
  
    // Query to insert savings into the database
    const insertSavingsQuery = 'INSERT INTO savings (purpose, numDays, totalAmount, savingType, savingFreq, currentAmount, remainingAmount, userId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  
    db.query(insertSavingsQuery, [purpose, numDays, totalAmount, savingType, savingFreq, currentAmount, remainingAmount, userId], (error, results) => {
      if (error) {
        console.error('Error adding savings:', error);
        return res.status(500).json({
          error: true,
          message: 'Error adding savings',
        });
      }
  
      // Savings are successfully added
      return res.status(200).json({
        error: false,
        message: 'Savings added successfully',
        savings: results, // You can send additional data if needed
      });
    });
  });

//get savings element by id 
app.get('/api/savings-report/:userId', (req, res) => {
  // Extract the user ID from the request parameters
  const userId = req.params.userId;

  // Construct the SQL query to retrieve all savings records for the specified user
  const query = 'SELECT * FROM savings WHERE userId = ?';

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: true, message: 'Failed to fetch data' });
    }

    return res.status(200).json({ 
      error: false, 
      data: results,
    });
  });
});

// total savngs
app.get('/api/total-savings/:userId', (req, res) => {
  const userId = req.params.userId;
  const sqlQuery = `
    SELECT SUM(currentAmount) AS total_amount
    FROM savings
    WHERE userId = ?`;
 

  db.query(sqlQuery, [userId], (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: true, message: 'Failed to fetch data' });
    }

    // Extract the total amount from the query results
    const totalAmount = results[0].total_amount;

    res.status(200).json({ 
      error: false, 
      totalAmount: totalAmount 
    });
  });
});



//========================================= INVESTMENT ===================================================
//investment companies
app.get('/api/investment-companies', (req, res) => {
  const query = 'SELECT * FROM investmentOptions';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: true, message: 'Failed to fetch data' });
    }

    return res.status(200).json({ 
      error: false, 
      data: results 
    });
  });
});

//investment options
app.get('/api/investment-options', (req, res) => {
  const query = 'SELECT * FROM investmentOptions';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: true, message: 'Failed to fetch data' });
    }

    return res.status(200).json({ 
      error: false, 
      data: results 
    });
  });
});


//joined investment tables
app.get('/api/joined-data', (req, res) => {
  const query = `
    SELECT io.id AS optionId, io.investmentType, ic.id AS companyId, ic.companyName
    FROM investmentOptions AS io
    INNER JOIN investmentCompanies AS ic ON io.companyId = ic.id
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: true, message: 'Failed to fetch data' });
    }

    return res.status(200).json({ error: false, data: results });
  });
});


//add investment
app.post('/api/add-investment',(req, res)=>{
  const {cdnAccount, companyName, investmentOpt, timeForInvestment, amount, userId} = req.body;

  // if (!expensesDetails || !amount || !date || !userId) {
  //   return res.status(400).json({
  //     error: true,
  //     message: 'All fields are required for registration',
  //   });
  // }
  const query ='INSERT INTO investment (cdnAccount, companyName, investmentOpt, timeForInvestment, amount, userId) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [cdnAccount, companyName, investmentOpt, timeForInvestment, amount, userId], (error, results) => {
    if (error) {
      console.error('Error inserting user:', error);
      return res.status(500).json({
        error: true,
        message: error,
      });
    }

    return res.status(200).json({
      error: false,
      message: 'Data inserted successful',
      user: results,
    });
  });


})

//total investment
app.get('/api/total-investment/:userId', (req, res) => {
  const userId = req.params.userId;
  const sqlQuery = `
    SELECT SUM(amount) AS total_amount
    FROM investment
    WHERE userId = ?`;
 

  db.query(sqlQuery, [userId], (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.status(500).json({ error: true, message: 'Failed to fetch data' });
    }

    // Extract the total amount from the query results
    const totalAmount = results[0].total_amount;

    res.status(200).json({ 
      error: false, 
      totalAmount: totalAmount 
    });
  });
});