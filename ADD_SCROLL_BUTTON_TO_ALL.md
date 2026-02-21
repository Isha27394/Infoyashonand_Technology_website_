# Adding Scroll-to-Top Button to All Pages

## ✅ Already Completed:
1. Home.js
2. Career.js
3. Blog.js
4. Internship.js
5. Blog/Dhaara1.js
6. Blog/DigitalSchool1.js
7. Blog/Ecare1.js
8. Blog/Esalary.js

## 📋 Remaining Pages to Update:

### Main Pages:
- InternshipContent.js

### Blog Pages:
- Blog/Expertguruji.js
- Blog/ExpertSkilll.js
- Blog/Kamdhanda.js
- Blog/PatTantra .js
- Blog/Scroller.js

### JobDetails Pages:
- JobDetails/AndroidDeveloper.js
- JobDetails/Digitalmarket.js
- JobDetails/JobApplicationForm.js
- JobDetails/Software.js
- JobDetails/Ui.js
- JobDetails/WebDeveloper.js

### Leadership Pages:
- Leadership/Ceo.js
- Leadership/CeoMadam.js

### Portfolio Pages:
- Portfolio/ConstructIQ.js
- Portfolio/Dhaara.js
- Portfolio/DigitalSchool.js
- Portfolio/Ecare360.js
- Portfolio/Esalary.js
- Portfolio/ExpertGuruji.js
- Portfolio/ExpertSkill.js
- Portfolio/KamDhanda.js
- Portfolio/Marketing.js
- Portfolio/Matrimonial.js
- Portfolio/PatTantra.js
- Portfolio/Scroller.js

## 🔧 Code to Add

### Step 1: Add imports at the top
```javascript
import React, { useState, useEffect } from "react"; // Add useEffect if not present
import { FaArrowUp } from "react-icons/fa";
```

### Step 2: Add state and logic inside component function
```javascript
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
```

### Step 3: Add button before closing return statement
```javascript
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
```

## 🎯 Features:
- Circular orange button (50x50px)
- Up arrow icon
- Fixed bottom-right position
- Appears after 300px scroll
- Smooth hover animation
- Smooth scroll to top

## ✨ Status:
8 pages completed, 33 pages remaining
