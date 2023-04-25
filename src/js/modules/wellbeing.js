export function initWellbeing() {

    let wellbeing = document.querySelector('.js-wellbeing');

    if (wellbeing) {

        


        let graphicOne = wellbeing.querySelector('.js-wellbeing-graphic-one');

        if (graphicOne) {

            let lines = graphicOne.querySelectorAll('path, circle'),
                graphicOneAnim = gsap.timeline({ delay: 1 })
                .from(lines, 2, { drawSVG: "0%" })


        }
        
        

        let graphicTwo = wellbeing.querySelector('.js-wellbeing-graphic-two');

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



    }


}