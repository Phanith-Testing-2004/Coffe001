// Placeholder JavaScript functionality for the Coffee Shop website

document.addEventListener('DOMContentLoaded', () => {
  console.log("Coffee Shop Website Loaded");

  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Future enhancements: carousel sliders, interactive elements, form validation etc.
});
