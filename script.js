// Met automatiquement l'année courante dans le footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpans = document.querySelectorAll("#year");
    const currentYear = new Date().getFullYear();
    yearSpans.forEach(span => (span.textContent = currentYear));
});

// Effet léger de parallaxe sur le fond
document.addEventListener("mousemove", (event) => {
    const glow = document.querySelector(".background-glow");
    if (!glow) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;
    glow.style.transform = `translate(${x}px, ${y}px)`;
});
