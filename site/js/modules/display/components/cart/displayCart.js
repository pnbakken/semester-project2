import { getStoredCart } from "../../../utils/content/cart/cartHandler.js";

export default function displayCart() {
    const cart = getStoredCart();
    if (cart) {
        displayCart(cart);
    } else {
        //Display message
    }
}

function displayCart(cart) {
    console.log(cart);
}