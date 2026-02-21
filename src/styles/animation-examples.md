# Website Animation Classes - Usage Guide

## How to Use These Animations

### 1. Button Animations
```jsx
// Animated button with hover effects
<button className="animated-button">Click Me</button>

// Pulsing button
<button className="pulse-button">Important Action</button>

// Glowing button on hover
<button className="glow-on-hover">Hover Me</button>
```

### 2. Card Animations
```jsx
// Animated card that lifts on hover
<div className="animated-card">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>

// Flip card animation
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">Front Content</div>
    <div className="flip-card-back">Back Content</div>
  </div>
</div>
```

### 3. Scroll Animations
```jsx
// Fade in from bottom
<div className="fade-in-up">Content appears from bottom</div>

// Fade in from left
<div className="fade-in-left">Content slides from left</div>

// Fade in from right
<div className="fade-in-right">Content slides from right</div>

// Scale in animation
<div className="scale-in">Content scales up</div>
```

### 4. Text Animations
```jsx
// Typewriter effect
<h1 className="typewriter">Welcome to Our Company</h1>

// Gradient text animation
<h2 className="gradient-text">Amazing Technology</h2>
```

### 5. Background Effects
```jsx
// Floating shapes background
<section className="floating-shapes">
  <h2>Section with floating background</h2>
</section>

// Particle effect background
<div className="particles">
  <p>Content with particle background</p>
</div>
```

### 6. List Animations
```jsx
// Staggered animation for lists
<ul className="stagger-animation">
  <li>Item 1 (appears first)</li>
  <li>Item 2 (appears second)</li>
  <li>Item 3 (appears third)</li>
</ul>
```

### 7. Icon Animations
```jsx
// Rotating icon on hover
<FaIcon className="rotate-icon" />

// Bouncing icon
<FaIcon className="bounce-icon" />
```

### 8. Progress Bars
```jsx
// Animated progress bar
<div className="progress-bar">
  <div className="progress-fill" style={{'--progress-width': '75%'}}></div>
</div>
```

## JavaScript Functions

### Initialize Animations
```javascript
import { initAllAnimations } from './utils/animations';

// Initialize all animations when component mounts
useEffect(() => {
  initAllAnimations();
}, []);
```

### Typewriter Effect
```javascript
import { typeWriter } from './utils/animations';

const element = document.getElementById('typewriter-text');
typeWriter(element, 'Hello World!', 100);
```

### Smooth Scroll
```javascript
import { smoothScrollTo } from './utils/animations';

// Scroll to element with ID 'about'
smoothScrollTo('about', 70);
```

## Best Practices

1. **Performance**: Animations are optimized for mobile devices
2. **Accessibility**: Respects `prefers-reduced-motion` setting
3. **Progressive Enhancement**: Works without JavaScript
4. **Mobile First**: Lighter animations on mobile devices

## Animation Classes Applied Automatically

- All buttons get `animated-button` class automatically
- Scroll animations are initialized on page load
- Stagger animations trigger when elements come into view