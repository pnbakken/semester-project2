import { unpackProductDetails } from "../../display/components/products/productDisplay.js";
import getAllProducts from "../../utils/content/products/getAllProducts.js";

export default async function adminProductList() {
    const products = await getAllProducts();
    if (products && !products.error) {
        createList(products);
    }
}

function createList(products) {
    const productListContainer = document.querySelector(".product-list-container");
    buildTable(products, productListContainer);
    
    function buildTable(products, target) {
        target.innerHTML = "";

        products.forEach((product) => {
           buildTableRow(unpackProductDetails(product), target);
        });
        

        function buildTableRow(product, target) {
            const featured = product.featured ? "Featured" : "Not Featured";
            target.innerHTML += `<div class="product-line">
                                    <a href="./product-manager.html?product_id=${product.id}">${product.title}</a>
                                    ${product.id}
                                    ${product.price}`;
        }
    }
}