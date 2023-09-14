import React, { useState, useEffect } from 'react';
import request from 'superagent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import Header from './Header';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const AddInvestment = () => {
    const [cdnAccount, setCdnAccount] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [investmentOpt, setInvestmenrOpt] = useState('');
    const [timeForInvestment, setTimeForInvestment] = useState('');
    const [amount, setAmount] = useState('');
    const userId = sessionStorage.getItem('userId');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const navigate =useNavigate();

    useEffect(() => {
        if (message) {
          setShowAlert(true);
        } else {
          setShowAlert(false);
        }
      }, [message]);
    
      const handleInvestment = (e) => {
        e.preventDefault();
    
        const data = { cdnAccount, companyName, investmentOpt, timeForInvestment, amount, userId };
    
        console.log('Sending data:', data);
    
        request
          .post('http://localhost:2003/add-investment')
          .send(data)
          .set('Content-Type', 'application/json')
          .then(response => {
            console.log('Response:', response);
            if (response.body.error === false) {
              setMessage('Data inserted successfully');
              navigate('/my-investment')
            } else {
              setMessage('Failed to insert user Expenses');
            }
          })
          .catch(error => {
            console.error('Error:', error);
            console.log(error);
            setMessage('An error occurred while sending the data. Please try again.');
          });
      };


    return (
        <div className="main-wrapper">
            <Header />
            <div className='row' style={{ marginTop: '40px' }}>
                <div className='col-sm-3'><Navbar /></div>
                <div className='col-sm-9'>
                    <p className='h1'>Add Investment</p>
                    <div className='container mt-5'>
                        <form>
                            <div className="row">
                                <div className="col">
                                    <p>Doyou have  CDN account</p>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" name='radio'/>
                                        <label class="form-check-label">Yes</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" name='radio'/>
                                        <label class="form-check-label">No</label>
                                    </div>

                                    <div className="mb-3 mt-5">
                                        <label className="form-label">Enter CDN account number:</label>
                                        <input
                                            type="text"
                                            className="form-control rounded-pill"
                                            placeholder="XXXX XXXX XXXX XXXX" 
                                            value={cdnAccount} onChange={(e) => setCdnAccount(e.target.value)}/>
                                    </div>
                                    <a href="#" class="btn btn-outline-success">Click here if you dont have an account</a>

                                    <div className='mb-3 mt-5'>
                                        <label className="form-label">Choose investment companies:</label>
                                        <select class="form-select rounded-pill" value={companyName} onChange={(e)=>setCompanyName(e.target.value)}>
                                            <option></option>
                                            <option>CRDB</option>
                                            <option>EQUITY</option>
                                            <option>Acacia Fund Managers</option>
                                            <option>Stanbic Bank Tanzania</option>
                                            <option>NMB Capital</option>
                                        </select>
                                    </div>

                                    <div className='mb-3 mt-5'>
                                        <label className="form-label">Investment options:</label>
                                        <select class="form-select rounded-pill" value={investmentOpt} onChange={(e)=>setInvestmenrOpt(e.target.value)}> 
                                            <option></option>
                                            <option>Stock investment</option>
                                            <option>Bond investment</option>
                                            <option>Mutual Funds</option>
                                            <option>Exchange-traded funds (ETFs)</option>
                                            <option>Real estate</option>
                                        </select>
                                    </div>


                                    <div className='mb-3 mt-5'>
                                        <label className="form-label">Time for Investment:</label>
                                        <select class="form-select rounded-pill" value={timeForInvestment} onChange={(e)=>setTimeForInvestment(e.target.value)}>
                                            <option></option>
                                            <option>6 months</option>
                                            <option>1 year</option>
                                            <option>2 years</option>
                                            <option>3 years</option>
                                            <option>4 years</option>
                                        </select>
                                    </div>


                                    <div className="mb-3 mt-5">
                                        <label className="form-label">Enter amount to invest:</label>
                                        <input
                                            type="number"
                                            className="form-control rounded-pill"
                                            placeholder="3,000,000" 
                                            value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                                    </div>

                                </div>



                                <div class="d-flex justify-content-end mt-5 p-3">
                                    <button class="btn btn-outline-success" type='submit' onClick={handleInvestment}>Confirm Investment</button>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddInvestment;
