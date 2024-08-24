import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About ProjectHub</h5>
            <p>ProjectHub is an integrated platform that connects students and mentors to collaborate on innovative projects. Join us to enhance your learning experience through practical projects.</p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Projects</a></li>
              <li><a href="#" className="text-white">About</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled">
              <li><a href="mailto:support@projecthub.com" className="text-white">Email: support@projecthub.com</a></li>
              <li><a href="tel:+1234567890" className="text-white">Phone: +123 456 7890</a></li>
              <li><a href="#" className="text-white">Address: 1234 Main St, City, Country</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <div>
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; 2024 ProjectHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;