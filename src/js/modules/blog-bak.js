export function initBlog() {

    let blog = document.querySelector('.js-blog');

    if (blog) {

        let controls  = document.querySelector('[data-ref="controls"]'),
            filters   = document.querySelectorAll('[data-ref="filter"]'),
            sorts     = document.querySelectorAll('[data-ref="sort"]'),
            container = document.querySelector('[data-ref="container"]');

        $.ajax({
            type: 'GET',
            url: '/blogs/face-forward?view=data.json',
            success: function (data) {
                let json_response = JSON.parse(data);
                
                console.log('test');
                console.log(json_response);

                let items = json_response.articles;

                const initItems = items.slice(0, 8);

                console.log(initItems);

                let api = new Api(items);

                console.log(api);

                let activeCategory = '',
                    total = 9, 
                    currentLimit = 8,
                    incrementAmount = 3,
                    loadMore = blog.querySelector('.js-load-more');

                let mixer = mixitup(container, {
                    pagination: {
                        limit: currentLimit
                    },
                    selectors: {
                        target: '[data-ref="item"]' // Query targets with an attribute selector to keep our JS and styling classes seperate
                    },
                    load: {
                        dataset: initItems // As we have pre-rendered targets, we must "prime" MixItUp with their underlying data
                    },
                    data: {
                        uidKey: 'id' // Our data model must have a unique id. In this case, its key is 'id'
                    },
                    render: { // We must provide a target render function incase we need to render new items not in the initial dataset (not used in this demo)
                        target: function(item) {
                            return `<article class="article-card ${ item.category }" data-ref="item">
                                            <a class="article-card__image" href="${ item.url }">
                                                <img src="${ item.image }" />
                                            </a>
                                            <span class="article-card__tag h5">${ item.category_title }</span>
                                            <a class="article-card__title" href="${ item.url }">
                                                <h1 class="h3">${ item.title }</h1>
                                            </a>
                                    </article>`;

                        }
                    }
                });

                activateButton(controls.querySelector('[data-category="all"]'), filters);
                activateButton(controls.querySelector('[data-order="asc"]'), sorts);

                // NB: Always remember to destroy the instance with mixer.destroy() when your
                // component unmounts to ensure that event handlers are unbound and the
                // instance can be garbage collected.

                // Finally, load the full dataset into the mixer

                mixer.dataset(items)
                .then(function(state) {
                    console.log('loaded ' + state.activeDataset.length + ' items');
                });

                function handleLoadMoreClick() {
                    // On each click of the load more button, we increment
                    // the current limit by a defined amount
            
                    currentLimit += incrementAmount;
    
                    if (currentLimit >= total) {
                        loadMore.classList.add('hidden');
                    }
            
                    mixer.paginate({limit: currentLimit});
                }
    
                loadMore.addEventListener('click', handleLoadMoreClick);

                 /**
             * A helper function to set an active styling class on an active button,
             * and remove it from its siblings at the same time.
             *
             * @param {HTMLElement} activeButton
             * @param {HTMLELement[]} siblings
             * @return {void}
             */

            function activateButton(activeButton, siblings) {
                var button;
                var i;

                for (i = 0; i < siblings.length; i++) {
                    button = siblings[i];

                    button.classList[button === activeButton ? 'add' : 'remove']('control-active');
                }
            }

            /**
             * A click handler to detect the type of button clicked, read off the
             * relevent attributes, call the API, and trigger a dataset operation.
             *
             * @param   {HTMLElement} button
             * @return  {void}
             */

            function handleButtonClick(button) {
                // Define default values for category, sortBy and order
                // incase they are not present in the clicked button

                var category  = activeCategory;
                var sortBy = 'id';
                var order  = 'asc';

                // If button is already active, or an operation is in progress, ignore the click

                if (button.classList.contains('control-active') || mixer.isMixing()) return;

                // Else, check what type of button it is, if any

                if (button.matches('[data-ref="filter"]')) {
                    // Filter button

                    activateButton(button, filters);

                    category = activeCategory = button.getAttribute('data-category');

                    console.log(category);

                } else if (button.matches('[data-ref="sort"]')) {
                    // Sort button

                    activateButton(button, sorts);

                    sortBy = button.getAttribute('data-key');
                    order = button.getAttribute('data-order');
                } else {
                    // Not a button

                    return;
                }

                // Now that we have our category filter and sorting order, we can fetch some data from the API.

                api.get({
                    category: category
                    // $sort_by: sortBy,
                    // $order: order
                })
                .then(function(items) {
                    // Our api returns an array of items which we can send
                    // straight to our mixer using the .dataset() method

                    return mixer.dataset(items);
                })
                .then(function(state) {
                    console.log('fetched ' + state.activeDataset.length + ' items');
                })
                .catch(console.error.bind(console));
            }

            // We can now set up a handler to listen for "click" events on our UI buttons

            controls.addEventListener('click', function(e) {
                handleButtonClick(e.target);
            });

                },
                error: function (status) {
                    console.warn('ERROR', status);
                }
            });

        // Set controls the active controls on startup to match the default filter and sort

        


    }




}