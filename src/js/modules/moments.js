export function initMoments() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    let deepBreaths = gsap.timeline();

    let momentsContainer = document.querySelector('.js-moments'),
        moments = document.querySelectorAll('.js-moment'),
        momentTrigger = document.querySelector('.js-moments-trigger'),
        close = document.querySelector('.js-close-moment');
        

    if (moments && momentTrigger) {

        let countdown = momentsContainer.querySelector('.js-countdown'),
            progress = countdown.querySelector('.js-progress'),
            number = countdown.querySelector('span');

        let countdownAnim = gsap.timeline({ paused: true })
            .from(countdown, 1, { opacity: 0 })
            .fromTo(progress, 3, { drawSVG: "0%" }, { drawSVG: "100%" })
            .add(() => number.textContent = '2')
            .fromTo(progress, 3, { drawSVG: "0%" }, { drawSVG: "100%" })
            .add(() => number.textContent = '1')
            .fromTo(progress, 3, { drawSVG: "0%" }, { drawSVG: "100%" })
            .to(countdown, 1, { opacity: 0 });

        momentTrigger.addEventListener("click", () => {
            momentsContainer.classList.add('active');
            let i = getRandomInt(3);
            moments[i].classList.add('active');

            if (i = 2) {
                countdownAnim.play();
            }


        });

        close.addEventListener("click", () => {
            momentsContainer.classList.remove('active');
            number.textContent = '3';
            countdownAnim.restart(false, true);
            moments.forEach(moment => {
                moment.classList.remove('active');
            })
        });

    }

}