// Sticky header
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Order button
function orderNow() {
    window.location.href = "https://your-order-link.com";
}

// VIDEO SLIDER
let index = 1;
const videos = document.querySelectorAll(".slides video");

function updateSlider() {
    videos.forEach((v, i) => {
        v.classList.remove("active");
        if (i === index) v.classList.add("active");
    });
}

function slide(direction) {
    index += direction;

    if (index < 0) index = videos.length - 1;
    if (index >= videos.length) index = 0;

    updateSlider();
}
