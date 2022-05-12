import { baseURL } from "../../utils/network/baseUrl.js";
import { getFromLocal } from "../../utils/storage/storage.js";

export async function updateProduct(product, productID) {
    const url = baseURL + "/products/" + productID;
    const method = "PUT";
    const result = await sendProduct(url, product, method)
    console.log(result);
    handleResult(result);
}

export async function createNewProduct(product) {
    const url = baseURL + "/products";
    const method = "POST";
    const result = await sendProduct(url, product, method)
    handleResult(result);
}

function handleResult(result) {
    console.log(result);
}

async function sendProduct(url, product, method) {
    const token = getFromLocal("user").jwt;
    const options = {
        method : method,
        body : JSON.stringify(product),
        headers : {
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`,
        }
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch(err) {
        console.error(err);
    }
}

export async function sendDelete(productID) {
    const url = baseURL + "/products/" + productID;
    const method = "DELETE";
    const result = await sendProduct(url, null, method);
    handleResult(result);
}