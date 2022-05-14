import { attachCart, checkCart } from "../../../utils/content/cart/cartHandler.js";
import getAllProducts from "../../../utils/content/products/getAllProducts.js";
import { baseURL } from "../../../utils/network/baseUrl.js";

export default async function productDisplay() {
    const container = document.querySelector(".products-container");
    const products = await getAllProducts();
    if (products) {
        console.log("displaying products");
        buildProductDisplay(products, container);
        attachCart(products);
    }
    
}

function buildProductDisplay(products, target) {
    products.forEach( (product) => {
       target.innerHTML += productToHTML(product);
    })
}

function productToHTML(product) {
    const details = unpackProductDetails(product);
    const inCart = checkCart(product.id)
    console.log("Product in cart: " + inCart);
    return `<div class="product-list-item">
                <div class="product-header">
                    <div class="product-image" style="background-image:url('${product.image_url}');"></div>
                    <h4 class="product-name">${product.title}</h4>
                    ${createCartButton(inCart, product.id)}
                    <br>
                    ${product.price}
                    <a class="item-button item-link" href="./one-product.html?product_id=${product.id}">View</a>
                </div>
            </div>`;

    function createCartButton(inCart, id) {
        let buttonClass
        let buttonText;
        if (inCart) {
            buttonClass = "in-cart";
            buttonText = "In cart";
        } else {
            buttonClass = "";
            buttonText = "Add to cart";
        }

        return `<button class="cart-button ${buttonClass} value="add or remove from cart" data-id="${id}">${buttonText}</button>`;
    }
             
}

export function unpackProductDetails(product) {
    return {
        id: product.id,
        title: product.title,
        price: product.price,
        description : product.description,
        image: product.image_url,
        featured: product.featured,
    }
}        