/**
 * Interactions — Calm & Intentional
 * Personal Portfolio
 * 
 * Minimal JavaScript for:
 * - Smooth scroll behavior
 * - Fade-in animations on scroll
 * - Subtle enhancement, no heavy frameworks
 */

(function() {
  'use strict';

  // ========================================
  // FADE-IN ON SCROLL
  // ========================================

  /**
   * Intersection Observer for fade-in animations
   * Triggers when elements come into viewport
   */
  const observerOptions = {
    threshold: 0.15,        // Trigger when 15% visible
    rootMargin: '0px 0px -50px 0px'  // Slight offset from bottom
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve after animation to improve performance
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with .fade-in class
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => fadeInObserver.observe(el));


  // ========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ========================================

  /**
   * Enhanced smooth scroll for navigation links
   * Already handled by CSS `scroll-behavior: smooth`, 
   * but this provides fallback and can be customized
   */
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without jumping
        history.pushState(null, null, href);
      }
    });
  });


  // ========================================
  // KEYBOARD NAVIGATION ENHANCEMENT
  // ========================================

  /**
   * Ensure focus states are visible for keyboard users
   * Remove focus outline for mouse users
   */
  let isTabbing = false;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      isTabbing = true;
      document.body.classList.add('user-is-tabbing');
    }
  });

  document.addEventListener('mousedown', () => {
    isTabbing = false;
    document.body.classList.remove('user-is-tabbing');
  });


  // ========================================
  // INITIAL PAGE LOAD
  // ========================================

  /**
   * Check if page loaded with hash (e.g., #work)
   * Scroll to that section smoothly after load
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Small delay to ensure page is fully rendered
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  });

})();
