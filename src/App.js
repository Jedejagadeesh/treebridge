// App.js
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Make sure these file names match exactly in src/
import Hlo from "./Hlo";
import About from "./About";
import Projects from "./Projects";       // Capital 'P', matches Projects.jsx
import Community from "./Community";     // Capital 'C', matches Community.jsx
import Contact from "./Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hlo />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
