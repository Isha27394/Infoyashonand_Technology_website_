import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

import bgImage from "../../assets/images/page-title-bg.jpg";
import Img1 from "../../assets/images/team/CM.jpeg";

export default function ConstructIQ() {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff" }}>
      
      {/* -------------------- HEADER SECTION -------------------- */}
      <section
        style={{
          width: "100%",
          padding: "80px 0 40px 0",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          textAlign: "center",
          color: "#fff",
          height: "300px",
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

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
            Our Leadership
          </h1>

          <p style={{ fontSize: "15px", maxWidth: "600px", margin: "0 auto" }}>
            Meet the visionaries driving our mission with innovation and excellence.
          </p>

          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            <span
              onClick={() => navigate("/")}
              style={{ color: "#fff", cursor: "pointer" }}
            >
              Home
            </span>{" "}
            / <span style={{ color: "#f85a40" }}>Management</span>
          </p>
        </div>
      </section>

      {/* -------------------- SINGLE CARD (IMAGE + TEXT) -------------------- */}
      <div
        style={{
          padding: "50px 5%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            overflow: "hidden",
            width: "100%",
            maxWidth: "1000px",
            border: "1px solid #eee",
          }}
        >
          {/* LEFT SIDE IMAGE */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              background: "#fafafa",
            }}
          >
            <img
              src={Img1}
              alt="Leadership"
              style={{
                width: "80%",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              }}
            />
          </div>

          {/* RIGHT SIDE DESCRIPTION */}
          <div
            style={{
              flex: "2",
              minWidth: "350px",
              padding: "30px",
            }}
          >
            <h2 style={{ marginBottom: "15px", color:"rgba(117, 8, 8, 1)",textAlign:"center" }}>Meet Our Director</h2>

            <p style={{ lineHeight: "1.7", color: "#444" }}>
              ConstructIQ is a modern, cloud-based construction management
              platform tailored for builders, contractors, and civil engineering
              departments. It enables intelligent, data-driven decision-making
              across all stages of the construction process.
            </p>

            <p style={{ lineHeight: "1.7", color: "#444" }}>
              The platform centralizes project planning, resource allocation,
              budgeting, compliance tracking, and real-time analytics into one
              unified solution—ensuring smoother workflows and better time
              management.
            </p>

            <p style={{ lineHeight: "1.7", color: "#444" }}>
              With an intuitive UI and robust collaboration tools, ConstructIQ
              empowers teams to manage complex projects efficiently, reduce
              overall costs,              maintain full transparency from
              planning to execution.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "50px",
            height: "50px",
            background: "darkorange",
            color: "white",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            zIndex: 1000,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#ff8c00";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "darkorange";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
