let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const intro = document.getElementById('intro');
const slideshow = document.getElementById('slideshow');

function startSlideshow() {
  intro.classList.add('hidden');
  slideshow.classList.remove('hidden');
  slides[0].classList.add('active');
  setInterval(showNextSlide, 4000); 
}

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
