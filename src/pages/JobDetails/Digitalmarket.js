import React, { useState, useEffect } from "react";
import bgImg from "../../assets/images/page-title-bg.jpg";
import { useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

export default function JobDetails() {
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

  // CARD STYLE FOR LEFT SIDE
  const cardStyle = {
    background: "#ffffff",
    padding: "24px 28px",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
    marginBottom: "28px",
  };

  return (
    <>
      {/* Mobile Responsive CSS */}
      <style>
        {`
          /* Desktop layout - default */
          .job-main-container {
            width: 85%;
            margin: 0 auto 60px auto;
            display: flex;
            gap: 35px;
          }
          
          .job-left-content {
            width: 70%;
          }
          
          .job-right-sidebar {
            width: 30%;
          }
          
          /* Mobile layout */
          @media (max-width: 768px) {
            .job-main-container {
              width: 95% !important;
              flex-direction: column !important;
              gap: 20px !important;
              padding: 0 15px !important;
            }
            
            .job-left-content {
              width: 100% !important;
              order: 1;
            }
            
            .job-right-sidebar {
              width: 100% !important;
              order: 2;
            }
          }
          
          /* Extra small mobile */
          @media (max-width: 480px) {
            .job-main-container {
              width: 100% !important;
              padding: 0 10px !important;
              gap: 15px !important;
            }
          }
          
          /* Mobile card fixes */
          @media (max-width: 768px) {
            /* Ensure cards don't overflow */
            .job-left-content > div,
            .job-right-sidebar > div {
              max-width: 100% !important;
              box-sizing: border-box !important;
              overflow: hidden !important;
              word-wrap: break-word !important;
            }
            
            /* Fix card padding on mobile */
            .job-left-content > div {
              padding: 18px 15px !important;
              margin-bottom: 20px !important;
            }
            
            .job-right-sidebar > div {
              padding: 16px 15px !important;
              margin-bottom: 15px !important;
            }
            
            /* Fix text overflow */
            .job-left-content p,
            .job-left-content li,
            .job-right-sidebar p {
              word-wrap: break-word !important;
              overflow-wrap: break-word !important;
              max-width: 100% !important;
            }
            
            /* Fix list styling on mobile */
            .job-left-content ul {
              margin-left: 12px !important;
              padding-right: 10px !important;
            }
          }
        `}
      </style>
      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          width: "100%",
          height: "420px",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.65)",
            top: 0,
            left: 0,
          }}
        ></div>

        {/* HERO TEXT */}
        <div style={{ position: "relative", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            <span style={{ color: "#007dff" }}>I</span>
            <span style={{ color: "#ff3600" }}>N</span>
            <span style={{ color: "#ff9d00" }}>F</span>
            <span style={{ color: "#007dff" }}>O</span>
            <span style={{ color: "#13a407" }}>Y</span>
            <span style={{ color: "#ff3600" }}>A</span>
            <span style={{ color: "#ff9d00" }}>S</span>
            <span style={{ color: "#007dff" }}>H</span>
            <span style={{ color: "#13a407" }}>O</span>
            <span style={{ color: "#ff3600" }}>N</span>
            <span style={{ color: "#ff9d00" }}>A</span>
            <span style={{ color: "#007dff" }}>N</span>
            <span style={{ color: "#13a407" }}>D</span>{" "}
            Careers
          </h1>

          <p style={{ fontSize: "18px", opacity: 0.95 }}>
            Empowering IT Careers, Enriching Lives
          </p>
        </div>
      </section>

      {/* ================= TOP JOB HEADER CARD ================= */}
      <div
        style={{
          width: "85%",
          margin: "20px auto 40px auto",
          background: "#aaa8a834",
          padding: "25px 30px",
          borderRadius: "12px",
          boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "4px" }}>
            Digital Marketing
          </h2>

          <p style={{ fontSize: "16px", opacity: 0.8 }}>
            InfoYashonand Technology Pvt. Ltd.
          </p>

          {/* ---------- 3 POINTS ROW ---------- */}
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              gap: "22px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {/* Location */}
            <IconRow
              icon={
                <LocationIcon />
              }
              text="Vishrambag, Sangli"
            />

            {/* Job Type */}
            <IconRow
              icon={<JobTypeIcon />}
              text="Full-time"
            />

            {/* Salary */}
            <IconRow
              icon={<SalaryIcon />}
              text="Competitive Salary"
            />
          </div>
        </div>

        <button
          onClick={() => navigate("/job-application-form")}
          style={{
            padding: "12px 28px",
            background: "#4154f1",
            color: "#fff",
            borderRadius: "8px",
            border: "none",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "10px",
          }}
        >
          Apply Now
        </button>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="job-main-container">
        {/* LEFT CONTENT (CARDS ADDED) */}
        <div className="job-left-content">

          <div style={cardStyle}>
            <Section title="Job Description">
              <p>
                We are seeking a creative and analytical Digital Marketing Specialist
                with 0-2 years of experience...
              </p>
              <p>
                As a Digital Marketing Specialist at InfoYashonand Technology, you will
                enhance brand awareness...
              </p>
            </Section>
          </div>

          <div style={cardStyle}>
            <Section title="Responsibilities">
              <ul style={ulStyle}>
                <li>Plan and execute all digital marketing campaigns</li>
                <li>Design and maintain social media presence</li>
                <li>Measure and report campaign performance</li>
                <li>Identify trends and insights</li>
                <li>Collaborate with teams for landing pages</li>
              </ul>
            </Section>
          </div>

          <div style={cardStyle}>
            <Section title="Requirements">
              <ul style={ulStyle}>
                <li>0–2 years of experience</li>
                <li>Knowledge of SEO/SEM tools</li>
                <li>Strong analytical skills</li>
                <li>Experience with Google Analytics</li>
              </ul>
            </Section>
          </div>

          <div style={cardStyle}>
            <Section title="Preferred Skills">
              <ul style={ulStyle}>
                <li>Google Ads knowledge</li>
                <li>Basic HTML/CSS</li>
                <li>Content writing & design tools</li>
              </ul>
            </Section>
          </div>

          <div style={cardStyle}>
            <Section title="What We Offer">
              <ul style={ulStyle}>
                <li>Competitive salary</li>
                <li>Career growth opportunities</li>
                <li>Creative and collaborative culture</li>
              </ul>
            </Section>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="job-right-sidebar">
          <RightCard title="Job Overview">
            <p>Posted: August 15, 2023</p>
            <p>Location: Sangli</p>
            <p>Type: Full-time</p>
            <p>Experience: 0–2 years</p>
            <p>Salary: ₹2.4L – ₹4.8L</p>
          </RightCard>

          <RightCard title="Similar Jobs">
            <JobItem title="Frontend Developer" loc="Sangli" />
            <JobItem title="UI/UX Designer" loc="Sangli" />
            <JobItem title="Full Stack Developer" loc="Pune" />
          </RightCard>
        </div>
      </div>

      {/* ================= Scroll to Top ================= */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={scrollBtn}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

/* ---------------- COMPONENTS ---------------- */

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "10px" }}>
    <h3 style={sectionTitle}>{title}</h3>
    {children}
  </div>
);

