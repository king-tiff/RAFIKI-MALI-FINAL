import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import request from "superagent";

function IncomeTracking() {
    const [source, setSource] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setUserId(localStorage.getItem('userId'));
    }, []);
    console.log(userId);

    useEffect(() => {
        // Show the alert when the message is not empty
        if (message) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [message]);

    const handleIncome = (e) => {
        e.preventDefault();

        const data = { source, amount, date, userId };

        console.log('Sending data:', data);

        request
            .post('http://localhost:2003/api/income-tracking')
            .send(data)
            .then(response => {
                console.log('Response:', response);
                if (response.body.error === false) {
                    setMessage('Data inserted successfully');
                    navigate('/income-report');

                } else {
                    setMessage('Failed to insert user income');
                }
            })
            .catch(error => {
                console.log('Error:', error);
                // setMessage(error);
            });
    }


    return (
        <div className="main-wrapper">
            <Header />
            <div className="row" style={{ marginTop: '40px' }}>
                <div className="col-sm-3"><Navbar /></div>
                <div className="col-sm-9">
                    <div className="d-flex justify-content-end">
                        <Link to="/income-report">
                            <button className="btn btn-outline-info mx-3">Income report</button>
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
                        <p className="h1 mb-3">Income Tracking</p>
                        <form>
                            <div className="row">
                                <div className="col">
                                    <p>Enter your income and expenses, and we will calculate the minimum amount of money that you can start to save</p>
                                    <div className="mb-3 mt-5">
                                        <label className="form-label">Enter your income source:</label>
                                        <input
                                            type="text"
                                            className="form-control rounded-pill"
                                            placeholder="My private funds"
                                            value={source}
                                            onChange={(e) => setSource(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3 mt-5">
                                        <label className="form-label">Enter the income amount:</label>
                                        <input
                                            type="number"
                                            className="form-control rounded-pill"
                                            placeholder="3,000,000"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3 mt-5">
                                        <label className="form-label">Enter date:</label>
                                        <input
                                            type="date"
                                            className="form-control rounded-pill"
                                            placeholder="mm/dd/yy"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mt-5 p-3">
                                    <button className="btn btn-outline-success" onClick={handleIncome}>Confirm Info</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IncomeTracking;
