import { getStoredCart, removeFromCart } from "../../../utils/content/cart/cartHandler.js";

const cartContainer = document.querySelector(".cart-display-container");

(function displayCart() {
    const cart = getStoredCart();
    
    if (cart) {
        generateCartHTML(cart, cartContainer);
        
    } else {
        //Display message
    }
})();

function generateCartHTML(cart, target) {

    target.innerHTML = "";

    cart.forEach( (item) => {
        
        target.innerHTML += `<p>${item.title}</p>
                            <button class="remove-button" value="remove from cart" data-id="${item.id}">Remove</button>`;
    })
    
    attachRemove();

    function totalCartPrice(cart) {
        let sum = 0;

        cart.forEach((item) => sum += item.price);
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