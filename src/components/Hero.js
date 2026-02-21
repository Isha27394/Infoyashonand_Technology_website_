import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import myVideo from "../assets/videos/video.mp4";

// Background images
import bg1 from "../assets/images/bg.jpg";
import bg2 from "../assets/images/bg1.jpg";
import bg3 from "../assets/images/bg2.jpg";
import bg4 from "../assets/images/bg4.jpg";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  const bgImages = [bg1, bg2, bg3, bg4];
  const [currentBg, setCurrentBg] = useState(0);

  // 🔹 Background slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bgImages.length]); // Added bgImages.length to dependency array

  // 🔹 Text animation ONLY on page refresh
  useEffect(() => {
    setAnimateText(true);
  }, []);

  return (
    <>
      {/* Floating WhatsApp */}
      <div
        style={{
          position: "fixed",
          bottom: 30,
          left: 30,
          zIndex: 9999,
        }}
        onMouseEnter={() => setShowWhatsAppTooltip(true)}
        onMouseLeave={() => setShowWhatsAppTooltip(false)}
      >
        <a
          href="https://wa.me/918055514368"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 60,
            height: 60,
            backgroundColor: "#25D366",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "pulse 2s infinite",
            boxShadow: "0 4px 12px rgba(37,211,102,0.4)",
          }}
        >
          <FaWhatsapp size={32} color="#fff" />
        </a>

        {showWhatsAppTooltip && (
          <div
            style={{
              position: "absolute",
              bottom: 70,
              left: 0,
              background: "#fff",
              padding: "8px 16px",
              borderRadius: 8,
              fontSize: 14,
              animation: "fadeIn 0.3s ease",
            }}
          >
            Chat with us
          </div>
        )}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes slideFromLeft {
            from { opacity: 0; transform: translateX(-150px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes slideFromRight {
            from { opacity: 0; transform: translateX(150px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      {/* Hero Section */}
      <div
        style={{
          height: window.innerWidth <= 768 ? "80vh" : "100vh", // Reduced height on mobile
          backgroundImage: `url(${bgImages[currentBg]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          {/* LEFT → CENTER */}
          <h1
            style={{
              fontSize: window.innerWidth <= 768 ? 28 : 44, // Smaller font on mobile
              marginBottom: window.innerWidth <= 768 ? 12 : 16, // Less margin on mobile
              animation: animateText
                ? "slideFromLeft 1.2s ease forwards"
                : "none",
            }}
          >
            WE SPECIALIZE IN IT SERVICE & SUPPORT
          </h1>

          {/* RIGHT → CENTER */}
          <p
            style={{
              maxWidth: 760,
              fontSize: window.innerWidth <= 768 ? 16 : 18, // Smaller font on mobile
              marginBottom: window.innerWidth <= 768 ? 16 : 24, // Less margin on mobile
              animation: animateText
                ? "slideFromRight 1.2s ease forwards"
                : "none",
            }}
          >
            We specialize in providing IT infrastructure services with the promise
            of reliability and resourcefulness to provide practical, cost-effective
            solutions to clients.
          </p>

          <div style={{ display: "flex", gap: 16 }}>
            <button
              style={{
                background: "#dc9728",
                color: "#fff",
                padding: "10px 22px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
              }}
            >
              GET STARTED
            </button>

            <button
              onClick={() => setShowVideo(true)}
              style={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #fff",
                padding: "8px 18px",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              ▶ Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Video Popup */}
      {/* Video Popup */} {showVideo && ( <div onClick={() => setShowVideo(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, boxSizing: "border-box", }} > <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: "100%", maxWidth: 920, borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", padding: 8, boxSizing: "border-box", }} > <button onClick={() => setShowVideo(false)} aria-label="Close video" style={{ position: "absolute", top: -14, right: -14, background: "#fff", color: "#000", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", fontSize: 18, fontWeight: 700, boxShadow: "0 4px 12px rgba(0,0,0,0.3)", zIndex: 10, }} > ✖ </button> <video src={myVideo} controls autoPlay muted style={{ width: "80vw", maxWidth: 900, height: "auto", maxHeight: "70vh", borderRadius: 8, background: "#000", }} /> </div> </div> )} </> ); }