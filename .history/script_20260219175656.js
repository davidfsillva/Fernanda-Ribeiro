// ============================
// Mobile Hamburger Menu
// ============================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    // Toggle menu on hamburger click
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
}

// ============================
// Scroll Animations
// ============================

// Select all elements that will animate on scroll
const scrollElements = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

// Check if element is in view
const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

// Add or remove animation class
const displayScrollElement = (element) => element.classList.add("show");
const hideScrollElement = (element) => element.classList.remove("show");

const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

// Listen for scroll events and trigger on load
window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

// ============================
// Smooth Scroll for Anchor Links
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });

            // Optional: update URL hash without jump
            history.pushState(null, null, targetId);
        }
    });
});
