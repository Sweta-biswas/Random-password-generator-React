import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './applogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <Link to="/auth" className="signup-button">Account</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;