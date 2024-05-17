import React, { useState } from 'react';
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
        <div className="logo">MobileDekho</div>
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
          <a href="#login">Login / Register</a>
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
          {['Bikes', 'Scooters', 'Electric Zone', 'Bike Finance', 'Buy & Sell Used Bikes', 'News & Videos'].map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleDropdown(index)}
              className={activeDropdown === index ? 'active' : ''}
            >
              <a href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>{item}</a>
              <ul className={`dropdown ${activeDropdown === index ? 'active' : ''}`}>
                <li><a href={`#${item.toLowerCase().replace(/ /g, '-')}-1`}>Option 1</a></li>
                <li><a href={`#${item.toLowerCase().replace(/ /g, '-')}-2`}>Option 2</a></li>
                <li><a href={`#${item.toLowerCase().replace(/ /g, '-')}-3`}>Option 3</a></li>
                <li><a href={`#${item.toLowerCase().replace(/ /g, '-')}-4`}>Option 4</a></li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
