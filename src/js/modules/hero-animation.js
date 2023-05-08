export function initHeroAnimation() {

    let hero = document.querySelector(".js-hero");
    let header = document.querySelector(".js-header");

    if (hero) {
        let images = hero.querySelectorAll("img");
        let tagline = hero.querySelector("h2");
        let donuts = hero.querySelector(".wheelies-landing-logo");

        gsap.set(header, { display: "none" });
        gsap.set(images, { display: "none" });
        gsap.set(donuts, { display: "none" });

        function slideshow() {
            let slide = gsap.timeline({ repeat: 0, delay: 0 });
                slide.to(images, { display: "block", duration: 0.75, stagger: 1, });
                return slide;
        }

        function fadeOut() {
            let fade = gsap.timeline({ repeat: 0, delay: 0.5 });
                fade.to(images, { opacity: 0, duration: 1.25, ease: "sine.out" });
                fade.to(tagline, { opacity: 0, duration: 1.25, ease: "sine.out" }, "<");
                return fade;
        }

        let landingAnim = gsap.timeline();
            landingAnim.add(slideshow());
            landingAnim.add(fadeOut(), ">");
    }
}