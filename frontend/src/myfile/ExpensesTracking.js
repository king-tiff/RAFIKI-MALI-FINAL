import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import request from "superagent";
import Navbar from "./Navbar";
import Header from "./Header";

function ExpensesTracking() {
    const [expensesDetails, setExpensesDetails] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setUserId(localStorage.getItem('userId'));
    }, []);

    useEffect(() => {
        // Show the alert when the message is not empty
        if (message) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [message]);

    const handleExpenses = (e) => {
        e.preventDefault();

        const data = { expensesDetails, amount, date, userId };

        console.log('Sending data:', data);

        request
            .post('http://localhost:2003/api/expenses-tracking')
            .send(data)
            .set('Content-Type', 'application/json') // Set the content type
            .then(response => {
                console.log('Response:', response);
                if (response.body.error === false) {
                    setMessage('Data inserted successfully');
                    navigate('/expenses-report');
                } else {
                    setMessage('Failed to insert user Expenses');
                }
            })
            .catch(error => {
                console.log('Error:', error);
                setMessage('An error occurred while sending the data');
            });
    }




    return (
        <div className="main-wrapper">
            <Header />
            <div className="row" style={{ marginTop: '40px' }}>
                <div className="col-sm-3"><Navbar /></div>
                <div className="col-sm-9">
                    <div class="d-flex justify-content-end">
                        <Link to="/expenses-report">
                            <button class="btn btn-outline-info mx-3">Expeses report</button>
                        </Link>
                    </div>
                    {showAlert && ( // Render the alert conditionally
                        <div className="alert alert-success" role="alert">
                            <button
                                type="button"
                                className="btn-close p-3"
                                onClick={() => setShowAlert(false)}
                            ></button>
                            {message}
                        </div>
                    )}

                    <div className='container'>
                        <p className="h1">Expenses Tracking</p>
                        <form>

                            <p>Enter your expenses and we will calculate the minimum amount of money that you can start to save or invest</p>

                            <div className="mb-3 mt-5">
                                <label className="form-label">Enter type of expenses:</label>
                                <input
                                    type="text"
                                    className="form-control rounded-pill"
                                    placeholder="personal expenses"
                                    value={expensesDetails}
                                    onChange={(e) => setExpensesDetails(e.target.value)} />
                            </div>

                            <div className="mb-3 mt-5">
                                <label className="form-label">Enter the expense total amount:</label>
                                <input
                                    type="number"
                                    className="form-control rounded-pill"
                                    placeholder="3,000,000"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)} />
                            </div>

                            <div className="mb-3 mt-5">
                                <label className="form-label">date:</label>
                                <input
                                    type="date"
                                    className="form-control rounded-pill"
                                    placeholder="(number of days)"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)} />
                            </div>

                            <div class="d-flex justify-content-end mt-5 p-3">

                                <button class="btn btn-outline-success" onClick={handleExpenses}>Confirm Info</button>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default ExpensesTracking;