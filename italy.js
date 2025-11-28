//Carousel Auto-scroll thingymajig
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);

let index = 0;
const slideCount = slides.length;
const delay = 3000; // 3 seconds

function moveCarousel() {
    index++;

    // If we reach the end, jump back to start instantly
    if (index >= slideCount) {
        // Turn OFF animation to snap back
        track.style.transition = "none";
        track.style.transform = "translateX(0%)";
        
        index = 1; // Go to the second slide next
        setTimeout(() => {
            track.style.transition = "transform 0.6s ease-in-out";
            track.style.transform = `translateX(-${index * 100}%)`;
        }, 20); // Small delay allows browser to apply "no transition"
    } else {
        track.style.transition = "transform 0.6s ease-in-out";
        track.style.transform = `translateX(-${index * 100}%)`;
    }
}

setInterval(moveCarousel, delay);

