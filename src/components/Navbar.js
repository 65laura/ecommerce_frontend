import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/public/img.png" alt="ShopMate Logo" className="navbar-logo-img" />
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
          <Link to="/contactPage">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
