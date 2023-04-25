export function initScrollingAnimations() {

    let drawRight = document.querySelectorAll('.js-draw-right');

    drawRight.forEach(elem => {

        let drawAnim = gsap.from(elem, 1, { delay: 0.5, scaleX: 0, transformOrigin: "left center" }).paused(true);

        ScrollTrigger.create({
            trigger: elem,
            start: "top bottom",
            once: true
        });

        if (ScrollTrigger.isInViewport(elem, 0.2)) {
            drawAnim.play();
        }

    });

    let lineAnimations = document.querySelectorAll('.js-line-animation');

    lineAnimations.forEach(lineAnimation => {        

        let topLine = lineAnimation.querySelector('line:last-child'),
            bottomLine = lineAnimation.querySelector('line:first-child');

        let lineAnim = gsap.timeline()
            .fromTo(topLine, 1, { drawSVG: "50% 50%" }, { drawSVG: "0% 100%" })
            .fromTo(bottomLine, 1, { drawSVG: "100% 100%" }, { drawSVG: "100% 0%" }, "<")
            .paused(true);

        ScrollTrigger.create({
            trigger: lineAnimation,
            start: "top 90%",
            markers: false,
            once: true,
            onEnter: () => lineAnim.play(),
            onEnterBack: () => lineAnim.play()
        });

    });
}