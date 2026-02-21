import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollAnimatedSection = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0,
  threshold = 0.1,
  className = '',
  style = {},
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation({
    threshold,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`${animation} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;
