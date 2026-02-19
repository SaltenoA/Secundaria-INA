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

const slides = document.querySelectorAll(".slide");
const thumbTrack = document.querySelector(".thumb-track");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const thumbPrev = document.querySelector(".thumb-prev");
const thumbNext = document.querySelector(".thumb-next");

let index = 0;
let interval;

// Crear miniaturas dinámicamente
slides.forEach((slide, i) => {
  const img = slide.querySelector("img").cloneNode();
  if(i === 0) img.classList.add("active");

  img.addEventListener("click", () => showSlide(i));
  thumbTrack.appendChild(img);
});

const thumbs = document.querySelectorAll(".thumb-track img");

function showSlide(i) {
  slides[index].classList.remove("active");
  thumbs[index].classList.remove("active");

  index = i;

  if(index >= slides.length) index = 0;
  if(index < 0) index = slides.length - 1;

  slides[index].classList.add("active");
  thumbs[index].classList.add("active");
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// Auto play
function startAuto() {
  interval = setInterval(nextSlide, 5000);
}

function stopAuto() {
  clearInterval(interval);
}

document.querySelector(".slider").addEventListener("mouseenter", stopAuto);
document.querySelector(".slider").addEventListener("mouseleave", startAuto);

startAuto();

let thumbPosition = 0;

const thumbContainer = document.querySelector(".thumb-container");

function updateThumbLimits() {
  const maxScroll = thumbTrack.scrollWidth - thumbContainer.clientWidth;
  return maxScroll > 0 ? maxScroll : 0;
}

thumbNext.addEventListener("click", () => {
  const maxScroll = updateThumbLimits();

  if (Math.abs(thumbPosition) < maxScroll) {
    thumbPosition -= thumbContainer.clientWidth / 2;

    if (Math.abs(thumbPosition) > maxScroll) {
      thumbPosition = -maxScroll;
    }

    thumbTrack.style.transform = `translateX(${thumbPosition}px)`;
  }
});

thumbPrev.addEventListener("click", () => {
  if (thumbPosition < 0) {
    thumbPosition += thumbContainer.clientWidth / 2;

    if (thumbPosition > 0) {
      thumbPosition = 0;
    }

    thumbTrack.style.transform = `translateX(${thumbPosition}px)`;
  }
});


