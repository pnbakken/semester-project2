import getAllProducts from "../../utils/content/products/getAllProducts.js";
import { baseURL } from "../../utils/network/baseUrl.js";

export default async function productDisplay() {
    const container = document.querySelector(".products-container");
    const products = await getAllProducts();
    if (products) {
        buildProductDisplay(products, container);
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