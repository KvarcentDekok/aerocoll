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
            x: config.x,
            scale: config.scale
        });
    },
    defaults: {
        duration: 1,
        y: 0,
        x: 0,
        scale: 1
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

    ScrollTrigger.create({
        trigger: '.home-slider',
        start: 'top top+=118px',
        pin: true,
        pinSpacing: false
    });
}

export function animateAbout() {
    const tl = gsap.timeline();

    function getX(index) {
        switch (index) {
            case 2:
                return -100;
            case 3:
                return 100;
            default: return 0;
        }
    }

    function getY(index) {
        switch (index) {
            case 0:
                return -100;
            case 1:
                return -100;
            case 4:
                return 100;
            case 5:
                return 100;
            default: return 0;
        }
    }

    tl.appear('[data-animation="about"]', {scale: 0.9});

    gsap.utils.toArray('.features__item').forEach((element, i) => {
        tl.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'center bottom',
                end: 'top bottom',
                scrub: 2,
                toggleActions: 'restart pause reverse pause'
            },
            x: getX(i),
            y: getY(i),
            opacity: 0,
            ease: "power1.inOut"
        });
    });

    gsap.utils.toArray('.custom-activity-card').forEach((element, i) => {
        tl.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top bottom-=100px',
                end: '+=200px',
                scrub: 2,
                toggleActions: 'restart pause reverse pause'
            },
            x: i % 2 === 0 ? -300 : 300,
            opacity: 0,
            ease: "power1.inOut"
        });
    });

    tl.from('[data-animation="geography"]', {
        scrollTrigger: {
            trigger: '[data-animation="geography"]',
            start: 'top bottom+=100px',
            end: '+=200px',
            scrub: 2,
            toggleActions: 'restart pause reverse pause'
        },
        y: 300,
        opacity: 0,
        ease: "power1.inOut"
    });
}