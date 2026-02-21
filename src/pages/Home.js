import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "react-modal"; 
import aboutImage from "../assets/images/aboutteam.jpg";
import service from "../assets/images/services-1.jpg";
import service1 from "../assets/images/services-2.jpg";
import service2 from "../assets/images/working-1.jpg";
import client1 from "../assets/images/clients/client-1.png";
import client2 from "../assets/images/clients/client-2.png";
import client3 from "../assets/images/clients/client-3.png";
import client4 from "../assets/images/clients/client-6.png";
import client5 from "../assets/images/clients/client-7.png";
import client6 from "../assets/images/clients/client-8.png";
import client7 from "../assets/images/clients/client-9.png";
import client8 from "../assets/images/clients/client-10.png";
import client9 from "../assets/images/clients/client11.png";
import gallery01 from "../assets/images/Gallery/01.jpg";
import gallery02 from "../assets/images/aboutteam.jpg";
import gallery03 from "../assets/images/photo_2025-10-10_10-13-08.jpg";
import gallery04 from "../assets/images/Gallery/02.jpg";
import gallery05 from "../assets/images/Gallery/055.jpeg";
import gallery06 from "../assets/images/photo_2025-10-10_10-12-52.jpg";
import gallery07 from "../assets/images/Gallery/07.jpeg";
import gallery08 from "../assets/images/Gallery/08.JPG";
import gallery09 from "../assets/images/photo_2025-10-10_10-13-03.jpg";
import gallery10 from "../assets/images/Gallery/10.JPG";
import gallery11 from "../assets/images/Gallery/11.JPG";
import gallery12 from "../assets/images/Gallery/12.JPG";
import eSalary from "../assets/images/portfolio/E-salary2.png";
import patTantra from "../assets/images/portfolio/bank.png";
import eCare360 from "../assets/images/portfolio/hospital.png";
import scrollerApp from "../assets/images/portfolio/scrol.png";
import dhaara from "../assets/images/portfolio/Dhaara2.png";
import expertGuruji from "../assets/images/portfolio/ExpertGuruji2.png";
import constructIQ from "../assets/images/portfolio/ConstructIQ2.png";
import digitalSchool from "../assets/images/portfolio/DigitalSchool2.png";
import kamDhanda from "../assets/images/portfolio/KamDhanda2.png";
import expertSkill from "../assets/images/portfolio/ExpertSkill2.png";
import marketingPro from "../assets/images/portfolio/ma1.png";
import matrimonialApp from "../assets/images/portfolio/ma.jpg";
// ---- Import Images ----
import shriramImg from "../assets/images/ceo1.jpg";
import netraImg from "../assets/images/ceo-madam.jpg";
import akshayImg from "../assets/images/cto.jpg";
import surajImg from "../assets/images/suraj1.jpg";


import tusharImg from "../assets/images/tushar22.jpg";
import kshitijaImg from "../assets/images/HR1.PNG";
import pratikImg from "../assets/images/Ram11.jpg";

import shubhamImg from "../assets/images/Rehan11.jpg";
import RamImg from "../assets/images/Ram2.jpg";

import samImg from "../assets/images/Samrudhi.jpg";
import sammImg from "../assets/images/samm2.jpg";
import assimImg from "../assets/images/assim.jpg";
import adityaImg from "../assets/images/aditya.jpg";
import tejasImg from "../assets/images/tejas1.jpg";
import abhiImg from "../assets/images/abhi1.jpg";
import vijayImg from "../assets/images/Vijay.jpg";

import shrutiImg from "../assets/images/shruti1.jpg";
import sakshiImg from "../assets/images/sakshi.jpg";
import janviImg from "../assets/images/janvi.jpg";
import umairImg from "../assets/images/umair.jpg";
import azimImg from "../assets/images/azim1.jpg";
import sibanImg from "../assets/images/siban.jpg";
import imImg from "../assets/images/imtihaj.jpg";



import shreyasImg from "../assets/images/shreyas.jpg";

import mayuriImg from "../assets/images/mayuri1.jpg";
import SamrudhiiImg from "../assets/images/sam3.jpg";
import palashImg from "../assets/images/palash.jpg";
import vaibhaviImg from "../assets/images/vaibhavi.jpg";


import sohamImg from "../assets/images/soham1.jpg";
import pranavImg from "../assets/images/pranav.jpg";
import iosImg from "../assets/images/ios2.jpg";
import mrunalImg from "../assets/images/mrunal.jpg";
import vishvajitImg from "../assets/images/vishvajit1.jpg";
import mansaviImg from "../assets/images/mansavi1.jpg";
import abhijitImg from "../assets/images/abhijit1.jpg";


import prathmeshImg from "../assets/images/prathmesh.jpg";
import prachiImg from "../assets/images/prachi11.jpg";
import ishaImg from "../assets/images/isha1.jpg";





import CountUp from "react-countup";
import { FaSmile, FaFileAlt, FaGraduationCap, FaChartLine, FaAndroid, FaSearch, FaWhatsapp, FaPhone, FaSms, FaArrowUp } from "react-icons/fa";
import { FiTrendingUp, FiMonitor, FiSmartphone, FiUsers } from "react-icons/fi";
import { ref, push } from "firebase/database";
import { database } from "../firebase"; 

// Set the app element for react-modal (accessibility)
Modal.setAppElement('#root');

