// src/pages/Blog/EsalaryPost.jsx
import React, { useState, useEffect } from "react";
import heroBg from "../../assets/images/page-title-bg.jpg";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

// Main blog image
import blogImg from "../../assets/images/portfolio/Buisness/Dha-1.png";

// Sidebar images
import authorImg from "../../assets/images/Blog/author.jpg";
import lp1 from "../../assets/images/Blog/l1.jpg";
import lp2 from "../../assets/images/Blog/l2.jpg";
import lp3 from "../../assets/images/Blog/l3.jpg";

export default function EsalaryPost() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Sagar Bhosale",
      date: "March 6, 2025",
      text:
        "e Salary has been a game-changer for our company. The automated payroll system has significantly reduced errors and saved us a lot of time.",
    },
    {
      id: 2,
      name: "Abhishek Magdum",
      date: "Jan 6, 2025",
      text:
        "The real-time attendance tracking feature of e Salary has helped us monitor employee hours more accurately, which has improved our overall productivity.",
    },
  ]);

  const [form, setForm] = useState({ name: "", email: "", comment: "" });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---------- INLINE STYLES ---------- */

  const page = {
    width: "100%",
    fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    background: "#fafafa",
    color: "#222",
    paddingBottom: "80px",
  };

  const hero = {
    width: "100%",
    height: "460px",
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    marginBottom: "40px",
  };

  const heroOverlay = {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.65)",
    backdropFilter: "blur(4px)",
  };

  const heroContent = {
    position: "relative",
    textAlign: "center",
    zIndex: 2,
  };

  /* ⭐ MAIN FIX — full page mobile width */
  const container = {
    width: "100%",
    maxWidth: "100%", // ⭐ removed 1200px limit
    margin: "-40px auto 0 auto",
    padding: "0 10px",
    display: "flex",
    gap: "15px",
    alignItems: "flex-start",
    flexDirection: "column", // ⭐ mobile friendly
  };

  /* Left column */
  const leftCol = {
    width: "100%",
    background: "#fff",
    borderRadius: "10px",
    padding: "22px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  };

  /* Sidebar */
  const rightCol = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "10px",
  };

  const sidebarBox = {
    background: "#fff",
    padding: "18px",
    borderRadius: "10px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
  };

  const latestPostItem = {
    display: "flex",
    gap: "12px",
    padding: "10px 0",
    borderBottom: "1px dashed #eee",
  };

  const latestPostImg = {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "6px",
  };

  const bigImageStyle = {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "16px",
  };

  const titleStyle = {
    fontSize: "26px",
    fontWeight: 700,
    marginBottom: "12px",
    color: "#d57c06ff",
  };

  const commentItem = {
    marginBottom: "10px",
    paddingBottom: "12px",
    borderBottom: "1px solid #eee",
  };

  return (
    <div style={page}>

      {/* GLOBAL FIX */}
      <style>{`
        * { box-sizing: border-box; }
        html, body { overflow-x: hidden !important; }

         @media (max-width: 768px) {
          section {
            padding: 40px 15px !important;
            max-width: 100vw !important;
          }
             /* Ensure all divs stay within bounds */
          div, section, article {
            max-width: 100vw;
            overflow-x: hidden;
          }
      `}</style>

      {/* HERO */}
      <section style={hero}>
        <div style={heroOverlay} />
        <div style={heroContent}>
          <h2 style={{ fontSize: "36px", fontWeight: 800 }}>Blog Post</h2>
          <p>Revolutionizing dairy management with simplicity and efficiency.</p>
          <p>
            <Link to="/" style={{ color: "#fff" }}>Home</Link> / 
            <span style={{ color: "#ffba00" }}> Dharaa App Blog</span>
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div style={container} className="container">

        {/* LEFT */}
        <div style={leftCol}>
          <img src={blogImg} alt="e Salary" style={bigImageStyle} />

          <h3 style={titleStyle}>Optimizing Dairy Management with Dharaa App</h3>

          <p>
            Dharaa App is a comprehensive solution designed to simplify milk collection...
          </p>

          <div>
            <h3>Comments</h3>
            {comments.map((c) => (
              <div key={c.id} style={commentItem}>
                <strong>{c.name}</strong>
                <div style={{ fontSize: "13px", color: "#777" }}>{c.date}</div>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <div style={rightCol}>
          <div style={sidebarBox}>
            <img
              src={authorImg}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                marginBottom: "12px",
              }}
              alt=""
            />
            <h3>Kajal Sawashe</h3>
            <p style={{ color: "#666" }}>Digital Marketer</p>
          </div>

          <div style={sidebarBox}>
            <h3>Latest Posts</h3>

            <div style={latestPostItem}>
              <img src={lp1} style={latestPostImg} alt="" />
              <Link style={{ color: "orange" }}>How Scroller App Makes Learning Fun</Link>
            </div>

            <div style={latestPostItem}>
              <img src={lp2} style={latestPostImg} alt="" />
              <Link style={{ color: "orange" }}>E-Care360: Hospital Management</Link>
            </div>

            <div style={latestPostItem}>
              <img src={lp3} style={latestPostImg} alt="" />
              <Link style={{ color: "orange" }}>PATtantra: Cloud Banking</Link>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll To Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "55px",
            height: "55px",
            background: "orange",
            color: "#fff",
            borderRadius: "50%",
            border: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
