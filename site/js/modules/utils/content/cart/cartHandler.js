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
            const inCart = cartHandler(button.dataset.id);
            cartButtonClassToggle(inCart, button);
        });
    });
    console.log("cart attached");

    function cartButtonClassToggle(inCart, button) {
        if (inCart) {
            console.log(button + " is added to cart");
            button.classList.add("added-cart");
            button.innerHTML = `In cart <div class="cart-icon"></div>`;
        } else {
            button.classList.remove("in-cart", "added-cart");
            console.log(button + " is removed from cart");
            button.innerHTML = `Add to cart <div class="cart-icon"></div>`;
        }
    }
}

export function checkCart(itemID) {
    const cart = getStoredCart();
    
    let check = false;
    if (cart) {
        cart.forEach( (cartItem) => {
            if (cartItem !== null) {
                if (parseInt(itemID) === cartItem.id) {
                    check = true;
                    console.log("item already in cart");
                }
            }
        });
    }
    return check;
}

function addToCart(itemID) {
    console.log(productList);
    let product;
    if (productList.length > 1) {
        product = productList.find((item) => item.id === parseInt(itemID));
    } else {
        product = productList;
    } 
    
    console.log(itemID);
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