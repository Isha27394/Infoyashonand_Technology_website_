// Utility to automatically apply scroll animations to existing pages
export const applyScrollAnimationsToPage = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    // Add a small delay to ensure all components are mounted
    setTimeout(initScrollAnimations, 100);
  }
};

const initScrollAnimations = () => {
  // Find all sections, cards, and content blocks
  const selectors = [
    'section',
    '.card',
    '.content-section',
    '[style*="card"]',
    '[style*="leftCol"]',
    '[style*="rightCol"]',
    '[style*="sidebarBox"]',
    '.hero',
    '.container > div',
    'article',
    '.blog-content',
    '.portfolio-item',
    '.service-card',
    '.team-member',
    '.testimonial'
  ];

  const elements = [];
  
  selectors.forEach(selector => {
    const found = document.querySelectorAll(selector);
    found.forEach(el => {
      // Avoid duplicates and already animated elements
      if (!el.classList.contains('scroll-animate') && 
          !el.classList.contains('fade-in-up') &&
          !elements.includes(el)) {
        elements.push(el);
      }
    });
  });

  // Apply animations with staggered delays
  elements.forEach((element, index) => {
    // Skip if element is too small or hidden
    const rect = element.getBoundingClientRect();
    if (rect.height < 20 || rect.width < 20) return;

    // Determine animation type based on position and content
    let animationType = 'fade-in-up';
    
    if (element.querySelector('img')) {
      animationType = 'scale-in';
    } else if (index % 3 === 1) {
      animationType = 'fade-in-left';
    } else if (index % 3 === 2) {
      animationType = 'fade-in-right';
    }

    // Add animation class
    element.classList.add(animationType);
    
    // Add stagger delay
    if (index < 6) {
      element.classList.add(`stagger-${index + 1}`);
    }
  });

  // Initialize intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Observe all animated elements
  elements.forEach(element => {
    if (element.classList.contains('fade-in-up') || 
        element.classList.contains('fade-in-left') || 
        element.classList.contains('fade-in-right') ||
        element.classList.contains('scale-in')) {
      observer.observe(element);
    }
  });
};

// Auto-apply scroll animations - DISABLED
export const autoApplyMobileScrollAnimations = () => {
  console.log('Scroll animations disabled - ensuring all content is visible');
  
  // Force all content to be visible immediately
  const forceVisibility = () => {
    document.querySelectorAll('*').forEach(el => {
      // Remove any animation classes
      const animationClasses = [
        'fade-in-up', 'fade-in-left', 'fade-in-right', 'fade-in-down',
        'scale-in', 'slide-in-bottom', 'scroll-animate', 'card-animate',
        'text-animate', 'image-animate'
      ];
      
      animationClasses.forEach(className => {
        el.classList.remove(className);
      });
      
      // Force visibility
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.transition = 'none';
      el.style.animation = 'none';
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceVisibility);
  } else {
    setTimeout(forceVisibility, 50);
  }
};