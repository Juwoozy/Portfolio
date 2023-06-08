const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-image');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;
// Display the initial image
carouselImages[currentIndex].style.display = 'block';

// Move to the previous image
prevButton.addEventListener('click', () => {
  carouselImages[currentIndex].style.display = 'none';
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  carouselImages[currentIndex].style.display = 'block';
});

// Move to the next image
nextButton.addEventListener('click', () => {
  carouselImages[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImages[currentIndex].style.display = 'block';
});

const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
  header.classList.toggle ("sticky", window.scrollY > 100);
});



