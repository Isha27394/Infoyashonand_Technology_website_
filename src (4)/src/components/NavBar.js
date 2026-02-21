import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/favicon.png";

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll Spy - Auto-update active menu based on scroll position
  useEffect(() => {
   if (!document.getElementById("home")) return;
 // Only on home page

    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "portfolio",
        "team",
        "gallery",
        "contact",
      ];

      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActive(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const menuItems = [
    "home",
    "about",
    "services",
    "portfolio",
    "team",
    "gallery",
    "contact",
    "career",
    "blog",
  ];

  const handleMenuClick = (menu) => {
    setActive(menu);
    setMobileMenuOpen(false);

    if (menu === "blog") {
      navigate("/blog");
      return;
    }

    if (menu === "career") {
      navigate("/career");
      return;
    }

    if (location.pathname === "/") {
      const element = document.getElementById(menu);
      if (element) {
        const yOffset = -70;
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(menu);
        if (element) {
          const yOffset = -70;
          const y =
            element.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  };

  const navStyle = {
  width: "100%",
  padding: "12px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  height: "80px",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  background: "rgba(0, 0, 0, 0.55)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255,255,255,0.15)",
  zIndex: 99999,
  boxSizing: "border-box",
  overflow: "visible",
};






  const logoImg = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  

  const linkStyle = (menu) => ({
    color: active === menu ? "darkorange" : "#fff",
    fontWeight: active === menu ? "600" : "400",
    textDecoration: "none",
    fontSize: "15px",
    cursor: "pointer",
    padding: "6px 10px",
    borderRadius: "6px",
    transition: "0.2s",
    background:
      active === menu ? "rgba(255,165,0,0.15)" : "transparent",
  });

  const internshipBtn = {
    padding: "7px 18px",
    borderRadius: "6px",
    border: "1px solid white",
    color: location.pathname === "/internship" ? "darkorange" : "#fff",
    textDecoration: "none",
    fontSize: "14px",
    cursor: "pointer",
    transition: "0.3s",
    background:
      location.pathname === "/internship"
        ? "rgba(255,165,0,0.15)"
        : "transparent",
    marginLeft: "10px",
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
        }
        @media (min-width: 769px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>

      <div style={navStyle}>
        {/* LEFT SIDE → Logo + Name */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "8px",
          flex: "1 1 auto",
          minWidth: 0,
          overflow: "hidden"
        }}>
          <img src={logo} alt="logo" style={{ ...logoImg, flexShrink: 0 }} />
          <div style={{ 
            color: "#fff",
            fontSize: "15px",
            fontWeight: "bold",
            lineHeight: "20px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}>
            INFOYASHONAND<br />TECHNOLOGY PVT. LTD.
          </div>
        </div>

        {/* SPACER - Creates gap between logo and menu */}
        <div style={{ flex: "1 1 auto" }}></div>

        {/* RIGHT SIDE → Desktop menu */}
        <div className="desktop-menu" style={{ display: "flex", gap: "28px", alignItems: "center", marginRight: "20px" }}>
          {menuItems.map((menu) => (
            <span
              key={menu}
              style={linkStyle(menu)}
              onClick={() => handleMenuClick(menu)}
            >
              {menu.toUpperCase()}
            </span>
          ))}

          <Link to="/internship" style={internshipBtn}>
            INTERNSHIP
          </Link>
        </div>

        {/* RIGHT SIDE → Mobile Hamburger Button */}
  {/* RIGHT SIDE → Mobile Hamburger Button */}
{/* RIGHT SIDE → Mobile Hamburger Button */}
<button
  className="mobile-menu-btn"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  style={{
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "26px",
    cursor: "pointer",
    padding: "6px",

    /* ✅ EXACT screenshot behaviour */
    position: "fixed",
    top: "15px",
    right:"15px",
    marginright:"65%",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {mobileMenuOpen ? <FaTimes /> : <FaBars />}
</button>



      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "80px",
            left: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(10px)",
            zIndex: 999,
            padding: "20px",
            maxHeight: "calc(100vh - 80px)",
            overflowY: "auto",
            animation: "slideDown 0.3s ease",
          }}
        >
          {menuItems.map((menu) => (
            <div
              key={menu}
              onClick={() => handleMenuClick(menu)}
              style={{
                color: active === menu ? "darkorange" : "#fff",
                fontWeight: active === menu ? "600" : "400",
                fontSize: "16px",
                padding: "15px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer",
                background: active === menu ? "rgba(255,165,0,0.15)" : "transparent",
              }}
            >
              {menu.toUpperCase()}
            </div>
          ))}

          <Link
            to="/internship"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: "block",
              padding: "15px 20px",
              color: location.pathname === "/internship" ? "darkorange" : "#fff",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "10px",
              border: "1px solid white",
              borderRadius: "6px",
              background:
                location.pathname === "/internship"
                  ? "rgba(255,165,0,0.15)"
                  : "transparent",
            }}
          >
            INTERNSHIP
          </Link>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
