const videoAll = document.getElementById("showcaseAll");
const video1 = document.getElementById("showcase1");
const video2 = document.getElementById("showcase2");
const video3 = document.getElementById("showcase3");

const caruselVideo1 = document.getElementById("carouselSlide1");
const caruselVideo2 = document.getElementById("carouselSlide2");
const caruselVideo3 = document.getElementById("carouselSlide3");

const pageTopHeader = document.getElementById("topHeader");
const pageSection2 = document.getElementById("section2");
const pageSection3 = document.getElementById("section3");
const pageSection4 = document.getElementById("section4");
const pageSection5 = document.getElementById("section5");
const pageSection6 = document.getElementById("section6");

/*
 *  Stops video/iframe inside the scope of given element
 */
function stopVideo(element) {
    var iframe = element.querySelector( 'iframe');
    var video = element.querySelector( 'video' );
    // Rule for iframe elements
    if ( iframe !== null ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    // Rule for video elements
    if ( video !== null ) {
        video.pause();
    }
};

/*
 *  Sets display property to "block" for given element.
 *  Sets overflow property to "hide" for body element. 
 *  Adds "blur" class to all section elements.
 */
function displayCarousel() {
    videoAll.style.display = "flex";
    document.body.style.overflow = "hidden";
    pageTopHeader.classList.add("blur");
    pageSection2.classList.add("blur");
    pageSection3.classList.add("blur");
    pageSection4.classList.add("blur");
    pageSection5.classList.add("blur");
    pageSection6.classList.add("blur");
}

function displayVideo1() {
    video1.style.display = "flex";
    pageTopHeader.classList.add("blur");
    pageSection2.classList.add("blur");
    pageSection3.classList.add("blur");
    pageSection4.classList.add("blur");
    pageSection5.classList.add("blur");
    pageSection6.classList.add("blur");
    document.body.style.overflow = "hidden";
}

function displayVideo2() {
    video2.style.display = "flex";
    pageTopHeader.classList.add("blur");
    pageSection2.classList.add("blur");
    pageSection3.classList.add("blur");
    pageSection4.classList.add("blur");
    pageSection5.classList.add("blur");
    pageSection6.classList.add("blur");
    document.body.style.overflow = "hidden";
}

function displayVideo3() {
    video3.style.display = "flex";
    pageTopHeader.classList.add("blur");
    pageSection2.classList.add("blur");
    pageSection3.classList.add("blur");
    pageSection4.classList.add("blur");
    pageSection5.classList.add("blur");
    pageSection6.classList.add("blur");
    document.body.style.overflow = "hidden";
}

/*
 *  Sets display property back to "none" for given element.
 *  Sets overflow property back to "auto" for body element. 
 *  Removes "blur" class from all section elements.
 *  Stops iframe YT video on close 
 */
function closeCarousel() {
    videoAll.style.display = "none";
    pageTopHeader.classList.remove("blur");
    pageSection2.classList.remove("blur");
    pageSection3.classList.remove("blur");
    pageSection4.classList.remove("blur");
    pageSection5.classList.remove("blur");
    pageSection6.classList.remove("blur");
    document.body.style.overflow = "auto";

    // Reloads page, stays on same spot on the page
    location.reload(); 
}

function closeVideo1() {
    video1.style.display = "none";
    pageTopHeader.classList.remove("blur");
    pageSection2.classList.remove("blur");
    pageSection3.classList.remove("blur");
    pageSection4.classList.remove("blur");
    pageSection5.classList.remove("blur");
    pageSection6.classList.remove("blur");
    document.body.style.overflow = "auto";

    // Stops playing video 1
    stopVideo(video1);
}

function closeVideo2() {
    video2.style.display = "none";
    pageTopHeader.classList.remove("blur");
    pageSection2.classList.remove("blur");
    pageSection3.classList.remove("blur");
    pageSection4.classList.remove("blur");
    pageSection5.classList.remove("blur");
    pageSection6.classList.remove("blur");
    document.body.style.overflow = "auto";

    // Stops playing video 2
    stopVideo(video2);
}

function closeVideo3() {
    video3.style.display = "none";
    pageTopHeader.classList.remove("blur");
    pageSection2.classList.remove("blur");
    pageSection3.classList.remove("blur");
    pageSection4.classList.remove("blur");
    pageSection5.classList.remove("blur");
    pageSection6.classList.remove("blur");
    document.body.style.overflow = "auto";

    // Stops playing video 3
    stopVideo(video3);
}