import React, { useEffect, useState } from "react";
import logo from "../assets/images/Favicon12.png";

const LoadingScreen = ({ isVisible }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isVisible && !fadeOut) {
      setFadeOut(true);
      
      // Mobile-specific smooth positioning
      if (window.innerWidth <= 768) {
        // Immediate positioning before fade starts
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
        
        // Add body class to enable normal scrolling
        document.body.classList.add('loading-complete');
        
        // Force enable scrolling immediately
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.body.style.position = 'relative';
        document.body.style.height = 'auto';
        document.body.style.width = '100%';
        
        // Re-enable smooth behavior after fade completes
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = 'smooth';
          document.body.style.scrollBehavior = 'smooth';
          document.body.classList.add('loaded');
          
          // Double-check scrolling is enabled
          document.body.style.overflow = 'auto';
          document.documentElement.style.overflow = 'auto';
        }, 800); // After fade completes
      } else {
        // Desktop behavior
        setTimeout(() => {
          window.scrollTo(0, 0);
          document.body.classList.add('loaded');
        }, 200);
      }
    }
  }, [isVisible, fadeOut]);

  // Don't render if loader is gone
  if (!isVisible && fadeOut) return null;

  return (
    <div
      style={{
        ...styles.loadingContainer,
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      <div style={styles.logoWrapper}>
        <div style={styles.logoContainer}>
          <img
            src={logo}
            alt="Infoyashonand Technology Logo"
            className="clean-rotate-no-blink"
            style={styles.logo}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextElementSibling.style.display = "flex";
            }}
          />
          {/* Fallback Logo */}
          <div
            className="clean-rotate-no-blink fallback-logo"
            style={{
              ...styles.logo,
              display: "none",
              backgroundColor: "#fff",
              color: "#333",
              fontSize: 48,
              fontWeight: "bold",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Arial, sans-serif",
            }}
          >
            IT
          </div>
        </div>

        <div className="clean-name" style={styles.companyName}>
          <span style={styles.companyLine}>INFOYASHONAND</span>
          <span style={styles.companyLine}>TECHNOLOGY PVT. LTD.</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  loadingContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, #d0d2d9ff 0%, #120122ff 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999999,
    transition: "opacity 0.8s ease-in-out",
  },
  logoWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoContainer: {
    position: "relative",
    width: "130px",
    height: "130px",
    marginBottom: "20px",
  },
  logo: {
    width: 130,
    height: 130,
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: 20,
    transform: "translateZ(0)",
    willChange: "transform",
  },
  companyName: {
    opacity: 0,
    textAlign: "center",
    marginTop: 5,
  },
  companyLine: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    display: "block",
    lineHeight: 1.2,
  },
};

// Inject CSS
const styleSheet = document.createElement("style");
styleSheet.textContent = `
.clean-rotate-no-blink {
  animation: cleanRotateNoBlink 1.4s ease-out forwards;
}
@keyframes cleanRotateNoBlink {
  0% { opacity: 1; transform: rotate(0deg); }
  100% { opacity: 1; transform: rotate(360deg); }
}
.clean-name {
  animation: cleanName 0.8s ease-out 0.6s forwards;
}
@keyframes cleanName {
  0% { opacity: 0; transform: translateY(15px); }
  100% { opacity: 1; transform: translateY(0); }
}
`;
if (!document.head.querySelector("#loader-css-final")) {
  styleSheet.id = "loader-css-final";
  document.head.appendChild(styleSheet);
}

export default LoadingScreen;
