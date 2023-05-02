export function initHeroAnimation() {


    let hero = document.querySelector(".js-hero");

    if (hero) {
        console.log("yer my hero");
        let images = hero.querySelectorAll("img");
        if(images) {
            console.log("found the images");
        };
        gsap.set(images, { display: "none" });

        // let landingAnim = gsap.timeline
    }



}