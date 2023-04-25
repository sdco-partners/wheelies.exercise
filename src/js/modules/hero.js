export function initHero() {


    let hero = document.querySelector('.js-hero');

    if (hero) {

        let lines = hero.querySelectorAll('.h1 span'),
            subheadline = hero.querySelector('.h4');

        gsap.to(subheadline, 1, { opacity: 1, y: 0 });
        

        let heroAnim = gsap.timeline({ repeat: -1, repeatDelay: 1, delay: 1 })

        lines.forEach(line => {

            let splitLine = new SplitText(line, { type: "words,chars" })

            heroAnim.set(line, { display: "block" });

            heroAnim.from(splitLine.chars, 1.5, {
                opacity: 0,
                scale: 0,
                y: 80,
                rotationX: 180,
                transformOrigin: "0% 50% -50",
                ease: "back",
                stagger: 0.01,
            })
            heroAnim.from(splitLine.chars, 1.5, { 
                blur: 7, 
                stagger: 0.01,
                ease: "sine.out"
            }, "<")

            heroAnim.to(splitLine.chars, 1, {
                duration: 1.25,
                opacity: 0,
                blur: 7,
                stagger: 0.01
            }, "+=3");

            heroAnim.set(line, { display: "none" });


        });

            



    }



}