export default function Home() {



  
  // 🔥 Add states here (Correct place)
 // Contact Form State
const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: ""
});


// If you need only the setter:
const [, setStatus] = useState("");

// Handle Input Change
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

// Submit Form to Firebase
const handleSubmit = (e) => {
  e.preventDefault();

  const contactRef = ref(database, "contacts");

  push(contactRef, formData)
    .then(() => {
      setStatus("Message sent successfully!");

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      setTimeout(() => setStatus(""), 3000);
    })
    .catch((error) => {
      setStatus("Error: " + error.message);
    });
};

  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  
  // Scroll animation states
  const [showScroll, setShowScroll] = useState(false);
  const sectionsRef = useRef([]);


  
  const clientWebsites = [
    "https://www.preetamseniorcitizenanandshala.com/",
    "https://veerbhadramultistate.com/",
    "https://gurukulbhose.com/",
    "https://shivamcreation.in/",
    "https://vardhamanfinserv.com/",
    "https://www.valiantaircom.in/",
    "https://apexfinancialservices.in/",
     "https://udaanjobs.com/",
    "https://www.zaubacorp.com/",
  ];

  
  const galleryImages = [
    { frontImg: gallery01, backImg: gallery02 },
    { frontImg: gallery03, backImg: gallery04 },
    { frontImg: gallery05, backImg: gallery06 },
    { frontImg: gallery07, backImg: gallery08 },
    { frontImg: gallery09, backImg: gallery10 },
    { frontImg: gallery11, backImg: gallery12 },
  ];

