let trigger = document.querySelector('.js-menu-trigger'),
    menu = document.querySelector('.js-mobile-menu');

if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    document.body.className += 'safari';
}

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`); 

// const popup = document.querySelector('.js-pop-up');

// setTimeout(function () {
//     popup.classList.remove('hidden');
// }, 15000)

// let closePopups = document.querySelectorAll('.js-close-pop-up');

// closePopups.forEach((closePopup) => {
//     closePopup.addEventListener('click', () => {
//         popup.classList.add('hidden');
//     });
// });


trigger.addEventListener('click', function () {
    menu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
    trigger.classList.toggle("active");
});