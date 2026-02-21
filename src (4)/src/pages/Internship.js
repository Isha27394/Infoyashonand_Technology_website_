import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { ref, push } from "firebase/database";
import { database } from "../firebase"; // make sure this exports an initialized database
import bgImg from "../assets/images/page-title-bg.jpg";

export default function Internship() {
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

  // Scroll reveal animation
  useEffect(() => {
    const revealSections = document.querySelectorAll(".reveal-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    currentCourse: "",
    yearOfStudy: "",
    preferredDomain: "",
    preferredDuration: "",
    technicalSkills: "",
    whyInternship: "",
    preferredLocation: "Sangli",
    agreeTnc: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation (optional)
    if (!formData.fullName || !formData.email) {
      alert("Please fill Full name and Email.");
      return;
    }

    const dbRef = ref(database, "internshipApplications");
    push(dbRef, formData)
      .then(() => {
        alert("Internship application submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          college: "",
          currentCourse: "",
          yearOfStudy: "",
          preferredDomain: "",
          preferredDuration: "",
          technicalSkills: "",
          whyInternship: "",
          preferredLocation: "Sangli",
          agreeTnc: false,
        });
      })
      .catch((err) => alert("Error: " + err.message));
  };

  return (
    <div className="internship-page">
      {/* Inline CSS matching screenshot */}
      <style>{`
        :root{
          --accent: #ff4500;
          --accent-dark: #ff6a00;
          --muted-bg: #f6f7f9;
          --card-bg: #ffffff;
          --text-dark: #263238;
        }
        *{box-sizing:border-box}
        body,html,#root{height:100%}

        /* Scroll reveal animations */
        .reveal-section {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal-section.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .hero {
          width:100%;
          height:340px;
          background-image: url(${bgImg});
          background-size: cover;
          background-position: center;
          position: relative;
          color: white;
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
          padding: 28px 20px;
        }
        .hero::before{
          content:'';
          position:absolute;
          inset:0;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(3px);
        }
        .hero-inner { position:relative; z-index:2; max-width:1100px; }
        .hero h1{ font-size:32px; margin:6px 0 8px; font-weight:700; color:#fff; letter-spacing:0.2px }
        .hero p{ margin:0 auto 14px; max-width:800px; color:#e7e7e7; font-size:14px }
        .hero .cta-row { display:flex; gap:14px; justify-content:center; margin-top:12px }
        .btn { border: none; padding:10px 18px; border-radius:30px; cursor:pointer; font-weight:600 }
        .btn-primary { background: var(--accent); color:#fff }
        .btn-outline { background: transparent; color:#fff; border:1px solid rgba(255,255,255,0.5); padding:10px 16px; border-radius:20px }

        .page-wrap { background: var(--muted-bg); padding:40px 16px 80px; display:flex; justify-content:center; }
        .container { width:100%; max-width:980px; }

        /* Form Card */
        .form-card {
          width:100%;
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,255,255,0.98));
          border-radius:8px;
          box-shadow: 0 8px 28px rgba(10,20,30,0.06);
          overflow: visible;
          padding:0;
        }
        .form-card .card-header {
          background: var(--accent);
          color:#fff;
          padding:18px 26px;
          border-top-left-radius:8px;
          border-top-right-radius:8px;
          font-size:18px;
          font-weight:600;
          text-align:center;
        }
        .form-body {
          padding:22px 28px 28px;
          background: #fff;
          border-bottom-left-radius:8px;
          border-bottom-right-radius:8px;
        }

        /* grid for inputs like screenshot */
        .form-grid {
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap:14px 20px;
        }
        .full-row { grid-column: 1 / -1; }

        label.field-label { display:block; font-size:12px; color:#667085; margin-bottom:6px; font-weight:600 }
        input[type="text"], input[type="email"], input[type="number"], select, textarea {
          width:100%;
          padding:10px 12px;
          border-radius:6px;
          border:1px solid #e6e9ef;
          font-size:14px;
          background:#fff;
          color:var(--text-dark);
        }
        select { appearance:none; background-image: linear-gradient(45deg, transparent 50%, #111 50%), linear-gradient(135deg, #111 50%, transparent 50%); background-position: calc(100% - 12px) calc(1em + 2px), calc(100% - 7px) calc(1em + 2px); background-size: 6px 6px, 6px 6px; background-repeat: no-repeat; padding-right:36px }

        textarea { min-height:88px; resize:vertical; }

        .radio-row { display:flex; gap:18px; align-items:center; margin-top:6px }
        .radio-item { display:flex; align-items:center; gap:6px; font-size:13px; color:#44515a }

        .tnc { display:flex; gap:8px; align-items:center; margin-top:12px; font-size:13px; color:#44515a }

        .submit-btn {
          margin-top:14px;
          width:100%;
          padding:12px;
          background: var(--accent);
          color:#fff;
          border-radius:6px;
          border:none;
          font-weight:700;
          cursor:pointer;
        }
.section,
.pricing-section {
  text-align: center;
}

/* CONTAINER CENTER */
.three-cards,
.pricing-grid {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 25px;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;
}

/* CARD WIDTH FIX */
.info-card,
.pricing-card {
  width: 300px;
  margin: auto;
  text-align: left;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
}

/* BUTTON FIX — SAME COLOR */
.enroll-btn {
  width: 100%;
  padding: 10px 0;
  background: var(--accent) !important;
  color: #fff !important;
  border: none !important;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.enroll-btn:hover {
  opacity: 0.9;
}

        /* Training & Placement */
        .section {
          margin-top:56px;
          text-align:center;
          padding:36px 0;
          background: var(--muted-bg);
        }
        .section h2 { font-size:22px; margin-bottom:6px; color:#263238 }
        .section p.lead { color:#7b8892; margin-bottom:26px; font-size:14px }

        .three-cards { display:grid; grid-template-columns: repeat(3,1fr); gap:22px; margin-top:12px; }
        .info-card { background:#fff; padding:22px; border-radius:10px; border:1px solid #eef2f5; text-align:left; box-shadow: 0 6px 18px rgba(10,20,30,0.03) }
        .info-card .icon { width:44px; height:44px; background: #fff; border-radius:50%; display:flex; align-items:center; justify-content:center; margin-bottom:10px; }
        .info-card h3 { font-size:16px; margin:0 0 8px }
        .info-card p { color:#6d7881; font-size:13px; margin:0 0 10px }
        .info-card ul { list-style: none; padding-left:0; margin:0; color:#5d6a72; font-size:13px }
        .info-card ul li { margin:6px 0; }

        /* Pricing cards */
        .pricing-section { padding:46px 0; text-align:center; background: #fafcff; }
        .pricing-grid { display:grid; grid-template-columns: repeat(3,1fr); gap:18px; margin-top:18px }
        .pricing-card {
          background:#fff; border-radius:8px; overflow:hidden; border:1px solid #eef2f5; box-shadow: 0 6px 18px rgba(10,20,30,0.04);
          display:flex; flex-direction:column; justify-content:space-between;
        }
        .pricing-top { background: var(--accent); color:#fff; padding:22px; text-align:center }
        .pricing-top h3{ margin:0; font-weight:600 }
        .price { font-size:28px; font-weight:800; margin:8px 0; }
        .pricing-body { padding:18px; text-align:left; color:#5b6a72 }
        .pricing-body ul { list-style:none; padding:0; margin:0 0 12px }
        .pricing-body li { margin:8px 0; font-size:14px; color:#4a5a62 }
        .pricing-footer { padding:16px; text-align:center }
        .enroll-btn { padding:10px 14px; border-radius:6px; border:1px solid var(--accent); width:100%; background:#fff; color:var(--accent); font-weight:700; cursor:pointer }

        /* footer */
        .site-footer { background:#0b0d10; color:#fff; padding:36px 18px; margin-top:40px; }
        .footer-inner { display:grid; grid-template-columns: 1fr 1fr 1fr; gap:18px; max-width:1100px; margin:0 auto; }
        .footer-inner h4{ margin:0 0 10px; color:#fff; font-size:14px }
        .footer-inner p, .footer-inner a { color:#9aa6b2; font-size:13px; text-decoration:none }

        /* responsiveness */
        @media (max-width: 980px) {
          .hero h1 { font-size:26px }
          .three-cards, .pricing-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 720px) {
          .form-grid { grid-template-columns: 1fr; }
          .three-cards, .pricing-grid { grid-template-columns: 1fr; }
          .footer-inner { grid-template-columns: 1fr; }
          .hero { height:300px }
        }
      `}</style>

      {/* HERO */}
      <section className="hero reveal-section">
        <div className="hero-inner">
          <h1>Launch Your IT Career with Our Internship Program</h1>
          <p>Gain hands-on experience in web development, mobile apps, UI/UX design and more with industry experts in Maharashtra.</p>
          <div className="cta-row">
            <button className="btn btn-primary" onClick={() => navigate("/Internship-Content")}>Apply Now</button>
            <button className="btn btn-outline" onClick={() => navigate("/Internship-Content")}>7-days Free trail course</button>
          </div>
        </div>
      </section>

      {/* FORM CARD */}
      <div className="page-wrap reveal-section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "680px" }} className="form-card">
              <div className="card-header">Internship Application</div>
              <div className="form-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div>
                      <label className="field-label">Full Name</label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
                    </div>

                    <div>
                      <label className="field-label">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
                    </div>

                    <div>
                      <label className="field-label">Phone Number</label>
                      <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
                    </div>

                    <div>
                      <label className="field-label">College/University</label>
                      <input type="text" name="college" value={formData.college} onChange={handleChange} placeholder="College / University" />
                    </div>

                    <div>
                      <label className="field-label">Current Course</label>
                      <input type="text" name="currentCourse" value={formData.currentCourse} onChange={handleChange} placeholder="Current Course" />
                    </div>

                    <div>
                      <label className="field-label">Year of Study</label>
                      <select name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange}>
                        <option value="">Select Year</option>
                        <option>1st Year</option>
                        <option>2nd Year</option>
                        <option>3rd Year</option>
                        <option>4th Year</option>
                      </select>
                    </div>

                    <div className="full-row">
                      <label className="field-label">Internship Domain</label>
                      <select name="preferredDomain" value={formData.preferredDomain} onChange={handleChange}>
                        <option value="">Select Preferred Domain</option>
                        <option>Web Development</option>
                        <option>App Development</option>
                        <option>Data Science</option>
                        <option>AI / ML</option>
                      </select>
                    </div>

                    <div className="full-row">
                      <label className="field-label">Preferred Duration</label>
                      <select name="preferredDuration" value={formData.preferredDuration} onChange={handleChange}>
                        <option value="">Select Duration</option>
                        <option>1 Month</option>
                        <option>2 Month</option>
                        <option>3 Month</option>
                        <option>6 Month</option>
                      </select>
                    </div>

                    <div className="full-row">
                      <label className="field-label">Technical Skills (Separate by commas)</label>
                      <textarea name="technicalSkills" value={formData.technicalSkills} onChange={handleChange} placeholder="HTML, CSS, JavaScript, Python, etc."></textarea>
                    </div>

                    <div className="full-row">
                      <label className="field-label">Why do you want this internship? (Optional)</label>
                      <textarea name="whyInternship" value={formData.whyInternship} onChange={handleChange} placeholder="Tell us a little about your goals"></textarea>
                    </div>

                    <div className="full-row">
                      <label className="field-label">Preferred Location</label>
                      <div className="radio-row">
                        <label className="radio-item"><input type="radio" name="preferredLocation" value="Sangli" checked={formData.preferredLocation === "Sangli"} onChange={handleChange} /> Sangli</label>
                        <label className="radio-item"><input type="radio" name="preferredLocation" value="Kolhapur" checked={formData.preferredLocation === "Kolhapur"} onChange={handleChange} /> Kolhapur</label>
                        <label className="radio-item"><input type="radio" name="preferredLocation" value="Pune" checked={formData.preferredLocation === "Pune"} onChange={handleChange} /> Pune</label>
                        <label className="radio-item"><input type="radio" name="preferredLocation" value="Remote" checked={formData.preferredLocation === "Remote"} onChange={handleChange} /> Remote</label>
                      </div>
                    </div>

                    <div className="full-row">
                      <label className="tnc"><input type="checkbox" name="agreeTnc" checked={formData.agreeTnc} onChange={handleChange} /> I agree to the terms and conditions</label>
                    </div>
                  </div>

                  <button className="submit-btn" type="submit">Submit Application</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* TRAINING & PLACEMENT */}
<section
  className="section reveal-section"
  style={{
    textAlign: "center",
    padding: "60px 20px",
  }}
>
  <div
    className="container"
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    {/* Bigger Heading */}
    <h2
      style={{
        fontSize: "38px",
        fontWeight: "700",
        marginBottom: "12px",
      }}
    >
      Training & Placement Support
    </h2>

    <p
      className="lead"
      style={{
        fontSize: "18px",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      Our comprehensive program ensures you gain both technical skills and professional development
      to launch your career.
    </p>

    {/* Cards Container */}
    <div
      className="three-cards"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
        marginTop: "40px",
      }}
    >
      {/* CARD 1 */}
      <div
        className="info-card"
        style={{
          width: "300px",
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          textAlign: "left",
          boxShadow: "0 3px 12px rgba(0,0,0,0.10)",
          transition: "0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 3px 12px rgba(0,0,0,0.10)";
        }}
      >
        <div
          className="icon"
          style={{ fill: "#5EC2F3" }}
          dangerouslySetInnerHTML={{ __html: handsOnSVG }}
        />

        <h3 style={{ fontSize: "20px", marginTop: "10px" }}>Hands-on Training</h3>

        <p style={{ fontSize: "15px" }}>Work on real-world projects under the guidance of industry experts.</p>

        {/* 🔥 Styled UL */}
        <ul style={{ paddingLeft: "0", marginTop: "10px" }}>
          {[
            "Practical coding sessions",
            "Project-based learning",
            "Latest tools and technologies",
            "Code reviews and feedback",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                listStyle: "none",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  width: "18px",
                  height: "3px",
                  background: "#5EC2F3",
                  display: "inline-block",
                  borderRadius: "2px",
                }}
              ></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CARD 2 */}
      <div
        className="info-card"
        style={{
          width: "300px",
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          textAlign: "left",
          boxShadow: "0 3px 12px rgba(0,0,0,0.10)",
          transition: "0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 3px 12px rgba(0,0,0,0.10)";
        }}
      >
        <div
          className="icon"
          style={{ fill: "#5EC2F3" }}
          dangerouslySetInnerHTML={{ __html: mentorSVG }}
        />

        <h3 style={{ fontSize: "20px", marginTop: "10px" }}>Mentorship</h3>

        <p style={{ fontSize: "15px" }}>Get personalized guidance from experienced professionals.</p>

        <ul style={{ paddingLeft: "0", marginTop: "10px" }}>
          {[
            "1:1 mentorship sessions",
            "Career guidance",
            "Technical problem solving",
            "Industry insights",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                listStyle: "none",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  width: "18px",
                  height: "3px",
                  background: "#5EC2F3",
                  display: "inline-block",
                  borderRadius: "2px",
                }}
              ></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CARD 3 */}
      <div
        className="info-card"
        style={{
          width: "300px",
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          textAlign: "left",
          boxShadow: "0 3px 12px rgba(0,0,0,0.10)",
          transition: "0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 3px 12px rgba(0,0,0,0.10)";
        }}
      >
        <div
          className="icon"
          style={{ fill: "#5EC2F3" }}
          dangerouslySetInnerHTML={{ __html: placementSVG }}
        />

        <h3 style={{ fontSize: "20px", marginTop: "10px" }}>Placement Assistance</h3>

        <p style={{ fontSize: "15px" }}>We help you land your dream job after internship completion.</p>

        <ul style={{ paddingLeft: "0", marginTop: "10px" }}>
          {[
            "Resume building",
            "Interview preparation",
            "Job referrals",
            "Career fairs",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                listStyle: "none",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  width: "18px",
                  height: "3px",
                  background: "#5EC2F3",
                  display: "inline-block",
                  borderRadius: "2px",
                }}
              ></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