const portfolioData = [
  {
    name: "E-Salary",
    category: "Business",
    description: "E-salary is a comprehensive app designed for payroll and employee management",
    img: eSalary,
    detailsLink: "/Portfolio/e-salary",
  },
  {
    name: "PatTantra",
    category: "Finance",
    description: "PatTantra App is an intelligent business and financial management solution designed to give organizations xom",
    img: patTantra,
    detailsLink: "/Portfolio/pattantra",
  },
  {
    name: "E-Care360",
    category: "Healthcare",
    description: "Complete healthcare and patient management platform",
    img: eCare360,
    detailsLink: "/Portfolio/ecare360",
  },
  {
    name: "Scroller App",
    category: "Education",
    description: "Interactive learning and digital education app",
    img: scrollerApp,
    detailsLink: "/Portfolio/scroller",
  },
  {
    name: "Dhaara",
    category: "Business",
    description: "Business operations and workflow management system",
    img: dhaara,
    detailsLink: "/Portfolio/dhaara",
  },
  {
    name: "Expert Guruji",
    category: "Education",
    description: "Online mentorship and expert guidance platform",
    img: expertGuruji,
    detailsLink: "/Portfolio/expert-guruji",
  },
  {
    name: "ConstructIQ",
    category: "Business",
    description: "Construction project and resource management software",
    img: constructIQ,
    detailsLink: "/Portfolio/constructiq",
  },
  {
    name: "Digital School Cloud",
    category: "Education",
    description: "Cloud-based school ERP and academic management system",
    img: digitalSchool,
    detailsLink: "/Portfolio/digital-school",
  },
  {
    name: "KamDhanda",
    category: "Business",
    description: "Small business and local vendor management app",
    img: kamDhanda,
    detailsLink: "/Portfolio/kamdhanda",
  },
  {
    name: "Expert Skill",
    category: "Business",
    description: "Professional skill development and training platform",
    img: expertSkill,
    detailsLink: "/Portfolio/expert-skill",
  },
  {
    name: "Marketing Pro",
    category: "Business",
    description: "Digital marketing and lead management solution",
    img: marketingPro,
    detailsLink: "/Portfolio/marketing-pro",
  },
  {
    name: "Matrimonial App",
    category: "Business",
    description: "Smart matchmaking and matrimonial management app",
    img: matrimonialApp,
    detailsLink: "/Portfolio/matrimonial",
  },
];


  // Filter projects by category
  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((project) => project.category === selectedCategory);

  // Open modal for selected project
  const openModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll button
      setShowScroll(window.scrollY > 300);

      // Animate sections on scroll
      sectionsRef.current.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.75;
          if (isVisible) {
            section.classList.add("animate-visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leadership = [
    {
      name: "Shriram Khabale",
      role: "Founder(CEO)",
      img: shriramImg,
      facePosition: "center 20%",
    },
    {
      name: "Netra Khabale",
      role: "Director",
      img: netraImg,
      facePosition: "center 15%",
    },
    {
      name: "Akshay Phulare",
      role: "Cheif Technology Officer",
      img: akshayImg,
      facePosition: "center 20%",
    },
    {
      name: "Suraj Jadhav",
      role: "Business Development ",
      img: surajImg,
      facePosition: "center 25%",
    },
  ];

  const teamData = [
  {
    dept: "Human Resource",
    members: [
      { name: "Kshitija Patil", role: "Human Resource", img: kshitijaImg },
      
    ],
  },
  {
    dept:"Head of Department",
     members: [
             { name: "Ramehwar Shinde", role: "Head of Department", img: RamImg },
        
      ],
  },

  {
    dept: "Web Development",
    members: [
      { name: "Tushar Pawar", role: "Web Developer", img: tusharImg },
      { name: "Rehan ", role: "Web Developer", img: shubhamImg },
      { name: "Rameshwar Chate", role: "Web Developer", img: pratikImg },
      

         { name: "Palash Borgave ", role: "Web Developer", img: palashImg },
          { name: "Aditya Patil  ", role: "Web Developer", img: adityaImg},

           { name: "Soham Suryawanshi", role: "Web Developer", img: sohamImg },
            { name: "Umair  Borkar ", role: "Web Developer", img: umairImg },
            { name: "Prachi More ", role: "Web Developer", img: prachiImg },


 { name: "Isha Gaikwad", role: "Web Developer", img: ishaImg },
           


      { name: "Manaswi Patil", role: "Web Developer", img: mansaviImg},
       { name: "Vaibhavi Jadhav", role: "Web Developer", img: vaibhaviImg },
       { name: "Samruddhi Patil", role: "Web Developer", img: SamrudhiiImg },
      { name: "Siban  Hipparage ", role: "Web Developer", img: sibanImg },

       { name: "Imtihaj Panhalkar", role: "Web Developer", img: imImg },
         { name: "Vijay Jadhav", role: "Web Developer", img: vijayImg },
         

         



    ],
  },

  {
    dept: "IOS Developer",
    members: [
      { name: "Nikhil Bhasme", role: "IOS Developer", img: iosImg },
      { name: "Pranav Magdum", role: "IOS Developer", img: pranavImg },
      { name: "Mrunal  Phuke", role: "IOS Developer", img: mrunalImg },
    
      
      

    ],
  },

  {
    dept: "Android Development",
    members: [
      { name: "Samruddhi  Patil ", role: "Android Developer", img: samImg },
       { name: "Sapana  Koli", role: "Android Developer", img: sammImg },
        { name: "Asim  Bagwan ", role: "Android Developer", img: assimImg },
         { name: "Tejas Karekar", role: "Android Developer", img: tejasImg },
          { name: "Abhinav Yadav", role: "Android Developer", img: abhiImg },
           { name: "Shruti  Khot ", role: "Android Developer", img: shrutiImg },
            { name: "Sakshi Bade", role: "Android Developer", img: sakshiImg },
             { name: "Janhvi  Patil ", role: "Android Developer", img: janviImg },
              { name: "Azim Khan ", role: "Android Developer", img: azimImg },
               { name: " Vishvajit  Khavare ", role: "Android Developer", img: vishvajitImg },
                 { name: "  Abhijeet Khaire  ", role: "Android Developer", img: abhijitImg },
                   { name: "Shreyas Chudmunge  ", role: "Android Developer", img: shreyasImg },
                
                
                       { name: " Mayuri Patil", role: "Android Developer", img: mayuriImg },
                        { name: "Prathmesh Nalawade ", role: "Android Developer", img: prathmeshImg },
    ],
  },
];

  return (
    <div>
      <style>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          body {
            overflow-x: hidden;
          }
          
          /* Adjust padding for mobile */
          section {
            padding: 40px 15px !important;
          }
          
          /* Make images responsive */
          img {
            max-width: 100%;
            height: auto;
          }
          
          /* Adjust font sizes for mobile */
          h1 {
            font-size: 28px !important;
          }
          
          h2 {
            font-size: 24px !important;
          }
          
          h3 {
            font-size: 20px !important;
          }
          
          /* Make grids single column on mobile */
          [style*="display: grid"] {
            grid-template-columns: 1fr !important;
          }
          
          /* Adjust flex layouts */
          [style*="display: flex"] {
            flex-wrap: wrap !important;
          }
          
          /* Make buttons full width on mobile */
          button, a[style*="padding"] {
            width: 100%;
            max-width: 300px;
            margin: 10px auto;
          }
        }
      `}</style>

      {/* HERO Section */}
      <section id="home" style={{ paddingTop: "10px" }}>
        {/* HERO Content */}
      </section>

      {/* About Section */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="scroll-animate"
        id="about"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          padding: window.innerWidth <= 768 ? "20px 15px" : "40px 20px", // Reduced padding on mobile
          background: "#fff",
          gap: window.innerWidth <= 768 ? "20px" : "40px", // Reduced gap on mobile
        }}
      >
        {/* Left Side - Image */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <img
            src={aboutImage}
            alt="IT Services"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* Right Side - Text */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2 style={{ fontWeight: "700", fontSize: "30px", color:"black", fontStyle: "times new roman" }}>
            <b>
              Welcome To Infoyashonand Technology <br />
              Pvt. Ltd.
            </b>
          </h2>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.6",
              marginTop: "10px",
              color:"black",
              textAlign: "justify",
            }}
          >
            Infoyashonand Technology Pvt. Ltd. is a trusted software development and IT services company<br></br> in Sangli, Maharashtra. We offer custom software development, web & mobile app development,<br></br> cloud computing solutions, managed IT services, IT infrastructure support, and enterprise IT solutions. Our expert team also provides technical support services and IT staffing solutions for startups, <br></br>SMEs, and large enterprises. We focus on delivering secure, scalable, and high-performance <br></br>IT solutions that help businesses grow digitally. 🚀 Contact us today!
          </p>

          <h4 style={{ marginTop: "20px", color:"black", fontWeight: "600" }}>
            Our Core Values:
          </h4>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px 30px",
              marginTop: "15px",
              color:"black",
            }}
          >
            {[
              "Accessibility",
              "Clear Accountability",
              "Cost Effective Solutions",
              "Prompt Service",
              "Reliability",
              "Excellent Support",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                <span
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    backgroundColor: "darkorange",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Cards Section */}
      <div
  style={{
    background: "#f2f2f2",
    padding: "40px 20px",
    marginTop: "20px",
    borderRadius: "10px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
    }}
  >
    {[
      { number: 3019, label: "Happy Clients", icon: <FaSmile size={38} color="darkorange" /> },
      { number: 300, label: "Approved Projects", icon: <FaFileAlt size={38} color="darkorange" /> },
      { number: 50, label: "Certified Professionals", icon: <FaGraduationCap size={44} color="darkorange" /> },
      { number: 20, label: "Ongoing Projects", icon: <FaChartLine size={38} color="darkorange" /> },
    ].map((stat, index) => (
      <div
        key={index}
        style={{
       background: "linear-gradient(135deg, #e6e1f6ff, #40caf4ff)",
          padding: "25px 20px",
          borderRadius: "10px",
          textAlign: "center",
          color:"white",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ marginBottom: "12px" }}>{stat.icon}</div>

        <h2 style={{ margin: 0, color: "white", fontSize: "32px" }}>
          <CountUp
            start={0}
            end={stat.number}
            duration={2.5}
            separator=","
          />
        </h2>

        <p style={{ marginTop: "10px", fontWeight: "600", fontSize: "16px" }}>
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</div>
      {/* Services Section */}
       <section 
              ref={(el) => (sectionsRef.current[1] = el)}
              className="scroll-animate"
              id="services" 
              style={{ padding: "70px 20px", background: "#fff" }}>
              <div style={{ marginLeft: "20px", marginBottom: "40px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: "600", color: "gray", margin: 0 }}>
                  SERVICES
                </h3>
      
                <div
                  style={{
                    width: "85px",
                    height: "4px",
                    background: "darkorange",
                    marginTop: "4px",
                  }}
                ></div>
      
                <h2
                  style={{
                    fontSize: "36px",
                    fontWeight: "800",
                    marginTop: "15px",
                    marginBottom: "50px",
                    color: "black",
                  }}
                >
                  FEATURED SERVICES
                </h2>
              </div>
      
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                  gap: "25px",
                  justifyItems: "center",
                }}
              >
                {[ 
                  { img: service, icon: <FiTrendingUp />, title: "Digital Marketing", text: "Promotes products through digital channels like social media and search engines to enhance brand visibility and drive sales." },
                  { img: service1, icon: <FiMonitor />, title: "Web Development", text: "Builds and maintains websites, scalability, emphasizing design, functionality, and user interaction." },
                  { img: service2, icon: <FiSmartphone />, title: "Android Development", text: "Involves creating mobile apps for Android devices, focusing on user experience and functionality." },
                ].map((card, index) => (
                  <div key={index} style={{ width: "100%", maxWidth: "420px" }}>
                    <div
                      style={{ position: "relative", cursor: "pointer" }}
                      onMouseEnter={(e) => {
                        const img = e.currentTarget.querySelector("img");
                        const title = e.currentTarget.parentNode.querySelector(".title");
                        const iconBox = e.currentTarget.parentNode.querySelector(".icon");
      
                        img.style.transform = "scale(1.08)";
                        title.style.color = "darkorange";
      
                        iconBox.style.background = "white";
                        iconBox.style.color = "darkorange";
                        iconBox.style.borderColor = "darkorange";
                      }}
                      onMouseLeave={(e) => {
                        const img = e.currentTarget.querySelector("img");
                        const title = e.currentTarget.parentNode.querySelector(".title");
                        const iconBox = e.currentTarget.parentNode.querySelector(".icon");
      
                        img.style.transform = "scale(1)";
                        title.style.color = "black";
      
                        iconBox.style.background = "darkorange";
                        iconBox.style.color = "white";
                        iconBox.style.borderColor = "darkorange";
                      }}
                    >
                      <img
                        src={card.img}
                        alt={card.title}
                        style={{
                          width: "100%",
                          height: "270px",
                          objectFit: "cover",
                          borderRadius: "16px",
                          transition: "transform 0.4s ease",
                        }}
                      />
                    </div>
      
                    <div
                      style={{
                        width: "85%",
                        background: "#fff",
                        padding: "20px",
                        margin: "0 auto",
                        marginTop: "-40px",
                        borderRadius: "16px",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                        textAlign: "center",
                        position: "relative",
                        height: "260px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="icon"
                        style={{
                          width: "75px",
                          height: "75px",
                          borderRadius: "50%",
                          border: "3px solid darkorange",
                          background: "darkorange",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "36px",
                          color: "white",
                          position: "absolute",
                          top: "-38px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          transition: "0.4s ease",
                        }}
                      >
                        {card.icon}
                      </div>
      
                      <h3
                        className="title"
                        style={{
                          marginTop: "45px",
                          fontWeight: "700",
                          fontSize: "21px",
                          transition: "0.4s ease",
                        }}
                      >
                        {card.title}
                      </h3>
      
                      <p
                        style={{
                          color: "#444",
                          marginTop: "10px",
                          lineHeight: "1.6",
                          padding: "0 10px",
                        }}
                      >
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

      {/* Clients Section */}
      <section
  ref={(el) => (sectionsRef.current[2] = el)}
  className="scroll-animate"
  style={{
    padding: "70px 20px",
    background: "linear-gradient(135deg, #fff, #9fa2f8ff)",
    marginTop: "40px",
    overflow: "hidden",
  }}
>
  <h2
    style={{
      fontSize: "52px",
      fontWeight: "700",
      color: "black",
      marginBottom: "40px",
      textAlign: "center",

    }}
  >
    OUR VALUABLE CLIENTS
  </h2>

  {/* Marquee Wrapper */}
  <div
    style={{
      position: "relative",
      width: "100%",
      overflow: "hidden",
    }}
  >
    {/* Fade Edges */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "80px",
        height: "100%",
        background: "linear-gradient(to right, #fff, transparent)",
        zIndex: 2,
      }}
    />
    <div
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        width: "80px",
        height: "100%",
        background: "linear-gradient(to left, #9fa2f8ff, transparent)",
        zIndex: 2,
      }}
    />

    {/* Scrolling Track */}
    <div
      style={{
        display: "flex",
        width: "max-content",
        animation: "marqueeScroll 30s linear infinite",
        gap: "40px",
      }}
    >
      {[...Array(2)].flatMap(() =>
        [client1, client2, client3, client4, client5, client6, client7, client8, client9]
      ).map((logo, index) => (
        <div
          key={index}
          onClick={() =>
            window.open(clientWebsites[index % clientWebsites.length], "_blank")
          }
          style={{
            minWidth: "200px",
            height: "140px",
            background: "#f5f8faff",
            borderRadius: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            cursor: "pointer",
          }}
        >
          {/* Logo Container */}
          <div
            style={{
              width: "120px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Animation */}
  <style>
    {`
      @keyframes marqueeScroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      @media (max-width: 768px) {
        div[style*="marqueeScroll"] {
          animation-duration: 45s;
        }
      }
    `}
  </style>
</section>

 {/* Extended Services Section */}
<section
  id="services"
  style={{
    padding: "70px 20px",
    background: "#fff",
    marginTop: "40px",
  }}
>
  <div style={{ marginLeft: "20px", marginBottom: "40px" }}>
    <h3 style={{ fontSize: "20px", fontWeight: "600", color: "gray", margin: 0 }}>
      SERVICES
    </h3>

    <div
      style={{
        width: "80px",
        height: "4px",
        background: "darkorange",
        marginTop: "4px",
      }}
    ></div>

    <h2
      style={{
        fontSize: "36px",
        fontWeight: "800",
        marginTop: "15px",
        marginBottom: "50px",
        color: "black",
      }}
    >
      CHECK OUR SERVICES
    </h2>
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "25px",
    }}
  >
    {[
      {
        title: "Software Development",
        text: "We provide secure, scalable, and custom software development solutions for startups, SMEs, and enterprises to improve business operations and digital growth.",
        icon: <FiMonitor size={36} color="darkorange" />,
      },
      {
        title: "Web Development",
        text: "Our web development services deliver fast, responsive, and SEO-friendly websites and web applications that enhance user experience and increase online conversions.",
        icon: <FiSmartphone size={36} color="darkorange" />,
      },
      {
        title: "Android Development",
        text: "We build high-performance Android mobile applications with modern UI, strong security, and scalable architecture for long-term business success.",
        icon: <FaAndroid size={36} color="darkorange" />,
      },
      {
        title: "Digital Marketing",
        text: "Our digital marketing strategies boost online visibility, website traffic, and lead generation through SEO, social media marketing, and paid advertising campaigns.",
        icon: <FiTrendingUp size={36} color="darkorange" />,
      },
      {
        title: "SEO (Search Engine Optimization)",
        text: "Our professional SEO services improve your website ranking on Google, increase organic traffic, and generate high-quality leads with proven white-hat strategies.",
        icon: <FaSearch size={36} color="darkorange" />,
      },
      {
        title: "Training and Job Consultant",
        text: "We offer industry-focused IT training, resume building, interview preparation, and placement support to help students and professionals build successful careers.",
        icon: <FaGraduationCap size={36} color="darkorange" />,
      },
      {
        title: "Official WhatsApp API",
        text: "Official WhatsApp Business API helps automate customer support, send bulk notifications, and improve customer engagement through secure business messaging.",
        icon: <FaWhatsapp size={36} color="darkorange" />,
      },
      {
        title: "Voice Call Services",
        text: "Our VoIP-based voice call services offer crystal-clear audio, smart call routing, and cost-effective communication solutions for modern businesses.",
        icon: <FaPhone size={36} color="darkorange" />,
      },
      {
        title: "Bulk SMS API",
        text: "Our Bulk SMS API enables businesses to send promotional and transactional messages instantly with fast delivery, high open rates, and full automation support.",
        icon: <FaSms size={36} color="darkorange" />,
      },
      {
        title: "Lead Generation",
        text: "We provide result-driven lead generation services using SEO, paid ads, landing pages, and marketing automation to deliver high-quality business leads.",
        icon: <FiUsers size={36} color="darkorange" />,
      },
    ].map((serviceItem, index) => (
      <div
        key={index}
        style={{
          background: "#f9f9f9",
          padding: "25px 20px",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
          textAlign: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          border: "2px solid transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 0 20px rgba(255,140,0,0.5)";
          e.currentTarget.style.transform = "translateY(-5px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
        onClick={(e) => {
          const allCards = e.currentTarget.parentNode.children;
          for (let card of allCards)
            card.style.border = "2px solid transparent";
          e.currentTarget.style.border = "2px solid darkorange";
        }}
      >
        <div style={{ marginBottom: "12px" }}>{serviceItem.icon}</div>
        <h3 style={{ fontWeight: "700", color: "black", marginBottom: "12px" }}>
          {serviceItem.title}
        </h3>
        <p style={{ color: "#444", lineHeight: "1.6" }}>
          {serviceItem.text}
        </p>
      </div>
    ))}
  </div>
</section>


{/* Portfolio Section */}
"{/* Portfolio Section */}
 <section 
   ref={(el) => (sectionsRef.current[3] = el)}
   className="scroll-animate"
   id="portfolio" 
   style={{ padding: "80px 20px", background: "#f5f5f5" }}>

  {/* Section Header */}
  <div style={{ maxWidth: "1200px", margin: "0 auto 50px auto", textAlign: "left" }}>
    <h4 style={{ fontSize: "20px", fontWeight: "600", color: "gray", margin: 0 }}>Portfolio</h4>
    <div style={{ width: "85px", height: "4px", background: "darkorange", marginTop: "4px", marginBottom: "15px" }}></div>
    <h2 style={{ fontSize: "36px", fontWeight: "800", color: "black", margin: 0 }}>CHECK OUR PORTFOLIO</h2>
  </div>

  {/* Category Buttons */}
  <div style={{
    display: "flex",
    gap: "20px",
    marginBottom: "40px",
    flexWrap: "wrap",
    justifyContent: "center"
  }}>
    {["All", "Business", "Finance", "Healthcare", "Education"].map((cat, index) => (
      <button
        key={index}
        onClick={() => setSelectedCategory(cat)}
        style={{
          padding: "10px 20px",
          border: `2px solid ${selectedCategory === cat ? "darkorange" : "#ccc"}`,
          background: selectedCategory === cat ? "darkorange" : "white",
          color: selectedCategory === cat ? "white" : "black",
          fontWeight: "600",
          borderRadius: "25px",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
      >
        {cat}
      </button>
    ))}
  </div>

  {/* Portfolio Grid - Modern Card Design */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 15px",
    }}
  >
    {filteredProjects.map((project, index) => (
      <div
        key={index}
        style={{
          cursor: "pointer",
          borderRadius: "16px",
          background: "white",
          overflow: "hidden",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          border: "1px solid #f0f0f0",
        }}
        onClick={() => openModal(project)}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(255,102,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        }}
      >
        {/* Image Container - Fixed Size with Full Image */}
        <div style={{ 
          position: "relative", 
          overflow: "hidden", 
          background: "#f5f5f5",
          height: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px"
        }}>
          <img
            src={project.img}
            alt={project.name}
          style={{
    width: "120%",
    height: "120%",
    objectFit: "cover",   // 🔥 ALL IMAGES SAME SIZE
    display: "block",
  }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;font-size:14px;">Image not available</div>`;
            }}
          />
          
          {/* Category Badge */}
        
        </div>

        {/* Card Content */}
        <div style={{ padding: "18px" }}>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#1a1a1a",
              marginBottom: "8px",
              lineHeight: "1.3",
            }}
          >
            {project.name}
          </h3>

          {/* Divider */}
          <div
            style={{
              width: "35px",
              height: "3px",
              background: "#ff6600",
              borderRadius: "2px",
              marginBottom: "10px",
            }}
          />

          {/* View Details */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ff6600",
              fontSize: "13px",
              fontWeight: "600",
              gap: "6px",
            }}
          >
            <span>View Details</span>
            <span style={{ fontSize: "14px" }}>→</span>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Modal */}
 
