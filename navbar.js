const toggler = document.querySelector(".toggler");
const nav = document.querySelector(".dpd-nav");

toggler.addEventListener("click", function () {
  nav.classList.toggle("show");
  toggler.classList.toggle("red");
});
