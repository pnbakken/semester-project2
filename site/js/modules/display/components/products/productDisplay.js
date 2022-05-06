import { attachCart } from "../../../utils/content/cart/cartHandler.js";
import getAllProducts from "../../../utils/content/products/getAllProducts.js";
import { baseURL } from "../../../utils/network/baseUrl.js";

export default async function productDisplay() {
    const container = document.querySelector(".products-container");
    const products = await getAllProducts();
    if (products) {
        buildProductDisplay(products, container);
        attachCart();
    }
    
}

function buildProductDisplay(products, target) {
    products.forEach( (product) => {
       target.innerHTML += productToHTML(product);
    })
}

function productToHTML(product) {
    const details = unpackProductDetails(product);
    return `<div class="product-list-item">
                <div class="product-header">
                    <div class="product-image" style="background-image:url('${details.image}');"></div>
                    <h4 class="product-name">${details.title}</h4>
                    <button class="cart-button" value="add to cart" data-id="${details.id}">Add to cart</button>
                    <a class="item-button item-link" href="./one-product.html?product_id=${details.id}">View</a>
                </div>
            </div>`;

             
}

export function unpackProductDetails(product) {
    return {
        id: product.id,
        title: product.title,
        price: product.price,
        description : product.description,
        image: baseURL + product.image.formats.thumbnail.url,
        featured: product.featured,
    }
}        