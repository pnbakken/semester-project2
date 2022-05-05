import getOneProduct from "../../../utils/content/products/getOneProduct.js";
import { unpackProductDetails } from "./productDisplay.js";

export default async function singleProduct(id, target) {
    const product = unpackProductDetails(await getOneProduct(id));

    if (product) {
        target.innerHTML = displaySingleProduct(product);
    }

}

function displaySingleProduct(product) {
    console.log(product);
    let displayHTML = `<p>${product.title}</p>
                        <p>${product.price}</p>
                        <p>${product.description}</p>`;
    return displayHTML;
}