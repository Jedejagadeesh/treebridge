// Layout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app">
      <div className="topbar">
        <h1 className="logo">🌱 EcoConnect</h1>
      </div>

      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/community">EcoUnity🌿</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Page content will be rendered here */}
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
}
