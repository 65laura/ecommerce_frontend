import React from "react";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="ShopMate Logo" className="logo" />
        <h1>Login to ShopMate</h1>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input   type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn">
            Log In
          </button>
        </form>
        <div className="links">
          <a href="#">Forgot password?</a>
          <p>
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
