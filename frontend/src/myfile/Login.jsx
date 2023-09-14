import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Style2.css';
import request from 'superagent';
import { Link, useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); //Prevent form submission

        request
            .post('http://localhost:2003/login')
            .send({ email, password })
            .then(response => {
                console.log(response.body.message);
                
                if (response.body.error === false) {
                    setMessage('Login successful');

                    //get userid
                    const userId = response.body.user.id;                    
                    localStorage.setItem('userId', userId)

                    //get fname
                    const fname = response.body.user.fname;                    
                    localStorage.setItem('fname', fname)

                    //get lname
                    const lname = response.body.user.lname;                    
                    localStorage.setItem('lname', lname)

                    

                   navigate('/dashboard');
                } else {
                    setMessage('Invalid credentials');
                }
            })
            .catch(error => {
                console.error(error);
                console.log(error);
            });
    };

    return (
        <div className="main-wrapper">
            <div className="content">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 login-right">
                            <div className="account-content">
                                <div className="login-header">
                                    <h2> Login </h2>
                                </div>
                                <form>
                                    <div className="form-group form-focus">
                                        <input
                                            type="text"
                                            className="form-control floating"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="form-group form-focus">
                                        <input
                                            type="password"
                                            className="form-control floating"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                        />
                                    </div>
                                    <button
                                        className="btn btn-primary btn-block btn-lg login-btn"
                                        type="submit"
                                        onClick={handleLogin}
                                    >
                                        Log in
                                    </button>
                                    <div className="text-right mt-4">
                                        <p>Don't have an account?</p>
                                        <Link to='/registration'>Register here</Link>
                                    </div>
                                    <div className="login-or">
                                        <span className="or-line"></span>
                                        <span className="span-or">or</span>
                                    </div>
                                    <div className="row form-row social-login">
                                        <div className="col-6">
                                            <a href="#" className="btn btn-google btn-block">
                                                <i className="fab fa-google mr-1"></i> Google
                                            </a>
                                        </div>
                                    </div>
                                </form>
                                <p>{message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;