function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}


let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    
    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Move to the next slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Show current slide
    slides[slideIndex - 1].style.display = "block";

    // Auto slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Manual Slide Control
function changeSlide(n) {
    slideIndex += n;
    let slides = document.querySelectorAll(".slide");
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }

    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
}

// Initialize Slideshow
showSlides();
