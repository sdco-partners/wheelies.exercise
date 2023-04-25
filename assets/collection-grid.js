function updateGrid(int) {

    let grid = document.querySelector('.js-grid');

    if (int == 1) {
        grid.classList.remove('grid--2');
    } else {
        grid.classList.add('grid--2');
    }
}