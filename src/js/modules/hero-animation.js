export function initHeroAnimation() {

    let hero = document.querySelector(".js-hero");

    if (hero) {
        let images = hero.querySelectorAll("img");
        gsap.set(images, { display: "none" });

        let landingAnim = gsap.timeline({ repeat: 0, delay: 0 });
        landingAnim.to(images, { display: "block", duration: 1, stagger: 1 });
    }
}