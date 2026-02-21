import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

import bgImage from "../../assets/images/page-title-bg.jpg";

// 🔹 Images for Auto Slider (change as needed)
import Img1 from "../../assets/images/portfolio/Buisness/H-1.png";
import Img2 from "../../assets/images/portfolio/Buisness/H-2.png";
import Img3 from "../../assets/images/portfolio/Buisness/H-3.png";
import Img4 from "../../assets/images/portfolio/Buisness/H-4.png";

export default function Ecare360() {
  const navigate = useNavigate();

  // Auto Slide State
  const images = [Img1, Img2, Img3, Img4];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Scroll to top state
  const [showScroll, setShowScroll] = useState(false);

  // Auto Slide Effect (2.5 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show/hide scroll button
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff" }}>
      
      {/* Header */}
      <section
        style={{
          width: "100%",
          padding: "80px 0 40px 0",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          textAlign: "center",
          color: "#fff",
        }}
      >
        {/* Black Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(3px)",
            zIndex: 1,
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
            Portfolio Details
          </h1>

          <p style={{ fontSize: "15px", maxWidth: "600px", margin: "0 auto" }}>
            Revolutionizing healthcare management with simplicity, accuracy, 
            and real-time operational efficiency.
          </p>

          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            <span
              onClick={() => navigate("/")}
              style={{ color: "#fff", cursor: "pointer" }}
            >
              Home
            </span>
            {" / "}
            <span style={{ color: "#f85a40" }}>E-Care 360 App</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "50px 5%",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        
        {/* Auto Sliding Image */}
        <div style={{ flex: "1", minWidth: "350px" }}>
          <img
            src={images[currentIndex]}
            alt="E-Care 360 App"
            style={{
              width: "100%",
              borderRadius: "10px",
              transition: "0.5s ease",
            }}
          />
        </div>

        {/* Project Details */}
        <div style={{ flex: "1", minWidth: "350px" }}>
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ marginBottom: "20px" }}>Project Information</h3>
            <p><strong>Category:</strong> Android App</p>
            <p>
              <strong>Project URL:</strong>{" "}
              <span style={{ color: "#f85a40", cursor: "pointer" }}>
                E-Care 360 App
              </span>
            </p>
          </div>

          <h2 style={{ marginTop: "30px" }}>E-Care 360 App</h2>

          <p style={{ lineHeight: "1.7", color: "#444" }}>
            E-Care360 is an advanced, cloud-based hospital management software 
            that provides a complete 360-degree solution for healthcare institutions.
          </p>

          <p style={{ lineHeight: "1.7", color: "#444" }}>
            It automates critical hospital operations including patient 
            registration, appointment scheduling, EMR management, billing, 
            pharmacy, laboratory, radiology, and inventory control.
          </p>

          <p style={{ lineHeight: "1.7", color: "#444" }}>
            With real-time analytics, secure data handling, intuitive UI, and 
            automated workflows, E-Care360 improves patient outcomes and boosts 
            operational efficiency across hospitals of all sizes.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            backgroundColor: "#ff6600",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "20px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
