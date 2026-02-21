// src/pages/Blog/EsalaryPost.jsx
import React, { useState, useEffect } from "react";
import heroBg from "../../assets/images/page-title-bg.jpg";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
// Main blog image
import blogImg from "../../assets/images/portfolio/Buisness/Scro-2.png";

// Sidebar images
import authorImg from "../../assets/images/Blog/author.jpg";
import lp1 from "../../assets/images/Blog/l1.jpg";
import lp2 from "../../assets/images/Blog/l2.jpg";
import lp3 from "../../assets/images/Blog/l3.jpg";

export default function Scroller() {
  // eslint-disable-next-line no-unused-vars
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
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.comment.trim()) return;
    const newComment = {
      id: Date.now(),
      name: form.name,
      date: new Date().toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      text: form.comment,
    };
    setComments((c) => [newComment, ...c]);
    setForm({ name: "", email: "", comment: "" });
  }

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

  /* ✅ Black Glass Effect added */
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

  const container = {
    maxWidth: "1200px",
    width: "100%",
    margin: "-40px auto 0 auto",
    padding: "0 15px",
    display: "flex",
    gap: "30px",
    alignItems: "flex-start",
  };

  const leftCol = {
    width: "92%",
    background: "#fff",
    borderRadius: "10px",
    padding: "28px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  };

  const card = {
    background: "#fff",
    borderRadius: "10px",
    padding: "22px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    marginTop: "28px",
  };

  const rightCol = {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "20px", // ✅ makes sidebar move slightly below hero
  };

  /* SIDEBAR IMAGE CENTER FIX */
  const sidebarBox = {
    background: "#fff",
    padding: "18px",
    borderRadius: "10px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    textAlign: "center", // ✅ center everything
  };

  const latestPostItem = {
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
    padding: "10px 0",
    borderBottom: "1px dashed #eee",
  };

  const latestPostImg = {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "6px",
  };

  const latestPostText = {
    textAlign: "left",
    fontSize: "14px",
    lineHeight: "18px",
    color: "rgba(251, 125, 7, 1)",
  };

  const bigImageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "18px",
  };

  const titleStyle = {
    fontSize: "26px",
    fontWeight: 700,
    margin: "8px 0 14px 0",
    color: "#94480aff",
  };

  const excerpt = {
    color: "#444",
    lineHeight: "1.8",
    marginBottom: "12px",
  };

  const quoteBox = {
    background: "#f5f8ff",
    borderLeft: "4px solid #4154f1",
    padding: "12px 16px",
    margin: "18px 0",
    borderRadius: "6px",
    color: "#333",
  };

  const tagsStyle = {
    display: "flex",
    gap: "8px",
    marginTop: "14px",
    flexWrap: "wrap",
  };

  const tag = {
    background: "#eef3ff",
    color: "#1b3fae",
    padding: "6px 10px",
    borderRadius: "6px",
    fontSize: "13px",
  };

  // eslint-disable-next-line no-unused-vars
  const commentItem = {
    marginBottom: "14px",
    paddingBottom: "14px",
    borderBottom: "1px solid #eee",
  };

  const formInput = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "14px",
    marginBottom: "10px",
  };

  const formLabel = {
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: "6px",
    display: "block",
  };

  const submitBtn = {
    background: "#4154f1",
    color: "#fff",
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
  };

  return (
    <div style={page}>
      <style>{`
        * {
          box-sizing: border-box;
        }
        html, body {
          overflow-x: hidden !important;
          max-width: 100vw;
        }
        img {
          max-width: 100%;
          height: auto;
        }
        @media (max-width: 768px) {
          section, div, article {
            max-width: 100vw !important;
            overflow-x: hidden !important;
          }
          div[style*="display: flex"] {
            flex-direction: column !important;
            align-items: center !important;
            margin: 0 auto !important;
          }
          div[style*="minWidth"] {
            min-width: 100% !important;
          }
          div[style*="maxWidth"] {
            max-width: 100% !important;
            padding-left: 15px !important;
            padding-right: 15px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          body > div,
          #root > div {
            width: 100% !important;
            margin: 0 auto !important;
          }
          h1 {
            font-size: 24px !important;
          }
          h2 {
            font-size: 20px !important;
          }
          p {
            font-size: 14px !important;
          }
        }
      `}</style>
      {/* HERO */}
      <section style={hero}>
        <div style={heroOverlay} />
        <div style={heroContent}>
          <h2 style={{ fontSize: "36px", margin: 0, fontWeight: 800 }}>Blog Post</h2>
          <p style={{ marginTop: "8px", opacity: 0.95 }}>
            Revolutionizing dairy management with simplicity, efficiency, and real-time insights to empower your business and nurture your dreams.
          </p>
          <p style={{ fontSize: "15px" }}>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </Link>
            &nbsp; / &nbsp;
            <span style={{ color: "#ffba00" }}>Scroller App</span>
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div style={container}>
        <div style={{ width: "70%" }}>
          {/* MAIN BLOG CARD */}
          <div style={leftCol}>
            <img src={blogImg} alt="e Salary" style={bigImageStyle} />

            <h3 style={titleStyle}>
             Making Learning Fun with Scroller: An Interactive App for Kids
            </h3>

            <p style={excerpt}>
           Scroller is an innovative app that transforms early childhood education through interactive games, colorful animations, and engaging activities designed for young learners.
            </p>

            <p style={excerpt}>
            By combining play and learning, Scroller ensures that children develop fundamental skills such as letter recognition, number counting, and shape identification while having a great time. The app's intuitive scroll-based navigation makes it easy for kids to explore and enjoy a personalized learning experience.
            </p>

            <div style={quoteBox}>
              <strong>
                "Engaging young minds through interactive learning creates a strong foundation for lifelong education. Scroller makes it possible!"
              </strong>
              <div style={{ marginTop: "8px" }}>
               With Scroller, parents can feel confident that their children are learning in a safe and stimulating digital environment that fosters creativity, curiosity, and confidence.
              </div>
            </div>

            <p style={excerpt}>Moreover, the app's vibrant design and age-appropriate lessons make it a perfect educational tool for early learners, giving them a head start in their academic journey.</p>

            <div style={tagsStyle}>
              <div style={tag}>Early Education</div>
              <div style={tag}>Interactive Learning</div>
              <div style={tag}> Kids App</div>
            </div>
          </div>

          {/* COMMENTS CARD */}
          <div style={card}>
            <h3 style={{ marginBottom: "15px" }}>Comments</h3>

           
          </div>

          {/* COMMENT FORM */}
          <div style={card}>
            <h3 style={{ marginBottom: "15px" }}>Write a Comment</h3>

            <form onSubmit={handleSubmit}>
              <label style={formLabel}>Name:</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                style={formInput}
                required
              />

              <label style={formLabel}>Email:</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                style={formInput}
              />

              <label style={formLabel}>Comment:</label>
              <textarea
                name="comment"
                value={form.comment}
                onChange={handleChange}
                style={{ ...formInput, minHeight: "110px" }}
                required
              />

              <button type="submit" style={submitBtn}>
                Post Comment
              </button>
            </form>
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
           </div>
         );
       }
       