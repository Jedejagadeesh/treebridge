import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function Project() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/projectData.json")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  if (!data) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading Project...</h2>;
  }

  return (
    <div className="project-section" style={{ padding: "60px 20px", background: "#fffdf7" }}>
      <h1 style={{ fontSize: "2.8rem", color: "#5a3e2b", fontWeight: "800", marginBottom: "20px" }}>
        {data.title}
      </h1>

      {data.intro.map((para, i) => (
        <p key={i} style={{ fontSize: "1.1rem", color: "#3b2f2f", lineHeight: "1.8", maxWidth: "1000px", margin: "0 auto 30px" }}>
          {para}
        </p>
      ))}

      {/* First Image Row */}
      <div className="image-row" style={{ display: "flex", justifyContent: "center", gap: "25px", flexWrap: "wrap", margin: "40px 0" }}>
        {data.images1.map((img, i) => (
          <img key={i} src={img} alt={`image-${i}`} style={{ width: "250px", height: "250px", borderRadius: "15px", objectFit: "cover" }} />
        ))}
      </div>

      {data.middleText.map((para, i) => (
        <p key={i} style={{ fontSize: "1.1rem", color: "#3b2f2f", lineHeight: "1.8", maxWidth: "1000px", margin: "0 auto 30px" }}>
          {para}
        </p>
      ))}

      {/* Food Chain Diagram */}
      <div style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}>
        <img
          src={data.foodChainImage}
          alt="Food chain diagram"
          style={{
            width: "80%",
            maxWidth: "700px",
            borderRadius: "20px",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
          }}
        />
      </div>

      {data.foodChainDescription.map((para, i) => (
        <p key={i} style={{ fontSize: "1.1rem", color: "#3b2f2f", lineHeight: "1.8", maxWidth: "1000px", margin: "0 auto 30px" }}>
          {para}
        </p>
      ))}

      {/* Second Image Row */}
      <div className="image-row" style={{ display: "flex", justifyContent: "center", gap: "25px", flexWrap: "wrap", margin: "40px 0" }}>
        {data.images2.map((img, i) => (
          <img key={i} src={img} alt={`image-${i}`} style={{ width: "250px", height: "250px", borderRadius: "15px", objectFit: "cover" }} />
        ))}
      </div>

      {data.conclusion.map((para, i) => (
        <p key={i} style={{ fontSize: "1.1rem", color: "#3b2f2f", lineHeight: "1.8", maxWidth: "1000px", margin: "0 auto 30px" }}>
          {para}
        </p>
      ))}
    </div>
  );
}

export default Project;
