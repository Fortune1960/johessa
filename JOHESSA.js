document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

   menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");

    // optional: close all submenus when main menu closes
    if (!navLinks.classList.contains("active")) {
        document.querySelector(".dropdown").classList.remove("active");
        document.querySelector(".contact").classList.remove("active");
    }
});

});

document.querySelectorAll(".dropdown > a").forEach(drop => {
    drop.addEventListener("click", (e) => {
        e.preventDefault();
        drop.parentElement.classList.toggle("active");
    });
});

document.querySelectorAll(".course-item > a").forEach(course => {
    course.addEventListener("click", (e) => {
        e.preventDefault();
        course.parentElement.classList.toggle("active");
    });
});
document.addEventListener("click", (e) => {
    const dropdown = document.querySelector(".dropdown");
    const contact = document.querySelector(".contact");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    const clickedInsideMenu = navLinks.contains(e.target);
    const clickedToggle = menuToggle.contains(e.target);

    if (!clickedInsideMenu && !clickedToggle) {
        navLinks.classList.remove("active");
        dropdown.classList.remove("active");
        contact.classList.remove("active");

        document.querySelectorAll(".course-item").forEach(item => {
            item.classList.remove("active");
        });
    }
});
