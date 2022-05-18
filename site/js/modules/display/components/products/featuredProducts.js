import getAllProducts from "../../../utils/content/products/getAllProducts.js";
import addLoader from "../common/loader.js";
import createMessage from "../common/message.js";
import { unpackProductDetails } from "./productDisplay.js";

export default async function featuredProducts() {
    
    const featuredContainer = document.querySelector(".featured-container");
    addLoader(featuredContainer);
    const products = await getAllProducts();
    console.log(featuredContainer);
    let featuredProducts;

    if (products !== null) {
        featuredProducts = products.filter( (product) => (product.featured)); 
    } else featuredProducts = null;
    displayFeaturedProducts(featuredProducts, featuredContainer);


} 

function displayFeaturedProducts(featuredProducts, target) {
    console.log(target);
    if (featuredProducts) {
       target.innerHTML = createFeaturedList(featuredProducts);
    } else {
        createMessage(target, "error-message", "Something went wrong, please try again");
    }


    function createFeaturedList(featuredProducts) {
        let html = `<div class="featured-product-list">`;

        featuredProducts.forEach((product) => {
            html += featuredProductToHTML(product);
        })

        html += `</div>`;
        return html;
    }

    function featuredProductToHTML(product) {
        const featuredProduct = unpackProductDetails(product);

        return `<div class="featured-product">
                    <a class="product-header-link" href="./pages/one-product.html?product_id=${featuredProduct.id}">
                        <div class="product-image featured-product-image" style="background-image:url('${featuredProduct.image}');"></div>
                        <p class="product-title featured-product-title">${featuredProduct.title}</p>
                    </a>
                    <p class="product-price featured-product-price">${featuredProduct.price}</p>
                    <a class="pseudo-button" href="./pages/one-product.html?product_id=${featuredProduct.id}">View</a>
                </div>`; 
    }
    
}