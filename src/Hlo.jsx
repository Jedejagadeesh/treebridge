// Hlo.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css";

// Home section
function Home() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h2>🌿 Protect Nature, Preserve Life 🌿</h2>
          <p>
            Join <strong>TreeBridge</strong> in connecting communities with nature.
            Plant trees, protect animals, and restore ecosystems for a sustainable future.
          </p>
          <Link to="/projects">
            <button className="explore-btn">🌱 Explore Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Main Hlo component
export default function Hlo() {
  const location = useLocation();

  // Hide navbar only on Home page
  const hideNavbar = location.pathname === "/";

  return (
    <div className="app">
      {/* Topbar */}
      <div className="topbar">
      </div>

      {/* Navbar */}
      {!hideNavbar && (
        <nav className="navbar">
          <ul>
            <li><Link to="/" style={{ color: 'black', fontSize: '25px' }}>Home</Link></li>
            <li><Link to="/about" style={{ color: 'black', fontSize: '25px' }}>About</Link></li>
            <li><Link to="/projects" style={{ color: 'black', fontSize: '25px' }}>Projects</Link></li>
            <li><Link to="/community" style={{ color: 'black', fontSize: '25px' }}>EcoUnity🌿</Link></li>
            <li><Link to="/contact" style={{ color: 'black', fontSize: '25px' }}>Contact</Link></li>
          </ul>
        </nav>
      )}

      {/* Home section */}
      <Home />
    </div>
  );
}
