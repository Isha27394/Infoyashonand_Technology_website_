// Vanilla JavaScript scroll animations (no React hooks)
// Use this for multiple elements or when hooks can't be used

export class ScrollAnimationManager {
  constructor(options = {}) {
    this.options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      triggerOnce: true,
      ...options
    };
    this.observer = null;
    this.elements = new Map();
    this.init();
  }

  init() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const elementData = this.elements.get(entry.target);
          if (!elementData) return;

          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, elementData.delay || 0);
            
            if (this.options.triggerOnce) {
              this.observer.unobserve(entry.target);
            }
          } else if (!this.options.triggerOnce) {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: this.options.threshold,
        rootMargin: this.options.rootMargin
      }
    );
  }

  addElement(element, animationType = 'fade-in-up', delay = 0) {
    if (!element) return;
    
    element.classList.add(animationType);
    this.elements.set(element, { animationType, delay });
    this.observer.observe(element);
  }

  addElements(elements, animationType = 'fade-in-up', staggerDelay = 100) {
    elements.forEach((element, index) => {
      this.addElement(element, animationType, index * staggerDelay);
    });
  }

  removeElement(element) {
    if (this.elements.has(element)) {
      this.observer.unobserve(element);
      this.elements.delete(element);
    }
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.elements.clear();
    }
  }
}

// Simple function to auto-animate page elements
export const autoAnimatePageElements = (options = {}) => {
  const manager = new ScrollAnimationManager(options);
  
  // Common selectors for page elements
  const selectors = [
    'section:not(.hero)',
    '.card',
    '.content-section',
    '[style*="card"]',
    '[style*="leftCol"]',
    '[style*="rightCol"]',
    '[style*="sidebarBox"]',
    '.container > div',
    'article',
    '.blog-content',
    '.portfolio-item',
    '.service-card'
  ];

  const elements = [];
  selectors.forEach(selector => {
    const found = document.querySelectorAll(selector);
    found.forEach(el => {
      // Avoid duplicates and already animated elements
      if (!el.classList.contains('fade-in-up') && 
          !el.classList.contains('fade-in-left') &&
          !elements.includes(el)) {
        
        // Skip if element is too small
        const rect = el.getBoundingClientRect();
        if (rect.height > 20 && rect.width > 20) {
          elements.push(el);
        }
      }
    });
  });

  // Apply different animations based on element position
  elements.forEach((element, index) => {
    let animationType = 'fade-in-up';
    
    if (element.querySelector('img')) {
      animationType = 'scale-in';
    } else if (index % 3 === 1) {
      animationType = 'fade-in-left';
    } else if (index % 3 === 2) {
      animationType = 'fade-in-right';
    }

    manager.addElement(element, animationType, index * 100);
  });

  return manager;
};

// Mobile-optimized version
export const autoAnimateMobileElements = () => {
  if (typeof window === 'undefined') return null;
  
  return autoAnimatePageElements({
    threshold: window.innerWidth <= 768 ? 0.05 : 0.1,
    rootMargin: window.innerWidth <= 768 ? '0px 0px -30px 0px' : '0px 0px -50px 0px'
  });
};