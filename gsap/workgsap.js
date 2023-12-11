function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#mainw"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#mainw", {
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
  
      pinType: document.querySelector("#mainw").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();


  var tl = gsap.timeline();
  tl.from("#uh span",{
    y:200,
    opacity:0,
    stagger:0.1
  })
  tl.from("#lh span",{
    y:200,
    opacity:0,
    stagger:0.1
  })




const p1w = document.querySelector("page1w");
const p1wh1 = document.querySelector("page1Content>h1");
const p1wh3 = document.querySelector("page1Content>h3");


const p2w = document.querySelector("page2w");
const p2wh1 = document.querySelector("page2Content>h1");
const p2wh3 = document.querySelector("page2Content>h3");


const p3w = document.querySelector("page3w");
const p3wh1 = document.querySelector("page3Content>h1");
const p3wh3 = document.querySelector("page3Content>h3");


const p4w = document.querySelector("page4w");
const p4wh1 = document.querySelector("page4Content>h1");
const p4wh3 = document.querySelector("page4Content>h3");


const p5w = document.querySelector("page5w");
const p5wh1 = document.querySelector("page5Content>h1");
const p5wh3 = document.querySelector("page5Content>h3");


const p6w = document.querySelector("page6w");
const p6wh1 = document.querySelector("page6Content>h1");
const p6wh3 = document.querySelector("page6Content>h3");








function page2work(){
  var page2Content = document.querySelector("#page2w");
  var cursorpg2 = document.querySelector("#cursorpg2");

  gsap.set(cursorpg2,{ 
    // x: 500, 
    // y: 500, 
    scale: 0 
  });

  page2Content.addEventListener("mousemove",function(dets){
    gsap.to(cursorpg2,{
      x: dets.x,
      y:dets.y,
    })
  })

  page2Content.addEventListener("mouseenter",function(){
    gsap.to(cursorpg2,{
      scale:1,
      opacity:1,
    })
  })
  page2Content.addEventListener("mouseleave",function(){
    gsap.to(cursorpg2,{
      scale:0,
      opacity:0
    })
  })
}
page2work();




function page3work(){
  var page3Content = document.querySelector("#page3w");
  var cursorpg3 = document.querySelector("#cursorpg3");

  gsap.set(cursorpg3,{ 
    // x: -100, 
    // y: -100, 
    scale: 0 
  });

  page3Content.addEventListener("mousemove",function(dets){
    gsap.to(cursorpg3,{
      x:dets.x,
      y:dets.y,
    })
  })

  page3Content.addEventListener("mouseenter",function(){
    gsap.to(cursorpg3,{
      scale:1,
      opacity:1,
    })
  })
  page3Content.addEventListener("mouseleave",function(){
    gsap.to(cursorpg3,{
      scale:0,
      opacity:0
    })
  })
}
page3work();





function page4work(){
  var page4Content = document.querySelector("#page4w");
  var cursorpg4 = document.querySelector("#cursorpg4");

  gsap.set(cursorpg4,{
    // x: -100,
    // y: -100, 
    scale: 0 
  });

  page4Content.addEventListener("mousemove",function(dets){
    gsap.to(cursorpg4,{
      x:dets.x,
      y:dets.y,
    })
  })

  page4Content.addEventListener("mouseenter",function(){
    gsap.to(cursorpg4,{
      scale:1,
      opacity:1,
    })
  })
  page4Content.addEventListener("mouseleave",function(){
    gsap.to(cursorpg4,{
      scale:0,
      opacity:0
    })
  })
}

page4work();





function page5work(){
  var page5Content = document.querySelector("#page5w");
  var cursorpg5 = document.querySelector("#cursorpg5");

  gsap.set(cursorpg5,{
    // x: -100,
    // y: -100, 
    scale: 0 
  });

  page5Content.addEventListener("mousemove",function(dets){
   
    gsap.to(cursorpg5,{
      x:dets.x,
      y:dets.y,
    })
  })

  page5Content.addEventListener("mouseenter",function(){
    gsap.to(cursorpg5,{
      scale:1,
      opacity:1,
    })
  })
  page5Content.addEventListener("mouseleave",function(){
    gsap.to(cursorpg5,{
      scale:0,
      opacity:0
    })
  })
}

page5work();






function page6work(){
  var page6Content = document.querySelector("#page6w");
  var cursorpg6 = document.querySelector("#cursorpg6");

  gsap.set(cursorpg6,{
    // x: -100,
    // y: -100, 
    scale: 0 
  });

  page6Content.addEventListener("mousemove",function(dets){
   
    gsap.to(cursorpg6,{
      x:dets.x,
      y:dets.y,
    })
  })

  page6Content.addEventListener("mouseenter",function(){
    gsap.to(cursorpg6,{
      scale:1,
      opacity:1,
    })
  })
  page6Content.addEventListener("mouseleave",function(){
    gsap.to(cursorpg6,{
      scale:0,
      opacity:0
    })
  })
}

page6work();





// Sapy:-
// background: rgba(112, 112, 112, 0.18);
// border-radius: 16px;
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
// backdrop-filter: blur(16px);
// -webkit-backdrop-filter: blur(16px);


// Cultfit:-
// background: rgba(0, 42, 147, 0.43);
// border-radius: 16px;
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
// backdrop-filter: blur(16px);
// -webkit-backdrop-filter: blur(16px);


// Sephora:-
// background: rgba(244, 244, 244, 0.43);
// border-radius: 16px;
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
// backdrop-filter: blur(16px);
// -webkit-backdrop-filter: blur(16px);


// ReactMeals:-
// background: rgba(0, 255, 255, 0.45);
// border-radius: 16px;
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
// backdrop-filter: blur(16px);
// -webkit-backdrop-filter: blur(16px);


// ZCC:-
// background: rgba(0, 0, 0, 0.57);
// border-radius: 16px;
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
// backdrop-filter: blur(16px);
// -webkit-backdrop-filter: blur(16px);