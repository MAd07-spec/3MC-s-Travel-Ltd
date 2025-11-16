//Light-Dark Mode thingymajig
function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


//Carousel Auto-scroll thingymajig
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    let index = 0;

    track.style.transition = "transform 0.6s ease-in-out";

    function nextSlide() {
        index = (index + 1) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
        console.log("Slide:", index);
    }

    setInterval(nextSlide, 3000);
});

