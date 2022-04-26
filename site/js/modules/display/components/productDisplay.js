import getAllProducts from "../../utils/content/getAllProducts.js";
import unpackProductDetails from "../../utils/content/unpackProductDetails.js";

export default async function productDisplay() {
    const container = document.querySelector(".products-container");
    const products = await getAllProducts();
    if (products) {
        buildProductDisplay(products, container);
    }
    
}

function buildProductDisplay(products, target) {
    products.forEach( (product) => {
       target.innrHTML += renderProduct(unpackProductDetails(product));
    })
}

function renderProduct(product) {
    return `<div class="product-list-item">
    <div class="product-header">
        <div class="product-image"></div>
        <h4 class="product-name">
    </div>
</div>`;
}