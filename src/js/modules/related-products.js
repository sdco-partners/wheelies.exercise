export function initRelatedProducts() {

    let relatedProducts = document.querySelector('.js-related-products');
    
    if (relatedProducts) {

        const swiper = new Swiper(relatedProducts, {
            speed: 400,
            loop: true,
            slidesPerView: 1,
            centeredSlides: true
        });



    }


}