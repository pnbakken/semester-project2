import { getStoredCart } from "../../../utils/content/cart/cartHandler.js";

(function displayCart() {
    const cart = getStoredCart();
    const cartContainer = document.querySelector(".cart-display-container");
    if (cart) {
        cartContainer.innerHTML = generateCartHTML(cart);
    } else {
        //Display message
    }
})();

function generateCartHTML(cart) {

    let cartString = "";

    cart.forEach( (item) => {
        
        cartString += `<p>${item}</p>`;
    })
    
    return cartString;
}