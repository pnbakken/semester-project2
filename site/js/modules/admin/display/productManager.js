import checkLogin from "../utils/checkLogin.js";
import getOneProduct from "../../utils/content/products/getOneProduct.js";
import { unpackProductDetails } from "../../display/components/productDisplay.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.get("product_id")) {
    console.log("Has product_id: " + urlParams.get("product_id"));
    displayEditProduct(urlParams.get("product_id"));
} else {
    attachNewProductListener();
}

async function displayEditProduct(id) {
    const product = unpackProductDetails(await getOneProduct(id));

    populateEditFields(product);

    function populateEditFields(product) {
        console.log(product);
        const title = document.querySelector("#product-title");
        const price = document.querySelector("#product-price");

        title.value = product.title;
        price.value = product.price;

    }
}

function attachNewProductListener() {

}