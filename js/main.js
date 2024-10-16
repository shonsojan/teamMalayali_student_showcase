const player = new Plyr("video");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

function toggleActiveClass() {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

hamburger.addEventListener("click", toggleActiveClass);

const portfolios = [
  { name: "Student 1", portfolioLink: "#" },
  { name: "Student 2", portfolioLink: "#" },
  { name: "Student 3", portfolioLink: "#" },
  { name: "Student 4", portfolioLink: "#" },
  { name: "Student 5", portfolioLink: "#" },
  { name: "Student 6", portfolioLink: "#" },
  { name: "Student 7", portfolioLink: "#" },
  { name: "Student 8", portfolioLink: "#" },
  { name: "Student 9", portfolioLink: "#" },
  { name: "Student 10", portfolioLink: "#" },
  { name: "Student 11", portfolioLink: "#" },
  { name: "Student 12", portfolioLink: "#" },
  { name: "Student 13", portfolioLink: "#" },
  { name: "Student 14", portfolioLink: "#" },
  { name: "Student 15", portfolioLink: "#" },
  { name: "Student 16", portfolioLink: "#" },
  { name: "Student 17", portfolioLink: "#" },
  { name: "Student 18", portfolioLink: "#" },
  { name: "Student 19", portfolioLink: "#" },
  { name: "Student 20", portfolioLink: "#" },
];

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Batman",
    role: "Prince od Darkness",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Batman",
    role: "Prince od Darkness",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Batman",
    role: "Prince od Darkness",
  },
];
