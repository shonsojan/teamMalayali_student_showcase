const player = new Plyr("video");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

function toggleActiveClass() {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

hamburger.addEventListener("click", toggleActiveClass);
