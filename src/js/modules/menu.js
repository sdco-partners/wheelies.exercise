export function initMenu() {


    let menuTrigger = document.querySelector('.js-menu-trigger'),
        menu = document.querySelector('.js-nav');

    menuTrigger.addEventListener("click", () => {
        menuTrigger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    let menuItems = document.querySelectorAll('.js-menu-item');


    gsap.matchMedia().add("(min-width: 960px)", () => {

    
        menuItems.forEach(menuItem => {

            let image = menuItem.querySelector('.js-image'),
                svg = image.querySelector('svg');
    
            let anim = gsap.timeline()
                .fromTo(image, 0.4, { opacity: 0 }, { opacity: 1 })
                .to(svg, 1, { x: 70, ease: "sine.out" })
                .paused(true);
    
            menuItem.addEventListener("mouseover", () => {
                anim.timeScale(1).play();
            });
    
            menuItem.addEventListener("mouseleave", () => {
                gsap.to(image, { opacity: 0, onComplete: () => { anim.progress(0).pause() } })
                
            });
            
    
        });


    
    return () => { // optional
        // custom cleanup code here (runs when it STOPS matching)
    };
    });


}