import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We are a company that provides high quality products and services to our customers.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Address: 123 Main Street, Anytown, USA 12345</li>
              <li>Phone: 555-555-5555</li>
              <li>Email: info@yourcompany.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p className="text-muted">© 2023 Your Company Name</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

