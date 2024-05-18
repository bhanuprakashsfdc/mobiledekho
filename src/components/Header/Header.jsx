import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <Link to="/">MobileDekho</Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Search Bikes or Scooters..." />
          <button>Search</button>
        </div>
        <div className="language-dropdown">
          <select>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
        <div className="auth">
          <Link to="/login">Login / Register</Link>
        </div>
        <div className="city-select">
          <a href="#select-city">Select City</a>
        </div>
        <button className="nav-toggle" onClick={toggleNav}>
          ☰
        </button>
      </div>
      <div className={`nav ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleDropdown(0)}
            className={activeDropdown === 0 ? 'active' : ''}
          >
            <Link to="/bikes">Bikes</Link>
            <ul className={`dropdown ${activeDropdown === 0 ? 'active' : ''}`}>
              <li><Link to="/new-bikes">New Bikes</Link></li>
              <li><Link to="/best-bikes">Best Bikes</Link></li>
              <li><Link to="/popular-brands">Popular Brands</Link></li>
              <li><Link to="/compare-bikes">Compare Bikes</Link></li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleDropdown(1)}
            className={activeDropdown === 1 ? 'active' : ''}
          >
            <Link to="/scooters">Scooters</Link>
            <ul className={`dropdown ${activeDropdown === 1 ? 'active' : ''}`}>
              <li><Link to="/new-scooters">New Scooters</Link></li>
              <li><Link to="/best-scooters">Best Scooters</Link></li>
              <li><Link to="/popular-scooter-brands">Popular Scooter Brands</Link></li>
              <li><Link to="/compare-scooters">Compare Scooters</Link></li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleDropdown(2)}
            className={activeDropdown === 2 ? 'active' : ''}
          >
            <Link to="/electric">Electric Zone</Link>
            <ul className={`dropdown ${activeDropdown === 2 ? 'active' : ''}`}>
              <li><Link to="/electric-bikes">Electric Bikes</Link></li>
              <li><Link to="/electric-scooters">Electric Scooters</Link></li>
              <li><Link to="/compare-electric">Compare Electric</Link></li>
              <li><Link to="/latest-electric">Latest Electric</Link></li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleDropdown(3)}
            className={activeDropdown === 3 ? 'active' : ''}
          >
            <Link to="/finance">Bike Finance</Link>
            <ul className={`dropdown ${activeDropdown === 3 ? 'active' : ''}`}>
              <li><Link to="/finance-options">Finance Options</Link></li>
              <li><Link to="/loan-eligibility">Loan Eligibility</Link></li>
              <li><Link to="/apply-loan">Apply for Loan</Link></li>
              <li><Link to="/emi-calculator">EMI Calculator</Link></li>
            </ul>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleDropdown(4)}
            className={activeDropdown === 4 ? 'active' : ''}
          >
            <Link to="/buy-sell">Buy & Sell Used Bikes</Link>
            <ul className={`dropdown ${activeDropdown === 4 ? 'active' : ''}`}>
              <li><Link to="/buy-used">Buy Used Bikes</Link></li>
              <li><Link to="/sell-used">Sell Used Bikes</Link></li>
              <li><Link to="/valuation">Bike Valuation</Link></li>
              <li><Link to="/used-bike-offers">Used Bike Offers</Link></li>
            </ul>
          </li>
          
          <li
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleDropdown(5)}
            className={activeDropdown === 5 ? 'active' : ''}
          >
            <Link to="/news">News & Videos</Link>
            <ul className={`dropdown ${activeDropdown === 5 ? 'active' : ''}`}>
              <li><Link to="/latest-news">Latest News</Link></li>
              <li><Link to="/bike-reviews">Bike Reviews</Link></li>
              <li><Link to="/scooter-reviews">Scooter Reviews</Link></li>
              <li><Link to="/videos">Videos</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
