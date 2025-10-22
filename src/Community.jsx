// Community.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Community() {
  const [activeTab, setActiveTab] = useState("students");
  const [contentData, setContentData] = useState({ students: [], farmers: [], others: [] });

  useEffect(() => {
    axios
      .get("/communityData.json")
      .then(res => setContentData(res.data))
      .catch(err => console.error("Error fetching community data:", err));
  }, []);

  const renderContent = () => {
    const contentArray = contentData[activeTab] || [];
    return contentArray.map((section, index) => (
      <div key={index} className="tab-content">
        {section.images.map((img, i) => (
          <div className="image-card" key={i}>
            <img className="card-img" src={img} alt={`${activeTab}-${index}-${i}`} />
          </div>
        ))}
        <p className="card-text">{section.text}</p>
      </div>
    ));
  };

  return (
    <div className="community-container">
      <h1 className="community-title">🌿 Our Nature Protectors</h1>
      <p className="community-subtitle">
        This is our nature — don’t pollute it. Together we protect rivers, forests, and soil.
      </p>

      {/* Tabs */}
      <div className="community-tabs">
        <button onClick={() => setActiveTab("students")} className={activeTab === "students" ? "active" : ""}>Students</button>
        <button onClick={() => setActiveTab("farmers")} className={activeTab === "farmers" ? "active" : ""}>Farmers</button>
        <button onClick={() => setActiveTab("others")} className={activeTab === "others" ? "active" : ""}>Others</button>
      </div>

      {/* Tab content */}
      {renderContent()}

      <p className="quote">
        🌸 “The earth does not belong to us, we belong to the earth.” 🌸
      </p>
    </div>
  );
}

export default Community;
