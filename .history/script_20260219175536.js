// ============================
// PREMIUM WEBSITE INTERACTIONS
// ============================

document.addEventListener("DOMContentLoaded", () => {

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
        if (window.scrollY > 60) {
            header.style.background = "rgba(255,255,255,0.98)";
            header.style.boxShadow = "0 10px 40px rgba(0,0,0,0.08)";
        } else {
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
    progressBar.style.zIndex = "9999";
    progressBar.style.width = "0%";
    progressBar.style.transition = "width 0.1s ease-out";
    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        progressBar.style.width = (scrollTop / scrollHeight) * 100 + "%";
    });

    // ============================
    // HERO CINEMATIC EFFECT
    // ============================
    const hero = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero-content");

    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "scale(1.05)";
        hero.style.transition = "all 1.5s ease";

        window.addEventListener("load", () => {
            hero.style.opacity = "1";
            hero.style.transform = "scale(1)";
        });
    }

    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(40px)";
        heroContent.style.transition = "all 1.2s ease";

        window.addEventListener("load", () => {
            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";
        });
    }

    // ============================
    // Modern Reveal Animations
    // ============================
    const revealElements = document.querySelectorAll(
        ".fade-up, .fade-left, .fade-right, .service-card, .testimonial-card, .about-image img, .approach-image img"
    );

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ============================
    // Image Reveal Auto
    // ============================
    const images = document.querySelectorAll("img");

    images.forEach(img => {
        img.style.opacity = "0";
        img.style.transform = "translateY(50px) scale(0.95)";
        img.style.transition = "all 0.9s ease";
    });

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0) scale(1)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    images.forEach(img => imageObserver.observe(img));

    // ============================
    // Active Menu Link on Scroll
    // ============================
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
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
    // Smooth Scroll
    // ============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                history.pushState(null, null, targetId);
            }
        });
    });

});