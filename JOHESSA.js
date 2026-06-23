document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    const contact = document.querySelector(".contact");
    const contactBtn = document.querySelector(".contact-box");

    // Hamburger menu
    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        navLinks.classList.toggle("active");
    });

    // Contact menu
    contactBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        contact.classList.toggle("active");
    });

    // Departments dropdown
    document.querySelectorAll(".dropdown > a").forEach(drop => {
        drop.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            drop.parentElement.classList.toggle("active");
        });
    });

    // Course levels
    document.querySelectorAll(".course-item > a").forEach(course => {
        course.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            course.parentElement.classList.toggle("active");
        });
    });

    // Contact submenu
    document.querySelectorAll(".contact-item > a").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            item.parentElement.classList.toggle("active");
        });
    });

    // Close only when clicking outside
    document.addEventListener("click", (e) => {

        if (!contact.contains(e.target)) {
            contact.classList.remove("active");
        }

        if (
            !navLinks.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {
            navLinks.classList.remove("active");
        }
    });

});