let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Add auto-sliding functionality
let slideInterval;

function startAutoSlide() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 5000); // Change slide every 5 seconds
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Start auto-sliding when the page loads
startAutoSlide();

// Optional: Pause auto-sliding when user interacts with controls
document.querySelector('.prev').addEventListener('click', stopAutoSlide);
document.querySelector('.next').addEventListener('click', stopAutoSlide);
document.querySelector('.dot-container').addEventListener('click', stopAutoSlide);