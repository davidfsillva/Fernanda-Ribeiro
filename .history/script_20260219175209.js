// ============================
// Premium UI Enhancements
// ============================

// ============================
// Mobile Hamburger Menu
// ============================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

// ============================
// Navbar Scroll Effect
// ============================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.padding = "5px 0";
        header.style.background = "rgba(255,255,255,0.98)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
    } else {
        header.style.padding = "0";
        header.style.background = "rgba(255,255,255,0.95)";
        header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
    }
});

// ============================
// Scroll Progress Bar
// ============================
const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "#2d5a4b";
progressBar.style.zIndex = "2000";
progressBar.style.width = "0%";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
});

// ============================
// Modern Scroll Animations
// ============================
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll(".fade-up, .fade-left, .fade-right, .service-card, .testimonial-card")
    .forEach(el => observer.observe(el));

// ============================
// Stagger Animation
// ============================
document.querySelectorAll(".services-grid, .testimonials-grid").forEach(section => {
    const items = section.children;
    [...items].forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
});

// ============================
// Smooth Scroll
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            history.pushState(null, null, targetId);
        }
    });
});

// ============================
// Hero Parallax (Mobile Friendly)
// ============================
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    if (hero) {
        hero.style.backgroundPositionY = offset * 0.5 + "px";
    }
});

// ============================
// Active Link on Scroll
// ============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// ============================
// Button Hover Micro Interaction
// ============================
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });
});