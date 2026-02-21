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
   Digital Marketing
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
        {/* LEFT CONTENT */} <div style={{ width: "70%" }}>
         <Section title="Job Description"> 
         <p> We are seeking a creative and analytical Digital Marketing Specialist with 0-2 years of experience to join our marketing team. The ideal candidate will be responsible for developing, implementing, and managing marketing campaigns that promote our company and its products/services. </p> 
         <p> As a Digital Marketing Specialist at InfoYashonand Technology, you will play a key role in enhancing brand awareness within the digital space as well as driving website traffic and acquiring leads/customers. You will work closely with different teams to create and execute digital marketing strategies. </p> 
         </Section> <Section title="Responsibilities"> 
          <ul style={ulStyle}> 
            <li>Plan and execute all digital marketing, including SEO/SEM, marketing database, email, social media and display advertising campaigns</li> 
            <li>Design, build and maintain our social media presence</li>
             <li>Measure and report performance of all digital marketing campaigns, and assess against goals (ROI and KPIs)</li>
              <li>Identify trends and insights, and optimize spend and performance based on the insights</li> 
              <li>Brainstorm new and creative growth strategies</li>
               <li>Plan, execute, and measure experiments and conversion tests</li> 
               <li>Collaborate with internal teams to create landing pages and optimize user experience</li>
               <li>Utilize strong analytical ability to evaluate end-to-end customer experience across multiple channels and customer touch points</li>
               
               
               
      
          </ul> </Section>
           <Section title="Requirements">
             <ul style={ulStyle}>
               <li>0-2 years of digital marketing experience</li> 
               <li>Demonstrable experience leading and managing SEO/SEM, marketing database, email, social media and/or display advertising campaigns</li> 
               <li>Highly creative with experience in identifying target audiences and devising digital campaigns that engage, inform and motivate</li>
               
                <li>Experience in optimizing landing pages and user funnels</li>
                 <li>Experience with A/B and multivariate experiments</li> 
                 <li>Solid knowledge of website analytics tools (e.g., Google Analytics, NetInsight, Omniture, WebTrends)</li> 
                 <li>Working knowledge of ad serving tools </li> 
                 <li>Strong analytical skills and data-driven thinking </li>
                  <li>Up-to-date with the latest trends and best practices in online marketing and measurement</li> 
                  </ul> </Section>
                   <Section title="Preferred Skills">
                     <ul style={ulStyle}>
                       <li>Experience with marketing automation tools</li>
                        <li>Basic knowledge of HTML, CSS, and JavaScript development and constraints</li> 
                        <li>Experience in setting up and optimizing Google Adwords campaigns</li>
                         <li>Strong writing and content creation skills</li>
                          <li>Graphic design skills and experience with design software (Photoshop, Canva, etc.)</li> 
                          <li>Video editing skills for creating marketing content</li> 
                          <li>Certification in Google Analytics or Google Ads</li> 
                          </ul> </Section>
                           <Section title="What We Offer">
                             <ul style={ulStyle}>
                               <li>Competitive salary with performance bonuses</li> 
                               <li>Opportunity to work with diverse clients and industries</li> 
                               <li>Professional development and career growth opportunities</li> 
                               
                               <li>Creative and collaborative work environment</li>
                                <li>Access to latest digital marketing tools and technologies</li> 
                                <li>Flexible work arrangements</li> 
                                
                                <li>Health benefits and paid time off</li> 
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
