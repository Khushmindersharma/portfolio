// Dark / Light Mode
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.onclick = () => {
    document.body.classList.toggle("light-mode");
    toggleBtn.textContent =
        document.body.classList.contains("light-mode") ? "🌙" : "☀️";
};

// Mobile Menu
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.style.display =
        nav.style.display === "flex" ? "none" : "flex";
}

// Animate Skills on Scroll
const bars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight;

    bars.forEach(bar => {
        const top = bar.getBoundingClientRect().top;
        if (top < trigger) {
            bar.style.width = bar.getAttribute("data-width");
        }
    });
});

// Modal
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

