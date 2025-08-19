// Countdown function
function countdown() {
        // Get the number of seconds entered by the user
    let seconds = document.getElementById("seconds").value;

        // Get the element where we will display the timer
    let timerDisplay = document.getElementById("timer");

        // Inner function that updates every second
    function tick() {
        // Decrease seconds by 1
        seconds = seconds - 1;
        
        // Update the <p> element with the current seconds
        timer.innerHTML = seconds;

        var time = setTimeout(tick, 1000); //The statement “setTimeout(tick, 1000);” means that the program is pausing for 1,000 milliseconds (i.e., 1 second).
        // When the timer reaches 0 or less, stop and alert
        if (seconds == -1) {
            alert("Time's up");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

//Slideshow
    let slideIndex = 1;
    showSlides(slideIndex);

//Next/previous controles
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

//Thumbnail image controls
    function currentSlides(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
         
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            
            for (i = 0; i < slides.length; i++) {
                slides[i].computedStyleMap.display = "none";
            }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].computedStyleMap.display = "block";
        dots[slideIndex-1].className += " active";
    }