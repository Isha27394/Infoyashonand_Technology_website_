import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

import bgImage from "../../assets/images/page-title-bg.jpg";

// 🔹 Images for Auto Slider (Scroller App)
import Img1 from "../../assets/images/portfolio/Buisness/Srco-1.png";
import Img2 from "../../assets/images/portfolio/Buisness/Scro-2.png";
import Img3 from "../../assets/images/portfolio/Buisness/Scro-3.png";
import Img4 from "../../assets/images/portfolio/Buisness/Scro-4.png";

export default function Scroller() {
  const navigate = useNavigate();

  // Auto Slider
  const images = [Img1, Img2, Img3, Img4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        {/* Overlay */}
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
            A fun, colorful and interactive learning experience designed 
            specially for kindergarten kids.
          </p>

          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            <span
              onClick={() => navigate("/")}
              style={{ color: "#fff", cursor: "pointer" }}
            >
              Home
            </span>
            {" / "}
            <span style={{ color: "#f85a40" }}>Scroller App</span>
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
        {/* Auto Slider */}
        <div style={{ flex: "1", minWidth: "350px" }}>
          <img
            src={images[currentIndex]}
            alt="Scroller App"
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
                Scroller App
              </span>
            </p>
          </div>

          <h2 style={{ marginTop: "30px" }}>Scroller App</h2>

          <p style={{ lineHeight: "1.7", color: "#444" }}>
            Scroller is an interactive learning app designed especially for 
            kindergarten students. With its engaging, colorful interface and 
            simple scroll-based navigation, it transforms early education into 
            a playful adventure.
          </p>

          <p style={{ lineHeight: "1.7", color: "#444" }}>
            Kids can learn alphabets, numbers, shapes, colors and more 
            through animated lessons and cute interactive games created to 
            build curiosity and confidence.
          </p>

          <p style={{ lineHeight: "1.7", color: "#444" }}>
            Scroller provides a safe and joyful learning environment where 
            children explore freely at their own pace while developing 
            essential early skills.
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
