// Header und Footer laden
document.addEventListener('DOMContentLoaded', function() {
  // Header laden
  fetch('practice/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-container').innerHTML = data;
      initNavToggle();
    });

  // Footer laden
  fetch('practice/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    });
});

// Mobile Navigation Toggle
function initNavToggle() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', nav.classList.contains('active'));
    });
  }
}
