import { getFromLocal, saveToLocal } from "../../storage/storage";

export default function cartHandler(item) {
    const inCart = checkCart(item);

    if (inCart) {
        removeFromCart(item);
        return false;
    } else {
        addToCart(item);
        return true;
    }
}

function checkCart(item) {
    const cart = getStoredCart();
    
    let check = false;
    if (cart) {
        cart.forEach( (cartItem) => {
            if (item.id === cartItem.id) {
                check = true;
            }
        })
    }
    return check;
}

function addToCart(item) {
    if (getStoredCart()) {
        let cart = getStoredCart();
        cart.push(item);
        storeCart(cart);
    } else {
        let cart = [item];
        storeCart(cart);
    }
}

function removeFromCart(item) {
    let newCart = getStoredCart().filter((cartItem) => cartItem.id !== item.id);
    storeCart(newCart);
}

export function getStoredCart() {
    return getFromLocal("cart");
}

function storeCart(cart) {
    saveToLocal("cart", cart);
}