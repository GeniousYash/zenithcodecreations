import navbar from "../components/navbar.js";
const header = document.querySelector("#navbar");

// navbar section
header.innerHTML = navbar();


//toggle_mobile_nav

const mobile_nav = document.querySelector(".toggle_mobile_nav");
const close_mobile_nav = document.querySelector(".close_mobile_nav");
const toggle_mob_menu = document.querySelector("#mobile_nav_links");

mobile_nav.addEventListener("click", () => {
  toggle_mob_menu.classList.toggle("mobile_nav_links_active");
});

close_mobile_nav.addEventListener("click", () => {
  toggle_mob_menu.classList.remove("mobile_nav_links_active");
});