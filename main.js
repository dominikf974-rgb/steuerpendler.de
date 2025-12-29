/* ========================================
   STEUERPENDLER – Main JavaScript
   Burger Menu Toggle & Interactivity
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initScrollSpy();
});

/**
 * Initialize Navigation Toggle (Mobile Burger Menu)
 */
function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');

  if (!navToggle || !nav) return;

  // Toggle menu on button click
  navToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    nav.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('header')) {
      nav.classList.remove('active');
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      nav.classList.remove('active');
    }
  });
}

/**
 * Add active class to current page nav link
 */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/**
 * Smooth scroll to anchor links (optional enhancement)
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}

/**
 * Track CTA button clicks for analytics (placeholder)
 */
function trackCTA(buttonText) {
  // Placeholder for analytics tracking
  console.log('CTA clicked:', buttonText);
  // Example: Google Analytics integration would go here
  // gtag('event', 'cta_click', { button_text: buttonText });
}

// Attach tracking to all CTA buttons
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
      trackCTA(this.textContent);
    });
  });
});

/**
 * Print-friendly styles management
 */
window.addEventListener('beforeprint', function() {
  document.body.classList.add('print-mode');
});

window.addEventListener('afterprint', function() {
  document.body.classList.remove('print-mode');
});
