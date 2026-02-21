# Scroll-to-Top Button Customization

## Current Implementation

The scroll-to-top button is already implemented and styled to match your screenshot:

```javascript
{showScrollTop && (
  <button className="scroll-to-top" onClick={scrollToTop}>
    <FaArrowUp />
  </button>
)}
```

## Styling

```css
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: darkorange;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  z-index: 1000;
  transition: all 0.3s ease;
}

.scroll-to-top:hover {
  background: #ff8c00;
  transform: translateY(-5px);
}
```

## Customization Options

### Change Button Size
```css
width: 60px;   /* Larger button */
height: 60px;
font-size: 24px; /* Larger icon */
```

### Change Position
```css
bottom: 20px;  /* Closer to bottom */
right: 20px;   /* Closer to right */
```

### Change Colors
```css
background: #ff6600;  /* Different orange */
color: white;

/* On hover */
background: #ff8800;
```

### Add Animation
```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.scroll-to-top {
  animation: bounce 2s infinite;
}
```

### Change Scroll Threshold

In Home.js, find this line (around line 107):
```javascript
setShowScrollTop(window.scrollY > 300);
```

Change `300` to show button earlier or later:
- `200` - Shows button sooner
- `500` - Shows button later

### Add Smooth Fade-In

```css
.scroll-to-top {
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}
```

### Make it Pulse
```css
@keyframes pulse {
  0% { box-shadow: 0 4px 15px rgba(0,0,0,0.3); }
  50% { box-shadow: 0 4px 25px rgba(255,140,0,0.6); }
  100% { box-shadow: 0 4px 15px rgba(0,0,0,0.3); }
}

.scroll-to-top {
  animation: pulse 2s infinite;
}
```

## Icon Options

You can change the icon by importing different icons from react-icons:

```javascript
import { FaArrowUp, FaChevronUp, FaAngleUp, FaCaretUp } from "react-icons/fa";

// Then use in button:
<FaChevronUp />  // Chevron style
<FaAngleUp />    // Angle style
<FaCaretUp />    // Caret style
```

## Mobile Responsive

For mobile devices, you might want to adjust:

```css
@media (max-width: 768px) {
  .scroll-to-top {
    width: 45px;
    height: 45px;
    bottom: 20px;
    right: 20px;
    font-size: 18px;
  }
}
```

## Testing

1. Start your app: `npm start`
2. Scroll down more than 300px
3. Button should appear in bottom-right
4. Click to scroll to top smoothly
5. Hover to see lift animation
