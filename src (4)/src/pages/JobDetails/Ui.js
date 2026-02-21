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

  return (
    <>
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
      Web Developer
    </h2>

    <p style={{ fontSize: "16px", opacity: 0.8 }}>
      InfoYashonand Technology Pvt. Ltd.
    </p>

    {/* ---------- 3 POINTS IN ROW WITH SVG ICONS ---------- */}
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
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4154f1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <p style={{ margin: 0 }}>Vishrambag, Sangli</p>
      </div>

      {/* Job Type */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4154f1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 3H8v4h8V3z" />
        </svg>
        <p style={{ margin: 0 }}>Full-time</p>
      </div>

      {/* Salary */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4154f1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
        </svg>
        <p style={{ margin: 0 }}>Competitive Salary</p>
      </div>
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
      <div
        style={{
          width: "85%",
          margin: "0 auto 60px auto",
          display: "flex",
          gap: "35px",
        }}
      >
        {/* LEFT CONTENT */}
        {/* LEFT CONTENT */}
        <div style={{ width: "70%" }}> 
        <Section title="Job Description"> 
        <p> We are looking for a skilled Web Developer with 0-2 years of experience to join our 
        dynamic team. The ideal candidate will be responsible for designing, coding, and modifying 
        websites, from layout to function according to specifications. You will strive to create 
        visually appealing sites that feature user-friendly design and clear navigation. </p> 
        <p> As a Web Developer at InfoYashonand Technology, you will collaborate with our team
         to develop innovative web solutions that meet our clients' needs. You'll work on a variety 
         of projects, implement new features, and optimize existing code while following best
          practices in web development. </p>
           </Section> <Section title="Responsibilities"> 
            <ul style={ulStyle}>
               <li>Develop and maintain responsive web applications using modern frontend and backend technologies</li>
                <li>Write clean, efficient, and well-documented code following industry best practices</li> 
                <li>Collaborate with designers to implement UI/UX designs with pixel-perfect accuracy</li> 
                <li>Participate in the entire application lifecycle, focusing on coding and debugging</li> 
                <li>Build reusable code and libraries for future use</li>
                 <li>Optimize applications for maximum speed and scalability</li>
                  <li>Implement security and data protection measures</li> 
                  <li>Stay updated with emerging technologies and industry trends</li> 
                  </ul>
                   </Section> <Section title="Requirements">
                    <ul style={ulStyle}> <li>0-2 years of professional web development experience</li> 
                    <li>Strong proficiency in HTML5, CSS3, and JavaScript</li> 
                    <li>Experience with at least one modern frontend framework (React, Angular, or Vue)</li>
                     <li>Understanding of server-side CSS preprocessors (SASS or LESS)</li>
                      <li>Basic knowledge of backend technologies (Node.js, PHP, or similar)</li>
                       <li>Familiarity with database technologies (MySQL, MongoDB, or similar)</li>
                        <li>Understanding of version control systems (Git) </li>
                         <li>Strong problem-solving skills and attention to detail </li> 
                         <li>Bachelor's degree in Computer Science or related field (or equivalent experience)</li>
                          </ul>
                           </Section>
                            <Section title="Preferred Skills"> 
                              <ul style={ulStyle}> 
                                <li>Experience with React.js or similar frontend libraries</li> 
                                <li>Knowledge of Node.js and Express</li> 
                                <li>Familiarity with RESTful APIs and AJAX</li> 
                                <li>Understanding of UI/UX principles</li> 
                                <li>Experience with testing frameworks (Jest, Mocha, etc.)</li> 
                                <li>Knowledge of SEO principles</li> 
                                <li>Experience with CMS platforms (WordPress, Drupal, etc.)</li>
                                 </ul> </Section> 
                                 <Section title="What We Offer"> 
                                  <ul style={ulStyle}> 
                                    <li>Competitive salary with performance bonuses</li>
                                     <li>Opportunity to work on diverse projects with cutting-edge technologies</li>
                                      <li>Professional development and career growth opportunities</li> 
                                      <li>Supportive work environment with mentorship from senior developers</li>
                                       <li>Flexible work arrangements</li> <li>Health benefits and paid time off</li>
                                        <li>Regular team-building activities and events</li> 
                                        </ul> </Section> 
                                        </div>

        {/* RIGHT SIDEBAR */}
        <div style={{ width: "30%" }}>
          <RightCard title="Job Overview">
            <p> Posted Date: <br></br>August 15, 2023</p>
            <p> Location: <br></br>Vishrambag, Sangli</p>
            <p> Job Type:<br></br>Full-time</p>
            <p> Experirnce:<br></br>0–2 years experience</p>
            <p> Salary:<br></br>₹2.4L – ₹4.8L/year</p>
          </RightCard>

          <RightCard title="Similar Jobs">
            <JobItem title="Frontend Developer" loc="Sangli" />
            <JobItem title="UI/UX Designer" loc="Sangli" />
            <JobItem title="Full Stack Developer" loc="Pune" />

            <p style={{ color: "#4154f1", marginTop: "10px", cursor: "pointer" }}>
              View All Openings →
            </p>
          </RightCard>
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
  );
}

/* ================= COMPONENTS ================= */
const Section = ({ title, children }) => (
  <div style={{ marginBottom: "35px" }}>
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

/* ================= STYLES ================= */
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
