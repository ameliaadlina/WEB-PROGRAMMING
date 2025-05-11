// Global variable for DSA and COA slides
let dsaSlideIndex = 1;
let coaSlideIndex = 1;

// Show slides for a specific carousel (either DSA or COA)
function showSlides(n, carousel) {
  let i;
  let slides;
  let dots;

  if (carousel === 'dsa-carousel') {
    slides = document.getElementsByClassName("dsa-slide");
    dots = document.getElementsByClassName("dot-dsa");
    if (n > slides.length) {dsaSlideIndex = 1}
    if (n < 1) {dsaSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[dsaSlideIndex-1].style.display = "block";
  } else if (carousel === 'coa-carousel') {
    slides = document.getElementsByClassName("coa-slide");
    dots = document.getElementsByClassName("dot-coa");
    if (n > slides.length) {coaSlideIndex = 1}
    if (n < 1) {coaSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[coaSlideIndex-1].style.display = "block";
  }
}

// Move the slides
function plusSlides(n, carousel) {
  if (carousel === 'dsa-carousel') {
    dsaSlideIndex += n;
    showSlides(dsaSlideIndex, 'dsa-carousel');
  } else if (carousel === 'coa-carousel') {
    coaSlideIndex += n;
    showSlides(coaSlideIndex, 'coa-carousel');
  }
}

// Initialize the slides
showSlides(dsaSlideIndex, 'dsa-carousel');
showSlides(coaSlideIndex, 'coa-carousel');
