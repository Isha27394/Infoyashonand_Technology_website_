import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { initBlogScrollAnimations } from "../utils/blogScrollAnimations";

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
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Add blog page class to body
    document.body.classList.add('blog-page');
    
    // Initialize blog scroll animations
    initBlogScrollAnimations();
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove('blog-page');
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* STYLE: Scoped CSS for this component */}
      <style>
        {`
          :root{
            --accent: #ff5a1a;
            --accent-dark: darkorange;
            --bg-card: #fff;
            --page-bg: #f5f7fbcd;
          }

          * { box-sizing: border-box; }
          html, body { overflow-x: hidden; max-width: 100vw; }

          a { color: inherit; text-decoration: none; }

          /* HERO */
          .blog-hero {
            background-image: url(${bgImg});
            width: 100%;
            height: 450px;
            background-size: cover;
            background-position: center;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            text-align: center;
            overflow: hidden;
          }
          .blog-hero__overlay {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.55);
            backdrop-filter: blur(5px);
            z-index: 1;
          }
          .blog-hero__content {
            position: relative;
            z-index: 2;
          }

          /* MAIN WRAPPER */
          .blog-main-wrapper {
            display: flex;
            width: 100%;
            max-width: 1300px;
            margin: 0 auto;
            padding: 30px 20px;
            gap: 40px;
            background: var(--page-bg);
            box-sizing: border-box;
          }

          /* LEFT: CARD GRID */
          .left-col {
            flex: 3;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
            align-content: start;
          }

          /* RIGHT: SIDEBAR */
          .right-col {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 30px;
            min-width: 300px;
            max-width: 360px;
          }

          /* CARD */
          .card {
  background: var(--bg-card);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  width: 120%;
  height: auto;
  padding-bottom: 10px; /* card spacing कमी */
}
.card__img {
  width: 100%;
  height: 260px;
  object-fit: contain;
  background-color: #fff;
  padding: 10px;
  display: block;
  border-bottom: 4px solid #f2f2f2;
  border-radius: 12px 12px 0 0;
}


          .card__content {
            padding: 28px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .card__meta { color: #888; font-size: 13px; }
          .card__title { margin: 0; color: var(--accent); }
          .card__excerpt { color: #666; }

          .btn-read {
            display: inline-block;
            padding: 8px 20px;
            border: none;
            background: var(--accent);
            color: #fff;
            border-radius: 5px;
            margin-top: 8px;
            cursor: pointer;
            text-decoration: none;
            align-self: flex-start;
          }

          /* SIDEBAR BOX */
          .sidebar-box {
            background: var(--bg-card);
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .author-img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 15px;
          }

          .latest-item {
            display: flex;
            gap: 12px;
            align-items: center;
            margin-bottom: 15px;
          }
          .latest-item img { width: 70px; height: 70px; border-radius: 6px; object-fit: cover; }
          .latest-item__text { text-align: left; font-size: 14px; line-height: 18px; }

          /* SCROLL TO TOP BUTTON */
          .scroll-top-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: var(--accent-dark);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            z-index: 1000;
            transition: all 0.18s ease;
          }
          .scroll-top-btn:hover { transform: translateY(-5px); background: #ff8c00; }

          /* RESPONSIVE: MOBILE */
          @media (max-width: 992px) {
            .blog-main-wrapper { padding: 20px 15px; gap: 30px; }
            .card__img { height: 260px; }
          }

          @media (max-width: 768px) {
            .blog-main-wrapper {
              flex-direction: column;
              gap: 20px;
              padding: 16px;
              max-width: 100%;
            }
              
            .left-col {
              grid-template-columns: 1fr; /* single column */
              gap: 20px;
            }
            .right-col {
              min-width: 100%;
              max-width: 100%;
            }
            .card__img { height: 200px; }
            .blog-hero { height: 300px; }
            .blog-hero__content h1 { font-size: 26px; }
          }

          /* small tweaks to avoid horizontal overflow from images/content */
          img, .card, .blog-main-wrapper, .left-col, .right-col {
            max-width: 100%;
            box-sizing: border-box;
          }

          /* Animation classes */
          .animate-in {
            opacity: 1 !important;
            transform: translateY(0) translateX(0) !important;
          }

          /* Ensure content is visible by default on mobile */
          @media (max-width: 768px) {
            .card, .sidebar-box, .blog-hero, .blog-main-wrapper, * {
              opacity: 1 !important;
              transform: none !important;
              visibility: visible !important;
            }
            
            /* Remove any animation delays on mobile */
            * {
              animation-delay: 0s !important;
              transition-delay: 0s !important;
            }
          }
        `}
      </style>

      {/* HERO */}
      <section className="blog-hero blog-hero-animate">
        <div className="blog-hero__overlay" />
        <div className="blog-hero__content">
          <h1 style={{ fontSize: 38, marginBottom: 10 }}>Our Blog</h1>
          <p style={{ fontSize: 15 }}>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </Link>
            &nbsp; / &nbsp;
            <span style={{ color: "#ffba00" }}>Blog</span>
          </p>
        </div>
      </section>

      {/* MAIN */}
      <div className="blog-main-wrapper">
        <div className="left-col">
          {/* Card 1 */}
          <article className="card blog-card-1 blog-fade-up blog-stagger-1">
            <img src={eImg} alt="E-Salary" className="card__img" />
            <div className="card__content">
              <small className="card__meta">Finance</small>
              <h3 className="card__title">E-Salary App: Empowering Employees</h3>
              <p className="card__excerpt">Discover how Expert Guruji App simplifies everything.</p>
              <Link to="/blog/e-salary" className="btn-read">READ MORE</Link>
            </div>
          </article>

          {/* Card 2 */}
          <article className="card blog-card-2 blog-fade-up blog-stagger-2">
            <img src={eImg1} alt="Guruji App" className="card__img" />
            <div className="card__content">
              <small className="card__meta">School Management</small>
              <h3 className="card__title">Expert Guruji App School Management</h3>
              <p className="card__excerpt">Explore how Guruji App simplifies everything.</p>
              <Link to="/blog/guruji" className="btn-read">READ MORE</Link>
            </div>
          </article>

          {/* Card 3 */}
          <article className="card blog-card-3 blog-fade-up blog-stagger-3">
            <img src={eImg2} alt="Dharaa App" className="card__img" />
            <div className="card__content">
              <small className="card__meta">Milk Dairy</small>
              <h3 className="card__title">Dharaa Dairy Management App</h3>
              <p className="card__excerpt">Track milk, reports & more.</p>
              <Link to="/blog/dharaa" className="btn-read">READ MORE</Link>
            </div>
          </article>

          {/* Card 4 */}
          <article className="card blog-card-4 blog-fade-up blog-stagger-4">
            <img src={eImg3} alt="Kamdhanda" className="card__img" />
            <div className="card__content">
              <small className="card__meta">Business</small>
              <h3 className="card__title">Kamdhanda Business App</h3>
              <p className="card__excerpt">Business marketing, reseller tools & more.</p>
              <Link to="/blog/kamdhanda" className="btn-read">READ MORE</Link>
            </div>
          </article>

          {/* Card 5 */}
          <article className="card blog-card-5 blog-fade-up blog-stagger-5">
            <img src={eImg4} alt="Digital School" className="card__img" />
            <div className="card__content">
              <small className="card__meta">Education</small>
              <h3 className="card__title">Digital School Management</h3>
              <p className="card__excerpt">Attendance, fee, communication.</p>
              <Link to="/blog/digital-school" className="btn-read">READ MORE</Link>
            </div>
          </article>

          {/* Card 6 */}
          <article className="card blog-card-6 blog-fade-up blog-stagger-6">
            <img src={eImg5} alt="Skill App" className="card__img" />
            <div className="card__content">
              <small className="card__meta">Online Learning</small>
              <h3 className="card__title">Expert Skill Learning App</h3>
              <p className="card__excerpt">Courses for careers & growth.</p>
              <Link to="/blog/expert-skill" className="btn-read">READ MORE</Link>
            </div>
          </article>
        </div>

        {/* SIDEBAR */}
        <aside className="right-col">
          <div className="sidebar-box blog-fade-right blog-stagger-2">
            <img src={authorImg} alt="Kajal" className="author-img" />
            <h3>Kajal Sawashe</h3>
            <p style={{ color: "#666" }}>Digital Marketer</p>
            <p style={{ color: "#666" }}>
              We create impactful digital strategies that enhance brand visibility,
              drive engagement, and accelerate business growth.
            </p>
          </div>

          <div className="sidebar-box blog-fade-right blog-stagger-4">
            <h3>Latest Posts</h3>

            <div className="latest-item">
              <img src={lp1} alt="lp1" />
              <div className="latest-item__text">
                <Link to="/blog/scroller-app" style={{ color: "orange", fontWeight: 600 }}>
                  How Scroller App Makes Learning Fun for Kids
                </Link>
                <br />
                <small>05 Mar 2025</small>
              </div>
            </div>

            <div className="latest-item">
              <img src={lp2} alt="lp2" />
              <div className="latest-item__text">
                <Link to="/blog/ecare360" style={{ color: "orange", fontWeight: 600 }}>
                  E-Care360: The Future of Hospital Management
                </Link>
                <br />
                <small>05 Mar 2025</small>
              </div>
            </div>

            <div className="latest-item">
              <img src={lp3} alt="lp3" />
              <div className="latest-item__text">
                <Link to="/blog/pattantra" style={{ color: "orange", fontWeight: 600 }}>
                  PATtantra: Revolutionizing Banking with Cloud Technology
                </Link>
                <br />
                <small>05 Mar 2025</small>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
