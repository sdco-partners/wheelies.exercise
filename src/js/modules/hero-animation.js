export function initHeroAnimation() {

    let hero = document.querySelector(".js-hero");
    let header = document.querySelector(".js-header");
    let contact = document.querySelector(".contact-info");

    if (hero) {
        let images = hero.querySelectorAll("img");
        let tagline = hero.querySelector("h2");
        let donuts = hero.querySelector(".wheelies-landing-logo");

        gsap.set(header, { display: "none" });
        gsap.set(images, { display: "none" });
        gsap.set(donuts, { display: "none" });

        function slideshow() {
            let image = gsap.utils.toArray(images);
            let allButLast = image.slice(0, -1);
            
            let slide = gsap.timeline({ repeat: 0, delay: 0 });
                slide.to(images, { display: "block", duration: 0.35, stagger: 1, });
                slide.to(allButLast, { display: "none" });
                
            return slide;
        }

        function fadeOut() {
            let fade = gsap.timeline({ repeat: 0, delay: 0.25 });
                fade.to(images, { opacity: 0, duration: 0.5, ease: "power1.out" });
                fade.to(tagline, { opacity: 0, duration: 0.5, ease: "power1.out" }, "<");
                
            return fade;
        }

        function donutDance() {
            
            let part1 = donuts.querySelector(".part-one");
            let part2 = donuts.querySelector(".part-two");
            let part3 = donuts.querySelector(".part-three");
            let part4 = donuts.querySelector(".part-four");
            let part5 = donuts.querySelector(".part-five");
            
            let logoParts = [part1, part2, part3, part4, part5];

            gsap.set(donuts, { display: "block", opacity: 1});
            gsap.set(logoParts, { opacity: 0});

            let dance = gsap.timeline({ repeat: 0, delay: 0 });
                dance.to(part1, { opacity: 1, duration: 0.5, ease: "power1.in" });
                dance.to(part5, { opacity: 1, duration: 0, delay: 0.75 });
                dance.to(part3, { opacity: 1, duration: 0, delay: 0.75 });
                dance.to(part4, { opacity: 1, duration: 0, delay: 0.75 });
                dance.to(part2, { opacity: 1, duration: 0, delay: 0.75 });

            return dance;
        }

        function showHeader() {
            gsap.set(header, { display: "block", opacity: 0});
            let nav = gsap.timeline({ repeat: 0, delay: 0.65 });
                nav.to(header, { opacity: 1, duration: 0.35, ease: "power1.in" });

            return nav;
        }

        let landingAnim = gsap.timeline();
            landingAnim.add(slideshow());
            landingAnim.add(fadeOut(), ">");
            landingAnim.add(donutDance(), ">");
            landingAnim.add(showHeader(), ">");
    }
}