const menuBtn = document.querySelector(".menu-bar");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

window.addEventListener("scroll", () => {
  const position = scrollY > 0;
  navbar.classList.toggle("box-shadow", position);
  menu.classList.remove("show-menu");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

document.querySelectorAll(".fade-up").forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll(".fade-down").forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll(".fade-left").forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll(".fade-right").forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll(".zoom-in").forEach((el) => {
  observer.observe(el);
});