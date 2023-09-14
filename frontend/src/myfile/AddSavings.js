import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import request from "superagent";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import Navbar from './Navbar';
import Header from './Header';

const AddSavings = () => {
  const [purpose, setPurpose] = useState('');
  const [numDays, setNumDays] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [savingType, setSavingType] = useState('');
  const [savingFreq, setSavingFreq] = useState('');
  const currentAmount = 0;
  const remainingAmount = totalAmount;
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false); // State for controlling the alert

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

    const data = { purpose, numDays, totalAmount, savingType, savingFreq, currentAmount, remainingAmount, userId };

    console.log('Sending data:', data);

    request
      .post('http://localhost:2003/add-savings')
      .send(data)
      .set('Content-Type', 'application/json')
      .then(response => {
        console.log('Response:', response);
        if (response.body.error === false) {
          setMessage('Data inserted successfully');
          navigate('/my-savings')
        } else {
          setMessage('Failed to insert user Expenses');
        }
      })
      .catch(error => {
        console.error('Error:', error); // Log the error
        console.log(error);
        setMessage('An error occurred while sending the data. Please try again.');
      });
  };



  return (
    <div className="main-wrapper">
      <Header />
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
      <div className='row' style={{ marginTop: '40px' }}>
        <div className='col-sm-3'><Navbar /></div>
        <div className='col-sm-9'>
          <p className='h1 mt-3'>Add Savings</p>
          <div className="d-flex justify-content-end">
            <Link to="/my-savings">
              <button className="btn btn-outline-info mx-3">My savings</button>
            </Link>
          </div>
          <div className='container'>
            <form>
              <p>{message}</p>
              <div className="mb-3">
                <label htmlFor="goalPurpose" className="form-label">Saving purpose:</label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  placeholder="Purpose (e.g. retirement, education fund)"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)} />
              </div>

              <div className="mb-3 mt-5">
                <label htmlFor="goalPurpose" className="form-label">Total Amount to save:</label>
                <input
                  type="number"
                  className="form-control rounded-pill"
                  placeholder="500,000"
                  value={totalAmount}
                  onChange={(e) => setTotalAmount(e.target.value)} />
              </div>

              <div className="mb-3">
                <label htmlFor="goalPurpose" className="form-label">Enter number of days:</label>
                <input
                  type="number"
                  className="form-control rounded-pill"
                  placeholder="30"
                  value={numDays}
                  onChange={(e) => setNumDays(e.target.value)} />
              </div>

              <div className='mb-3 mt-5'>
                <label htmlFor="goalPurpose" className="form-label">Type of saving:</label>
                <select className="form-select rounded-pill" value={savingType} onChange={(e) => setSavingType(e.target.value)}>
                  <option></option>
                  <option>Fixed saving</option>
                  <option>Flexible saving</option>
                </select>
              </div>


              <div className='mb-3 mt-5'>
                <label htmlFor="goalPurpose" className="form-label">Saving frequency:</label>
                <select className="form-select rounded-pill" value={savingFreq} onChange={(e) => setSavingFreq(e.target.value)}>
                  <option></option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>
              </div>

              <div class="d-flex justify-content-end mt-5 p-3">
                <button class="btn btn-outline-success" onClick={handleExpenses}>Start saving</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSavings;
