import { getStoredCart, removeFromCart } from "../../../utils/content/cart/cartHandler.js";
import { commonSearch } from "../../../utils/content/search/search.js";

const cartContainer = document.querySelector(".cart-display-container");

(function displayCart() {
    const cart = getStoredCart();
    generateCartHTML(cart, cartContainer);
    commonSearch("./products.html");
})();

function generateCartHTML(cart, target) {

    target.innerHTML = "";

    if (cart && cart.length > 0) {
        cart.forEach( (item) => {
        
            target.innerHTML += `<p>${item.title}</p>
                                <button class="remove-button" value="remove from cart" data-id="${item.id}">Remove</button>`;
        })
    
        target.innerHTML += "<br>Total price: " + totalCartPrice(cart);
        
        attachRemove();
    } else {
        target.innerHTML = "Shopping cart is empty";
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