{/* PRICING SECTION */}
<section className="pricing-section reveal-section" 
  style={{ textAlign: "center", padding: "60px 20px" }}
>
  <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>

    {/* Heading increased */}
    <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "10px" }}>
      Our Training Programs
    </h2>

    <p className="lead" style={{ fontSize: "18px", marginBottom: "30px" }}>
      Choose the program that fits your career goals and schedule.
    </p>

    {/* Cards Center Fix */}
    <div
      className="pricing-grid"
      style={{
        display: "flex",
        justifyContent: "center",   // ⬅ Ensures center alignment
        alignItems: "flex-start",
        gap: "25px",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {/* ---------- CARD 1 ---------- */}
      <div
        className="pricing-card"
        style={{
          width: "300px",
          margin: "0 auto",          // ⬅ Extra guarantee for centering
        }}
      >
        <div className="pricing-top">
          <h3>Basic</h3>
          <div className="price">₹5,999</div>
          <div style={{ fontSize: 13 }}>1 Month Program</div>
        </div>
        <div className="pricing-body">
          <ul>
            <li>Introduction to Web Development</li>
            <li>HTML5 & CSS3 Fundamentals</li>
            <li>Basic JavaScript</li>
            <li>1 Live Project</li>
            <li>Weekly Mentorship</li>
          </ul>
        </div>
        <div className="pricing-footer">
          <button
            className="enroll-btn"
            style={{
              background: "var(--accent)",
              color: "#fff",
              border: "none",
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* ---------- CARD 2 ---------- */}
      <div className="pricing-card" style={{ width: "300px", margin: "0 auto" }}>
        <div className="pricing-top">
          <h3>Standard</h3>
          <div className="price">₹14,999</div>
          <div style={{ fontSize: 13 }}>3 Months Program</div>
        </div>
        <div className="pricing-body">
          <ul>
            <li>Full Stack Development</li>
            <li>Frontend with React.js</li>
            <li>Backend with Node.js</li>
            <li>3 Live Projects</li>
            <li>Bi-weekly Mentorship</li>
          </ul>
        </div>
        <div className="pricing-footer">
          <button
            className="enroll-btn"
            style={{
              background: "var(--accent)",
              color: "#fff",
              border: "none",
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* ---------- CARD 3 ---------- */}
      <div className="pricing-card" style={{ width: "300px", margin: "0 auto" }}>
        <div className="pricing-top">
          <h3>Premium</h3>
          <div className="price">₹24,999</div>
          <div style={{ fontSize: 13 }}>6 Months Program</div>
        </div>
        <div className="pricing-body">
          <ul>
            <li>Advanced Full Stack</li>
            <li>MERN Stack Development</li>
            <li>Database Design</li>
            <li>5+ Live Projects</li>
            <li>Weekly 1:1 Mentorship</li>
          </ul>
        </div>
        <div className="pricing-footer">
          <button
            className="enroll-btn"
            style={{
              background: "var(--accent)",
              color: "#fff",
              border: "none",
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

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

const handsOnSVG = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
<rect width="24" height="24" rx="4" fill="#6EC6FF"/>
<path d="M4 7h16v2H4V7zM4 11h10v2H4v-2zM4 15h8v2H4v-2z" fill="#fff"/>
</svg>`;

const mentorSVG = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
<rect width="24" height="24" rx="4" fill="#6EC6FF"/>
<path d="M12 12a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM6 18c0-3.3 4.2-5 6-5s6 1.7 6 5v1H6v-1z" fill="#fff"/>
</svg>`;

const placementSVG = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
<rect width="24" height="24" rx="4" fill="#6EC6FF"/>
<path d="M12 3L2 8v6c0 5 4 10 10 10s10-5 10-10V8l-10-5zM11 10h2v6h-2v-6z" fill="#fff"/>
</svg>`;
