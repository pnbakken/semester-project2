import addLoader from "../../display/components/common/loader.js";
import createMessage from "../../display/components/common/message.js";
import getAllProducts from "../../utils/content/products/getAllProducts.js";


const productListContainer = document.querySelector(".product-list-container");

export default async function adminProductList() {
    addLoader(productListContainer);
    const products = await getAllProducts();
    if (products && !products.error) {
        createList(products, productListContainer);
    } else {
        createMessage(productListContainer, "error", "Could not get list of products");
    }
}

function createList(products, target) {
    
    target.innerHTML = buildTable(products);
    
    function buildTable(products) {
        let html = `<h2 class="system-heading">Edit products</h2>
                                <div class="product-manager-list">`;

        products.forEach((product) => {
           html += buildTableRow(product);
        });
        html += "</div>";
        return html;

        function buildTableRow(product, target) {
            const featured = product.featured ? "Featured" : "Not Featured";
            return `<div class="product-manager-item">
                                    <a href="./product-manager.html?product_id=${product.id}">${product.title}</a>
                                    ${product.id}
                                    ${product.price},-
                    </div>`;
        }
    }
}