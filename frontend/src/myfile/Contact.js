import React from "react";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Home from "./Home";
import Navbar from "./Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";
import "./Style2.css";
import Header from "./Header.js";


const Contact = () => {
  return (
    <div className="main-wrapper">
      <Header/>
      <div className="row">
        <div className="col-sm-3"><Navbar /></div>
        <div className="col-sm-9">

      <div className="container  w-50 ">
        <div className="row">
          <div className="col-sm-6">	
            <div>
              <div className="position-relative" style={{ top: "24vh", paddingRight: '45px' }}>
                <h3 style={{fontSize: '38px'}}> We would love to hear from you. </h3>
              </div>
			  
            </div>

          </div>
          <div className= 'card col-sm-6 p-4' style={{width: '50%', top:'80px'}}>
            <form action="#">
              <div className="form-group form-focus">
                <input type="text" className="form-control floating" />
                <label className="focus-label">Your name</label>
              </div>

              <div className="form-group form-focus">
                <input type="email" className="form-control floating" />
                <label className="focus-label">Email</label>
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <br />
              <div className="form-group form-focus">
                <textarea type="password" className="form-control floating" />
                <label className="focus-label">Enter your message</label>
              </div>

              <submit className="btn btn-primary custom-btn" type="submit">
                Submit
              </submit>
            </form>
          </div>
        </div>
      </div>
        </div>
      </div>
      

    </div>
  );
};

export default Contact;