export function initCustomCursor() {

    var innerCursor = document.querySelector('.js-inner-cursor'),
        outerCursor = document.querySelector('.js-outer-cursor'),
        cursors = [innerCursor, outerCursor];

    document.addEventListener("mousemove", (e) => {

        var xPos = e.clientX;
        var yPos = e.clientY;

        var workXPos = e.clientX;
        var workYPos = e.clientY + scrollY;

        // console.log(e);
        // console.log(xPos, yPos);
        gsap.set(innerCursor, { top: yPos, left: xPos });
        gsap.to(outerCursor, 0.5, { top: yPos, left: xPos });

    });

    let hovers = document.querySelectorAll('button, a, .js-hover, .js-drag');

    hovers.forEach(elem => {


        elem.addEventListener('mousemove', (e)=>{
            cursors.forEach(cursor => {
                cursor.classList.add('active');
                if (elem.classList.contains('big-btn')) {
                    cursor.classList.add('big');
                }
                if (elem.classList.contains('js-drag')) {
                    cursor.classList.add('drag');
                }
            });
        });

        elem.addEventListener('mouseleave', (e)=>{
            cursors.forEach(cursor => {
                cursor.classList.remove('active');
                cursor.classList.remove('big');
                cursor.classList.remove('drag');
            });
        });

    });



    // $('.js-project').hover(function(e) {
    //     $innerCursor.addClass('faded');
    //     $outerCursor.addClass('faded');
    // }, function(){
    //     $innerCursor.removeClass('faded');
    //     $outerCursor.removeClass('faded');
    // });

}