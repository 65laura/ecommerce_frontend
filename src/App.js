import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <h1>ShopMate</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


