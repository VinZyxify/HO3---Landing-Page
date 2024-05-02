const menu = document.querySelector('#mobilemenu');
const menulinks = document.querySelector('.navbarmenu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
});

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

   
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

   
    slides[slideIndex].style.display = 'block';

    
    prevButton.style.display = slideIndex === 0 ? 'none' : 'block';
    nextButton.style.display = slideIndex === slides.length - 1 ? 'none' : 'block';
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex < slides.length - 1) {
        slideIndex++;
    }
    showSlides();
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
    }
    showSlides();
}

showSlides();
