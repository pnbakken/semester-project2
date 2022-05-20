import getOneProduct from "../../../utils/content/products/getOneProduct.js";
import addLoader from "../common/loader.js";
import createMessage from "../common/message.js";
import { unpackProductDetails } from "./productDisplay.js";

export default async function singleProduct(id, target) {
    addLoader(target);
    const product = await getOneProduct(id);
    displaySingleProduct(product, target);

}

function displaySingleProduct(product, target) {
    console.log(product);
    if (product !== null) {
        target.innerHTML = singleProductHTML(product);
    } else createMessage(target, "error", "Oops, looks like something went wrong");
    
    function singleProductHTML(product) {
        let html = `<h1>${product.title}</h1>`;

        return html;
    }
}