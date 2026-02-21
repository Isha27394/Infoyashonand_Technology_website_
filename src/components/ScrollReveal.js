import { useEffect } from 'react';

const ScrollReveal = ({ children, animation = 'fade-in-up', delay = 0, className = '' }) => {
  useEffect(() => {
    // Initialize scroll reveal for this component
    const element = document.querySelector(`[data-scroll-reveal="${animation}-${delay}"]`);
    if (element) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, delay);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      observer.observe(element);
      
      return () => observer.disconnect();
    }
  }, [animation, delay]);

  return (
    <div 
      className={`${animation} ${className}`}
      data-scroll-reveal={`${animation}-${delay}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;