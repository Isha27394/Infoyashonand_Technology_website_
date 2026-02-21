import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return [elementRef, isVisible];
};

// Multiple scroll animations hook - use with fixed number of elements
export const useMultipleScrollAnimations = (elementsCount, options = {}) => {
  const [visibilityStates, setVisibilityStates] = useState(
    Array(elementsCount).fill(false)
  );
  
  // Create refs array at the top level, not in a callback
  const elementRefs = useRef(
    Array.from({ length: elementsCount }, () => ({ current: null }))
  );

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    staggerDelay = 100
  } = options;

  useEffect(() => {
    const observers = elementRefs.current.map((ref, index) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibilityStates(prev => {
                const newStates = [...prev];
                newStates[index] = true;
                return newStates;
              });
            }, staggerDelay * index);
            
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setVisibilityStates(prev => {
              const newStates = [...prev];
              newStates[index] = false;
              return newStates;
            });
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && elementRefs.current[index]?.current) {
          observer.unobserve(elementRefs.current[index].current);
        }
      });
    };
  }, [threshold, rootMargin, triggerOnce, staggerDelay]);

  return elementRefs.current.map((ref, index) => ({
    ref,
    isVisible: visibilityStates[index]
  }));
};