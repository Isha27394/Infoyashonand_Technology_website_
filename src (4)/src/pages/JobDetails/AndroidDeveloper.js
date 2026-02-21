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
      Android Developer
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
         <div style={{ width: "70%" }}> 
         <Section title="Job Description"> 
         <p> We are looking for an enthusiastic Android Developer with 0-2 years of experience to join our mobile development team. The ideal candidate will be responsible for building and maintaining high-quality Android applications that deliver exceptional user experiences. </p> 
             <p> As an Android Developer at InfoYashonand Technology, you will work on developing new features, optimizing existing applications, and collaborating with cross-functional teams to define, design, and ship new applications. You'll have the opportunity to work with modern Android technologies while receiving guidance from senior developers.. </p> 
                 </Section> <Section title="Responsibilities"> 
                    <ul style={ulStyle}> 
         <li>Design and build advanced applications for the Android platform</li>
          <li>Collaborate with cross-functional teams to define, design, and ship new features</li>
           <li>Work with outside data sources and APIs</li> 
           <li>Unit-test code for robustness, including edge cases, usability, and general reliability</li> 
           <li>Work on bug fixing and improving application performance</li>
            <li>Continuously discover, evaluate, and implement new technologies to maximize development efficiency</li>
            <li>Maintain code quality, organization, and automatization</li>
             <li>Participate in code reviews and team meetings</li> 
             </ul> 
             </Section> <Section title="Requirements">
                 <ul style={ulStyle}> 
                    <li>0-2 years of Android development experience</li>
                     <li>Strong knowledge of Android SDK, different versions of Android, and how to deal with different screen sizes</li> 
                     <li>Familiarity with RESTful APIs to connect Android applications to back-end services</li> 
                     
                     <li>Strong knowledge of Android UI design principles, patterns, and best practices</li> 
                     <li>Experience with offline storage, threading, and performance tuning</li> 
                     <li>Knowledge of the open-source Android ecosystem and the libraries available for common tasks</li>
                      <li>Familiarity with cloud message APIs and push notifications </li>
                       <li>Understanding of Google's Android design principles and interface guidelines</li> 
                       <li>Proficient understanding of code versioning tools, such as Git</li> 
                       </ul> 
                       </Section>
                        <Section title="Preferred Skills"> 
                            <ul style={ulStyle}>
                                 <li>Experience with Kotlin programming language</li> 
                                 <li>Familiarity with Jetpack components (ViewModel, LiveData, Room, etc.)</li> 
                                 <li>Knowledge of dependency injection frameworks like Dagger or Hilt</li>
                                  <li>Experience with Firebase services</li>
                                   <li>Understanding of MVVM or Clean Architecture patterns</li>
                                    <li>Experience with testing frameworks (JUnit, Espresso, Mockito)</li> 
                                    <li>Knowledge of continuous integration and deployment</li>
                                    
                                    </ul> </Section> <Section title="What We Offer"> <ul style={ulStyle}> 
                                      <li>Competitive salary with performance bonuses</li>
                                      
    
                                       <li>Opportunity to work on diverse mobile projects</li>
                                        <li>Professional development and career growth opportunities</li>
                                         <li>Professional development and career growth opportunities</li>
                                          <li>Mentorship from experienced Android developers</li>
                                           <li>Flexible work arrangements</li> 
                                           <li>Health benefits and paid time off</li>
                                           <li>Regular tech talks and knowledge sharing sessions</li>
                                            </ul> </Section> </div>

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
