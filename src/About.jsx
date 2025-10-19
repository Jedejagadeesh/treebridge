// src/About.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    axios
      .get("/about.json")
      .then((res) => setAboutData(res.data.aboutUs))
      .catch((err) => console.error("Error fetching about data:", err));
  }, []);

  if (!aboutData) return <p>Loading...</p>;

  const { title, subtitle, sections } = aboutData;

  return (
    <div className="about-container">
      <h1 className="about-title">{title}</h1>
      <h2 className="about-subtitle">{subtitle}</h2>

      <div className="about-grid">
        {sections.map((section, index) => (
          <div key={index} className="about-card">
            <h3 className="about-heading">{section.heading}</h3>
            <img src={section.image} alt={section.heading} className="about-img" />
            <p className="about-footer">{section.footer}</p>
            <div className="about-content">
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
