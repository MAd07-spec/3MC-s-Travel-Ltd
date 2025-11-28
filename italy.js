//Carousel Auto-scroll thingymajig
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let i = 0;
const slideCount = slides.length;
const delay = 3000;

function moveCarousel() {
    i++;

    if (i >= slideCount) {
        track.style.transition = "none";
        track.style.transform = "translateX(0%)";
        
        i = 1;
        setTimeout(() => {
            track.style.transition = "transform 0.6s ease-in-out";
            track.style.transform = `translateX(-${i * 100}%)`;
        }, 20);
    } else {
        track.style.transition = "transform 0.6s ease-in-out";
        track.style.transform = `translateX(-${i * 100}%)`;
    }
}

setInterval(moveCarousel, delay);

