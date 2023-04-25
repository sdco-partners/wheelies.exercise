export function initPageTransitions() {


    $('a').each(function() { /* [1] */
         if ( location.hostname === this.hostname || !this.hostname.length ) { /* [1] */

            var link = $(this).attr("href"); /* [2] */

            if ( link.match("^#") ) { /* [3] */

                $(this).click(function() {
                    var target = $(link); /* [4] */ 
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); /* [4] */ 
                    if (target.length) {
                        $('html,body').animate({ /* [5] */ 
                            scrollTop: target.offset().top - 70 /* [5] */ 
                        }, 1000); return false; /* [5] */ 
                    }
                });

            } else if ( link.match("^mailto") ) { /* [6] */ 
                // Act as normal  /* [6] */ 
            } else {

                $(this).click(function(e) {
                    e.preventDefault(); /* [7] */ 
                    $('.js-fade-me').addClass('fadeSiteOut'); /* [8] */ 
                    setTimeout(function() { /* [9] */
                        window.location = link; /* [9] */
                    }, 500); /* [9] */
                });

            }

        }
    });

    (function () {
        window.onpageshow = function(event) {
            if (event.persisted) {
                window.location.reload();
            }
        };
    })();   
  
}