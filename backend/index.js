const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require('express-session');

const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "rafikimali",
});
db.getConnection((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get("/users", function (req, res) {
  db.query("SELECT * FROM users", function (error, results, fields) {
    if (!error) {
      return res.send({
        error: false,
        data: results,
        message: "users list.",
      });
    } else {
      throw error;
    }
  });
});


app.get("/users/:id", function (req, res) {
  let user_id = req.params.id;
  if (!user_id) {
    return res.status(400).send({
      error: true,
      message: "please provide user_id.",
    });
  }
  db.query(
    "SELECT * FROM users where id=?",
    user_id,
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results[0],
        message: "users list.",
      });
    }
  );
});


// app.post("/users", function (req, res) {
//   let userData = req.body;

//   db.query("INSERT INTO users SET ?", userData, function (error, results, fields) {
//     if (!error) {
//       return res.send({
//         error: false,
//         data: results,
//         message: "User has been added successfully.",
//       });
//     } else {
//       throw error;
//     }
//   });
// });

app.post("/users", function (req, res) {
  let userData = req.body;

  // Basic validation - check if required fields are present
  if (!userData.firstName || !userData.lastName || !userData.email) {
    return res.status(400).json({
      error: true,
      message: "First Name, Last Name, and Email are required fields.",
    });
  }

  // Insert user data into the database
  db.query("INSERT INTO users SET ?", userData, function (error, results, fields) {
    if (error) {
      console.error("Database error:", error);
      return res.status(500).json({
        error: true,
        message: "User creation failed. Please try again later.",
      });
    }

    return res.status(201).json({
      error: false,
      data: results,
      message: "User has been added successfully.",
    });
  });
});

