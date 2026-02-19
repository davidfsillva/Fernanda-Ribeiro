// ============================
// Mobile Hamburger Menu (Font Awesome)
// ============================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

        const icon = hamburger.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        }
    });

    // Fecha menu ao clicar em um link
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");

            const icon = hamburger.querySelector("i");
            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    });
}


// ============================
// Smooth Scroll for Anchor Links
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
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


// ============================
// Scroll Reveal Animations (Performance Optimized)
// ============================

// Elementos de texto com animação
const scrollElements = document.querySelectorAll(
    ".fade-up, .fade-left, .fade-right"
);

// Imagens que terão efeito suave ao aparecer
const images = document.querySelectorAll(
    ".profile-image, .approach-image img, .author-image"
);

// Estado inicial das imagens
images.forEach(img => {
    img.style.opacity = "0";
    img.style.transform = "translateY(40px) scale(0.95)";
    img.style.transition = "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)";
});


// Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            // Se for imagem
            if (entry.target.tagName === "IMG" || entry.target.classList.contains("author-image")) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0) scale(1)";
            }

            observer.unobserve(entry.target);
        }

    });
}, {
    threshold: 0.15
});

// Observa textos
scrollElements.forEach(el => observer.observe(el));

// Observa imagens
images.forEach(img => observer.observe(img));