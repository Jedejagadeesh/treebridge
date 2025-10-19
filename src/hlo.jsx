import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Community from "./Community";
import Contact from "./Contact";
import "./App.css";

function Hlo() {
  return (
    <Router>
      <div className="app">
        {/* Top bar with title + buttons */}
        <div className="topbar">
          <h1 className="logo">🍃 GreenLeaf</h1>
          <div className="auth-buttons">
            <button className="btn login-btn">Login</button>
            <button className="btn register-btn">Register</button>
          </div>
        </div>

        {/* Navigation bar below */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Page routes */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="hero">
                <div className="hero-content">
                  <h2>Welcome to GreenLeaf</h2>
                  <p>
                    Discover the beauty of nature, breathe the freshness of green,
                    and embrace harmony with every leaf and breeze.
                  </p>
                  <button className="btn explore-btn">🌿 Explore the Green World</button>
                </div>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Hlo;
