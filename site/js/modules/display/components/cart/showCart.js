import { getStoredCart } from "../../../utils/content/cart/cartHandler.js";

export default function showCart() {
    const cart = getStoredCart();
    if (cart) {
        //Display cart items
    } else {
        //Display message
    }
}