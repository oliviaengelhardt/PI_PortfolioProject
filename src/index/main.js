import "../styles/main.styl";

const controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onLeave", duration: "500%" } });

let isIllustrationsOn = false;
let isDesignOn = false;


const tl = new TimelineMax();
const upArray = document.querySelectorAll(".real .up");
const downArray = document.querySelectorAll(".real .down");

for (const element of upArray) {
    tl.to(element, 5, { y: "-=1000", ease: Power2.easeOut }, 0);
}

for (const element of downArray) {
    tl.from(element, 5, { y: "-=1000", ease: Power2.easeOut }, 0);
}

tl.to(".hello", 0.5, { color: "red", ease: Sine.easeOut }, 3)
tl.to(".roW", 1, { autoAlpha: 0, ease: Power2.easeIn }, 4.5);

tl.from(".ill img", 2, { x: "30%", ease: Power2.easeOut }, 5.2);
tl.to(".header", 0.5, { x: "-100%", ease: Sine.easeIn, onUpdate: illustrationsStarted, onStart: designEnded }, 5);
tl.from(".design img", 2, { x: "50%", ease: Power2.easeOut}, 6.7);
tl.to(".header", 1, { x: "-160%", ease: Sine.easeIn, onStart: illustrationsEnded, onUpdate: designStarted }, 6.5);

tl.to(".design img", 1, { alpha: 0.20, ease: Sine.easeIn }, 5.2)
tl.to(".design img", 1, { alpha: 1, ease: Sine.easeIn }, 6.7)
tl.to(".design p", 1, { color: "rgba(161, 159, 197, 0.70)", ease: Sine.easeIn }, 6.5);
tl.to(".illustrations p", 1, { color: "rgba(22, 20, 56, 0.7)", ease: Sine.easeIn }, 6.5);
tl.to(".illustrations img", 1, { alpha: 0.20, ease: Sine.easeIn }, 6.5)


const pinScene = new ScrollMagic.Scene({ triggerElement: "#pinscene" });
pinScene.setTween(tl);
pinScene.setPin("#pinscene");
pinScene.addTo(controller);



function illustrationsStarted() {
    isIllustrationsOn = true;
}

function illustrationsEnded() {
    isIllustrationsOn = false;

}

const colorChange = document.querySelector(".illustrations p");

colorChange.addEventListener("mouseenter", onMouseEnter);
colorChange.addEventListener("mouseleave", onMouseLeave);

function onMouseEnter() {
    if (isIllustrationsOn) {
        TweenMax.to(colorChange, 0.2, { color: "red" });
    }

}
function onMouseLeave() {
    if (isIllustrationsOn) {
        TweenMax.to(colorChange, 0.2, { color: "rgba(161, 159, 197, 0.70)" });
    }
}


function designStarted() {
    isDesignOn = true;
}

function designEnded() {
    isDesignOn = false;

}

const colorChange2 = document.querySelector(".design p");

colorChange2.addEventListener("mouseenter", onMouseEnter2);
colorChange2.addEventListener("mouseleave", onMouseLeave2);

function onMouseEnter2() {
    if (isDesignOn) {
        TweenMax.to(colorChange2, 0.2, { color: "red" });
    }
}
function onMouseLeave2() {
    if (isDesignOn) {
        TweenMax.to(colorChange2, 0.2, { color: "rgba(161, 159, 197, 0.70)" });
    }
}
