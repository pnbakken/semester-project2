import getAllProducts from "../../../utils/content/products/getAllProducts.js";
import { unpackProductDetails } from "./productDisplay.js";

export default async function featuredProducts() {
    
    const featuredContainer = document.querySelector(".featured-container");
    
    const products = await getAllProducts();
    console.log(featuredContainer);
    let featuredProducts;

    if (products && !products.error) {
        featuredProducts = products.filter( (product) => (product.featured)); 
    } else featuredProducts = null;
    displayFeaturedProducts(featuredProducts, featuredContainer);


} 

function displayFeaturedProducts(featuredProducts, target) {
    console.log(target);
    if (featuredProducts) {
        target.innerHTML = "";
        featuredProducts.forEach( (product) => target.innerHTML += featuredProductToHTML(product));
    }

    function featuredProductToHTML(product) {
        const featuredProduct = unpackProductDetails(product);

        return `<a href="./pages/one-product.html?product_id=${featuredProduct.id}" class="featured-product-wrapper">
                    <div class="featured-product">
                        <div class="product-image featured-product-image" style="background-image:url('${featuredProduct.image}');"></div>
                        <p class="product-title featured-product-title">${featuredProduct.title}</p>
                        <p class="product-price featured-product-price">${featuredProduct.price}</p>
                    </div>
                </a>`; 
    }
    
}