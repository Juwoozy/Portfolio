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
//sticky nav
const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
  header.classList.toggle ("sticky", window.scrollY > 100);
});


let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup")
}
function closePopup(){
  popup.classList.remove("open-popup")
}

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

window.onscroll= () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open');
};