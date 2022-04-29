import { unpackProductDetails } from "../../display/components/productDisplay.js";
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
        target.innerHTML += `<table id="product-table">
                                <tr class="top-row">
                                    <th>List of all Products</th>
                                    <th>Product ID</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Is featured</th>
                                    <th>Description</th>
                                </tr>`;

        products.forEach((product) => {
           target.innerHTML += buildTableRow(unpackProductDetails(product), target);
        });

        

        function buildTableRow(product, target) {
            const featured = product.featured ? "Featured" : "Not Featured";
            return `<tr>
                        <td>.</td>
                        <td>${product.id}</td>
                        <td>${product.title}</td>
                        <td>${product.price}</td>
                        <td>${featured}</td>
                    </tr>`;
        }
    }
}