import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import myVideo from "../assets/videos/video.mp4";

// 👇 Import ALL background images at top (removes warnings)
import bg1 from "../assets/images/city-bg.jpg";
import bg2 from "../assets/images/city-bg2.jpg";
import bg3 from "../assets/images/city-bg3.jpg";
import bg4 from "../assets/images/city-bg4.jpg";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);

  // Slideshow array with proper imports
  const bgImages = [bg1, bg2, bg3, bg4];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Button with Auto Animation */}
      <div
        style={{
          position: "fixed",
          bottom: "30px",
          left: "30px",
          zIndex: 1000,
        }}
        onMouseEnter={() => setShowWhatsAppTooltip(true)}
        onMouseLeave={() => setShowWhatsAppTooltip(false)}
      >
        <a
          href="https://wa.me/918055514368"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60px",
            height: "60px",
            backgroundColor: "#25D366",
            borderRadius: "50%",
            boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
            cursor: "pointer",
            animation: "pulse 2s infinite",
            textDecoration: "none",
          }}
        >
          <FaWhatsapp size={32} color="white" />
        </a>
        
        {/* Tooltip */}
        {showWhatsAppTooltip && (
          <div
            style={{
              position: "absolute",
              bottom: "70px",
              left: "0",
              backgroundColor: "#fff",
              color: "#333",
              padding: "8px 16px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              whiteSpace: "nowrap",
              fontSize: "14px",
              fontWeight: "500",
              animation: "fadeIn 0.3s ease",
            }}
          >
            Chat with us
            <div
              style={{
                position: "absolute",
                bottom: "-6px",
                left: "20px",
                width: "0",
                height: "0",
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "6px solid #fff",
              }}
            />
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
            }
            50% {
              transform: scale(1.1);
              box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* HERO SECTION WITH BACKGROUND SLIDESHOW */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${bgImages[currentBg]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          <h1 style={{ fontSize: "44px", marginBottom: 16 }}>
            WE SPECIALIZE IN IT SERVICE & SUPPORT
          </h1>

          <p style={{ maxWidth: 760, fontSize: 18, marginBottom: 24 }}>
            We Specialize in providing IT infrastructure services with the
            promise of reliability and resourcefulness to provide practical,
            cost-effective solutions to client.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                background: "#FF5722",
                color: "#fff",
                padding: "10px 22px",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              GET STARTED
            </button>

            <button
              onClick={() => setShowVideo(true)}
              style={{
                background: "transparent",
                border: "2px solid #fff",
                color: "#fff",
                padding: "8px 18px",
                borderRadius: 6,
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              ▶ Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* VIDEO POPUP */}
      {showVideo && (
        <div
          onClick={() => setShowVideo(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            boxSizing: "border-box",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 920,
              background: "transparent",
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 8,
              boxSizing: "border-box",
            }}
          >
            <button
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
              style={{
                position: "absolute",
                top: -14,
                right: -14,
                background: "#fff",
                color: "#000",
                border: "none",
                borderRadius: "50%",
                width: 36,
                height: 36,
                cursor: "pointer",
                fontSize: 18,
                fontWeight: 700,
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                zIndex: 10,
              }}
            >
              ✖
            </button>

            <video
              src={myVideo}
              controls
              autoPlay
              style={{
                width: "80vw",
                maxWidth: 900,
                height: "auto",
                maxHeight: "70vh",
                borderRadius: 8,
                background: "#000",
                display: "block",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
