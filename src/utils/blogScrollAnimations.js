// Blog-specific scroll animations with mobile optimization
export const initBlogScrollAnimations = () => {
  const isMobile = window.innerWidth <= 768;
  console.log(`Initializing blog scroll animations - Mobile: ${isMobile}`);
  
  // Mobile-optimized intersection observer settings
  const observerOptions = {
    threshold: isMobile ? 0.05 : 0.1, // Lower threshold for mobile
    rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px' // Smaller margin for mobile
  };
  
  console.log('Observer options:', observerOptions);
  
  // Create intersection observer for blog elements
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Element entering view:', entry.target.className);
          
          // Add visible class with slight delay for smoother animation
          setTimeout(() => {
            entry.target.classList.add('blog-visible');
            console.log('Animation triggered for:', entry.target.className);
          }, isMobile ? 50 : 100);
          
          // Unobserve after animation to improve performance
          observer.unobserve(entry.target);
        }
      });
    },
    observerOptions
  );

  // Wait for DOM to be ready with mobile-optimized timing
  setTimeout(() => {
    // Find blog elements to animate (mobile-optimized selectors)
    const blogElements = [];
    
    // Blog cards - more specific selection
    document.querySelectorAll('.card').forEach(card => {
      if (card.offsetHeight > 50) blogElements.push(card);
    });
    
    // Sidebar elements
    document.querySelectorAll('.sidebar-box').forEach(sidebar => {
      if (sidebar.offsetHeight > 50) blogElements.push(sidebar);
    });
    
    // Hero section
    const hero = document.querySelector('.blog-hero');
    if (hero) blogElements.unshift(hero); // Add hero first
    
    console.log(`Found ${blogElements.length} blog elements to animate`);

    // Apply animations to blog elements with mobile optimization
    blogElements.forEach((element, index) => {
      if (!element || element.offsetHeight < 20) return;
      
      // Skip if element already has animation class
      if (element.classList.contains('blog-fade-up') || 
          element.classList.contains('blog-fade-left') || 
          element.classList.contains('blog-fade-right') ||
          element.classList.contains('blog-hero-animate')) {
        observer.observe(element);
        return;
      }
      
      // Determine animation type based on element
      let animationType = 'blog-fade-up';
      
      if (element.classList.contains('blog-hero')) {
        animationType = 'blog-hero-animate';
      } else if (element.classList.contains('sidebar-box') || element.closest('.right-col')) {
        animationType = 'blog-fade-right';
      } else if (element.querySelector('img')) {
        animationType = 'blog-scale-in';
      }
      
      // Add animation class
      element.classList.add(animationType);
      
      // Add mobile-optimized stagger delay
      const delay = isMobile ? index * 0.05 : index * 0.1;
      if (index < 10) {
        element.style.transitionDelay = `${delay}s`;
      }
      
      // Observe element
      observer.observe(element);
    });

    console.log(`Applied blog scroll animations to ${blogElements.length} elements`);
  }, isMobile ? 100 : 200);
};

// Blog-specific scroll reveal for individual elements
export const addBlogScrollReveal = (selector, animationType = 'blog-fade-up', delay = 0) => {
  const elements = document.querySelectorAll(selector);
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('blog-visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  elements.forEach(element => {
    element.classList.add(animationType);
    observer.observe(element);
  });
};