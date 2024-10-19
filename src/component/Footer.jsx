import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>E-Store</h3>
          <p>Your one-stop shop for all your needs.</p>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 E-Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
