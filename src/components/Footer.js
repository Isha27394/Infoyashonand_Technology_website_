import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/favicon.png";

export default function Footer() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const footerContainer = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "50px",
    padding: "60px 20px",
    color: "#fff",
    width: "100%",
    boxSizing: "border-box",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    margin: 0,
  };

  const infoTextStyle = {
    margin: 0,
    fontSize: "15px",
    lineHeight: "1.4",
  };

  const linkStyle = {
    color: "#ccc",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    marginBottom: "6px",
    fontSize: "15px",
    cursor: "pointer",
  };

  const arrowStyle = {
    color: "darkorange",
    marginRight: "8px",
    fontWeight: "bold",
  };

  const iconBox = {
    display: "flex",
    gap: "20px",
    marginTop: "15px",
  };

  const iconStyle = {
    width: "30px",
    height: "30px",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <footer
      style={{
        backgroundColor: "#0e0e0e",
        marginTop: "40px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          footer {
            padding: 0 !important;
          }
          footer > div {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            padding: 40px 15px !important;
          }
          footer iframe {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>

      <div style={footerContainer}>

        {/* Company Info */}
        <div style={columnStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <img
              src={Logo}
              alt="Company Logo"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <h3 style={titleStyle}>INFOYASHONAND TECHNOLOGY PVT. LTD.</h3>
          </div>

          <br />

          <p style={infoTextStyle}>
            1st Floor, Pearl Enclave, M.S.E.B. Road, Vishrambag, Sangli, Maharashtra 416416
          </p>
          <p style={infoTextStyle}>
            <strong>Phone:</strong> +91 8055514368 / 8600876577
          </p>
          <p style={infoTextStyle}>
            <strong>Email:</strong> support@infoyashonand.com
          </p>

          <div style={iconBox}>
            <a
              href="https://www.linkedin.com/company/infoyashonandtechnology-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                alt="LinkedIn"
                style={iconStyle}
              />
            </a>

            <a
              href="https://www.instagram.com/itpl_sangli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                alt="Instagram"
                style={iconStyle}
              />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div style={columnStyle}>
          <h3 style={{ ...titleStyle, marginBottom: "10px" }}>Useful Links</h3>
          <br />

          <span style={linkStyle} onClick={() => scrollToSection("home")}>
            <span style={arrowStyle}>›</span> Home
          </span>

          <span style={linkStyle} onClick={() => scrollToSection("about")}>
            <span style={arrowStyle}>›</span> About us
          </span>

          <span style={linkStyle} onClick={() => scrollToSection("services")}>
            <span style={arrowStyle}>›</span> Services
          </span>

          <span style={linkStyle} onClick={() => scrollToSection("portfolio")}>
            <span style={arrowStyle}>›</span> Portfolio
          </span>

          <span style={linkStyle} onClick={() => scrollToSection("contact")}>
            <span style={arrowStyle}>›</span> Contact
          </span>

          <Link to="/terms" style={linkStyle}>
            <span style={arrowStyle}>›</span> Terms & Conditions
          </Link>
         
          <Link to="/shipping" style={linkStyle}>
            <span style={arrowStyle}>›</span> Shipping
          </Link>

          <Link to="/privacy" style={linkStyle}>
            <span style={arrowStyle}>›</span> Privacy Policy
          </Link>

          <Link to="/refund" style={linkStyle}>
            <span style={arrowStyle}>›</span> Refund Policy
          </Link>
        </div>

        {/* Services */}
        <div style={columnStyle}>
          <h3 style={{ ...titleStyle, marginBottom: "10px" }}>Our Services</h3>
          <br />

          <span style={linkStyle} onClick={() => scrollToSection("app-development")}>
            <span style={arrowStyle}>›</span> App Development
          </span>

          <span style={linkStyle} onClick={() => scrollToSection("web-development")}>
            <span style={arrowStyle}>›</span> Web Development
          </span>

          <span style={linkStyle} onClick={() => scrollToSection("software-development")}>
            <span style={arrowStyle}>›</span> Software Development
          </span>

          <span style={linkStyle} onClick={() => scrollToSection("digital-marketing")}>
            <span style={arrowStyle}>›</span> Digital Marketing
          </span>

          <span style={linkStyle} onClick={() => scrollToSection("training-consultant")}>
            <span style={arrowStyle}>›</span> Training and Job Consultant
          </span>
        </div>

        {/* Google Map */}
        <div style={columnStyle}>
          <h3 style={{ ...titleStyle, marginBottom: "10px" }}>Google Maps</h3>
          <br />

          <div style={{ width: "100%", maxWidth: "100%", overflow: "hidden" }}>
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16047.66030805517!2d74.60891188465914!3d16.84511244949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1235a5e226855%3A0xf7be3514d6472b2!2sINFOYASHONAND%20TECHNOLOGY%20PVT%20LTD!5e1!3m2!1sen!2sin!4v1743044716575!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "8px", maxWidth: "100%" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          textAlign: "center",
          color: "#ccc",
          borderTop: "1px solid #333",
          marginTop: "30px",
          paddingTop: "20px",
          fontSize: "14px",
        }}
      >
        © Copyright Infoyashonand Technology Pvt. Ltd. All Rights Reserved
      </div>
    </footer>
  );
}
