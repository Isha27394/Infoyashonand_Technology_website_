import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

import bgImg from "../assets/images/page-title-bg.jpg";

import eImg from "../assets/images/Blog/E-1.jpg";
import eImg1 from "../assets/images/Blog/E-2.jpg";
import eImg2 from "../assets/images/Blog/E-3.jpg";
import eImg3 from "../assets/images/Blog/E-4.jpg";
import eImg4 from "../assets/images/Blog/E-5.jpg";
import eImg5 from "../assets/images/Blog/E-6.jpg";

import authorImg from "../assets/images/Blog/author.jpg";
import lp1 from "../assets/images/Blog/l1.jpg";
import lp2 from "../assets/images/Blog/l2.jpg";
import lp3 from "../assets/images/Blog/l3.jpg";

export default function Blog() {
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

  const heroStyle = {
    backgroundImage: `url(${bgImg})`,
    width: "100%",
    height: "450px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "200%",
    background: "rgba(0,0,0,0.55)",
    backdropFilter: "blur(5px)",
    zIndex: 1,
  };

  const heroContent = {
    position: "relative",
    zIndex: 2,
  };

  const mainWrapper = {
    display: "flex",
    width: "100%",
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "30px 20px",
    gap: "70px",
    background: "#f5f7fbcd",
    boxSizing: "border-box",
  };

  const leftCol = {
    flex: 3,
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(340px, 1fr))",
    gap: "40px",
    alignContent: "start",
  };

  const rightCol = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    minWidth: "360px",
  };

  const card = {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
  };

  const imgStyle = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    display: "block",
  };

  const cardContent = {
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const readMoreBtn = {
    padding: "8px 20px",
    border: "none",
    background: "#ff5630",
    color: "#fff",
    borderRadius: "5px",
    marginTop: "8px",
    cursor: "pointer",
    alignSelf: "flex-start",
    textDecoration: "none",
  };

  const sidebarBox = {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  };

  const latestPostItem = {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    marginBottom: "15px",
  };

  const latestPostImg = {
    width: "70px",
    height: "70px",
    borderRadius: "6px",
    objectFit: "cover",
  };

  const latestPostText = {
    textAlign: "left",
    fontSize: "14px",
    lineHeight: "18px",
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }
        img {
          max-width: 100%;
          height: auto;
        }
        @media (max-width: 768px) {
          section {
            padding: 40px 15px !important;
            max-width: 100vw !important;
          }
          h1 {
            font-size: 28px !important;
          }
          h3 {
            font-size: 18px !important;
          }
          /* Fix blog grid on mobile */
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          div[style*="minWidth: 360px"],
          div[style*="minWidth: 340px"] {
            min-width: 100% !important;
            max-width: 100% !important;
          }
          div[style*="gap: 70px"],
          div[style*="gap: 40px"] {
            flex-direction: column !important;
            gap: 20px !important;
          }
          div[style*="maxWidth: 1300px"] {
            padding: 20px 10px !important;
          }
          /* Ensure all divs stay within bounds */
          div, section, article {
            max-width: 100vw;
            overflow-x: hidden;
          }
        }
      `}</style>
      <section style={heroStyle}>
        <div style={overlayStyle}></div>

        <div style={heroContent}>
          <h1 style={{ fontSize: "38px", marginBottom: "10px" }}>Our Blog</h1>

          <p style={{ fontSize: "15px" }}>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </Link>
            &nbsp; / &nbsp;
            <span style={{ color: "#ffba00" }}>Blog</span>
          </p>
        </div>
      </section>

      <div style={mainWrapper}>
        <div style={leftCol}>
          {/* CARD 1 */}
          <div style={card}>
            <img src={eImg} style={imgStyle} alt="E-Salary" />
            <div style={cardContent}>
              <small style={{ color: "#888" }}>Finance</small>
              <h3 style={{ margin: 0, color: "#ff5a1a" }}>
                E-Salary App: Empowering Employees
              </h3>
              <p style={{ color: "#666" }}>
                Discover how Expert Guruji App simplifies everything.
              </p>

              <Link to="/blog/e-salary" style={readMoreBtn}>
                READ MORE
              </Link>
            </div>
          </div>

          {/* CARD 2 */}
          <div style={card}>
            <img src={eImg1} style={imgStyle} alt="Guruji App" />
            <div style={cardContent}>
              <small style={{ color: "#888" }}>School Management</small>
              <h3 style={{ margin: 0, color: "#ff5a1a" }}>
                Expert Guruji App School Management
              </h3>
              <p style={{ color: "#666" }}>
                Explore how Guruji App simplifies everything.
              </p>

              <Link to="/blog/guruji" style={readMoreBtn}>
                READ MORE
              </Link>
            </div>
          </div>

          {/* CARD 3 */}
          <div style={card}>
            <img src={eImg2} style={imgStyle} alt="Dharaa App" />
            <div style={cardContent}>
              <small style={{ color: "#888" }}>Milk Dairy</small>
              <h3 style={{ margin: 0, color: "#ff5a1a" }}>
                Dharaa Dairy Management App
              </h3>
              <p style={{ color: "#666" }}>Track milk, reports & more.</p>

              <Link to="/blog/dharaa" style={readMoreBtn}>
                READ MORE
              </Link>
            </div>
          </div>

          {/* CARD 4 */}
          <div style={card}>
            <img src={eImg3} style={imgStyle} alt="Kamdhanda" />
            <div style={cardContent}>
              <small style={{ color: "#888" }}>Business</small>
              <h3 style={{ margin: 0, color: "#ff5a1a" }}>
                Kamdhanda Business App
              </h3>
              <p style={{ color: "#666" }}>
                Business marketing, reseller tools & more.
              </p>

              <Link to="/blog/kamdhanda" style={readMoreBtn}>
                READ MORE
              </Link>
            </div>
          </div>

          {/* CARD 5 */}
          <div style={card}>
            <img src={eImg4} style={imgStyle} alt="Digital School" />
            <div style={cardContent}>
              <small style={{ color: "#888" }}>Education</small>
              <h3 style={{ margin: 0, color: "#ff5a1a" }}>
                Digital School Management
              </h3>
              <p style={{ color: "#666" }}>Attendance, fee, communication.</p>

              <Link to="/blog/digital-school" style={readMoreBtn}>
                READ MORE
              </Link>
            </div>
          </div>

          {/* CARD 6 */}
          <div style={card}>
            <img src={eImg5} style={imgStyle} alt="Skill App" />
            <div style={cardContent}>
              <small style={{ color: "#888" }}>Online Learning</small>
              <h3 style={{ margin: 0, color: "#ff5a1a" }}>
                Expert Skill Learning App
              </h3>
              <p style={{ color: "#666" }}>Courses for careers & growth.</p>

              <Link to="/blog/expert-skill" style={readMoreBtn}>
                READ MORE
              </Link>
            </div>
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
        objectFit: "cover",
        marginBottom: "15px",
      }}
      alt="Kajal"
    />
    <h3>Kajal Sawashe</h3>
    <p style={{ color: "#666" }}>Digital Marketer</p>
    <p>
      We create impactful digital strategies that enhance brand visibility,
      drive engagement, and accelerate business growth.
    </p>
  </div>

  {/* LATEST POSTS */}
  <div style={sidebarBox}>
    <h3>Latest Posts</h3>

    {/* Post 1 */}
    <div style={latestPostItem}>
      <img src={lp1} style={latestPostImg} alt="lp1" />
      <div style={latestPostText}>
        <Link
          to="/blog/scroller-app"
          style={{
            color: "orange",
            textDecoration: "none",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          How Scroller App Makes Learning Fun for Kids
        </Link>
        <br />
        05 Mar 2025
      </div>
    </div>

    {/* Post 2 */}
    <div style={latestPostItem}>
      <img src={lp2} style={latestPostImg} alt="lp2" />
      <div style={latestPostText}>
        <Link
          to="/blog/ecare360"
          style={{
            color: "orange",
            textDecoration: "none",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          E-Care360: The Future of Hospital Management
        </Link>
        <br />
        05 Mar 2025
      </div>
    </div>

    {/* Post 3 */}
    <div style={latestPostItem}>
      <img src={lp3} style={latestPostImg} alt="lp3" />
      <div style={latestPostText}>
        <Link
          to="/blog/pattantra"
          style={{
            color: "orange",
            textDecoration: "none",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          PATtantra: Revolutionizing Banking with Cloud Technology
        </Link>
        <br />
        05 Mar 2025
      </div>
    </div>
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
</>
  );}
