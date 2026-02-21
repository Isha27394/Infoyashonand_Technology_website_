import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

import bgImage from "../../assets/images/page-title-bg.jpg";

import Img1 from "../../assets/images/lbad/Untitled design (1) (1).png";
import Img2 from "../../assets/images/lbad/Untitled design (2) (1).png";
import Img3 from "../../assets/images/lbad/Untitled design (3) (1).png";
import Img4 from "../../assets/images/lbad/Untitled design (4) (1).png";

export default function Matrimonial() {
  const navigate = useNavigate();

  const images = [Img1, Img2, Img3, Img4];
  const [current, setCurrent] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
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

        {/* Header Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
            Portfolio Details
          </h1>

          <p style={{ fontSize: "15px", maxWidth: "600px", margin: "0 auto" }}>
            A powerful, intelligent construction management platform designed 
            to streamline planning, execution, and collaboration.
          </p>

          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            <span
              onClick={() => navigate("/")}
              style={{ color: "#fff", cursor: "pointer" }}
            >
              Home
            </span>
            {" / "}
            <span style={{ color: "#f85a40" }}>Matrimonial App</span>
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
        {/* Left Image Slider */}
        <div style={{ flex: "1", minWidth: "350px" }}>
          <div
            style={{
              width: "100%",
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
            }}
          >
            <img
              src={images[current]}
              alt="Slider"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                transition: "0.8s ease-in-out",
              }}
            />

            {/* Prev Button */}
            <button
              onClick={() =>
                setCurrent((current - 1 + images.length) % images.length)
              }
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                color: "#fff",
                border: "none",
                padding: "8px 12px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              ❮
            </button>

            {/* Next Button */}
            <button
              onClick={() => setCurrent((current + 1) % images.length)}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                color: "#fff",
                border: "none",
                padding: "8px 12px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              ❯
            </button>
          </div>
        </div>

        {/* Right Side: Project Details */}
        <div style={{ flex: "1", minWidth: "350px" }}>
          
          {/* Project Info Box */}
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
              Matrimonial App
              </span>
            </p>

            
          </div>

          {/* Description */}
          <h2 style={{ marginTop: "30px" }}>Matrimonial App</h2>

          <p style={{ lineHeight: "1.7", color: "#444" }}>
            Matrimonial App is a comprehensive and user-friendly platform designed to simplify the journey of finding a life partner. It offers a secure and efficient way for individuals to create detailed profiles, specify partner preferences, and connect with compatible matches through advanced search filters and AI-powered matchmaking algorithms.
          </p>

          <p style={{ lineHeight: "1.7", color: "#444" }}>
           With features like real-time chat, profile verification, horoscope compatibility checks, and privacy controls, the app ensures a safe and personalized matchmaking experience. Whether you are looking to explore profiles by community, location, or lifestyle interests, Matrimonial App
          </p>

          <p style={{ lineHeight: "1.7", color: "#444" }}>
           provides all the tools needed to build meaningful relationships and make informed decisions. Enhance your search for the perfect match with Matrimonial App — your trusted companion in the quest for lifelong companionship
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
