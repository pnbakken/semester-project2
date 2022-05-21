import { attachCart } from "../../../utils/content/cart/cartHandler.js";
import getOneProduct from "../../../utils/content/products/getOneProduct.js";
import createCartButton from "../cart/cartButton.js";
import setBreadcrumb from "../common/breadcrumb.js";
import addLoader from "../common/loader.js";
import createMessage from "../common/message.js";
import featuredProducts from "./featuredProducts.js";
import { unpackProductDetails } from "./productDisplay.js";

export default async function singleProduct(id, target) {
    addLoader(target);
    const product = await getOneProduct(id);
    displaySingleProduct(product, target);
    //attachCart(product) cart gets added with featuredProducts. If I attach it here it gets overwritten.
    setBreadcrumb(product.title);
    featuredProducts("./");

}

function displaySingleProduct(product, target) {
    console.log(product);
    if (product !== null) {
        target.innerHTML = singleProductHTML(product);
        document.querySelector("title").innerText += product.title;
        
    } else createMessage(target, "error", "Oops, looks like something went wrong");
    
    function singleProductHTML(product) {
        let html = `<div class="product-image single-image" style="background-image: url('${product.image_url}');"></div>
                    <h1 class="title-heading">${product.title}</h1>
                    <div class="single-product-details">
                        <p class="product-description">
                            ${product.description}
                        </p>
                        <div class="price-and-cart pc-single">
                            <span class="product-price single-price">${product.price},-</span>
                            ${createCartButton(product.id)}
                        </div>
                    </div>`;

        return html;
    }
}