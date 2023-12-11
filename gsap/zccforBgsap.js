function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#mainzb"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#mainzb", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#mainzb").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();

  function loadinganimation() {
    gsap.from("#page1zb>img", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.4,
      stagger: 0.3,
    });
    gsap.from("#gimg1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1.3,
      stagger: 0.3,
    });
    gsap.from("#gimg2", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1.3,
      stagger: 0.3,
    });
    gsap.from("#centerbannerlogo>img", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from("#centerbannerlogo>h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from("#centerbannerlogo>h3", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
  }
  loadinganimation();