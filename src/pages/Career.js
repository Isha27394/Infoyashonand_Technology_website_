import React, { useState, useEffect } from "react";
import bgImg from "../assets/images/page-title-bg.jpg";
import Img from "../assets/images/career.jpg";

import {
  FaUserGraduate,
  FaPeopleCarry,
  FaHandHoldingUsd,
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaPaintBrush,
  FaChartLine,
  FaHeadset,
  FaArrowUp,
} from "react-icons/fa";

export default function Career() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [level, setLevel] = useState("All Levels");

  // --- SCROLL TO TOP BUTTON STATE ---
  const [showTopButton, setShowTopButton] = useState(false);

  // --- ON SCROLL SHOW BUTTON ---
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    

    
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- SCROLL TO TOP FUNCTION ---
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // --- APPLY NOW REDIRECT LOGIC ---
  const handleApply = (title) => {
    const urlMap = {
      "Web Developer": "/jobdetails/web-developer",
      "Android Developer": "/jobdetails/android-developer",
      "Digital Marketing Specialist": "/jobdetails/digital-marketing",
      "UI/UX Designer": "/jobdetails/uiux-designer",
      "Senior Software Engineer": "/jobdetails/senior-software-engineer",
    };
    window.location.href = urlMap[title] || "/";
  };

  const allJobs = [
    {
      title: "Web Developer",
      company: "InfoYashonand Technology Pvt. Ltd. • Vishrambag, Sangli",
      location: "Sangli",
      level: "Mid Level",
      description:
        "We are looking for a skilled Web Developer to join our team. You will be responsible for building and maintaining responsive web applications using modern frameworks.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
      experience: "2-4 years",
    },
    {
      title: "Android Developer",
      company: "InfoYashonand Technology Pvt. Ltd. • Vishrambag, Sangli",
      location: "Sangli",
      level: "Mid Level",
      description:
        "Join our mobile team to develop high-quality Android applications.",
      skills: ["Kotlin", "Android SDK", "Jetpack", "REST APIs", "MVVM"],
      experience: "3-5 years",
    },
    {
      title: "Digital Marketing Specialist",
      company: "InfoYashonand Technology Pvt. Ltd. • Remote",
      location: "Remote",
      level: "Mid Level",
      description:
        "We’re seeking a creative Digital Marketing Specialist to develop digital strategies.",
      skills: ["SEO", "Social Media", "Content Marketing", "Google Ads", "Analytics"],
      experience: "2+ years",
    },
    {
      title: "UI/UX Designer",
      company: "InfoYashonand Technology Pvt. Ltd. • Vishrambag, Sangli",
      location: "Sangli",
      level: "Entry Level",
      description:
        "We’re looking for a talented UI/UX Designer to create stunning interfaces.",
      skills: ["Figma", "User Research", "Wireframing", "Prototyping", "UI Design"],
      experience: "0-2 years",
    },
    {
      title: "Senior Software Engineer",
      company: "InfoYashonand Technology Pvt. Ltd. • Pune",
      location: "Pune",
      level: "Senior Level",
      description:
        "Lead complex software development projects, architect scalable solutions.",
      skills: ["Java", "Spring Boot", "Microservices", "AWS", "SQL"],
      experience: "5+ years",
    },
  ];

  const filteredJobs = allJobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.join(" ").toLowerCase().includes(search.toLowerCase());

    const matchLocation =
      location === "All Locations" || job.location === location;

    const matchLevel = level === "All Levels" || job.level === level;

    return matchSearch && matchLocation && matchLevel;
  });

  const section = {
    width: "100%",
    padding: "60px 20px",
    boxSizing: "border-box",
  };

  const container = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const centerText = {
    textAlign: "center",
    marginBottom: "40px",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
  };

  const card = {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    textAlign: "center",
  };

  const iconStyle = {
    fontSize: "42px",
    color: "#007bff",
    marginBottom: "10px",
  };

  const button = {
    padding: "12px 28px",
    background: "#0066ff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
    marginTop: "15px",
  };

  const categories = [
    {
      icon: <FaLaptopCode style={iconStyle} />,
      title: "Software Development",
      text: "Build innovative solutions using modern technologies.",
    },
    {
      icon: <FaMobileAlt style={iconStyle} />,
      title: "Mobile Development",
      text: "Create engaging mobile apps.",
    },
    {
      icon: <FaBullhorn style={iconStyle} />,
      title: "Digital Marketing",
      text: "SEO, content marketing & performance campaigns.",
    },
    {
      icon: <FaPaintBrush style={iconStyle} />,
      title: "UI/UX Design",
      text: "Craft modern user experiences.",
    },
    {
      icon: <FaChartLine style={iconStyle} />,
      title: "Data Analytics",
      text: "Convert data into insights.",
    },
    {
      icon: <FaHeadset style={iconStyle} />,
      title: "Technical Support",
      text: "Support customers with solutions.",
    },
  ];

  const reasons = [
    {
      icon: <FaUserGraduate style={iconStyle} />,
      title: "Career Growth",
      text: "Structured career path with mentorship.",
    },
    {
      icon: <FaPeopleCarry style={iconStyle} />,
      title: "Collaborative Culture",
      text: "Work with talented teammates.",
    },
    {
      icon: <FaHandHoldingUsd style={iconStyle} />,
      title: "Competitive Benefits",
      text: "Rewards & bonuses.",
    },
  ];

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          * {
            box-sizing: border-box;
          }
          body {
            overflow-x: hidden;
          }
          section, div {
            max-width: 100vw;
            overflow-x: hidden;
          }
          h1 {
            font-size: 28px !important;
          }
          h2 {
            font-size: 22px !important;
          }
          p {
            font-size: 14px !important;
          }
        }
      `}</style>
      {/* ---------- HERO SECTION ---------- */}
      <section
        style={{
          width: "100%",
          height: "480px",
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
            backdropFilter: "blur(4px)",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            textAlign: "center",
            marginTop: "20px",
            padding: "0 15px",
          }}
        >
          <h1
            style={{
              fontSize: "45px",
              fontWeight: "800",
              letterSpacing: "1px",
              marginBottom: "12px",
              textShadow: "0 4px 10px rgba(0,0,0,0.8)",
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
            <span style={{ color: "#13a407" }}>D</span>
            <span style={{ color: "#ffffff" }}> Careers</span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              opacity: "1",
              marginBottom: "14px",
              fontWeight: "500",
              textShadow: "0 3px 8px rgba(0,0,0,0.8)",
            }}
          >
            Empowering IT Careers, Enriching Lives
          </p>

          <p
            style={{
              fontSize: "16px",
              marginTop: "8px",
              fontWeight: "600",
              textShadow: "0 3px 6px rgba(0,0,0,0.8)",
            }}
          >
            <span
              style={{ color: "#ffae42", cursor: "pointer" }}
              onClick={() => (window.location.href = "/")}
            >
              Home
            </span>{" "}
            / Career
          </p>
        </div>
      </section>

      {/* ---------------------- BUILD YOUR FUTURE SECTION ---------------------- */}
      <section className="fade-in-up" style={{ padding: "80px 20px", background: "#f4f6fa" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          <div style={{ flex: "1", minWidth: "320px" }}>
            <h2
              style={{
                fontSize: "32px",
                marginBottom: "18px",
                color: "#1b1e32",
                fontWeight: "700",
              }}
            >
              Build Your Future With Us
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "28px",
                maxWidth: "600px",
                color: "#4c5264",
                marginBottom: "15px",
              }}
            >
             At InfoYashonand Technology Pvt. Ltd., we believe our people are our greatest strength. As a fast-growing software development and IT services company in Maharashtra, we offer exciting career opportunities for talented professionals who want to build successful futures in the IT industry.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "28px",
                maxWidth: "600px",
                color: "#4c5264",
                marginBottom: "25px",
              }}
            >
             Join our team of passionate software developers, web designers, digital marketers, cloud engineers, and IT support specialists who are shaping the future of innovative IT solutions across Sangli, Kolhapur, Pune, and Mumbai. We provide a growth-focused work culture, continuous learning, career advancement, and the opportunity to work on cutting-edge technologies.
            </p>


          </div>

          <div style={{ flex: "1", minWidth: "320px", textAlign: "center" }}>
            <img
              src={Img}
              alt="Career Illustration"
              style={{
                width: "95%",
                maxWidth: "480px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </section>

      {/* ---------- WHY JOIN US ---------- */}
      <section className="fade-in-left" style={{ ...section, background: "#f8f9fc" }}>
        <div style={container}>
          <div style={centerText}>
            <h3>WHY JOIN OUR TEAM?</h3>
            <h2>WE OFFER MORE THAN JUST A JOB – WE OFFER A CAREER</h2>
          </div>

          <div style={grid}>
            {reasons.map((i, index) => (
              <div key={index} style={card}>
                {i.icon}
                <h3>{i.title}</h3>
                <p style={{ color: "#555" }}>{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CAREER PATHS BEFORE JOB LISTINGS ---------- */}
      <section className="fade-in-right" style={section}>
        <div style={container}>
          <div style={centerText}>
            <h3>EXPLORE CAREER PATHS</h3>
            <h2>Find opportunities that match your skills and aspirations</h2>
          </div>

          <div style={grid}>
            {categories.map((c, index) => (
              <div key={index} style={card}>
                {c.icon}
                <h3>{c.title}</h3>
                <p style={{ color: "#555555ff" }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CURRENT JOBS SECTION ---------- */}
      <section style={{ width: "100%", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h3 style={{ color: "#888", letterSpacing: "2px" }}>
              CURRENT OPEN POSITIONS
            </h3>
            <h2 style={{ marginTop: "10px", fontSize: "34px", fontWeight: "700" }}>
              FIND YOUR PERFECT ROLE AT INFOYASHONAND TECHNOLOGY
            </h2>
          </div>

          {/* FILTER BOX */}
         {/* FILTER BOX */}
{/* FILTER BOX */}
<div
  style={{
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 4px 25px rgba(0,0,0,0.08)",
    marginBottom: "40px",
  }}
>

  {/* 🔥 RESPONSIVE FILTER CSS */}
  <style>
    {`
      @media (max-width: 768px) {
        .career-filter-grid {
          grid-template-columns: 1fr !important;
        }

        .career-filter-grid > div {
          width: 100% !important;
        }

        .career-filter-grid input,
        .career-filter-grid select {
          width: 100% !important;
        }
      }
    `}
  </style>

  {/* FILTER GRID */}
  <div
    className="career-filter-grid"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      width: "100%",
    }}
  >

    <div>
      <label>Search Jobs</label>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Job title or keywords"
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "6px",
          borderRadius: "6px",
          border: "1px solid #ddd",
        }}
      />
    </div>

    <div>
      <label>Location</label>
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "6px",
          borderRadius: "6px",
          border: "1px solid #ddd",
        }}
      >
        <option>All Locations</option>
        <option>Sangli</option>
        <option>Pune</option>
        <option>Remote</option>
      </select>
    </div>

    <div>
      <label>Experience Level</label>
      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "6px",
          borderRadius: "6px",
          border: "1px solid #ddd",
        }}
      >
        <option>All Levels</option>
        <option>Entry Level</option>
        <option>Mid Level</option>
        <option>Senior Level</option>
      </select>
    </div>

  </div>
</div>



          {/* NO JOBS FOUND */}
          {filteredJobs.length === 0 && (
            <p
              style={{
                textAlign: "center",
                fontSize: "18px",
                color: "#666",
                marginTop: "20px",
              }}
            >
              ❌ No jobs match your current filters. <br />
              Try adjusting your search criteria.
            </p>
          )}

          {/* JOB LISTING */}
          {filteredJobs.map((job, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "16px",
                boxShadow: "0 4px 22px rgba(0,0,0,0.08)",
                marginBottom: "40px",
              }}
            >
              <h2>{job.title}</h2>
              <p style={{ color: "#666" }}>{job.company}</p>

              <span
                style={{
                  display: "inline-block",
                  background: "#e6f0ff",
                  color: "#0066ff",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  marginBottom: "15px",
                }}
              >
                Full-time
              </span>

              <p>{job.description}</p>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {job.skills.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "6px 14px",
                      background: "#f4f5f7",
                      borderRadius: "20px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p style={{ marginTop: "15px" }}>
                <b>Experience:</b> {job.experience}
              </p>

              {/* ---- APPLY BUTTON WITH REDIRECT ---- */}
              <button
                onClick={() => handleApply(job.title)}
                style={{ ...button, float: "right", marginTop: "20px" }}
              >
                APPLY NOW
              </button>

              <div style={{ clear: "both" }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- READY TO JOIN ---------- */}
      <section
        style={{
          width: "100%",
          padding: "60px 20px",
          background: "linear-gradient(90deg, #001F3F, #00A8F3)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "15px" }}>
          Ready to Join Our Team?
        </h2>

        <p style={{ fontSize: "18px", marginBottom: "25px", opacity: "0.9" }}>
          If your perfect role isn't listed, we’d still love to hear from you.
        </p>

        <button
          onClick={() => window.location.replace("/#contact")}
          style={{
            padding: "12px 26px",
            background: "#ffffff",
            color: "#0066ff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
            marginRight: "15px",
            fontSize: "16px",
          }}
        >
          Contact Us
        </button>

        <button
          onClick={() => (window.location.href = "/internship")}
          style={{
            padding: "12px 26px",
            background: "#ffffff",
            color: "#0066ff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Explore Internships
        </button>
      </section>

      {/* ---- SCROLL TO TOP BUTTON ---- */}
      {showTopButton && (
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
