import "../styles/main.styl";

const controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onLeave", duration: "500%" } });

const tl = new TimelineMax();
const upArray = document.querySelectorAll(".real .up");
const downArray = document.querySelectorAll(".real .down");

for (const element of upArray) {
    tl.to(element, 5, { y: "-=1000", ease: Power2.easeOut }, 0);
}

for (const element of downArray) {
    tl.from(element, 5, { y: "-=1000", ease: Power2.easeOut }, 0);
}

tl.to(".header", 1, { x: "-100%", ease: Sine.easeIn }, 5);

// tl.from("#slideOne p", 1, { x: "-100vw", ease: Elastic.easeOut }, 5);
// tl.to("#slideOne p", 1, { x: "0vw", ease: Sine.easeIn }, 6);

tl.to(".roW", 1, { alpha: 0, ease: Power2.easeIn}, 5);
// tl.to(".illustrations p", 1, { x: "0%", ease: Sine.easeIn }, 5);
// tl.from(".ill img", 2, {x: "10%", ease: Power2.easeOut}, 6);
tl.to(".header", 1, { x: "-160%", ease: Sine.easeIn}, 6);
tl.to(".design p", 1, { color: "rgba(161, 159, 197, 0.70)", ease: Sine.easeIn}, 6);
tl.to(".illustrations p", 1, { color: "rgba(22, 20, 56, 0.7)", ease: Sine.easeIn}, 6);

const pinScene = new ScrollMagic.Scene({ triggerElement: "#pinscene" });
pinScene.setTween(tl);
pinScene.setPin("#pinscene");
pinScene.addTo(controller);
