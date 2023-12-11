function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
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
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
//   scrollImages/unscreen-001.png
  function files(index) {
    var data = `
       ./scrollImages/img00001.png
       ./scrollImages/img00002.png
       ./scrollImages/img00003.png
       ./scrollImages/img00004.png
       ./scrollImages/img00005.png
       ./scrollImages/img00006.png
       ./scrollImages/img00007.png
       ./scrollImages/img00008.png
       ./scrollImages/img00009.png
       ./scrollImages/img00010.png
       ./scrollImages/img00011.png
       ./scrollImages/img00012.png
       ./scrollImages/img00013.png
       ./scrollImages/img00014.png
       ./scrollImages/img00015.png
       ./scrollImages/img00016.png
       ./scrollImages/img00017.png
       ./scrollImages/img00018.png
       ./scrollImages/img00019.png
       ./scrollImages/img00020.png
       ./scrollImages/img00021.png
       ./scrollImages/img00022.png
       ./scrollImages/img00023.png
       ./scrollImages/img00024.png
       ./scrollImages/img00025.png
       ./scrollImages/img00026.png
       ./scrollImages/img00027.png
       ./scrollImages/img00028.png
       ./scrollImages/img00029.png
       ./scrollImages/img00030.png
       ./scrollImages/img00031.png
       ./scrollImages/img00032.png
       ./scrollImages/img00033.png
       ./scrollImages/img00034.png
       ./scrollImages/img00035.png
       ./scrollImages/img00036.png
       ./scrollImages/img00037.png
       ./scrollImages/img00038.png
       ./scrollImages/img00039.png
       ./scrollImages/img00040.png
       ./scrollImages/img00041.png
       ./scrollImages/img00042.png
       ./scrollImages/img00043.png
       ./scrollImages/img00044.png
       ./scrollImages/img00045.png
       ./scrollImages/img00046.png
       ./scrollImages/img00047.png
       ./scrollImages/img00048.png
       ./scrollImages/img00049.png
       ./scrollImages/img00050.png
       ./scrollImages/img00051.png
       ./scrollImages/img00052.png
       ./scrollImages/img00053.png
       ./scrollImages/img00054.png
       ./scrollImages/img00055.png
       ./scrollImages/img00056.png
       ./scrollImages/img00057.png
       ./scrollImages/img00058.png
       ./scrollImages/img00059.png
       ./scrollImages/img00060.png
       ./scrollImages/img00061.png
       ./scrollImages/img00062.png
       ./scrollImages/img00063.png
       ./scrollImages/img00064.png
       ./scrollImages/img00065.png
       ./scrollImages/img00066.png
       ./scrollImages/img00067.png
       ./scrollImages/img00068.png
       ./scrollImages/img00069.png
       ./scrollImages/img00070.png
       ./scrollImages/img00071.png
       ./scrollImages/img00072.png
       ./scrollImages/img00073.png
       ./scrollImages/img00074.png
       ./scrollImages/img00075.png
       ./scrollImages/img00076.png
       ./scrollImages/img00077.png
       ./scrollImages/img00078.png
       ./scrollImages/img00079.png
       ./scrollImages/img00080.png
       ./scrollImages/img00081.png
       ./scrollImages/img00082.png
       ./scrollImages/img00083.png
       ./scrollImages/img00084.png
       ./scrollImages/img00085.png
       ./scrollImages/img00086.png
       ./scrollImages/img00087.png
       ./scrollImages/img00088.png
       ./scrollImages/img00089.png
       ./scrollImages/img00090.png
       ./scrollImages/img00091.png
       ./scrollImages/img00092.png
       ./scrollImages/img00093.png
       ./scrollImages/img00094.png
       ./scrollImages/img00095.png
       ./scrollImages/img00096.png
       ./scrollImages/img00097.png
       ./scrollImages/img00098.png
       ./scrollImages/img00099.png
       ./scrollImages/img00100.png
       ./scrollImages/img00101.png
       ./scrollImages/img00102.png
       ./scrollImages/img00103.png
       ./scrollImages/img00104.png
       ./scrollImages/img00105.png
       ./scrollImages/img00106.png
       ./scrollImages/img00107.png
       ./scrollImages/img00108.png
       ./scrollImages/img00109.png
       ./scrollImages/img00110.png
       ./scrollImages/img00111.png
       ./scrollImages/img00112.png
       ./scrollImages/img00113.png
       ./scrollImages/img00114.png
       ./scrollImages/img00115.png
       ./scrollImages/img00116.png
       ./scrollImages/img00117.png
       ./scrollImages/img00118.png
       ./scrollImages/img00119.png
       ./scrollImages/img00120.png
       ./scrollImages/img00121.png
       ./scrollImages/img00122.png
       ./scrollImages/img00123.png
       ./scrollImages/img00124.png
       ./scrollImages/img00125.png
       ./scrollImages/img00126.png
       ./scrollImages/img00127.png
       ./scrollImages/img00128.png
       ./scrollImages/img00129.png
       ./scrollImages/img00130.png
       ./scrollImages/img00131.png
       ./scrollImages/img00132.png
       ./scrollImages/img00133.png
       ./scrollImages/img00134.png
       ./scrollImages/img00135.png
       ./scrollImages/img00136.png
       ./scrollImages/img00137.png
       ./scrollImages/img00138.png
       ./scrollImages/img00139.png
       ./scrollImages/img00140.png
       ./scrollImages/img00141.png
       ./scrollImages/img00142.png
       ./scrollImages/img00143.png
       ./scrollImages/img00144.png
       ./scrollImages/img00145.png
       ./scrollImages/img00146.png
       ./scrollImages/img00147.png
       ./scrollImages/img00148.png
       ./scrollImages/img00149.png
       ./scrollImages/img00150.png
       ./scrollImages/img00151.png
       ./scrollImages/img00152.png
       ./scrollImages/img00153.png
       ./scrollImages/img00154.png
       ./scrollImages/img00155.png
       ./scrollImages/img00156.png
       ./scrollImages/img00157.png
       ./scrollImages/img00158.png
       ./scrollImages/img00159.png
       ./scrollImages/img00160.png
       ./scrollImages/img00161.png
       ./scrollImages/img00162.png
       ./scrollImages/img00163.png
       ./scrollImages/img00164.png
       ./scrollImages/img00165.png
       ./scrollImages/img00166.png
       ./scrollImages/img00167.png
       ./scrollImages/img00168.png
       ./scrollImages/img00169.png
       ./scrollImages/img00170.png
       ./scrollImages/img00171.png
       ./scrollImages/img00172.png
       ./scrollImages/img00173.png
       ./scrollImages/img00174.png
       ./scrollImages/img00175.png
       ./scrollImages/img00176.png
       ./scrollImages/img00177.png
       ./scrollImages/img00178.png
       ./scrollImages/img00179.png
       ./scrollImages/img00180.png
       ./scrollImages/img00181.png
       ./scrollImages/img00182.png
       ./scrollImages/img00183.png
       ./scrollImages/img00184.png
       ./scrollImages/img00185.png
       ./scrollImages/img00186.png
       ./scrollImages/img00187.png
       ./scrollImages/img00188.png
       ./scrollImages/img00189.png
       ./scrollImages/img00190.png
       ./scrollImages/img00191.png
       ./scrollImages/img00192.png
       ./scrollImages/img00193.png
       ./scrollImages/img00194.png
       ./scrollImages/img00195.png
       ./scrollImages/img00196.png
       ./scrollImages/img00197.png
       ./scrollImages/img00198.png
       ./scrollImages/img00199.png
       ./scrollImages/img00200.png
       ./scrollImages/img00201.png
       ./scrollImages/img00202.png
       ./scrollImages/img00203.png
       ./scrollImages/img00204.png
       ./scrollImages/img00205.png
       ./scrollImages/img00206.png
       ./scrollImages/img00207.png
       ./scrollImages/img00208.png
       ./scrollImages/img00209.png
       ./scrollImages/img00210.png
       ./scrollImages/img00211.png
       ./scrollImages/img00212.png
       ./scrollImages/img00213.png
       ./scrollImages/img00214.png
       ./scrollImages/img00215.png
       ./scrollImages/img00216.png
       ./scrollImages/img00217.png
       ./scrollImages/img00218.png
       ./scrollImages/img00219.png
       ./scrollImages/img00220.png
       ./scrollImages/img00221.png
       ./scrollImages/img00222.png
       ./scrollImages/img00223.png
       ./scrollImages/img00224.png
       ./scrollImages/img00225.png
       ./scrollImages/img00226.png
       ./scrollImages/img00227.png
       ./scrollImages/img00228.png
       ./scrollImages/img00229.png
       ./scrollImages/img00230.png
       ./scrollImages/img00231.png
       ./scrollImages/img00232.png
       ./scrollImages/img00233.png
       ./scrollImages/img00234.png
       ./scrollImages/img00235.png
       ./scrollImages/img00236.png
       ./scrollImages/img00237.png
       ./scrollImages/img00238.png
       ./scrollImages/img00239.png
       ./scrollImages/img00240.png
       ./scrollImages/img00241.png
       ./scrollImages/img00242.png
       ./scrollImages/img00243.png
       ./scrollImages/img00244.png
       ./scrollImages/img00245.png
       ./scrollImages/img00246.png
       ./scrollImages/img00247.png
       ./scrollImages/img00248.png
       ./scrollImages/img00249.png
       ./scrollImages/img00250.png
       ./scrollImages/img00251.png
       ./scrollImages/img00252.png
       ./scrollImages/img00253.png
       ./scrollImages/img00254.png
       ./scrollImages/img00255.png
       ./scrollImages/img00256.png
       ./scrollImages/img00257.png
       ./scrollImages/img00258.png
       ./scrollImages/img00259.png
       ./scrollImages/img00260.png
       ./scrollImages/img00261.png
       ./scrollImages/img00262.png
       ./scrollImages/img00263.png
       ./scrollImages/img00264.png
       ./scrollImages/img00265.png
       ./scrollImages/img00266.png
       ./scrollImages/img00267.png
       ./scrollImages/img00268.png
       ./scrollImages/img00269.png
       ./scrollImages/img00270.png
       ./scrollImages/img00271.png
       ./scrollImages/img00272.png
       ./scrollImages/img00273.png
       ./scrollImages/img00274.png
       ./scrollImages/img00275.png
       ./scrollImages/img00276.png
       ./scrollImages/img00277.png
       ./scrollImages/img00278.png
       ./scrollImages/img00279.png
       ./scrollImages/img00280.png
       ./scrollImages/img00281.png
       ./scrollImages/img00282.png
       ./scrollImages/img00283.png
       ./scrollImages/img00284.png
       ./scrollImages/img00285.png
       ./scrollImages/img00286.png
       ./scrollImages/img00287.png
       ./scrollImages/img00288.png
       ./scrollImages/img00289.png
       ./scrollImages/img00290.png
       ./scrollImages/img00291.png
       ./scrollImages/img00292.png
       ./scrollImages/img00293.png
       ./scrollImages/img00294.png
       ./scrollImages/img00295.png
       ./scrollImages/img00296.png
       ./scrollImages/img00297.png
       ./scrollImages/img00298.png
       ./scrollImages/img00299.png
       ./scrollImages/img00300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 200;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.65,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })