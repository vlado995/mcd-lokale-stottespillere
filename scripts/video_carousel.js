var slideIndex = 1;

/*
 *  Displays first slide with slideIndex value 1
 */
showSlides(slideIndex);

/*
 *  Next/previous slide controls
 */
function toSlide(n) {
    showSlides(slideIndex += n);
}

/*
 *  Displays slide with new slideIndex value 
 */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/*
 *  Rules on what slide is being displayed    
 */
function showSlides(n) {
    var slide = document.getElementsByClassName("carousel-slide");
    var indicator = document.getElementsByClassName("carousel-indicator");

    if (n > slide.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slide.length
    }

    for (var i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    for (var j = 0; j < indicator.length; j++) {
        indicator[j].className = indicator[j].className.replace(" active", "");
    }

    slide[slideIndex-1].style.display = "block";
    indicator[slideIndex-1].className += " active";
}

/*
 *  Describes video playing rules and what videos
 *  are stoped when the slideIndex is changed
 */
function playingRules() {
    if (slideIndex == 1) {
        stopVideo(caruselVideo2);
        stopVideo(caruselVideo3);
    }

    if (slideIndex == 2) {
        stopVideo(caruselVideo1);
        stopVideo(caruselVideo3);
    }

    if (slideIndex == 3) {
        stopVideo(caruselVideo1);
        stopVideo(caruselVideo2);
    }
}