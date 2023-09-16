import React, { useEffect, useState } from "react";
// import profile from './Rafikimali-images/profile.png';
import user from './Rafikimali-images/user.png';
import './Style2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
//import request from 'superagent';

function Navbar() {
    const [userID, setUserID] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');

    useEffect(() => {
        setUserID(localStorage.getItem('userid'))
        setFname(localStorage.getItem('fname'))
        setLname(localStorage.getItem('lname'))

    }, [])
    return (
        <div className='sidebardashboard'>
            <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                        <a href="#" className="booking-doc-img">
                            <img src={user} alt='profile' />
                        </a>
                        <div className="profile-det-info">
                            <h3>{fname} {lname}</h3>

                            <div className="patient-details">
                                <h5 className="mb-0">Entrepreneur, Small scale farmer</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                        <ul>
                            <li className="active">
                                <Link to='/dashboard'>
                                    <i className="fas fa-columns"></i>
                                    <span style={{ fontSize: '16px' }}>Dashboard</span>
                                </Link>
                            </li>

                            <li>
                                <a data-bs-toggle="collapse" href="#collapseOne">
                                    <i className="fas fa-user-injured"></i>
                                    <span style={{ fontSize: '16px' }}>Tracking</span>
                                </a>
                                <div id="collapseOne" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <a href="#">
                                            <i className="fas fa-user-injured"></i>
                                            <Link to='/income-report'>
                                                <span style={{ fontSize: '16px' }}>Income</span>
                                            </Link>
                                        </a>

                                        <a href="#">
                                            <i className="fas fa-user-injured"></i>
                                            <Link to='/expenses-report'>
                                                <span style={{ fontSize: '16px' }}>Expenses</span>
                                            </Link>
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a data-bs-toggle="collapse" href="#collapseTwo">
                                    <i className="fas fa-user-injured"></i>
                                    <span style={{ fontSize: '16px' }}>Savings</span>
                                </a>
                                <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <a href="#">
                                            <i className="fas fa-user-injured"></i>
                                            <Link to='/add-savings'>
                                                <span style={{ fontSize: '16px' }}>Add Savings</span>
                                            </Link>
                                        </a>

                                        <a href="#">
                                            <i className="fas fa-user-injured"></i>
                                            <Link to='/my-savings'>
                                                <span style={{ fontSize: '16px' }}>My Savings</span>
                                            </Link>
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a data-bs-toggle="collapse" href="#collapseThree">
                                    <i className="fas fa-user-injured"></i>
                                    <span style={{ fontSize: '16px' }}>Investment</span>
                                </a>
                                <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <a href="#">
                                            <i className="fas fa-user-injured"></i>
                                            <Link to='/add-investment'>
                                                <span style={{ fontSize: '14px' }}>Add Investment</span>
                                            </Link>
                                        </a>

                                        <a href="#">
                                            <i className="fas fa-user-injured"></i>
                                            <Link to='/my-investment'>
                                                <span style={{ fontSize: '14px' }}>My Investment</span>
                                            </Link>
                                        </a>
                                    </div>
                                </div>
                            </li>
                          
                            <li>
                                <a href="#">
                                    <i className="fas fa-file-invoice"></i>
                                    <span style={{ fontSize: '16px' }}>About Us</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-comments"></i>
                                    <span style={{ fontSize: '16px' }}>Notifications</span>
                                    <small className="unread-msg">5</small>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-star"></i>
                                    <span style={{ fontSize: '16px' }}>My profile</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <i className="fas fa-user-cog"></i>
                                    <span style={{ fontSize: '16px' }}>Contact Us</span>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <i className="fas fa-user-cog"></i>
                                    <span style={{ fontSize: '16px' }}>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-share-alt"></i>
                                    <Link to='/logout'>
                                    <span style={{ fontSize: '16px' }}>Log out</span>
                                    </Link>
                                </a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
export default Navbar;