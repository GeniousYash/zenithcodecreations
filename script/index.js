// preloader on load
window.onload = () => {
    let preLoader = document.querySelector(".site_loader");
    preLoader.style.display = "none";
  };
  
  // footer
  import footer from "../components/footer.js";
  document.querySelector(`#footer`).innerHTML = footer();
  
 