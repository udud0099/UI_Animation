gsap.from("#page1 #box", {
  scale: 0,
  duration: 3,
  rotate: 180,
});

gsap.from("#page2 #box", {
  scale: 0,
  duration: 3,
  rotate: 480,
  //   scrollTrigger: "#page2 #box",
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 20%",
    // scrub it help to animation accoding scrolling not a duration
    // scrub: true,
    scrub: 6,
    // it just like dispalay fix
    // pin:true
  },
});

gsap.to("#page4 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page4 ",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    // scrub it help to animation accoding scrolling not a duration
    // scrub: true,
    scrub: 2,
    // it just like dispalay fix
    pin: true,
  },
});
