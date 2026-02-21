// Mobile scroll position fix utility
export const ensureTopScroll = () => {
  // Force scroll to top on mobile without affecting desktop
  if (window.innerWidth <= 768) {
    // Disable smooth behavior temporarily for instant positioning
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    
    // Set position instantly
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    
    // Re-enable smooth behavior after positioning
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
      document.body.style.scrollBehavior = 'smooth';
    }, 100);
  } else {
    // Desktop - ensure normal scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.scrollBehavior = 'smooth';
    window.scrollTo(0, 0);
  }
};

// Initialize mobile scroll fixes - mobile-only
export const initMobileScrollFixes = () => {
  // Add CSS fixes for both mobile and desktop
  const style = document.createElement('style');
  style.textContent = `
    /* Desktop - ensure normal scrolling always works */
    @media (min-width: 769px) {
      html, body {
        overflow-x: hidden !important;
        overflow-y: auto !important;
        position: relative !important;
        scroll-behavior: smooth !important;
      }
    }
    
    /* Mobile-only scroll fixes */
    @media (max-width: 768px) {
      html, body {
        overflow-x: hidden !important;
        scroll-behavior: auto !important; /* Prevent jarring during load */
        position: relative !important;
        overscroll-behavior: none !important;
        -webkit-overflow-scrolling: touch !important;
      }
      
      /* Loading state - prevent any movement but ensure visibility */
      body:not(.loading-complete) {
        position: fixed !important;
        width: 100% !important;
        height: 100% !important;
        overflow: hidden !important;
        top: 0 !important;
        left: 0 !important;
      }
      
      /* After loading completes - allow normal scrolling */
      body.loading-complete {
        position: relative !important;
        overflow: auto !important;
        overflow-x: hidden !important;
        overflow-y: auto !important;
        width: 100% !important;
        height: auto !important;
        top: auto !important;
        left: auto !important;
      }
      
      /* Ensure loaded state has full scrolling */
      body.loaded {
        position: relative !important;
        overflow: auto !important;
        overflow-y: auto !important;
        height: auto !important;
      }
      
      /* Prevent layout shifts during loading - less aggressive */
      .loading-screen, .hero, .navbar {
        backface-visibility: hidden !important;
        transform: translateZ(0) !important;
        -webkit-transform: translateZ(0) !important;
      }
      
      /* Mobile hero section positioning */
      div[style*="height: 100vh"] {
        margin-top: 0 !important;
        padding-top: 80px !important;
        box-sizing: border-box !important;
      }
      
      /* Prevent any unwanted spacing */
      body {
        margin: 0 !important;
        padding: 0 !important;
      }
      
      /* Smooth transitions */
      body.loading-complete * {
        transition: transform 0.3s ease !important;
      }
    }
    
    /* Smooth behavior after loading - all devices */
    body.loaded {
      scroll-behavior: smooth !important;
    }
  `;
  
  // Only add if not already added
  if (!document.head.querySelector('#mobile-scroll-fix')) {
    style.id = 'mobile-scroll-fix';
    document.head.appendChild(style);
  }
  
  // Ensure page starts from top on mobile only
  if (window.innerWidth <= 768) {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
};

// Force scroll to top after loading - smooth transition
export const scrollToTopAfterLoad = () => {
  if (window.innerWidth <= 768) {
    // Mobile - immediate positioning without jarring movement
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Force enable scrolling on mobile
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.body.style.position = 'relative';
    document.body.style.height = 'auto';
    document.body.style.width = '100%';
    
    // Ensure smooth behavior for future scrolling
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
      document.body.style.scrollBehavior = 'smooth';
      
      // Double-check scrolling is working
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }, 300);
  } else {
    // Desktop - ensure normal scrolling works
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.scrollBehavior = 'smooth';
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    window.scrollTo(0, 0);
  }
};

// Force enable mobile scrolling - aggressive fix
export const forceEnableMobileScroll = () => {
  if (window.innerWidth <= 768) {
    // Remove any conflicting classes
    document.body.classList.remove('freeze-screen', 'no-scroll');
    
    // Force enable scrolling with inline styles
    document.body.style.overflow = 'auto !important';
    document.documentElement.style.overflow = 'auto !important';
    document.body.style.position = 'relative !important';
    document.body.style.height = 'auto !important';
    document.body.style.width = '100% !important';
    document.body.style.top = 'auto !important';
    document.body.style.left = 'auto !important';
    
    // Add loaded class
    document.body.classList.add('loading-complete', 'loaded');
    
    console.log('Mobile scroll force enabled');
  }
};