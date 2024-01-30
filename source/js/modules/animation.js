import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.registerEffect({
    name: 'appear',
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            opacity: 0,
            y: config.y,
            x: config.x
        });
    },
    defaults: {
        duration: 1,
        y: 0,
        x: 0
    },
    extendTimeline: true
});

export function animateHome() {
    const tl = gsap.timeline();

    tl
        .appear('.home-slider', {y: -500})
        .appear('.custom-overlay-card[data-animation="1"]', {x: -1000}, 0)
        .appear('.custom-overlay-card[data-animation="2"]', {x: 1000}, 0)
        .appear('[data-animation="about"]', {y: 500}, 0);
}

export function animateNews() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '[data-animation="news"]',
            pin: false,
            start: 'top bottom-=150px',
            end: '+=300',
            scrub: 1
        },
    });

    tl.appear('[data-animation="news"]');
}

export function animateMain() {
    ScrollTrigger.create({
        trigger: '.home-slider',
        start: 'top top+=118px',
        pin: true,
        pinSpacing: false
    });
}