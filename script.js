// script.js - Handles navigation and contact form

document.addEventListener('DOMContentLoaded', function() {
  // Highlight active nav link
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    if (window.location.pathname.endsWith(link.getAttribute('href'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Contact form handler
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      // Remove e.preventDefault(); so the form submits to Formspree
      // Remove form.reset();
    });
  }
});
