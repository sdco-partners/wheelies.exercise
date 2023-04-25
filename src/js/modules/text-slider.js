export function initTextSlider() {

    let textSlider = document.querySelector('.js-text-slider');

    if (textSlider) {

        const swiper = new Swiper(textSlider, {
            speed: 400,
            loop: true,
            slidesPerView: 1,
            centeredSlides: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        });

    }



}