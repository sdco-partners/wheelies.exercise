export function initInteractions() {

    let circleBtns = document.querySelectorAll('.js-circle-btn');

    circleBtns.forEach(btn => {

        let progress = btn.querySelector('.js-progress'),
            btnAnim = gsap.timeline();

            btnAnim.from(progress, 1, { drawSVG: "0%" })
            .paused(true);

        btn.addEventListener("mouseenter", () => {
            btnAnim.play();
            console.log('test'); 
        });
        btn.addEventListener("mouseleave", () => {
            btnAnim.reverse();
        });

    });


    let prefooterLines = document.querySelectorAll('.js-prefooter-lines');

    prefooterLines.forEach(elem => {

        let h = elem.querySelectorAll('.horizontal path'),
            v = elem.querySelectorAll('.vertical path');

        let lineAnim = gsap.timeline()
            .from(h, 1, { drawSVG: "0% 0%", stagger: 0.15 })
            .from(v, 1, { drawSVG: "0% 0%", stagger: 0.15 }, "<")
            .paused(true);

        ScrollTrigger.create({
            trigger: elem,
            start: "top 90%",
            markers: false,
            onToggle: ( self => {
                if (self.isActive) {
                    lineAnim.play();
                } else {
                    lineAnim.reverse();
                }
            })
        });
        


    });



}