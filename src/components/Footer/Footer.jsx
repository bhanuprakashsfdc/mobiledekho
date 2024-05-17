import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="app-features">
          <h2>Get Amazing Features on our App</h2>
          <div className="features-list">
            <div className="feature">
              <img src="360-icon.png" alt="360° Experience" />
              <p>360° Experience</p>
            </div>
            <div className="feature">
              <img src="data-saving-icon.png" alt="Data Saving" />
              <p>Data Saving up to 60%</p>
            </div>
            <div className="feature">
              <img src="app-size-icon.png" alt="Upto 4 MB" />
              <p>Upto 4 MB App Size</p>
            </div>
          </div>
          <button className="download-app-btn">Download App</button>
        </div>
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
          <a href="#">Linkedin</a>
        </div>
        <div className="apps">
          <a href="#"><img src="app-store.png" alt="App Store" /></a>
          <a href="#"><img src="google-play.png" alt="Google Play" /></a>
        </div>
        <div className="contact-info">
          <p>Email: support@bikedekho.com</p>
          <p>&copy; 2024 BikeDekho.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
