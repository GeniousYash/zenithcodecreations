function loadinganimation() {
    gsap.from("#contactBody", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.4,
      stagger: 0.3,
    });
    gsap.from("#contactUs", {
      y: 100,
      opacity: 0,
      delay: 0.9,
      duration: 0.4,
      stagger: 0.3,
    });
    
  }
  loadinganimation();