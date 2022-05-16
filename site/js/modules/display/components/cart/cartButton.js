export default function createCartButton(inCart, id) {
    let buttonClass
    let buttonText;
    if (inCart) {
        buttonClass = "in-cart";
        buttonText = "In cart";
    } else {
        buttonClass = "";
        buttonText = "Add to cart";
    }

    return `<button class="cart-button ${buttonClass}" value="add or remove from cart" data-id="${id}">${buttonText}</button>`;
}