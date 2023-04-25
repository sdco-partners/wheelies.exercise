
const cart = document.querySelector('.js-minicart');

function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

function addToCart(elem) {

    elem = this;
    let id = this.dataset.id;

    let data = {
        id: id,
        quantity: 1
    }

    let selling_plan = document.querySelector('input[name="selling_plan"]');

    if (selling_plan) {
        data = {
            id: id,
            quantity: 1,
            selling_plan: selling_plan.value
        }
    }

    const cartCounts = document.querySelectorAll('.js-cart-count');
    elem.classList.add('loading');

    console.log(elem);



    $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: data,
        dataType: 'json',
        success: function () {

            if (elem.classList.contains('js-cross-sell')) {
                document.querySelector('.js-minicart-cross-sell').remove();
            }

            $.getJSON('/cart.js', function (cart) {
                cartCounts.forEach(cartCount => {
                    cartCount.textContent = padWithLeadingZeros(cart.item_count, 2);
                    if (cart.itemCount == 0) {
                        cartCount.classList.add('hidden');
                    } else {
                        cartCount.classList.remove('hidden');
                    }
                });
            });

            elem.classList.remove('loading');

            updateCart();
            openCart();

        },
        error: function (e) {
            console.log('error: ', e);
        }

    });

};

function addMembership(e, elem) {

    elem = this;

    e.preventDefault();

    let id_select = document.querySelector('.js-membership-flavor'),
        selling_plan_select = document.querySelector('.js-selling-plan'),
        qty_select = document.querySelector('.js-membership-quantity');

    let id = id_select.options[id_select.selectedIndex].dataset.id,
        selling_plan = selling_plan_select.options[selling_plan_select.selectedIndex].value,
        qty = qty_select.options[qty_select.selectedIndex].value;


    console.log(id);
    console.log(selling_plan);
    console.log(qty);

    let data = {
        id: id,
        quantity: qty,
        selling_plan: selling_plan
    }

    elem.classList.add('loading');

    $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: data,
        dataType: 'json',
        success: function () {

            $.getJSON('/cart.js', function (cart) {
                cartCount.textContent = cart.item_count
            });

            elem.classList.remove('loading');

            updateCart();
            openCart();

        },
        error: function (e) {
            console.log('error: ', e);
        }

    });

};




function updateCart() {

    let $html = [];

    const cartItems = document.querySelector('.js-minicart-items'),
        cartTotal = document.querySelector('.js-minicart-total'),
        cartCounts = document.querySelectorAll('.js-cart-count');

    $.ajax({
        type: 'GET',
        url: '/cart?view=data.json',
        success: function (data) {

            json_response = JSON.parse(data);

            Array.prototype.forEach.call(json_response.items, function (item, index) {

                console.log(item);

                let id = item.id,
                    url = item.url,
                    image = item.image,
                    alt = item.alt,
                    title = item.title,
                    quantity = item.quantity,
                    price = item.price, 
                    subtotal = item.subtotal,
                    options = item.options;
                    options_html = '';

                options.forEach((option) => {
                    if (option.value !== 'Default Title') {
                        options_html += "<span class='minicart__item-option h5'>" + option.value + "</span>";
                    }
                });

                console.log(options);

                let $item = `
                <div class="minicart__item js-item" data-id="${ id }">
                    <a class="minicart__item-image" href="${ url }">
                        <img width="300" height="300" loading="lazy" src="${ image }"
                            alt="${ alt }" />
                    </a>
                    <div class="minicart__item-details">
                        <a class="minicart__item-title" href="${ url }">${ title }</a>
                        <span class="minicart__item-price">${ price }</span>
                        <span class="minicart__item-options">
                            ${ options_html }
                        </span>
                        <div class="minicart__item-qty">
                            <button class="js-update-qty less">-</button>
                            <input class="js-minicart-qty" type="number" data-id="${ id }" value="${ quantity }" min="1"   />
                            <button class="js-update-qty more">+</button>
                        </div>
                        <div class="minicart__item-remove h5 js-remove-item" data-id="${ id }">Remove</div>
                    </div>
                </div>
              `;
                $html.push($item);
            });

            cartItems.innerHTML = $html.join('');

            console.log('data count');
            console.log(json_response.count);

            cartCounts.forEach(cartCount => {
                cartCount.textContent = padWithLeadingZeros(json_response.count, 2);
                if (json_response.count == 0) {
                    cartCount.classList.add('hidden');
                } else {
                    cartCount.classList.remove('hidden');
                }
            });

        },
        error: function (status) {
            console.warn('ERROR', status);
        }
    });
}

var add_to_cart = document.querySelectorAll('.js-add-to-cart');
for (var i = 0; i < add_to_cart.length; i++) {
    var current = add_to_cart[i];
    current.addEventListener('click', addToCart, false);
}

var add_membership = document.querySelectorAll('.js-add-membership');
for (var i = 0; i < add_membership.length; i++) {
    var current = add_membership[i];
    current.addEventListener('click', addMembership, false);
}



function openCart(elem) {
    cart.classList.add('active');
    document.body.classList.add("menu-open");
}

function toggleCart(elem) {
    cart.classList.toggle('active');
    document.body.classList.toggle("menu-open");
}

var toggle = document.querySelectorAll('.js-toggle-cart');
for (var i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', toggleCart, false);
}

function updateQuantity(elem) {

    if (elem.classList.contains('less')) {

        let input = elem.nextElementSibling;
        input.value--;

        let qty = input.value,
            id = input.dataset.id;

        $.post('/cart/change.js', {
                    quantity: qty,
                    id: id
                },
                null,
                "json"
            )
            .done(function () {
                updateCart();
            });

    } else if (elem.classList.contains('more')) {

        let input = elem.previousElementSibling;
        input.value++;

        let qty = input.value,
            id = input.dataset.id;

        console.log(id);

        $.post('/cart/change.js', {
                    quantity: qty,
                    id: id
                },
                null,
                "json"
            )
            .done(function () {
                console.log('test?');
                updateCart();
            });

    }
}

function removeItem(elem) {

    console.log(elem);

    let id = elem.dataset.id;

    $.post('/cart/change.js', {
                quantity: 0,
                id: id
            },
            null,
            "json"
        )
        .done(function () {
            updateCart();
        });

}

function hasClass(elem, className) {
    console.log(elem);
    return elem.className.split(' ').indexOf(className) > -1;
}

document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'js-remove-item')) {
        removeItem(e.target);
    } else if (hasClass(e.target, 'js-update-qty')) {
        updateQuantity(e.target);
    }
}, false);