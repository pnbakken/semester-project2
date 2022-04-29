import singleProduct from "../components/singleProduct.js";

const queryString = location.search;
const searchParams = new URLSearchParams(queryString);
const productWrapper = document.querySelector(".product-wrapper");

let id;
if (searchParams.has("product_id")) {
    id = searchParams.get("product_id");
    console.log(searchParams.get("product_id"));
}

if (id) {
    singleProduct(id, productWrapper);
}

