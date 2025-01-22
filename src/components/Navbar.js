import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="ShopMate Logo" className="navbar-logo-img" />
        <Link to="/" className="navbar-title">ShopMate</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <button className="darkMode" onClick={toggleDarkMode}>
            {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
