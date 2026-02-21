import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import bgImg from "../assets/images/page-title-bg.jpg";

import courseImg1 from "../assets/images/working-2.jpg";
import courseImg2 from "../assets/images/working-3.jpg";
import courseImg3 from "../assets/images/working-4.jpg";
import courseImg4 from "../assets/images/working-5.jpg";
import courseImg5 from "../assets/images/working-6.jpg";
import courseImg6 from "../assets/images/working-7.jpg";
const levelIcon = (
  <svg width="18" height="18" fill="#555" viewBox="0 0 24 24">
    <path d="M3 17h4v-7H3v7zm7 0h4V3h-4v14zm7 0h4v-10h-4v10z"></path>
  </svg>

);

const testimonials = [
  {

    text: "The training was very practical and helped me gain real project experience!",
    name: "Rahul Patil",
    role: "Web Developer Intern",
    current: "Working at Infosys",
  },
  {
    text: "Amazing mentorship! My skills improved a lot.",
    name: "Sneha Kulkarni",
    role: "UI/UX Intern",
    current: "Working at TCS",
  },
  {
    text: "This internship helped me build confidence for job interviews.",
    name: "Amit Shinde",
    role: "Full Stack Intern",
    current: "Working at Cognizant",
  },
];

export default function InternshipContent() {
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

  /* ---------------- AUTO SLIDER ---------------- */
  useEffect(() => {
    const slider = document.getElementById("testimonialSlider");
    if (!slider) return;

    let index = 0;
    const total = testimonials.length;

    const interval = setInterval(() => {
      index = (index + 1) % total;
      slider.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- SCROLL REVEAL ---------------- */
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
      { threshold: 0.50 }
    );

    revealSections.forEach((sec) => observer.observe(sec));
  }, []);

  /* ---------------- SHOW/HIDE TOP ARROW ---------------- */


  const navigate = useNavigate();

  const buttonStyle = {
    padding: "12px 28px",
    borderRadius: "8px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",
  };

  const cardShadow = {
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    borderRadius: "12px",
    background: "#fff",
    padding: "25px",
  };

  return (
    <div style={{ width: "100%", fontFamily: "Arial, sans-serif", background: "#f5f5f5" }}>
      <style>{`
        @media (max-width: 768px) {
          * {
            box-sizing: border-box;
          }
          body {
            overflow-x: hidden !important;
          }
          section, div {
            max-width: 100vw !important;
            overflow-x: hidden !important;
          }
          .reveal-section {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }
          h1, h2 {
            font-size: 24px !important;
          }
          p {
            font-size: 14px !important;
          }
        }
      `}</style>

      {/* ------- Scroll Reveal Animation CSS ------- */}
      <style>
        {`
          .reveal-section {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.20s ease-out;
          }
          .reveal-section.revealed {
            opacity: 1;
            transform: translateY(0);
          }


        `}
      </style>

      {/* -------- HERO SECTION -------- */}
      <section
        className="reveal-section"
        style={{
          width: "100%",
          height: "500px",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(6px)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "750px" }}>
          <h1 style={{ fontSize: "40px", fontWeight: "700", marginBottom: "15px" }}>
            Launch Your IT Career with Our Internship Program
          </h1>
          <p style={{ fontSize: "18px", marginBottom: "30px", lineHeight: "1.6" }}>
            Gain hands-on experience in web development, mobile apps, UI/UX design and more with industry experts.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("/internship")}
              style={{ ...buttonStyle, background: "#ff4500", color: "#fff" }}
            >
              Apply Now
            </button>

            <button
              style={{ ...buttonStyle, background: "#ebe7df", color: "#000" }}
            >
              7-Days Free Trial Course
            </button>
          </div>
        </div>
      </section>

      {/* -------- WHY CHOOSE US -------- */}
      <section className="reveal-section" style={{ padding: "80px 20px", background: "#fdfdfd" }}>
        <h2 style={{ textAlign: "center", fontSize: "36px", fontWeight: "700", marginBottom: "10px" }}>
          Why Choose Our Internship Program?
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "750px",
            margin: "0 auto 60px auto",
            fontSize: "18px",
            color: "#555",
          }}
        >
          We provide comprehensive training and placement assistance to help kickstart your IT career.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
          {[
            {
              icon: (
                <svg width="32" height="32" stroke="white" strokeWidth="2" fill="none">
                  <rect x="3" y="4" width="18" height="12" rx="2" ry="2"></rect>
                  <line x1="2" y1="20" x2="22" y2="20"></line>
                </svg>
              ),
              title: "Hands-on Projects",
              points: ["Build real applications", "Solve business problems", "Git training"],
            },
            {
              icon: (
                <svg width="32" height="32" stroke="white" strokeWidth="2" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M7 21v-2a4 4 0 0 1 3-3.87"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              ),
              title: "Mentorship",
              points: ["1:1 guidance", "Code reviews", "Career support"],
            },
            {
              icon: (
                <svg width="32" height="32" stroke="white" strokeWidth="2" fill="none">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 3H8v4h8V5a2 2 0 0 0-2-2z"></path>
                </svg>
              ),
              title: "Placement Support",
              points: ["Resume building", "Mock interviews", "Referrals"],
            },
          ].map((card, index) => (
            <div
              key={index}
              style={{
                width: "360px",
                background: "#ebfafe",
                padding: "40px",
                borderRadius: "16px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                borderLeft: "5px solid transparent",
                transition: "0.3s",
              }}
            >
              <div
                className="iconBox"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "#ff4d1c",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                {card.icon}
              </div>

              <h3 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px" }}>
                {card.title}
              </h3>

              <ul style={{ paddingLeft: "20px", color: "#444", lineHeight: "1.8" }}>
                {card.points.map((p, i) => (
                  <li key={i} style={{ fontSize: "16px" }}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* -------- COURSES SECTION -------- */}
      {/* -------- COURSES SECTION -------- */}
<section className="reveal-section" style={{ padding: "60px 20px", background: "#f7f9fc" }}>
  <h2
    style={{
      textAlign: "center",
      fontSize: "38px",
      fontWeight: "700",
      marginBottom: "10px",
    }}
  >
    Our Comprehensive Courses
  </h2>

  <p
    style={{
      textAlign: "center",
      maxWidth: "700px",
      margin: "0 auto 50px auto",
      fontSize: "18px",
      color: "#555",
    }}
  >
    Choose from industry-relevant programs designed to make you job-ready.
  </p>

  {/* NEW IMAGE ARRAY */}
  {(() => {
    const courseImages = [
      courseImg1,
      courseImg2,
      courseImg3,
      courseImg4,
      courseImg5,
      courseImg6,
    ];

    return (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
        {[
          {
            title: "Full Stack Web Development",
            category: "Web Development",
            duration: "3 Months",
            level: "Beginner to Advanced",
            description:
              "Master HTML5, CSS3, JS, React, Node.js, MongoDB and build modern web apps.",
          },
          {
            title: "Android & iOS App Development",
            category: "Mobile Development",
            duration: "4 Months",
            level: "Intermediate",
            description:
              "Learn Kotlin, Swift, and React Native with Firebase backend integration.",
          },
          {
            title: "UI/UX Design Masterclass",
            category: "Design",
            duration: "2 Months",
            level: "Beginner Friendly",
            description:
              "Master Figma, XD and user research to create beautiful user experiences.",
          },
          {
            title: "Data Science & Machine Learning",
            category: "Data Science",
            duration: "5 Months",
            level: "Advanced",
            description:
              "Learn Python, Pandas, ML algorithms and real-world data modelling.",
          },
          {
            title: "AWS Cloud Practitioner",
            category: "Cloud & DevOps",
            duration: "3 Months",
            level: "Intermediate",
            description:
              "Master EC2, S3, Lambda, IAM and deploy scalable cloud apps.",
          },
          {
            title: "Digital Marketing Certification",
            category: "Marketing",
            duration: "2 Months",
            level: "Beginner Friendly",
            description:
              "Learn SEO, Google Ads, Social Media Marketing and business growth.",
          },
        ].map((course, index) => (
          <div key={index} style={{ ...cardShadow, width: "350px", display: "flex", flexDirection: "column" }}>
            <img
              src={courseImages[index]}
              alt=""
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            <div style={{ padding: "25px", flexGrow: 1 }}>
              <p
                style={{
                  background: "#ff4500",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "600",
                  padding: "6px 15px",
                  borderRadius: "20px",
                  display: "inline-block",
                }}
              >
                {course.category}
              </p>

              <h3 style={{ fontSize: "20px", fontWeight: "600", margin: "12px 0" }}>
                {course.title}
              </h3>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.6" }}>
                {course.description}
              </p>

              <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 0" }}>
                <span style={{ color: "#555" }}>⏱ {course.duration}</span>

                <span style={{ color: "#555", display: "flex", gap: "5px" }}>
                  {levelIcon} {course.level}
                </span>
              </div>
            </div>

            <button
              style={{
                width: "100%",
                background: "#ff4500",
                color: "#fff",
                padding: "12px 0",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    );
  })()}
</section>

      {/* -------- TESTIMONIAL SECTION -------- */}
      <section className="reveal-section" style={{ padding: "60px 20px", background: "#f8fafc" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "8px",
          }}
        >
          What Our Interns Say
        </h2>

        <p style={{ textAlign: "center", fontSize: "18px", color: "#555", marginBottom: "50px" }}>
          Hear from past participants about their internship experience
        </p>

        <div style={{ width: "100%", overflow: "hidden" }}>
          <div id="testimonialSlider" style={{ display: "flex", transition: "0.6s ease" }}>
            {[
              {
                img: "https://i.imgur.com/0y8Ftya.png",
                name: "Rahul Patil",
                role: "Web Development Intern, 2023",
                current: "Now Web Developer at TechSolutions",
                stars: 5,
                text: "The web development internship at Infoyashonand gave me the practical skills I needed to land my first job.",
              },
              {
                img: "https://i.imgur.com/0y8Ftya.png",
                name: "Priya Sharma",
                role: "Mobile App Intern, 2022",
                current: "Now Mobile Developer at AppWorks",
                stars: 5,
                text: "This internship bridged the gap between academic knowledge and real-world application.",
              },
              {
                img: "https://i.imgur.com/0y8Ftya.png",
                name: "Amit Deshmukh",
                role: "UI/UX Intern, 2023",
                current: "Now UI Designer at DesignStudio",
                stars: 4,
                text: "The UI/UX design internship exceeded my expectations.",
              },
            ].map((t, i) => (
              <div key={i} style={{ minWidth: "100%", padding: "30px", boxSizing: "border-box" }}>
                <div
                  style={{
                    width: "360px",
                    margin: "0 auto",
                    background: "#fff",
                    borderRadius: "18px",
                    padding: "30px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  }}
                >
                  <div style={{ marginBottom: "15px", textAlign: "center" }}>
                    <span style={{ fontSize: "26px", color: "#ff7f50" }}>❝❞</span>
                    <br />
                    <span style={{ color: "#ffb400", fontSize: "22px" }}>
                      {"★".repeat(t.stars)}
                      {"☆".repeat(5 - t.stars)}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "16px",
                      color: "#444",
                      lineHeight: "1.7",
                      marginBottom: "25px",
                      textAlign: "center",
                    }}
                  >
                    {t.text}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: "15px", justifyContent: "center" }}>
                    <img
                      src={t.img}
                      alt={t.name}
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid #ffd9b3",
                      }}
                    />

                    <div>
                      <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "700" }}>{t.name}</h4>
                      <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>{t.role}</p>
                      <p style={{ margin: 0, fontSize: "14px", fontWeight: "600" }}>{t.current}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
