import { attachCart } from "../../../utils/content/cart/cartHandler.js";
import getAllProducts from "../../../utils/content/products/getAllProducts.js";
import createCartButton from "../cart/cartButton.js";
import createCTA from "../common/createCTA.js";
import addLoader from "../common/loader.js";
import createMessage from "../common/message.js";

export default async function featuredProducts(itemPath) {
    
    const featuredContainer = document.querySelector(".featured-container");
    addLoader(featuredContainer);
    const products = await getAllProducts();
    console.log(featuredContainer);
    let featuredProducts;

    if (products !== null) {
        featuredProducts = products.filter( (product) => (product.featured)); 
    } else featuredProducts = null;
    displayFeaturedProducts(featuredProducts, featuredContainer, itemPath);
    attachCart(featuredProducts);

} 

function displayFeaturedProducts(featuredProducts, target, itemPath) {
    console.log(target);
    if (featuredProducts) {
       target.innerHTML = createFeaturedList(featuredProducts, itemPath);
    } else {
        createMessage(target, "error-message", "Something went wrong, please try again");
    }


    function createFeaturedList(featuredProducts, itemPath) {
        let html = `<h2 class="list-heading featured-heading">Featured products</h2>
                    <div class="product-list featured-product-list">`;

        featuredProducts.forEach((product) => {
            html += featuredProductToHTML(product, itemPath);
        })

        html += `</div>
                 ${createCTA("See more of our beautiful flowers", itemPath)}`;
        return html;
    }

    function featuredProductToHTML(product, itemPath) {
        const {id, title, price, image_url} = product;

        return `<div class="product featured-product">
                    <a class="product-header-link" href="${itemPath}one-product.html?product_id=${id}">
                        <div class="product-image featured-product-image" style="background-image:url('${image_url}');"></div>
                        <span class="product-title featured-product-title">${title}</span>
                    </a>
                    <div class="price-and-cart">
                        <span class="product-price featured-product-price">${price},-</span>
                        ${createCartButton(id)}
                    </div>
                    <a class="pseudo-button" href="${itemPath}one-product.html?product_id=${id}">View</a>
                </div>`; 
    }
    
}