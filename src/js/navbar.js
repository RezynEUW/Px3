// src/js/navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'; // Assuming the CSS file is in src/css/

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <img src="/logo.svg" alt="Logo" className="navbar-logo" />
        <h4>Lukas</h4>
      </div>
      <div className="navbar-middle">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
      </div>
      <div className="navbar-bottom">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-link">L</a>
        <a href="/cv.pdf" download className="nav-link">CV</a>
      </div>
    </div>
  );
};

export default Navbar;