const RightCard = ({ title, children }) => (
  <div
    style={{
      background: "#f6b4b448",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      marginBottom: "25px",
    }}
  >
    <h3 style={{ fontWeight: "700", marginBottom: "12px" }}>{title}</h3>
    {children}
  </div>
);

const JobItem = ({ title, loc }) => (
  <div
    style={{
      padding: "10px 0",
      borderBottom: "1px solid #eee",
      marginBottom: "10px",
    }}
  >
    <h4 style={{ fontSize: "16px", margin: "0 0 5px 0" }}>{title}</h4>
    <p style={{ margin: 0, opacity: 0.8 }}>{loc}</p>
    <p style={{ color: "#4154f1", cursor: "pointer", marginTop: "4px" }}>
      View Details
    </p>
  </div>
);

/* ---------------- ICON ROW ---------------- */

const IconRow = ({ icon, text }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
    {icon}
    <p style={{ margin: 0 }}>{text}</p>
  </div>
);

/* ICONS */
const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4154f1" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const JobTypeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4154f1" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 3H8v4h8V3z" />
  </svg>
);

const SalaryIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4154f1" strokeWidth="2">
    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
  </svg>
);


/* ---------------- STYLES ---------------- */
const sectionTitle = {
  fontSize: "22px",
  fontWeight: "700",
  marginBottom: "10px",
};

const ulStyle = {
  marginLeft: "18px",
  lineHeight: "26px",
  opacity: 0.9,
};

const scrollBtn = {
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
};
