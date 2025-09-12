gsap.to("#box", {
  x: 400,
  duration: 3,
  backgroundColor: "blue",
  rotate: 180,
  // it paly 3 times - because 1 default and 2 more repeat - it is not a 2 time animation. i is repeat animation 2 times.
  repeat: 2,
  // -1 it is means paly infite
  repeat: -1,
  // gsap.to it go to one direction. yoyo it go and come back
  yoyo: true,
});

gsap.from("#box2", {
  x: 400,
  duration: 3,
  backgroundColor: "yellow",
  rotate: -180,
});

gsap.from("h1", {
  opacity: 0,
  y: 40,
  duration: 1,
  color: "red",
  //   stagger it play one by one
  //   stagger: 0.2,
  //   stagger: 5,
  //   stagger: -1,
  stagger: 1,
});

// time line start
let tl = gsap.timeline();

tl.to("#box3", {
  x: 1000,
  rotate: 30,
  duration: 3,
});
tl.to("#box4", {
  x: 1000,
  rotate: 30,
  duration: 3,
});
tl.to("#box5", {
  x: 1000,
  rotate: 30,
  duration: 3,
});
