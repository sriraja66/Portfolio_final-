/*
// ====================================
// Utility Functions (Disabled - Minimal JS Mode)
// ====================================

/**
 * Linear interpolation for smooth animations
 */
// function lerp(start, end, factor) {
//     return start + (end - start) * factor;
// }

/**
 * Mouse position tracker with smoothing
 */
// class MouseTracker {
//     constructor() {
//         this.x = 0;
//         this.y = 0;
//         this.smoothX = 0;
//         this.smoothY = 0;
//         this.init();
//     }

//     init() {
//         document.addEventListener('mousemove', (e) => {
//             this.x = e.clientX;
//             this.y = e.clientY;
//         });

//         this.animate();
//     }

//     animate() {
//         this.smoothX = lerp(this.smoothX, this.x, 0.1);
//         this.smoothY = lerp(this.smoothY, this.y, 0.1);
//         requestAnimationFrame(() => this.animate());
//     }
// }

// /**
//  * Calculate distance between two points
//  */
// function distance(x1, y1, x2, y2) {
//     return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// }

// /**
//  * Random number between min and max
//  */
// function random(min, max) {
//     return Math.random() * (max - min) + min;
// }

// /**
//  * Debounce function for performance
//  */
// function debounce(func, wait) {
//     let timeout;
//     return function executedFunction(...args) {
//         const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//         };
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// }

// /**
//  * Throttle function for performance
//  */
// function throttle(func, limit) {
//     let inThrottle;
//     return function (...args) {
//         if (!inThrottle) {
//             func.apply(this, args);
//             inThrottle = true;
//             setTimeout(() => inThrottle = false, limit);
//         }
//     };
// }

// /**
//  * Map value from one range to another
//  */
// function map(value, inMin, inMax, outMin, outMax) {
//     return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }

// /**
//  * Clamp value between min and max
//  */
// function clamp(value, min, max) {
//     return Math.min(Math.max(value, min), max);
// }

// /**
//  * Convert HSL to RGB
//  */
// function hslToRgb(h, s, l) {
//     s /= 100;
//     l /= 100;
//     const k = n => (n + h / 30) % 12;
//     const a = s * Math.min(l, 1 - l);
//     const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
//     return [255 * f(0), 255 * f(8), 255 * f(4)];
// }

// /**
//  * Easing functions
//  */
// const easing = {
//     easeInOut: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
//     easeOut: t => t * (2 - t),
//     easeIn: t => t * t,
//     elastic: t => {
//         const p = 0.3;
//         return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
//     }
// };
// */
