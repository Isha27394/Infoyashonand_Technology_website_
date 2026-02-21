import React, { useState, useEffect } from "react";
import { initAllAnimations } from "../utils/animations";

const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Very quick loading for page transitions (not initial load)
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Initialize animations after page loads
      setTimeout(() => {
        initAllAnimations();
      }, 100);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="page-transition-loading">
          <div className="simple-spinner"></div>
        </div>
      )}
      <div className="page-container">
        {children}
      </div>
    </>
  );
};

export default PageTransition;
