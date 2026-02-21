// Mobile scroll animations - DISABLED
export const initMobileScrollAnimations = () => {
  console.log('Mobile scroll animations disabled - ensuring content visibility');
  
  // Force all content to be visible immediately
  const forceContentVisible = () => {
    document.querySelectorAll('*').forEach(el => {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.transform = 'none';
      el.style.transition = 'none';
      el.style.animation = 'none';
    });
  };

  // Run immediately
  forceContentVisible();
  
  // Run again after a delay to catch any dynamically added content
  setTimeout(forceContentVisible, 100);
};

// Force content visibility - ALL DEVICES
export const forceContentVisibility = () => {
  console.log('Forcing content visibility on all devices');
  
  // Remove all animation classes that might hide content
  const animationClasses = [
    'fade-in-up', 'fade-in-left', 'fade-in-right', 'fade-in-down',
    'scale-in', 'slide-in-bottom', 'scroll-animate', 'card-animate',
    'text-animate', 'image-animate', 'mobile-slide-up', 'mobile-fade-in'
  ];

  animationClasses.forEach(className => {
    document.querySelectorAll(`.${className}`).forEach(el => {
      el.classList.remove(className);
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.visibility = 'visible';
      el.style.transition = 'none';
      el.style.animation = 'none';
    });
  });

  // Ensure ALL content is visible
  document.querySelectorAll('*').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.style.visibility = 'visible';
    el.style.transition = 'none';
    el.style.animation = 'none';
  });
};