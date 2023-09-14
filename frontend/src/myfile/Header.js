import React from "react";
import profile from './Rafikimali-images/profile.png';
import './Style2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faCreditCard, faMoney, faDollar, faDollarSign, faTimeline, faBell, faDumbbell, faConciergeBell, faBellSlash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {
    return(
        <header className="header">
                <nav className="navbar navbar-expand-lg header-nav">
                    <a className="navbar-brand logo" href="#">
                        <h2 className="h1" style={{ color: '#fff' }}>RafikiMali </h2>
                    </a>

                    <div className="main-menu-wrapper">
                        <div className="menu-header">
                            <a id="menu_close" className="menu-close" href="javascript:void(0);">
                                <i className="fas fa-times"></i>
                            </a>
                        </div>

                    </div>

                    <ul class="nav user-menu">


                        <li class="nav-item dropdown noti-dropdown">
                            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                                <i class="fa fa-bell"></i> <span className="dash-widget-icon text-danger border-danger" class="badge badge-pill">
                                    <FontAwesomeIcon icon={faBell} />5</span>
                            </a>
                            <div class="dropdown-menu notifications">
                                <div class="topnav-dropdown-header">
                                    <span class="notification-title">Notifications</span>
                                    <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
                                </div>
                                <div class="noti-content">
                                    <ul class="notification-list">
                                        <li class="notification-message">
                                            <a href="#">
                                                <div class="media">
                                                    <span class="avatar avatar-sm">
                                                        <img class="avatar-img rounded-circle" alt="User Image" src={profile} />
                                                    </span>
                                                    <div class="media-body">
                                                        <p class="noti-details"><span class="noti-title">Dr. Ruby Perrin</span> Schedule <span class="noti-title">her appointment</span></p>
                                                        <p class="noti-time"><span class="notification-time">4 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="notification-message">
                                            <a href="#">
                                                <div class="media">
                                                    <span class="avatar avatar-sm">
                                                        <img class="avatar-img rounded-circle" alt="User Image" src={profile} />
                                                    </span>
                                                    <div class="media-body">
                                                        <p class="noti-details"><span class="noti-title">Charlene Reed</span> has booked her appointment to <span class="noti-title">Dr. Ruby Perrin</span></p>
                                                        <p class="noti-time"><span class="notification-time">6 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="notification-message">
                                            <a href="#">
                                                <div class="media">
                                                    <span class="avatar avatar-sm">
                                                        <img class="avatar-img rounded-circle" alt="User Image" src={profile} />
                                                    </span>
                                                    <div class="media-body">
                                                        <p class="noti-details"><span class="noti-title">Travis Trimble</span> sent a amount of $210 for his <span class="noti-title">appointment</span></p>
                                                        <p class="noti-time"><span class="notification-time">8 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="notification-message">
                                            <a href="#">
                                                <div class="media">
                                                    <span class="avatar avatar-sm">
                                                        <img class="avatar-img rounded-circle" alt="User Image" src={profile} />
                                                    </span>
                                                    <div class="media-body">
                                                        <p class="noti-details"><span class="noti-title">Carl Kelly</span> send a message <span class="noti-title"> to his doctor</span></p>
                                                        <p class="noti-time"><span class="notification-time">12 mins ago</span></p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="topnav-dropdown-footer">
                                    <a href="#">View all Notifications</a>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item dropdown has-arrow">
                            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                                <span class="user-img"><img class="rounded-circle" src={profile} width="31" alt="Neema Mtungi" /></span>
                            </a>
                            <div class="dropdown-menu">
                                <div class="user-header">
                                    <div class="avatar avatar-sm">
                                        <img src={profile} alt="User Image" class="avatar-img rounded-circle" />
                                    </div>
                                    <div class="user-text">
                                        <h6>Ryan Taylor</h6>
                                        <p class="text-muted mb-0">Administrator</p>
                                    </div>
                                </div>
                                <a class="dropdown-item" href="profile.html">My Profile</a>
                                <a class="dropdown-item" href="settings.html">Settings</a>
                                <a class="dropdown-item" href="login.html">Logout</a>
                            </div>
                        </li>


                    </ul>

                </nav>
            </header>

    );
}
export default Header;