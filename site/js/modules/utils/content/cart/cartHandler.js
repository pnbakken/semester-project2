import { getFromLocal, removeStorageItem, saveToLocal } from "../../storage/storage.js";




export default function cartHandler(itemID) {
    
    const inCart = checkCart(itemID);
    

    if (inCart) {
        removeFromCart(itemID);
        return false;
    } else {
        
        addToCart(itemID);
        return true;
    }
}

export function attachCart() {
    const cartButtons = document.querySelectorAll(".cart-button");
    cartButtons.forEach( (button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            cartHandler(button.dataset.id);
            console.log("added " + button.dataset.id);
        });
    });
    console.log("cart attached");
}

function checkCart(itemID) {
    const cart = getStoredCart();
    
    let check = false;
    if (cart) {
        cart.forEach( (cartItem) => {
            if (itemID === cartItem) {
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
    let newCart = getStoredCart().filter((cartItem) => cartItem !== item);
    storeCart(newCart);
}

export function getStoredCart() {
    return getFromLocal("cart");
}

function storeCart(cart) {
    if (cart.length <= 0) {
        removeStorageItem("cart");
    } else {
        saveToLocal("cart", cart);
    }
    
}