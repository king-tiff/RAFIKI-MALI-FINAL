import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './myfile/Home';
import Login from './myfile/Login';
import './myfile/Navbar';
import AddSavings from './myfile/AddSavings';
import AddInvestment from './myfile/AddInvestment';
import Registration from './myfile/Registration';
import IncomeTracking from './myfile/IncomeTracking';
import ExpensesTracking from './myfile/ExpensesTracking';
import IncomeReport from './myfile/IncomeReport';
import ExpensesReport from './myfile/ExpensesReport';
import MySavings from './myfile/MySavings';
import MyInvestment from './myfile/MyInvestment';
import Dashboard from './myfile/Dashboard';
import AboutUs from './myfile/AboutUs';
import Logout from './myfile/Logout';
import Contact from './myfile/Contact';


const App = () => {
  return (

    <div className="App">
     
    {/* <Navbar/> */}
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>

            <Route exact path='/add-savings' element={<AddSavings/>}></Route>
            <Route exact path='/my-savings' element={<MySavings/>}></Route>

            <Route exact path='/add-investment' element={<AddInvestment/>}></Route>
            <Route exact path='/my-investment' element={<MyInvestment/>}></Route>

            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/registration' element={<Registration/>}></Route>
            <Route exact path='/logout' element={<Logout/>}></Route>

            <Route exact path='/income-tracking' element={<IncomeTracking/>}></Route>
            <Route exact path='/income-report' element={<IncomeReport />}></Route>

            <Route exact path='/expenses-tracking' element={<ExpensesTracking/>}></Route>
            <Route exact path='/expenses-report' element={<ExpensesReport/>}></Route>

            <Route exact path='/dashboard' element={<Dashboard/>}></Route> 


            <Route exact path='/contact' element={<Contact/>}></Route>
            <Route exact path='/about-us' element={<AboutUs/>}></Route>
            


          </Routes>
          
         
    </div>

  );
};

export default App;