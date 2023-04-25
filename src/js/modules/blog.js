export function initBlog() {

    let blog = document.querySelector('.js-blog');

    if (blog) {

        let controls  = blog.querySelector('[data-ref="controls"]'),
            filters   = blog.querySelectorAll('[data-ref="filter"]'),
            sorts     = blog.querySelectorAll('[data-ref="sort"]'),
            container = blog.querySelector('[data-ref="container"]');

        let filterTrigger = blog.querySelector('.js-filter-trigger'),
            filterContainer = blog.querySelector('.js-filter-items'),
            filterItems = blog.querySelectorAll('.js-filter'),
            open = false;

        let openFilter = gsap.timeline({ paused: true })
            .from(filterContainer, 0.4, { height: "0px", padding: "0px" })
            .from(filterItems, 1, { opacity: 0, stagger: 0.2 })
            .duration(1);

        filterTrigger.addEventListener("click", () => {
            if (open) {
                filterTrigger.classList.remove('active');
                openFilter.reverse();
                open = false;
            } else {
                filterTrigger.classList.add('active');
                openFilter.play();
                open = true;
            }
        });



        let currentLimit = 8,
            incrementAmount = 3,
            total = blog.querySelectorAll('.article-card').length,
            activeCategory = '';

        let mixer = mixitup(container, {
            animation: {
                effectsOut: 'fade translateY(200%)',
                effectsIn: 'fade translateY(100%)',
            },
            pagination: {
                limit: currentLimit
            },
            selectors: {
                target: '[data-ref="item"]' // Query targets with an attribute selector to keep our JS and styling classes seperate
            },
            callbacks: {
                onMixStart: function() {
                    let state = mixer.getState();

                    state.targets.forEach((elem, i) => {
                        elem.classList.remove('featured');
                    });

                },
                onMixEnd: function() {
                    let state = mixer.getState();

                    let matching = state.matching,
                        hide = state.hide;

                    matching.forEach((elem, i) => {
                        console.log(i);
                        if (i < 2) {
                            elem.classList.add('featured');
                        } else {
                            elem.classList.remove('featured');
                        } 
                    });

                    hide.forEach((elem, i) => {
                        elem.classList.remove('featured');
                    });
                  
                }
            }
        });

        function handleLoadMoreClick() {
            // On each click of the load more button, we increment
            // the current limit by a defined amount
    
            currentLimit += incrementAmount;

            if (currentLimit >= total) {
                loadMore.classList.add('hidden');
            }

            let match = document.querySelector('.js-match');
            
            if (match <= total) {
                match.textContent = currentLimit;
            } else {
                match.textContent = total;
            }   

            
    
            mixer.paginate({limit: currentLimit});
        }

        let loadMore = blog.querySelector('.js-load-more');

        loadMore.addEventListener('click', handleLoadMoreClick);

    }




}