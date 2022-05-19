import { attachCart, checkCart } from "../../../utils/content/cart/cartHandler.js";
import getAllProducts from "../../../utils/content/products/getAllProducts.js";
import { doSearch, productSearch } from "../../../utils/content/search/search.js";
import { baseURL } from "../../../utils/network/baseUrl.js";
import createCartButton from "../cart/cartButton.js";

export default async function productDisplay() {
    const container = document.querySelector(".products-container");
    const products = await getAllProducts();
    if (products) {
        console.log("displaying products");
        checkSearch(products, container);
        
    }
    
}

function buildProductDisplay(products, target, heading) {
    target.innerHTML =`<h1>${heading}</h1>`;
    target.innerHTML += productsToHTML(products, target);

    attachCart(products);
}

function productsToHTML(products, target) {

    let generatedHTML = `<div class="product-list">`;
    products.forEach((product) => {
        const inCart = checkCart(product.id)
        generatedHTML += `<div class="product">
                                
                                    <div class="product-image" style="background-image:url('${product.image_url}');"></div>
                                    <h4 class="product-name">${product.title}</h4>
                                    ${createCartButton(product.id)}
                                    <br>
                                    ${product.price}
                                    <a class="item-button item-link" href="./one-product.html?product_id=${product.id}">View</a>
                                
                            </div>`
    });
    generatedHTML += "</div>";
    return generatedHTML;
             
}

export function unpackProductDetails(product) {
    return {
        id: product.id,
        title: product.title,
        price: product.price,
        description : product.description,
        image: product.image_url,
        featured: product.featured,
    }
}        

function checkSearch(products, target) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams.get("search_query"));
    if (urlParams.has("search_query")) {
        const searchResults = doSearch(urlParams.get("search_query"), products);
        console.log(searchResults);
        buildProductDisplay(searchResults, target, `Search results for "${urlParams.get("search_query")}"`);
    } else {
        buildProductDisplay(products, target, "Products");
    }
}