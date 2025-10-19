import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Community() {
  const [activeTab, setActiveTab] = useState("students");
  const [contentData, setContentData] = useState({ students: [], farmers: [], others: [] });

  useEffect(() => {
    axios.get("/communityData.json")
      .then((res) => setContentData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const renderContent = () => {
    const contentArray = contentData[activeTab] || [];

    return (
      <div className="tab-content">
        {contentArray.map((section, index) => (
          <div key={index} className="section-block">
            <div className="image-card">
              <img src={section.img} alt={`${activeTab} ${index + 1}`} />
            </div>
            <p className="section-text">{section.text}</p>
            <div className="video-block">
              <iframe
                src={section.video}
                title={`video-${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
        <p className="quote">🌸 “Protecting nature is protecting ourselves — because we are part of it.” 🌸</p>
      </div>
    );
  };

  return (
    <div className="community-container">
      <h1 className="community-title">🌿 Our Nature Protectors</h1>
      <p className="community-subtitle">
        Students, Farmers, and Community members unite to preserve our forests, rivers, and soil.
      </p>

      <div className="community-tabs">
        <button onClick={() => setActiveTab("students")} className={activeTab === "students" ? "active" : ""}>Students</button>
        <button onClick={() => setActiveTab("farmers")} className={activeTab === "farmers" ? "active" : ""}>Farmers</button>
        <button onClick={() => setActiveTab("others")} className={activeTab === "others" ? "active" : ""}>Others</button>
      </div>

      {renderContent()}
    </div>
  );
}

export default Community;
