// These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide (n) {
    showSlides (slideIndex = n);
}

function showSlides (n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    } 

    slides[slideIndex-1].style.display = "block";

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    if(dots.length > 0) {
        dots[slideIndex - 1].className += " active";
    }
}

document.addEventListener("click", function(event) {
    if (event.target.matched(".cancel") || !event.target.closest(".form-popup") &&
        !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
            closeForm()
        }
}, false)
