// Animation utilities for the website

// Scroll animation observer
export const initScrollAnimations = () => {
  // Mobile-optimized observer options
  const isMobile = window.innerWidth <= 768;
  const observerOptions = {
    threshold: isMobile ? 0.05 : 0.1, // Lower threshold for mobile
    rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Force animation on mobile
        if (isMobile) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) translateX(0) scale(1)';
        }
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .animated-card, .stagger-animation > *'
  );
  
  animatedElements.forEach(el => {
    observer.observe(el);
    // Add mobile-specific classes
    if (isMobile) {
      el.classList.add('mobile-animation');
    }
  });
};

// Stagger animation for lists
export const initStaggerAnimations = () => {
  const staggerContainers = document.querySelectorAll('.stagger-animation');
  const isMobile = window.innerWidth <= 768;
  
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // Force stagger animation on mobile
        if (isMobile) {
          const children = entry.target.children;
          Array.from(children).forEach((child, index) => {
            setTimeout(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            }, index * 100);
          });
        }
      }
    });
  }, { threshold: isMobile ? 0.1 : 0.2 });

  staggerContainers.forEach(container => {
    staggerObserver.observe(container);
  });
};

// Typewriter effect
export const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  element.innerHTML = '';
  
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};

// Progress bar animation
export const animateProgressBar = (element, targetWidth, duration = 2000) => {
  element.style.setProperty('--progress-width', targetWidth + '%');
  element.style.animation = `progressFill ${duration}ms ease-out`;
};

// Smooth scroll to element
export const smoothScrollTo = (elementId, offset = 70) => {
  const element = document.getElementById(elementId);
  if (element) {
    const yOffset = -offset;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

// Add hover effects to buttons
export const initButtonAnimations = () => {
  const buttons = document.querySelectorAll('button, .btn, a[href]');
  
  buttons.forEach(button => {
    if (!button.classList.contains('no-animation')) {
      button.classList.add('animated-button');
    }
  });
};

// Parallax effect for backgrounds
export const initParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${rate}px)`;
    });
  });
};

// Universal Reveal on Scroll Animation
export const initUniversalScrollReveal = () => {
  const isMobile = window.innerWidth <= 768;
  
  // Ensure all content is visible immediately - no white space
  const allElements = document.querySelectorAll(`
    section:not(.no-animation),
    .card:not(.no-animation),
    .info-card:not(.no-animation),
    .pricing-card:not(.no-animation),
    article:not(.no-animation),
    .container > div:not(.no-animation),
    .hero-content:not(.no-animation),
    .sidebar-box:not(.no-animation),
    .fade-in-up,
    .fade-in-left,
    .fade-in-right,
    .scale-in
  `);
  
  // Make all content visible immediately
  allElements.forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0) translateX(0) scale(1)';
  });
  
  // Responsive animation observer
  const observerOptions = {
    threshold: isMobile ? 0.1 : 0.15,
    rootMargin: isMobile ? '0px 0px 50px 0px' : '0px 0px 30px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
        // Add enhancement animation
        entry.target.classList.add('animate');
        
        // Remove animation after effect for reuse
        setTimeout(() => {
          entry.target.classList.remove('animate');
        }, isMobile ? 400 : 500);
      }
    });
  }, observerOptions);
  
  allElements.forEach(el => {
    observer.observe(el);
  });
};

// Mobile-specific animation trigger
export const initMobileAnimations = () => {
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Ensure all content is visible immediately on mobile
    const allElements = document.querySelectorAll(`
      section:not(.no-animation),
      .card:not(.no-animation),
      .info-card:not(.no-animation),
      .pricing-card:not(.no-animation),
      article:not(.no-animation),
      .fade-in-up,
      .fade-in-left,
      .fade-in-right,
      .scale-in
    `);
    
    // Make everything visible immediately - no white space
    allElements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0) translateX(0) scale(1)';
    });
    
    // Enhanced mobile scroll animations - immediate and smooth
    let animationFrame;
    const handleScroll = () => {
      if (animationFrame) return;
      
      animationFrame = requestAnimationFrame(() => {
        allElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
          
          if (isInViewport && !el.classList.contains('animate')) {
            el.classList.add('animate');
            setTimeout(() => {
              el.classList.remove('animate');
            }, 350);
          }
        });
        animationFrame = null;
      });
    };
    
    // Immediate scroll detection
    document.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('touchmove', handleScroll, { passive: true });
    
    // Initial check
    setTimeout(handleScroll, 100);
  }
};

// Initialize all animations
export const initAllAnimations = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initUniversalScrollReveal();
      initScrollAnimations();
      initStaggerAnimations();
      initButtonAnimations();
      initParallaxEffect();
      initMobileAnimations();
    });
  } else {
    // Add small delay to ensure all elements are rendered
    setTimeout(() => {
      initUniversalScrollReveal();
      initScrollAnimations();
      initStaggerAnimations();
      initButtonAnimations();
      initParallaxEffect();
      initMobileAnimations();
    }, 100);
  }
};