<Modal
  isOpen={modalOpen}
  onRequestClose={closeModal}
  appElement={document.getElementById('root')}
  style={{
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "800px",
      width: "90%",
      padding: "20px",
    },
    overlay: { backgroundColor: "rgba(0,0,0,0.7)" },
  }}
>
  {activeProject && (
    <div style={{ textAlign: "center", position: "relative" }}>
      <img
        src={activeProject.img}
        alt={activeProject.name}
        style={{ 
          width: "100%", 
          maxHeight: "400px",
          objectFit: "contain",
          borderRadius: "10px", 
          marginBottom: "20px" 
        }}
      />

      <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "10px" }}>
        {activeProject.name}
      </h2>
      <p style={{ fontSize: "16px", color: "#666", marginBottom: "20px" }}>
        {activeProject.category}
      </p>

      {/* Buttons Container */}
      <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "20px" }}>
        {/* View Details Button */}
        <button
          onClick={() => {
            navigate(activeProject.detailsLink);
            closeModal();
          }}
          style={{
            padding: "12px 30px",
            background: "#ff6600",
            color: "white",
            borderRadius: "25px",
            border: "none",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "600",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#ff8533";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#ff6600";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          View Details
        </button>

        {/* Close Button */}
        <button
          onClick={closeModal}
          style={{
            padding: "12px 30px",
            background: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "600",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#5a6268";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#6c757d";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Close
        </button>
      </div>
    </div>
  )}
</Modal>




    </section>
  

      {/* Team Section */}
<section 
  ref={(el) => (sectionsRef.current[4] = el)}
  className="scroll-animate"
  id="team" 
  style={{ padding: "60px 20px" }}>

  {/* -------------------- HEADING LEFT SIDE (UPDATED) -------------------- */}
<div style={{ marginBottom: "150px", textAlign: "left" }}>
  <h2 style={{ fontSize: "18px", color: "gray", margin: 0 }}>TEAM</h2>
{/* ✔ DARK ORANGE LINE ADDED BACK */}
  <div
    style={{
      width: "60px",
      height: "4px",
      backgroundColor: "darkorange",
      marginTop: "8px",
    }}
  ></div>
  <p style={{ fontSize: "36px", fontWeight: "700", margin: 0 }}>
    CHECK OUR TEAM
  </p>

  
</div>


  {/* -------------------- OUR LEADERSHIP (CENTERED) -------------------- */}
<div style={{ textAlign: "center" }}>
  <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>
    Our Leadership
  </h2>
  <p style={{ color: "gray", fontSize: "18px", marginBottom: "40px" }}>
    Meet the visionary leaders guiding our success.
  </p>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "30px",
    flexWrap: "wrap",
    marginBottom: "80px",
  }}
