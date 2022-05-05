import checkLogin from "../utils/checkLogin.js";
import getOneProduct from "../../utils/content/products/getOneProduct.js";
import { unpackProductDetails } from "../../display/components/products/productDisplay.js";
import setBackgroundImage from "../../utils/content/setBackgroundImage.js";
import newProduct from "../product-management/newProduct.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let editing;

if(urlParams.get("product_id")) {
    console.log("Has product_id: " + urlParams.get("product_id"));
    displayEditProduct(urlParams.get("product_id"));
    editing = true;
} else {
    editing = false;
}

async function displayEditProduct(id) {
    const product = unpackProductDetails(await getOneProduct(id));

    populateEditFields(product);

    function populateEditFields(product) {
        console.log(product);
        const title = document.querySelector("#product-title");
        const price = document.querySelector("#product-price");
        const featured = document.querySelector("#is-featured");
        const description = document.querySelector("#product-description");

        const productImage = document.querySelector(".product-image");
        const imageURL = document.querySelector("#product-image-url");

        title.value = product.title;
        price.value = product.price;
        featured.checked = product.featured;
        description.value = product.description;

        setBackgroundImage(product.image, productImage);
        imageURL.value = product.image;

    }
}

function attachProductListener(editing) {

    if (editing) {
        
    } else {
        newProduct();
    }

}