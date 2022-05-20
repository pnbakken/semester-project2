import { attachCart } from "../../../utils/content/cart/cartHandler.js";
import getAllProducts from "../../../utils/content/products/getAllProducts.js";
import createCartButton from "../cart/cartButton.js";
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
    attachCart(featuredProducts);

} 

function displayFeaturedProducts(featuredProducts, target) {
    console.log(target);
    if (featuredProducts) {
       target.innerHTML = createFeaturedList(featuredProducts);
    } else {
        createMessage(target, "error-message", "Something went wrong, please try again");
    }


    function createFeaturedList(featuredProducts) {
        let html = `<h2 class="list-heading featured-heading">Featured products</h2>
                    <div class="product-list featured-product-list">`;

        featuredProducts.forEach((product) => {
            html += featuredProductToHTML(product);
        })

        html += `</div>
                 <div class="content-block">
                    <p class="white-text">Check out more of our great items</p>
                    <a class="pseudo-button green-bg" href="./pages/products.html">See more</a>
                 </div>`;
        return html;
    }

    function featuredProductToHTML(product) {
        const {id, title, price, image} = product;

        return `<div class="product featured-product">
                    <a class="product-header-link" href="./pages/one-product.html?product_id=${id}">
                        <div class="product-image featured-product-image" style="background-image:url('${image}');"></div>
                        <span class="product-title featured-product-title">${title}</span>
                    </a>
                    <div class="price-and-cart">
                        <span class="product-price featured-product-price">${price},-</span>
                        ${createCartButton(id)}
                    </div>
                    <a class="pseudo-button" href="./pages/one-product.html?product_id=${id}">View</a>
                </div>`; 
    }
    
}