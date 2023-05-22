import { dark_button } from "./toggle.js";
let nav = document.getElementById("main-nav");

window.onload = function (e) {
  if (localStorage.getItem("mode") === "light") {
    document.documentElement.setAttribute("data-bs-theme", "light");
    nav.style.backgroundColor = "#C3D6A0";
  } else {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    nav.style.backgroundColor = "#6F7378";
    dark_button.classList.toggle("active");
  }
};
