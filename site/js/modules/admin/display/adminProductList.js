import getAllProducts from "../../utils/content/products/getAllProducts.js";

export default async function adminProductList() {
    const products = getAllProducts();
    if (products && !products.error) {
        createList(products);
    }
}

function createList(products) {
    const productListContainer = document.querySelector(".product-list-container");

    
}