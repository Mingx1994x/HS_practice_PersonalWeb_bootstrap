import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const lightPillBtn = document.querySelector('.pillBtn.cus-light-btn');
const darkPillBtn = document.querySelector('.pillBtn.cus-dark-btn');
const arrowToRight = document.querySelector('[data-gsap="arrow-right-move"]');
// console.log(lightPillBtn);

gsap.fromTo(".banner h1",
    {
        opacity: 0
    },
    {
        opacity: 1,

        scrollTrigger: {
            // markers: true,
            trigger: '.banner h1',
            start: 'top 80%',
            end: 'bottom 60%',
            toggleClass: "animate__jello",
            // scrub: 1
        },
        // duration: .8,
    })

let hoverAnimation;
lightPillBtn.addEventListener('mouseover', () => {
    hoverAnimation = gsap.fromTo(lightPillBtn,
        { boxShadow: "0px 0px 16px 3px #000" },
        {
            keyframes: {
                "0%": { boxShadow: "0px 0px 3px 0px #00FFA3" },
                "50%": { boxShadow: "0px 0px 16px 3px #00FFA3" },
                "100%": { boxShadow: "0px 0px 3px 0px #00FFA3" }
            },
            duration: 1.5,
            repeat: 4,
            repeatDelay: .3,
            yoyo: true   // Reverse the animation on each repeat
        }
    )
})

lightPillBtn.addEventListener('mouseout', () => {
    if (hoverAnimation) {
        hoverAnimation.pause();
        gsap.to(lightPillBtn, { boxShadow: "0px 0px 0px 0px #000", duration: 0.5 });
    }
})

darkPillBtn.addEventListener('mouseover', () => {
    gsap.to(darkPillBtn, {
        onStart: () => {
            darkPillBtn.classList.add('animate__animated', 'animate__shakeX')
        },
        onComplete: () => {
            darkPillBtn.classList.remove('animate__shakeX');
        },
        duration: .5,
    })
})

gsap.to(arrowToRight, {
    scrollTrigger: {
        trigger: '.contactMe',
        start: 'top 80%',
        end: 'bottom 25%',
        // markers: true,
        toggleAction: "play none reverse none",
        // scrub: 1
    },
    x: 100,
    duration: .8,
    repeat: -1
})
// const element = document.querySelector(".intro h2~p");
// console.log(element);
const introTL = gsap.timeline();
introTL.from('.intro h2', {
    x: -1000,
    y: -200,
    ease: "power3.out",
    scrollTrigger: {
        trigger: '.intro',
        start: 'top 75%',
        end: '50% 25%',
        scrub: 1
    }
})
introTL.from('.intro h2~p', {
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
        trigger: '.intro',
        start: 'top 60%',
        end: '50% 25%',
        scrub: 1
    }
})

const aboutTL = gsap.timeline();

aboutTL.from('.about h2', {
    x: 500,
    ease: "back.out",
    scrollTrigger: {
        trigger: '.about',
        start: 'top 75%',
        end: '30% 25%',
        scrub: 1
    }
})
aboutTL.from('.about h2~p', {
    x: 200,
    y: 300,
    opacity: 0,
    ease: "bounce.inOut",
    scrollTrigger: {
        // markers: true,
        trigger: '.about',
        start: 'top 60%',
        end: '20% 25%',
        scrub: 1
    }
})

const myProjectsTL = gsap.timeline();

myProjectsTL.from('.myProjects h2', {
    x: -300,
    ease: "elastic.out",
    duration: .5,
    scrollTrigger: {
        trigger: '.myProjects',
        start: 'top 80%',
        scrub: 1
    }
})
myProjectsTL.from('.myProjects .col-4', {
    x: -200,
    y: 450,
    opacity: 0,
    duration: .5,
    ease: "power4.out",
    scrollTrigger: {
        // markers: true,
        trigger: '.myProjects h2',
        start: 'bottom 90%',
        scrub: 1
    }
}, "-=.2")
myProjectsTL.from('.profile .row', {
    x: 500,
    duration: .5,
    ease: "power4.out",
    scrollTrigger: {
        // markers: true,
        trigger: '.myProjects h2',
        start: 'bottom 90%',
        scrub: 1
    }
}, "-=.2")
myProjectsTL.from('.profile .d-flex.justify-content-between', {
    y: 500,
    duration: .3,
    ease: "power4.out",
    scrollTrigger: {
        // markers: true,
        trigger: '.profile .row',
        start: "top 80%",
        scrub: 1
    }
}, "+=.5")