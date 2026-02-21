import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

import bgImage from "../../assets/images/page-title-bg.jpg";

// 🔹 Auto Slider Images (change images as needed)
import Img1 from "../../assets/images/portfolio/Buisness/Kam-1.png";
import Img2 from "../../assets/images/portfolio/Buisness/Kam-2.png";
import Img3 from "../../assets/images/portfolio/Buisness/Kam-3.png";
import Img4 from "../../assets/images/portfolio/Buisness/Kam-4.png";

export default function KamDhanda() {
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
  }, [images.length]);

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
      
      {/* Header Section */}
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
            Revolutionizing dairy management with simplicity, efficiency, 
            and real-time operational insights.
          </p>

          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            <span
              onClick={() => navigate("/")}
              style={{ color: "#fff", cursor: "pointer" }}
            >
              Home
            </span>
            {" / "}
            <span style={{ color: "#f85a40" }}>KamDhanda App</span>
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
            alt="Dhaara App"
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
                KamDhanda App
              </span>
            </p>
          </div>

          <h2 style={{ marginTop: "30px" }}>  KamDhanda App</h2>

          <p style={{ lineHeight: "1.7", color: "#444" }}>
            Kamdhanda is a versatile Android app designed to empower resellers and business owners with a one-stop solution for business marketing, e-commerce, and job search
          </p>

          <p style={{ lineHeight: "1.7", color: "#444" }}>
            The app provides robust tools for promoting products and services, managing online sales, and reaching new markets—all from a single, user-friendly platform. Additionally, Kamdhanda simplifies talent acquisition by offering integrated job search and posting features, allowing businesses to find the right candidates while giving job seekers access to exciting opportunities.
          </p>

          <p style={{ lineHeight: "1.7", color: "#444" }}>
           Whether you're looking to boost your brand, streamline your operations, or grow your team, Kamdhanda is engineered to support your business needs every step of the way.
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
