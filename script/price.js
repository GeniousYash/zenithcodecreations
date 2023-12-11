let DisplayOne = [
    {
        p1:"✅ Upto 5 Pages",
        p2:"✅ Scroll Animation (1st Page Only)",
        p3:"✅ Domain Name",
        p4:"✅ Hosting",
        p5:"❌ Website Optimisation",
        p6:"❌ Prototype",
        p7:"❌ Additional Changes",
        p8:"✅ Basic Security",
        p9:"✅ Delivery in 10 Days",
        p10:"✅ Responsive",
    },
];

DisplayOne.forEach(function(e){
    let card = document.createElement("div");
    card.setAttribute("id","card");

    let p1d=document.createElement("div");
    p1d.setAttribute("id","pdiv");
    let type1=document.createElement("p");
    type1.innerText = e.p1;

    let p2d=document.createElement("div");
    p2d.setAttribute("id","pdiv");
    let type2=document.createElement("p");
    type2.innerText = e.p2;

    let p3d=document.createElement("div");
    p3d.setAttribute("id","pdiv");
    let type3=document.createElement("p");
    type3.innerText = e.p3;

    let p4d=document.createElement("div");
    p4d.setAttribute("id","pdiv");
    let type4=document.createElement("p");
    type4.innerText = e.p4;

    let p5d=document.createElement("div");
    p5d.setAttribute("id","pdiv");
    let type5=document.createElement("p");
    type5.innerText = e.p5;

    let p6d=document.createElement("div");
    p6d.setAttribute("id","pdiv");
    let type6=document.createElement("p");
    type6.innerText = e.p6;

    let p7d=document.createElement("div");
    p7d.setAttribute("id","pdiv");
    let type7=document.createElement("p");
    type7.innerText = e.p7;

    let p8d=document.createElement("div");
    p8d.setAttribute("id","pdiv");
    let type8=document.createElement("p");
    type8.innerText = e.p8;

    let p9d=document.createElement("div");
    p9d.setAttribute("id","pdiv");
    let type9=document.createElement("p");
    type9.innerText = e.p9;

    let p10d=document.createElement("div");
    p10d.setAttribute("id","pdiv");
    let type10=document.createElement("p");
    type10.innerText = e.p10;
    
    let p11d=document.createElement("div");
    p11d.setAttribute("id","btndiv");
    let btn = document.createElement("button");
    btn.setAttribute("id","btn");
    btn.innerText = "Explore More !";
    btn.addEventListener("click",function(){
        window.location.href = "../work.html"
    })

    p1d.append(type1);
    p2d.append(type2);
    p3d.append(type3);
    p4d.append(type4);
    p5d.append(type5);
    p6d.append(type6);
    p7d.append(type7);
    p8d.append(type8);
    p9d.append(type9);
    p10d.append(type10);
    p11d.append(btn);

    card.append(p1d,p2d,p3d,p4d,p5d,p6d,p7d,p8d,p9d,p10d,p11d);

    document.querySelector("#display1").append(card);
});




let DisplayTwo = [
    {
        p1:"✅ Upto 10 Pages",
        p2:"✅ Scroll Animation In(3 Web-Pages)",
        p3:"✅ Domain Name",
        p4:"✅ Hosting",
        p5:"❌ Website Optimisation",
        p6:"❌ Prototype",
        p7:"✅ Additional Changes",
        p8:"✅ Basic Security",
        p9:"✅ Delivery in 10 Days",
        p10:"✅ Responsive",
    },
];