>
  {leadership.map((leader, i) => (
    <div
      key={i}
      onClick={() => navigate(leader.link)}
      style={{
        width: "260px",
        cursor: "pointer",
        textAlign: "center",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* FIXED IMAGE BOX (ALL SAME SIZE NOW) */}
      <div
        style={{
          width: "100%",
          height: "325px", // 🔥 SAME HEIGHT FOR ALL
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={leader.img}
          alt={leader.name}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",

            // 🔥 THIS MAKES ALL FACES IN SAME ALIGNMENT
            objectPosition: "center top",
          }}
        />
      </div>

      <div
        style={{
          width: "70%",
          margin: "0 auto",
          background: "#fff",
          padding: "12px",
          borderRadius: "12px",
          marginTop: "-20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          position: "relative",
          zIndex: 5,
        }}
      >
        <h3 style={{ margin: 0, fontWeight: "700" }}>{leader.name}</h3>
        <p style={{ margin: "5px 0 0 0", color: "gray", fontSize: "15px" }}>
          {leader.role}
        </p>
      </div>
    </div>
  ))}
</div>

  {/* -------------------- MEET OUR TEAM -------------------- */}
<div style={{ textAlign: "center", marginBottom: "40px" }}>
  <h2 style={{ fontSize: "34px", fontWeight: "700" }}>Meet Our Team</h2>
  <p style={{ color: "gray", fontSize: "18px" }}>
    The talented people who make everything possible.
  </p>
</div>

{/* AUTO SLIDING — FIXED TO SHOW ALL IMAGES */}
<div className="team-slider">
  <div className="team-track">

    {/* ORIGINAL DATA */}
    {teamData.flatMap((d) => d.members).map((m, index) => (
      <div className="team-card" key={index}>
        <div className="img-box">
          <img src={m.img} alt={m.name} />
        </div>

        <div className="info-box">
          <h4>{m.name}</h4>
          <p>{m.role}</p>
        </div>
      </div>
    ))}

    {/* DUPLICATE DATA FOR INFINITE LOOP */}
    {teamData.flatMap((d) => d.members).map((m, index) => (
      <div className="team-card" key={`dup-${index}`}>
        <div className="img-box">
          <img src={m.img} alt={m.name} />
        </div>

        <div className="info-box">
          <h4>{m.name}</h4>
          <p>{m.role}</p>
        </div>
      </div>
    ))}

  </div>
</div>

</section>

<style>
{`
.team-slider {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.team-track {
  display: flex;
  gap: 40px;
  width: max-content;
 animation: slideFull 60s linear infinite;

}

.team-card {
  min-width: 300px;
  text-align: center;
  position: relative;
  transition: transform 0.4s;
}

.team-card:hover {
  transform: translateY(-10px);
}

.img-box {
  height: 360px;
  width: 100%;
  overflow: hidden;
  border-radius: 14px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.15);
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.info-box {
  width: 70%;
  background: white;
  padding: 8px 10px;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.12);
  margin: 0 auto;
  margin-top: -35px;
  position: relative;
  z-index: 10;
}

.info-box h4 {
  font-size: 16px;
  margin: 5px 0;
  font-weight: 600;
}

.info-box p {
  font-size: 13px;
  color: #666;
  margin: 3px 0;
}

/* NEW PERFECT INFINITE SLIDE */
@keyframes slideFull {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`}
</style>

{/* Gallery Section */}
<section
  id="gallery"
  style={{
    padding: "80px 20px",
    background: "#f5f5f5",
    overflow: "hidden",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto 50px auto",
      textAlign: "left",
    }}
  >
    <h4
      style={{
        fontSize: "20px",
        fontWeight: "600",
        color: "gray",
        margin: 0,
      }}
    >
      GALLERY
    </h4>

    <div
      style={{
        width: "85px",
        height: "4px",
        background: "darkorange",
        marginTop: "4px",
        marginBottom: "15px",
      }}
    ></div>

    <h2
      style={{
        fontSize: "36px",
        fontWeight: "800",
        color: "black",
        margin: 0,
      }}
    >
      EXPLORE OUR GALLERY
    </h2>
  </div>

  {/* Marquee Wrapper */}
  <div style={{ position: "relative", overflow: "hidden" }}>
    {/* Fade Edges */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "80px",
        height: "100%",
        background: "linear-gradient(to right, #f5f5f5, transparent)",
        zIndex: 2,
      }}
    />
    <div
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        width: "80px",
        height: "100%",
        background: "linear-gradient(to left, #f5f5f5, transparent)",
        zIndex: 2,
      }}
    />

    {/* ROW 1 – Right to Left */}
    <div
      style={{
        display: "flex",
        gap: "40px",
        width: "max-content",
        animation: "galleryLeft 40s linear infinite",
        marginBottom: "40px",
      }}
    >
      {[...Array(2)].flatMap(() => galleryImages).map((item, index) => (
        <div
          key={`row1-${index}`}
          style={{
            width: "320px",
            height: "220px",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
            background: "#fff",
          }}
        >
          <img
            src={item.frontImg}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </div>

    {/* ROW 2 – Left to Right */}
    <div
      style={{
        display: "flex",
        gap: "40px",
        width: "max-content",
        animation: "galleryRight 40s linear infinite",
      }}
    >
      {[...Array(2)].flatMap(() => galleryImages).map((item, index) => (
        <div
          key={`row2-${index}`}
          style={{
            width: "320px",
            height: "220px",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
            background: "#fff",
          }}
        >
          <img
            src={item.backImg}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </div>
  </div>

  {/* Animations */}
  <style>
    {`
      @keyframes galleryLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      @keyframes galleryRight {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }

      @media (max-width: 768px) {
        div[style*="galleryLeft"],
        div[style*="galleryRight"] {
          animation-duration: 60s;
        }
      }
    `}
  </style>
</section>

  {/* Contact Section */} 
<section 
  ref={(el) => (sectionsRef.current[5] = el)}
  className="scroll-animate"
  id="contact" 
  style={{ padding: "80px 20px", background: "#fff" }}>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

    {/* Contact Heading */}
    <div style={{ marginBottom: "40px" }}>
      <h4 style={{ fontSize: "20px", fontWeight: "600", color: "gray", margin: 0 }}>
        CONTACT
      </h4>

      <div
        style={{
          width: "90px",
          height: "3px",
          background: "darkorange",
          marginBottom: "15px",
        }}
      />

      <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#1a1a1a" }}>
        LET'S CONNECT NOW
      </h2>
    </div>

    {/* Main Grid */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "30px",
        alignItems: "start",
      }}
    >
      {/* LEFT SIDE (Address + Call + Email) */}
      <div>
        {/* Address Card */}
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "2px dashed darkorange",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto 15px",
              color: "darkorange",
            }}
          >
            {/* Address Icon (SVG) */}
            <svg width="32" height="32" fill="darkorange" viewBox="0 0 24 24">
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
            </svg>
          </div>

          <h3 style={{ marginBottom: "8px" }}>Address</h3>
          <p style={{ lineHeight: "1.6", color: "#444" }}>
            1st Floor, Pearl Enclave, M.S.E.B. Road, Vishrambag, Sangli,
            Maharashtra 416416
          </p>
        </div>

        {/* Call + Email Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {/* Call Card */}
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border: "2px dashed darkorange",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto 15px",
                color: "darkorange",
              }}
            >
              {/* Phone icon */}
              <svg width="28" height="28" fill="darkorange" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.2 2.3 3.1 4.2 5.4 5.4l1.8-1.8c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3 .5.7 0 1.3.6 1.3 1.3V20c0 .7-.6 1.3-1.3 1.3C9.4 21.3 2.7 14.6 2.7 6.3 2.7 5.6 3.3 5 4 5h3.1c.7 0 1.3.6 1.3 1.3 0 1 .2 2 .5 3 .1.4 0 .9-.3 1.2l-1.8 1.3z"/>
              </svg>
            </div>
            <h3 style={{ marginBottom: "8px" }}>Call Us</h3>
            <p style={{ color: "#444" }}>
              +91 8055514368 <br /> 8600876577
            </p>
          </div>

          {/* Email Card */}
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border: "2px dashed darkorange",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto 15px",
                color: "darkorange",
              }}
            >
              {/* Email Icon */}
              <svg width="28" height="28" fill="darkorange" viewBox="0 0 24 24">
                <path d="M12 13.5 2 6.75V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.75L12 13.5zM12 11 22 4H2l10 7z"/>
              </svg>
            </div>
            <h3 style={{ marginBottom: "8px" }}>Email Us</h3>
            <p style={{ color: "#444" }}>support@infoyashonand.com</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - CONTACT FORM */}
      {/* RIGHT SIDE - CONTACT FORM */}
 <div
            style={{
              background: "#fff",
              padding: "40px",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            {/* Name + Email */}
            <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                style={{
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  width: "100%",
                }}
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                style={{
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  width: "100%",
                }}
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              style={{
                  
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "100%",
                marginBottom: "15px",
              }}
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="6"
              style={{
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "100%",
              }}
            ></textarea>

            {/* Button */}
            <button
              onClick={handleSubmit}
              style={{
                marginTop: "25px",
                background: "darkorange",
                color: "white",
                padding: "12px 30px",
                borderRadius: "25px",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>


      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            backgroundColor: "#ff6600",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "20px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaArrowUp />
        </button>
      )}

      {/* ===================== END CONTACT SECTION ===================== */}
    </div>
  );
} 