import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <header className="header container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand logo" to="/">
            <h2 className="h1" style={{ color: '#4CAF4F' }}>RafikiMali</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>

              <li className="nav-item">
                <div className="dropdown">
                  <button type="button" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Tracking
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="nav-link" to="/income-tracking">Income</Link></li>
                    <li><Link className="nav-link" to="/expenses-tracking">Expenses</Link></li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <div className="dropdown">
                  <button type="button" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Savings
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="nav-link" to="/add-savings">Add savings</Link></li>
                    <li><Link className="nav-link" to="/my-savings">My savings</Link></li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                {/* <Link className="nav-link" to="/investment">Investment</Link> */}
                <div className="dropdown">
                  <button type="button" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Investment
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="nav-link" to="/add-investment">Add investment</Link></li>
                    <li><Link className="nav-link" to="/my-investment">My investment</Link></li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact us</Link>
              </li>

            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="btn btn-outline-success" to="/" style={{ color: '#4CAF4F' }}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
