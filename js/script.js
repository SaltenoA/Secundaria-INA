document.addEventListener("DOMContentLoaded", () => {
  // --- Reveal observer (tu versión arreglada) ---
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    revealElements.forEach(el => revealObserver.observe(el));
  }

document.addEventListener("DOMContentLoaded", () => {

  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");

  navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

});





  // --- Header shadow on scroll (si lo tenés también) ---
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // --- Loader hide on load (si usás loader) ---
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
      setTimeout(() => loader.classList.add('hide'), 300);
    }
  });

});
