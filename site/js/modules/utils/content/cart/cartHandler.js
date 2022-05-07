import { getFromLocal, removeStorageItem, saveToLocal } from "../../storage/storage.js";


let productList = [];

function cartHandler(itemID) {
    
    const inCart = checkCart(itemID);
    

    if (inCart) {
        removeFromCart(itemID);
        return false;
    } else {
        
        addToCart(itemID);
        return true;
    }
}

export function attachCart(products) {
    productList = products;
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

function addToCart(itemID) {
    console.log(productList);
    const product = productList.find((item) => item.id === parseInt(itemID));
    console.log(product);
    if (getStoredCart()) {
        let cart = getStoredCart();
        cart.push(product);
        storeCart(cart);
    } else {
        let cart = [product];
        storeCart(cart);
    }
}

export function removeFromCart(itemID) {
    let newCart = getStoredCart().filter((cartItem) => cartItem.id !== parseInt(itemID));
    storeCart(newCart);
    return newCart;
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