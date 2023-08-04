var typed = new Typed("#element", {
  strings: ["Web Developer", "Competative Programmer", "Data Scientist"],
  typeSpeed: 50,
});
var typed = new Typed("#element1", {
  strings: ["Web Developer", "Competative Programmer", "Data Scientist"],
  typeSpeed: 50,
});

//for navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
