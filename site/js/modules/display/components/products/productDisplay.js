import { attachCart, checkCart } from "../../../utils/content/cart/cartHandler.js";
import getAllProducts from "../../../utils/content/products/getAllProducts.js";
import { doSearch, productSearch } from "../../../utils/content/search/search.js";
import { baseURL } from "../../../utils/network/baseUrl.js";
import createCartButton from "../cart/cartButton.js";
import setBreadcrumb from "../common/breadcrumb.js";

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
    target.innerHTML += productsToHTML(products);

    attachCart(products);
}

function productsToHTML(products) {

    let generatedHTML = `<div class="product-list">`;
    products.forEach((product) => {
        
        generatedHTML += `<div class="product">
                                <a class="product-header-link" href="./one-product.html?product_id=${product.id}">
                                    <div class="product-image" style="background-image:url('${product.image_url}');"></div>
                                    <span class="product-title">${product.title}</h4>
                                </a>
                                <div class="price-and-cart">
                                    <span class="product-price">${product.price},-</span>
                                    ${createCartButton(product.id)}
                                </div>
                                <a class="pseudo-button" href="./one-product.html?product_id=${product.id}">View</a>
                                
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
        const query = urlParams.get("search_query");
        const searchResults = doSearch(query, products);
        console.log(searchResults);
        buildProductDisplay(searchResults, target, `Search results for "${query}"`);
        setBreadcrumb(`Search: "${query}"`);
    } else {
        buildProductDisplay(products, target, "Products");
    }
}