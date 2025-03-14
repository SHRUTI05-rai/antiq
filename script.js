/* Reset */
* { 
    margin-top: 5vh ;
    padding: 0;
    box-sizing: border-box;
}

/* Slideshow Container */
.slideshow-container {

    width: 100%;
    max-width: 800px;
    position: relative;
    margin: auto;
    overflow: hidden;
    border-radius: 10px;
}

/* Slides */
.slide {
    display: none;
}

.slide img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

/* Navigation Buttons */
.prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px 15px;
    font-size: 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

/* Fade Effect */
.fade {
    animation: fadeEffect 1.5s ease-in-out;
}

@keyframes fadeEffect {
    from { opacity: 0.4; }
    to { opacity: 1; }
}
