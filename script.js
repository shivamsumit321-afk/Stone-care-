let index = 1;
const track = document.querySelector(".track");
const slides = document.querySelectorAll(".slide");

function updateSlider() {
    const slideWidth = slides[0].offsetWidth + 15;
    track.style.transform = `translateX(-${index * slideWidth}px)`;

    slides.forEach((s, i) => {
        s.classList.remove("active");
        if (i === index) s.classList.add("active");
    });
}

// Auto slide
setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlider();
}, 3000);

// Swipe support (mobile)
let startX = 0;

track.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

track.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        index = (index + 1) % slides.length;
    } else if (endX - startX > 50) {
        index = (index - 1 + slides.length) % slides.length;
    }

    updateSlider();
});

// Init
updateSlider();

function orderNow() {
    window.location.href = "https://your-order-link.com";
}
