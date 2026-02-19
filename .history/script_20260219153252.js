// ============================
// Mobile Hamburger Menu
// ============================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when clicking on a nav link
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// ============================
// Scroll Animations
// ============================

// Elements to animate
const scrollElements = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => {
    element.classList.add("show");
};

const hideScrollElement = (element) => {
    element.classList.remove("show");
};

const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

// Listen for scroll events
window.addEventListener("scroll", handleScrollAnimation);

// Trigger animation on load
window.addEventListener("load", handleScrollAnimation);

// ============================
// Optional: Smooth Scroll for anchor links
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});
