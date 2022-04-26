import getAllProducts from "../../utils/content/products/getAllProducts.js";
import { baseURL } from "../../utils/settings/baseUrl.js";

export default async function productDisplay() {
    const container = document.querySelector(".products-container");
    const products = await getAllProducts();
    if (products) {
        buildProductDisplay(products, container);
    }
    
}

function buildProductDisplay(products, target) {
    products.forEach( (product) => {
       target.innerHTML += renderProduct(product);
    })
}

function renderProduct(product) {
    const details = unpackProductDetails(product);
    return `<div class="product-list-item">
                <div class="product-header">
                    <div class="product-image" style="background-image:url('${details.image}');"></div>
                    <h4 class="product-name">${details.title}</h4>
                </div>
            </div>`;

    function unpackProductDetails(product) {
        return {
            id: product.id,
            title: product.title,
            price: product.price,
            image: baseURL + product.image.formats.thumbnail.url,
        }
    }                 
}