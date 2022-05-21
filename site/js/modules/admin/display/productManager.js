import checkLogin from "../utils/checkLogin.js";
import adminLogout from "../utils/adminLogout.js";
import getOneProduct from "../../utils/content/products/getOneProduct.js";
import setBackgroundImage from "../../utils/content/setBackgroundImage.js";
import attachProductForm, { deleteProduct } from "../product-management/productForm.js";
import { commonSearch } from "../../utils/content/search/search.js";
import setBreadcrumb from "../../display/components/common/breadcrumb.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let newProduct;


if(urlParams.get("product_id")) {
    console.log("Has product_id: " + urlParams.get("product_id"));
    displayEditProduct(urlParams.get("product_id"));
    newProduct = false;
} else {
    newProduct = true;
}

if (newProduct) {
    attachProductForm(newProduct);
    setBreadcrumb("New Product");
} else {
    attachProductForm(newProduct, urlParams.get("product_id"));
    
}




async function displayEditProduct(id) {
    const product = await getOneProduct(id);

    setBreadcrumb(product.title);
    populateEditFields(product);

    function populateEditFields(product) {
        console.log(product);
        const title = document.querySelector("#product-title");
        const price = document.querySelector("#product-price");
        const featured = document.querySelector("#product-featured");
        const description = document.querySelector("#product-description");

        const productImage = document.querySelector("#new-product-image");
        const imageURL = document.querySelector("#product-image-url");

        title.value = product.title;
        price.value = product.price;
        featured.checked = product.featured;
        description.value = product.description;

        setBackgroundImage(product.image_url, productImage);
        imageURL.value = product.image_url;

        const deleteButton = document.querySelector("#delete-product");
        deleteButton.style = "display: inline";
        deleteButton.addEventListener("click", (event) => {
            event.preventDefault();
            deleteProduct(id);
        })

    }
}

commonSearch("../products.html");