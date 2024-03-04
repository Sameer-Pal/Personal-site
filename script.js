function valueSetters(){
gsap.set("#nav a", {y:"-100%",opacity: 0});
gsap.set("#home .row .newreveal", {y:"-100%", opacity: 0})
gsap.set("#home #imagery #imagelef", {y:"-100%", opacity: 0})
gsap.set("#home #imagery .imgrig", {y:"-100%", opacity: 0})


document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'hidden') {
      document.title = "Please come back 🙏";
  } else {
      document.title = "Sameer Pal";
  }
});


}
  function revealToSpan()
  {
   document.querySelectorAll(".reveal")
   .forEach(function(elem)
   {
    var parent = document.createElement("span");
    var child = document.createElement("span");
 
    parent.classList.add("parent");
    child.classList.add("child");
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    elem.innerHTML="";
    elem.appendChild(parent);
   })
  }

function loaderAnimation() {
  var tl = gsap.timeline();
  tl
   .from(".child span",{
     x: 100,
     duration: 1,
     delay:0.5,
     stagger:0.5,
     ease: Power3.easeInOut 
    })
    .to(".parent .child",{
     y:"-100%",
     duration: 0.5,
     ease: Circ.easeInOut 
    })
    .to("#loader",{
     height: 0,
     duration: 1, 
     ease: Circ.easeInOut 
    })
  
    .to("#green",{
     height: "100%",
     top: 0,
     duration: 1,
     delay:-0.7,
     ease: Circ.easeInOut 
    })
    .to("#green",{
     height: "0%",
     duration: 0.5,
     delay:-0.4,
     ease: Circ.easeInOut,
     onComplete: function ()  {animateHomePage();}
});
}


function animateHomePage(){


   var tl = gsap.timeline();
    tl.to("#nav a",{
      y:0,
      opacity: 1,
      stagger: .05,
      delay: -0.1,
      ease: Expo.easeInOut
    })
    tl.to("#home .newreveal",{
  
      y:0,
      opacity: 1,
      stagger: .4,
      delay:-1,
      duration: 1,
      ease: Expo.easeInOut
   })
   tl.to("#home #imagery #imagelef",{
  
    y:0,
    opacity: 1,
    stagger: .4,
    delay:-1,
    duration: 1,
    ease: Expo.easeInOut
 })
 tl.to("#home #imagery .imgrig",{
  
  y:0,
  opacity: 1,
  stagger: .4,
  delay:-1,
  duration: 1.4,
  ease: Expo.easeInOut,
  duration:1,
})
   }

  
   function locomotivescroll(){
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#home'),
      smooth: true
  });
   }
   function imghover(){
    document.querySelectorAll(".cnt")
    .forEach(function(cnt) {
      var showingimg;
      cnt.addEventListener("mousemove", function(dets){
       
        document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity=1;
        showingimg = dets.target;    // if not hover stop showing 

        document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        showingimg.style.filter ="grayscale(1)"
        document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color
       })
      cnt.addEventListener("mouseleave", function(dets){
        document.querySelector("#cursor").children[showingimg.dataset.index].style.opacity=0;
        showingimg.style.filter ="grayscale(0)"
        document.querySelector("#work").style.backgroundColor = "#fff"

      })
    })
   }
// revealToSpan();
// valueSetters();
// loaderAnimation();      
// imghover();

window.onload = function() {
  revealToSpan();
  // windowleft();
  valueSetters();
  loaderAnimation();
  imghover();
};


