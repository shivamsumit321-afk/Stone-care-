// Sticky header shrink effect
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Order button action
function orderNow() {
    alert("Redirecting to order page...");
    window.location.href = "https://your-order-link.com";
}
