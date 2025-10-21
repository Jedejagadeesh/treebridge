// Hlo.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Community from "./Community";
import Contact from "./Contact";
import Project from "./project";
import "./App.css";

function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>🌿 Protect Nature, Preserve Life 🌿</h2>
        <p>
          Join <strong>TreeBridge</strong> in connecting communities with nature.
          Plant trees, protect animals, and restore ecosystems for a sustainable future.
        </p>
        <Link to="/project">
          <button className="explore-btn">🌱 Explore Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default function Hlo() {
  return (
    <div className="app">
      {/* Top Bar */}
      <div className="topbar">
        <h1 className="logo">🌱 TreeBridge</h1>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/community">Community 🌿</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
