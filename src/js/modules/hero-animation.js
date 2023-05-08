export function initHeroAnimation() {

    let hero = document.querySelector(".js-hero");
    let header = document.querySelector(".js-header");

    if (hero) {
        let images = hero.querySelectorAll("img");
        let tagline = hero.querySelector("h2");

        gsap.set(header, { display: "none" });
        gsap.set(images, { display: "none" });

        function fadeOut() {
            let fO = gsap.timeline({ repeat: 0, delay: 0.5 });
                fO.to(images, { opacity: 0, duration: 1.25, ease: "sine.out" });
                fO.to(tagline, { opacity: 0, duration: 1.25, ease: "sine.out" });
                return fO;
        }

        let landingAnim = gsap.timeline({ repeat: 0, delay: 0 });
            landingAnim.to(images, { display: "block", duration: 0.85, stagger: 1, onComplete: fadeOut });
    }
}