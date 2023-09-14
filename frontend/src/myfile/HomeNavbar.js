import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
function HomeNavbar() {
    return(
        <header className="main-wrapper">
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
                  <Link className="nav-link" to="/">Home</Link>
                </li>
  
                <li className="nav-item">
                <Link className="nav-link" to="/about-us">About us</Link>
                </li>
  
                  <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact us</Link>
                </li>
            
              </ul>
  
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="btn btn-outline-success" to="/login" style={{ color: '#4CAF4F' }}>Login / Signup</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
}
export default HomeNavbar;