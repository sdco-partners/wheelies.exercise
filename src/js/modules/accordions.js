export function initAccordions() {

    function refreshScrollTrigger() {
        ScrollTrigger.refresh();
    }

    let accordions = document.querySelectorAll('.js-accordion');
    accordions.forEach((accordion) => {

        // console.log(accordion);

        let active = false, 
            trigger = accordion.querySelector('.js-accordion-trigger'),
            icon = accordion.querySelector('.js-accordion-icon'),
            content = accordion.querySelector('.js-accordion-content');

        let accordionAnim = gsap.timeline({ onComplete: refreshScrollTrigger, onReverseComplete: refreshScrollTrigger })
            .from(content, 1, { height: 0 })
            .duration(0.4)
            .paused(true);

        trigger.addEventListener("click", () => {
            if (active == false) {
                accordionAnim.play();
                active = true;
                
                if (icon) {
                    icon.classList.add('active');
                }
            } else {
                accordionAnim.reverse();
                active = false;

                if (icon) {
                    icon.classList.remove('active');
                }
            }
            
        });  


    });



}