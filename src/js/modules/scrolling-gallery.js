export function initScrollingGallery() {

    let gallery = document.querySelector('.js-gallery');

    if (gallery) {

        let images = gallery.querySelectorAll('.js-image');

        images.forEach(image => {

            let media = image.querySelector('.js-media');

            console.log(media);

            let tl = gsap.timeline({
                // yes, we can add it to an entire timeline!
                scrollTrigger: {
                  trigger: image,
                  start: "top bottom", // when the top of the trigger hits the top of the viewport
                  end: "bottom bottom", // end after scrolling 500px beyond the start
                  markers: false,
                  scrub: true // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                }
              })
              .from(image, 1, { opacity: 0 })
              .from(media, 1, { scale: 1.25 }, "<");

        });

        let graphicOne = gallery.querySelector('.js-graphic-one'),
            graphicTwo = gallery.querySelector('.js-graphic-two'),
            verticalLine = gallery.querySelector('.js-vertical-line'),
            horizontalLines = gallery.querySelector('.js-horizontal-lines');
        
        if (graphicOne) {

            let wordOne = graphicOne.querySelector('.js-word-one'),
                wordTwo = graphicOne.querySelector('.js-word-two'),
                line = graphicOne.querySelector('.js-line'),
                dots = graphicOne.querySelectorAll('.js-dot');

            let graphicAnim = gsap.timeline({
                // yes, we can add it to an entire timeline!
                scrollTrigger: {
                  trigger: graphicOne,
                  start: "top center", // when the top of the trigger hits the top of the viewport
                  end: "bottom center", // end after scrolling 500px beyond the start
                  markers: false,
                  scrub: true // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                }
              })
              .from(wordOne, 1, { opacity: 0 })
              .from(line, 3, { drawSVG: "0%" })
              .from(dots, 1, { stagger: 0.2, opacity: 0 }, ">")
              .from(wordTwo, 1, { opacity: 0 }); 
        }

        if (graphicTwo) {

            let wordOne = graphicTwo.querySelector('.js-word-one'),
                wordTwo = graphicTwo.querySelector('.js-word-two'),
                line = graphicTwo.querySelector('.js-line');

            let graphicAnim = gsap.timeline({
                // yes, we can add it to an entire timeline!
                scrollTrigger: {
                  trigger: graphicTwo,
                  start: "top center", // when the top of the trigger hits the top of the viewport
                  end: "bottom center", // end after scrolling 500px beyond the start
                  markers: false,
                  scrub: true // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                }
              })
              .from(wordOne, 1, { opacity: 0 })
              .from(line, 3, { drawSVG: "0%" })
              .from(wordTwo, 1, { opacity: 0 }); 
        }

        if (verticalLine) {

            let line = verticalLine.querySelector('path');

            let graphicAnim = gsap.timeline({
                // yes, we can add it to an entire timeline!
                scrollTrigger: {
                  trigger: verticalLine,
                  start: "top center", // when the top of the trigger hits the top of the viewport
                  end: "bottom center", // end after scrolling 500px beyond the start
                  markers: false,
                  scrub: true // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                }
              })
              .from(line, 3, { drawSVG: "0%" });
        }

        if (horizontalLines) {

            let line = horizontalLines.querySelectorAll('path');

            let graphicAnim = gsap.timeline({
                // yes, we can add it to an entire timeline!
                scrollTrigger: {
                  trigger: horizontalLines,
                  start: "top center", // when the top of the trigger hits the top of the viewport
                  end: "bottom center", // end after scrolling 500px beyond the start
                  markers: false,
                  scrub: true // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                }
              })
              .from(line, 3, { drawSVG: "0%", stagger: 0.1 });
        }




    }


}