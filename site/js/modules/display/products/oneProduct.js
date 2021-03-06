import singleProduct from "../components/products/singleProduct.js";
import { attachCart } from "../../utils/content/cart/cartHandler.js";
import { commonSearch } from "../../utils/content/search/search.js";
import featuredProducts from "../components/products/featuredProducts.js";
const queryString = location.search;
const searchParams = new URLSearchParams(queryString);
const productWrapper = document.querySelector(".product-wrapper");



let id;
if (searchParams.has("product_id")) {
    id = searchParams.get("product_id");
}

if (id) {
    singleProduct(id, productWrapper);
    
}

commonSearch("./products.html");

