import { getStoredCart, removeFromCart } from "../../../utils/content/cart/cartHandler.js";
import { commonSearch } from "../../../utils/content/search/search.js";
import setBreadcrumb from "../common/breadcrumb.js";
import createCTA from "../common/createCTA.js";

const cartContainer = document.querySelector(".cart-display-container");

(function displayCart() {
    const cart = getStoredCart();
    generateCartHTML(cart, cartContainer);
    commonSearch("./products.html");
    setBreadcrumb("Cart");
})();

function generateCartHTML(cart, target) {

    target.innerHTML = "";

    if (cart && cart.length > 0) {
        cart.forEach( (item) => {
            target.innerHTML += cartItemHTML(item);
        })
    
        target.innerHTML += "<br>Total price: " + totalCartPrice(cart) + ",-";
        
        attachRemove();
    } else {
        target.innerHTML = `<p>Cart is empty.</p>
                            ${createCTA("Why not check out our beautiful flowers","./")}`;
    }

    function cartItemHTML(item) {
        return `<div class="cart-item">
                <div class="cart-row">
                    <div class="cart-image product-image" style="background-image: url('${item.image_url}');"></div>
                    <a class="cart-title" href="./one-product.html?product_id=${item.id}">${item.title}</a>
                </div>
                <div class="cart-row">
                    <span class="cart-price">${item.price},-</span>
                    <button class="remove-button cart-button in-cart" value="remove from cart" data-id="${item.id}">Remove<div class="cart-icon"></div></button>
                </div>
                </div>`
    }

    function totalCartPrice(cart) {
        let sum = 0;

        cart.forEach((item) => sum += item.price);
        return sum;
    }
}

function attachRemove() {
    const buttons = document.querySelectorAll(".remove-button");
    buttons.forEach( (button) => {
       button.addEventListener("click", (event) => {
        const cart = removeFromCart(button.dataset.id);
        generateCartHTML(cart, cartContainer);
       });
    });
}