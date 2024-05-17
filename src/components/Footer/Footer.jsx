import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="ventures">
          <a href="#">CarDekho</a>
          <a href="#">ZigWheels</a>
          <a href="#">InsuranceDekho</a>
          <a href="#">Rupyy</a>
          <a href="#">Revv</a>
        </div>
        <div className="links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#feedback">Feedback</a>
        </div>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
        </div>
        <div className="apps">
          <a href="#"><img src="app-store.png" alt="App Store" /></a>
          <a href="#"><img src="google-play.png" alt="Google Play" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