DisplayTwo.forEach(function(e){
    let card = document.createElement("div");
    card.setAttribute("id","card");

    let p1d=document.createElement("div");
    p1d.setAttribute("id","pdiv");
    let type1=document.createElement("p");
    type1.innerText = e.p1;

    let p2d=document.createElement("div");
    p2d.setAttribute("id","pdiv");
    let type2=document.createElement("p");
    type2.innerText = e.p2;

    let p3d=document.createElement("div");
    p3d.setAttribute("id","pdiv");
    let type3=document.createElement("p");
    type3.innerText = e.p3;

    let p4d=document.createElement("div");
    p4d.setAttribute("id","pdiv");
    let type4=document.createElement("p");
    type4.innerText = e.p4;

    let p5d=document.createElement("div");
    p5d.setAttribute("id","pdiv");
    let type5=document.createElement("p");
    type5.innerText = e.p5;

    let p6d=document.createElement("div");
    p6d.setAttribute("id","pdiv");
    let type6=document.createElement("p");
    type6.innerText = e.p6;

    let p7d=document.createElement("div");
    p7d.setAttribute("id","pdiv");
    let type7=document.createElement("p");
    type7.innerText = e.p7;

    let p8d=document.createElement("div");
    p8d.setAttribute("id","pdiv");
    let type8=document.createElement("p");
    type8.innerText = e.p8;

    let p9d=document.createElement("div");
    p9d.setAttribute("id","pdiv");
    let type9=document.createElement("p");
    type9.innerText = e.p9;

    let p10d=document.createElement("div");
    p10d.setAttribute("id","pdiv");
    let type10=document.createElement("p");
    type10.innerText = e.p10;
    
    
    let p11d=document.createElement("div");
    p11d.setAttribute("id","btndiv2");
    let btn = document.createElement("button");
    btn.setAttribute("id","btn2");
    btn.innerText = "Explore More !";
    btn.addEventListener("click",function(){
        window.location.href = "../work.html"
    })

    p1d.append(type1);
    p2d.append(type2);
    p3d.append(type3);
    p4d.append(type4);
    p5d.append(type5);
    p6d.append(type6);
    p7d.append(type7);
    p8d.append(type8);
    p9d.append(type9);
    p10d.append(type10);
    p11d.append(btn);

    card.append(p1d,p2d,p3d,p4d,p5d,p6d,p7d,p8d,p9d,p10d,p11d);

    document.querySelector("#display2").append(card);
});




let DisplayThree = [
    {
        p1:"✅ Minimun 15 Pages",
        p2:"✅ Scroll Animation (According to Desing)",
        p3:"✅ Domain Name",
        p4:"✅ Hosting",
        p5:"✅ Website Optimisation",
        p6:"✅ Prototype",
        p7:"✅ Additional Changes",
        p8:"✅ Basic Security",
        p9:"✅ Delivery in 10 Days",
        p10:"✅ Responsive",
    },
];

DisplayThree.forEach(function(e){
    let card = document.createElement("div");
    card.setAttribute("id","card");

    let p1d=document.createElement("div");
    p1d.setAttribute("id","pdiv");
    let type1=document.createElement("p");
    type1.innerText = e.p1;

    let p2d=document.createElement("div");
    p2d.setAttribute("id","pdiv");
    let type2=document.createElement("p");
    type2.innerText = e.p2;

    let p3d=document.createElement("div");
    p3d.setAttribute("id","pdiv");
    let type3=document.createElement("p");
    type3.innerText = e.p3;

    let p4d=document.createElement("div");
    p4d.setAttribute("id","pdiv");
    let type4=document.createElement("p");
    type4.innerText = e.p4;

    let p5d=document.createElement("div");
    p5d.setAttribute("id","pdiv");
    let type5=document.createElement("p");
    type5.innerText = e.p5;

    let p6d=document.createElement("div");
    p6d.setAttribute("id","pdiv");
    let type6=document.createElement("p");
    type6.innerText = e.p6;

    let p7d=document.createElement("div");
    p7d.setAttribute("id","pdiv");
    let type7=document.createElement("p");
    type7.innerText = e.p7;

    let p8d=document.createElement("div");
    p8d.setAttribute("id","pdiv");
    let type8=document.createElement("p");
    type8.innerText = e.p8;

    let p9d=document.createElement("div");
    p9d.setAttribute("id","pdiv");
    let type9=document.createElement("p");
    type9.innerText = e.p9;

    let p10d=document.createElement("div");
    p10d.setAttribute("id","pdiv");
    let type10=document.createElement("p");
    type10.innerText = e.p10;

    let p11d=document.createElement("div");
    p11d.setAttribute("id","btndiv");
    let btn = document.createElement("button");
    btn.setAttribute("id","btn");
    btn.innerText = "Explore More !";
    btn.addEventListener("click",function(){
        window.location.href = "../work.html"
    })

    p1d.append(type1);
    p2d.append(type2);
    p3d.append(type3);
    p4d.append(type4);
    p5d.append(type5);
    p6d.append(type6);
    p7d.append(type7);
    p8d.append(type8);
    p9d.append(type9);
    p10d.append(type10);
    p11d.append(btn);

    card.append(p1d,p2d,p3d,p4d,p5d,p6d,p7d,p8d,p9d,p10d, p11d);

    document.querySelector("#display3").append(card);
});
