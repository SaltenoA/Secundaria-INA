const images = document.querySelectorAll('.carousel-slide img');
const thumbs = document.querySelectorAll('.thumb');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function updateCarousel(newIndex) {
    images.forEach(img => img.classList.remove('active'));
    thumbs.forEach(thumb => thumb.classList.remove('active-thumb'));

    images[newIndex].classList.add('active');
    thumbs[newIndex].classList.add('active-thumb');
    index = newIndex;
}

nextBtn.addEventListener('click', () => {
    updateCarousel((index + 1) % images.length);
});

prevBtn.addEventListener('click', () => {
    updateCarousel((index - 1 + images.length) % images.length);
});

thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        updateCarousel(Number(thumb.dataset.index));
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".pdf-tab");
  const viewer = document.getElementById("pdf-viewer");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      // Quitar activo a todos
      tabs.forEach(t => t.classList.remove("active"));

      // Activar el clickeado
      tab.classList.add("active");

      // Cambiar PDF
      const file = tab.getAttribute("data-file");
      viewer.src = file;

    }); 
  });
});