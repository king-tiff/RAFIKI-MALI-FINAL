import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style2.css';
import request from 'superagent';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

const Registration = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRegistration = (e) => {
        e.preventDefault(); // Prevent form submission

        request
            .post('http://localhost:2003/registration')
            .send({ fname, lname, email, mobileNo, password })
            .then(response => {
                if (response.body.error === false) {
                    setMessage('Data inserted successfully');
                    // You can add routing logic here
                    navigate('/login'); 
                } else {
                    setMessage('Failed to insert data');
                }
            })
            .catch(error => {
                console.error(error);
                setMessage('An error occurred during data insert');
            });
    };

    return (
        <div className="main-wrapper">
            <Header />

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-8 offset-md-2">

                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-12 col-lg-6 login-right">
                                <div className="login-header">
                                    <h2> Create account </h2>
                                </div>
                                <form>

                                    <div className="form-group form-focus">
                                        <input type="text"
                                            className="form-control floating"
                                            value={fname}
                                            onChange={(e) => setFname(e.target.value)}
                                        />
                                        <label className="focus-label">First name</label>
                                    </div>
                                    <div className="form-group form-focus">
                                        <input type="text"
                                            className="form-control floating"
                                            value={lname}
                                            onChange={(e) => setLname(e.target.value)} />
                                        <label className="focus-label">Last name</label>
                                    </div>

                                    <div className="form-group form-focus">
                                        <input type="text"
                                            className="form-control floating"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label className="focus-label">email</label>
                                    </div>
                                    <div className="form-group form-focus">
                                        <input type="text"
                                            className="form-control floating"
                                            value={mobileNo}
                                            onChange={(e) => setMobileNo(e.target.value)} />
                                        <label className="focus-label">Mobile Number</label>
                                    </div>
                                    <div className="form-group form-focus">
                                        <input type="password"
                                            className="form-control floating"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                        <label className="focus-label">Create Password</label>
                                    </div>

                                    <button className="btn btn-primary btn-block btn-lg login-btn" type="submit" onClick={handleRegistration}>Sign Up</button>

                                    <p className="mt-3">
                                        Already have an account?
                                        <Link to='/login' className="forgot-link" style={{ marginLeft: '10px' }}>Login</Link>
                                    </p>

                                    <div className="login-or">
                                        <span className="or-line"></span>
                                        <span className="span-or">or</span>
                                    </div>
                                    <div className="row form-row social-login">
                                        <div className="col-6">
                                            <a href="#" className="btn btn-google btn-block"><i className="fab fa-google mr-1"></i> Google</a>
                                        </div>
                                    </div>
                                </form>
                                <div className="message">{message}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Registration;