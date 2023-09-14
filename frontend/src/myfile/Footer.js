import React from 'react';
import './Style.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            {/* Footer Widget 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <h2 style={{ color: 'white' }}>RafikiMali</h2>
                </div>
                <div className="footer-about-content">
                  <p>Copyright @2020 Nexteyra ltd</p>
                  <div className="social-icon">
                    <ul>
                      <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="#" target="_blank"><i className="fab fa-dribbble"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Footer Widget 1 */}
            
            {/* Footer Widget 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu">
                <h3 className="footer-title">Company</h3>
                <ul>
                  <li><a href="#"><i className="fas fa-angle-double-right"></i> About us</a></li>
                  <li><a href="#"><i className="fas fa-angle-double-right"></i> Blog</a></li>
                  <li><a href="#"><i className="fas fa-angle-double-right"></i> Contact us</a></li>
                  <li><a href="#"><i className="fas fa-angle-double-right"></i> Testimonials</a></li>
                </ul>
              </div>
            </div>
            {/* /Footer Widget 2 */}
            
            {/* Footer Widget 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-menu" style={{ backgroundColor: '#4CAF4F' }}>
                <h3 className="footer-title">Support</h3>
                <ul>
                  <li><a href="#"><i className="fas fa-angle-double-right"></i> Help center</a></li>
                  <li><a href="#"><i className="fas fa-angle-double-right"></i> Terms of service</a></li>
                  <li><a href="#"><i className="fas fa-angle-double-right"></i> Privacy policy</a></li>
                  <li><a href="#"><i className="fas fa-angle-double-right"></i> Status</a></li>
                </ul>
              </div>
            </div>
            {/* /Footer Widget 3 */}
            
            {/* Footer Widget 4 */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-contact">
                <h2 className="footer-title">Let us get in touch</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span><i className="fas fa-map-marker-alt"></i></span>
                    <p> Sayansi, Kijitonyama, Dar es Salaam </p>
                  </div>
                  <p>
                    <i className="fas fa-phone-alt"></i>
                    +255 754 393 926
                  </p>
                  <p className="mb-0">
                    <i className="fas fa-envelope"></i>
                    rafikimalitz@gmail.com
                  </p>
                </div>
              </div>
            </div>
            {/* /Footer Widget 4 */}
          </div>
        </div>
      </div>
      {/* /Footer Top */}
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container-fluid">
          {/* Copyright */}
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="copyright-text">
                  <p className="mb-0"><a href="#"></a></p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                {/* Copyright Menu */}
                {/* <div className="copyright-menu">
                  <ul className="policy-menu">
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Policy</a></li>
                  </ul>
                </div> */}
                {/* /Copyright Menu */}
              </div>
            </div>
          </div>
          {/* /Copyright */}
        </div>
      </div>
      {/* /Footer Bottom */}
    </footer>
  );
};

export default Footer;
