hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    const icon = hamburger.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});

// ============================
// Smooth Scroll for Anchor Links
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
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
// Scroll Reveal Animations
// ============================

// Elementos que já tinham animação
const scrollElements = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

// Todas as imagens que queremos animar
const images = document.querySelectorAll(
    ".profile-image, .approach-image img, .author-image, .service-card img"
);

// Aplica estado inicial nas imagens
images.forEach(img => {
    img.style.opacity = "0";
    img.style.transform = "translateY(40px) scale(0.95)";
    img.style.transition = "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)";
});

// Intersection Observer (mais performático)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            // Caso seja imagem
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

// Observa elementos de texto
scrollElements.forEach(el => observer.observe(el));

// Observa imagens
images.forEach(img => observer.observe(img));
