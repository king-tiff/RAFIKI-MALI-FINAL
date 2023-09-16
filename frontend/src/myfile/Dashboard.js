import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faCreditCard, faDollar, faTimeline } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Header from './Header';
import InvestmentCompanies from './InvestmentCompanies';
import SavingCard from './SavingCard';
import InvestmentCard from './InvestmentCard';
import IncomeCard from './IncomeCard';
import ExpensesCard from './ExpensesCard';

const investment = 'http://localhost:2003/api/investment-companies';

const Dashboard = ({ totalIncome, totalExpenses }) => {
    const [userId, setUserId] = useState('');
    const [fname, setFname] = useState('');
    const [companies, setCompanies] = useState([]);
    const [message, setMessage] = useState('');
    const [investmentCompanies, setInvestmentCompanies] = useState([]);

    useEffect(() => {
        setUserId(localStorage.getItem('userId'));
        setFname(localStorage.getItem('fname'));
    }, []);

    // Parse totalIncome and totalExpenses as numbers
    const parsedTotalIncome = parseFloat(totalIncome);
    const parsedTotalExpenses = parseFloat(totalExpenses);

    // Check if the parsing was successful
    const isIncomeValid = !isNaN(parsedTotalIncome);
    const isExpensesValid = !isNaN(parsedTotalExpenses);

    // Calculate netIncome only if both totalIncome and totalExpenses are valid numbers
    const netIncome = isIncomeValid && isExpensesValid ? parsedTotalIncome - parsedTotalExpenses : 0;

    console.log(userId);
    console.log(totalExpenses);
    console.log(totalIncome);

    // Rest of your component code...

    return (
        <div className="main-wrapper">
            <Header />
            <p>{investmentCompanies}</p>
            <div className="row" style={{ marginTop: '40px' }}>
                <div className="col-sm-3">
                    <Navbar />
                </div>
                <div className="col-sm-9" style={{ paddingRight: '20px' }}>
                    <div className='welcomeword'><h2>Welcome back, {fname}</h2></div>
                    <div className="top-nav-search">
                        <form>
                            <input type="text" className="form-control" placeholder="Search" />
                            <button className="btn" type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div className='thedashboard'>
                        <div className="row">
                            <div className="col-xl-3 col-sm-6 col-12">
                                <SavingCard />
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <InvestmentCard />
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <IncomeCard />
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <ExpensesCard />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 d-flex">
                            <div className="card card-table flex-fill">
                                <div className="card-header">
                                    <h4 className="card-title text-bold">Investment options and companies</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <InvestmentCompanies />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
