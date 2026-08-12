const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");

// Open and close mobile menu
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    // Change hamburger into X
    menuToggle.classList.toggle("active");
});


// Close menu after clicking a navigation link
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuToggle.classList.remove("active");
    });
});