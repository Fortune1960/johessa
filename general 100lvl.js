const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

tab.addEventListener("click", () => {

tabs.forEach(btn =>
btn.classList.remove("active")
);

contents.forEach(content =>
content.classList.remove("active")
);

tab.classList.add("active");

document
.getElementById(tab.dataset.tab)
.classList.add("active");

});

});


const deptTitles =
document.querySelectorAll(".dept-title");

deptTitles.forEach(dept => {

dept.addEventListener("click", () => {

const menu =
dept.nextElementSibling;

menu.classList.toggle("show");

});

});

const mobileMenuBtn =
document.querySelector(".mobile-menu-btn");

const sidebar =
document.querySelector(".sidebar");

mobileMenuBtn.addEventListener("click", () => {

sidebar.classList.toggle("show-sidebar");

});

