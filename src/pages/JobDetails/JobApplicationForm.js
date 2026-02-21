// src/pages/JobDetails/JobApplicationForm.js
import React, { useState, useEffect } from "react";
import { ref, push } from "firebase/database";
import { database } from "../../firebase";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";   // ← ADDED

export default function JobApplicationForm() {
  const navigate = useNavigate(); // ← ADDED

  const container = {
    width: "100%",
    minHeight: "100vh",
    background: "#f1f5f9",
    display: "flex",
    justifyContent: "center",
    padding: "40px 20px",
    fontFamily: "sans-serif",
    boxSizing: "border-box",
  };

  const card = {
    width: "100%",
    maxWidth: "750px",
    background: "#fff",
    padding: "30px 40px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    boxSizing: "border-box",
  };

  const title = {
    fontSize: "28px",
    fontWeight: "700",
    textAlign: "center",
    color: "#0073ff",
    marginBottom: "5px",
  };

  const subtitle = {
    fontSize: "14px",
    textAlign: "center",
    color: "#666",
    marginBottom: "25px",
  };

  const sectionTitle = {
    fontSize: "16px",
    fontWeight: "600",
    marginTop: "20px",
    marginBottom: "15px",
  };

  const row = {
    display: "flex",
    gap: "30px",
    marginBottom: "20px",
  };

  const input = {
    width: "100%",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "14px",
    marginTop: "5px",
  };

  const label = {
    fontSize: "14px",
    marginBottom: "4px",
    display: "block",
    fontWeight: "500",
  };

  const radioRow = {
    display: "flex",
    gap: "25px",
    alignItems: "center",
    marginBottom: "15px",
  };

  const submitBtn = {
    width: "100%",
    padding: "12px",
    background: "#0069ff",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "6px",
    marginTop: "25px",
    cursor: "pointer",
  };

  const termsButton = {
    background: "transparent",
    border: "none",
    color: "#0069ff",
    cursor: "pointer",
    padding: 0,
    marginLeft: 6,
    textDecoration: "underline",
    fontSize: "14px",
  };

  // VALIDATION FUNCTIONS
  const onlyLetters = (e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z ]/g, "");
  };

  const onlyNumbers = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  const validateEmail = (e) => {
    const value = e.target.value;
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(value)) e.target.style.border = "1px solid red";
    else e.target.style.border = "1px solid #d1d5db";
  };

  // ⭐ UPDATED — Open Terms Page
  const openTerms = () => {
    navigate("/terms");
  };

  // FIREBASE FORM STATE
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    positionApplied: "",
    employmentType: "",
    workedBefore: "",
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
    resume: null,
    agreedTerms: false,
  });

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

  // INPUT CHANGE HANDLER
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0]?.name || null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRadio = (e) => {
    setFormData({ ...formData, workedBefore: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreedTerms) {
      alert("Please agree to terms & conditions.");
      return;
    }
    const dbRef = ref(database, "jobApplications");
    push(dbRef, formData)
      .then(() => {
        alert("Application submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          city: "",
          zip: "",
          positionApplied: "",
          employmentType: "",
          workedBefore: "",
          companyName: "",
          position: "",
          startDate: "",
          endDate: "",
          resume: null,
          agreedTerms: false,
        });
      })
      .catch((err) => alert("Error: " + err.message));
  };

  return (
    <>
      {/* CSS FOR MOBILE */}
      <style>{`
        * {
          box-sizing: border-box;
        }
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }
        @media (max-width: 768px) {
          .job-form-container {
            padding: 20px 10px !important;
          }
          .job-form-card {
            padding: 20px 15px !important;
          }
          .form-row {
            flex-direction: column !important;
            gap: 15px !important;
          }
        }
      `}</style>

      <div style={container} className="job-form-container">
        <form style={card} className="job-form-card" onSubmit={handleSubmit}>
          <h2 style={title}>Job Application Form</h2>
          <p style={subtitle}>
            We are an Equal Opportunity Employer and committed to excellence through diversity.
          </p>

          {/* PERSONAL INFO */}
          <h3 style={sectionTitle}>Personal Information</h3>
          
          <div style={row} className="form-row">
            <div style={{ flex: 1 }}>
              <label style={label}>First Name</label>
              <input
                style={input}
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onInput={onlyLetters}
                placeholder="First Name"
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={label}>Last Name</label>
              <input
                style={input}
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onInput={onlyLetters}
                placeholder="Last Name"
              />
            </div>
          </div>

          <div style={row} className="form-row">
            <div style={{ flex: 1 }}>
              <label style={label}>Phone Number</label>
              <input
                style={input}
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onInput={onlyNumbers}
                maxLength={10}
                placeholder="Enter 10 digit number"
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={label}>Email</label>
              <input
                style={input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={validateEmail}
                placeholder="example@example.com"
              />
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={label}>Address</label>
            <input
              style={input}
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Street Address"
            />
          </div>

          <div style={row}>
            <div style={{ flex: 1 }}>
              <label style={label}>City</label>
              <input
                style={input}
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onInput={onlyLetters}
                placeholder="City"
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={label}>Postal / Zip Code</label>
              <input
                style={input}
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                onInput={onlyNumbers}
                maxLength={6}
                placeholder="Postal / Zip Code"
              />
            </div>
          </div>

          {/* POSITION INFO */}
          <h3 style={sectionTitle}>Position Information</h3>
          <div style={row}>
            <div style={{ flex: 1 }}>
              <label style={label}>Position Applied For</label>
              <select
                style={input}
                name="positionApplied"
                value={formData.positionApplied}
                onChange={handleChange}
              >
                <option>Please Select</option>
                <option>Web Developer</option>
                <option>Android Developer</option>
                <option>Digital Marketing Specialist</option>
                <option>UI/UX Designer</option>
                <option>Senior Software Engineer</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={label}>Employment Type</label>
              <select
                style={input}
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
              >
                <option>Please Select</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
              </select>
            </div>
          </div>

          <label style={label}>Have you worked for this company before?</label>
          <div style={radioRow} className="radio-row">
            <label>
              <input
                type="radio"
                name="workedBefore"
                value="yes"
                checked={formData.workedBefore === "yes"}
                onChange={handleRadio}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="workedBefore"
                value="no"
                checked={formData.workedBefore === "no"}
                onChange={handleRadio}
              />{" "}
              No
            </label>
          </div>

          {/* WORK EXPERIENCE */}
          <h3 style={sectionTitle}>Work Experience</h3>
          <label style={label}>Company Name</label>
          <input
            style={input}
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            onInput={onlyLetters}
            placeholder="Company Name"
          />

          <label style={label}>Position</label>
          <input
            style={input}
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            onInput={onlyLetters}
            placeholder="Position"
          />

          <div style={row}>
            <div style={{ flex: 1 }}>
              <label style={label}>Start Date</label>
              <input
                style={input}
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={label}>End Date</label>
              <input
                style={input}
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* RESUME UPLOAD */}
          <label style={label}>Upload Resume (PDF Only)</label>
          <input
            type="file"
            name="resume"
            style={input}
            accept="application/pdf"
            onChange={handleChange}
          />

          <div style={{ marginTop: "15px", display: "flex", alignItems: "center", gap: 8 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input
                type="checkbox"
                name="agreedTerms"
                checked={formData.agreedTerms}
                onChange={handleChange}
              />{" "}
              I agree to
            </label>

            {/* ⭐ Navigate to Terms Page */}
            <button type="button" style={termsButton} onClick={openTerms}>
              terms & conditions
            </button>
          </div>

          <button style={submitBtn} type="submit">
            Submit
          </button>
        </form>
      </div>

      {/* SCROLL-TO-TOP BUTTON */}
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
