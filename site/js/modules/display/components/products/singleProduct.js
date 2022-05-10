import getOneProduct from "../../../utils/content/products/getOneProduct.js";
import { unpackProductDetails } from "./productDisplay.js";

export default async function singleProduct(id, target) {
    const product = unpackProductDetails(await getOneProduct(id));
    displaySingleProduct(product, target);

}

function displaySingleProduct(product, target) {
    console.log(product);
    target.innerHTML = `<p>${product.title}</p>
                        <p>${product.price}</p>
                        <p>${product.description}</p>`;
    
}