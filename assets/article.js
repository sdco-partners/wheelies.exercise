let paragraphs = document.querySelectorAll('.article-template__content p');

paragraphs.forEach((p) => {
    if( p.getElementsByTagName('img').length > 1) {
        p.classList.add('images');
    }
});
