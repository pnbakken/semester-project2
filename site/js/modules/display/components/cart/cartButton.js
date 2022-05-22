import { checkCart } from "../../../utils/content/cart/cartHandler.js";

export default function createCartButton( id) {
    const inCart = checkCart(id);
    let buttonClass
    let buttonText;
    if (inCart) {
        buttonClass = "in-cart";
        buttonText = "Remove";
    } else {
        buttonClass = "";
        buttonText = "Add to cart";
    }

    return `<button class="cart-button ${buttonClass}" value="add or remove from cart" data-id="${id}">${buttonText}<div class="cart-icon"></div></button>`;
}