const navbar = () => {
    return `
    <div id="mobile_navbar">
    <div class="mobile_nav_top">
      <div class="toggle_mobile_nav">
        <i class="fa-solid fa-bars"></i>
      </div>
      <a href="./index.html"><img src="../images/LogoWhite.png"
      alt="logo"
    /> </a>
      <div id="mobile_location">Dharuhera</div>
    </div>
  </div>
  <div id="mobile_nav_links">
    <div>
    <img id="mobileslideimg"
      src="../images/LogoWhite.png"
      alt="logo"
    />
    <p class="close_mobile_nav">X</p>
    </div>
      <div><a href="./index.html">HOME</a></div>
      <div><a href="./work.html">OUR WORK</a></div>
      <div><a href="./zccforBuisiness.html">ABOUT US</a></div>
      <div><a href="./contact.html">CONTACT US</a></div>
  </div>
    <nav>
      <div class="navbar_logo">
        <a href="./index.html"><img
          src="../images/LogoWhite.png"
          alt="logo" 
        /> </a>
      </div>
      <div class="middle_nav_links">
        <div><a href="./index.html">HOME</a></div>
        <div><a href="./work.html">OUR WORK</a></div>
        <div><a href="./zccforBuisiness.html">ABOUT US</a></div>
        <div><a href="./contact.html">CONTACT US</a></div>
      </div>
      <div class="right_nav_links">
        <div id="toggle_location">
          <p>Dharuhera</p>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
            alt="location"
          />
        </div>
      </div>
    </nav>
    `;
  };
  
  export default navbar;
  