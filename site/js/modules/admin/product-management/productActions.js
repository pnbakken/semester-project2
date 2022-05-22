import createMessage from "../../display/components/common/message.js";
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
    const url = baseURL + "/products/";
    const method = "POST";
    await sendProduct(url, product, method)
    
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
        createMessage(document.querySelector(".form-message"), "success-message", "Action succesful");
        return result;
    } catch(err) {
        console.error(err);
        createMessage(document.querySelector(".form-message"), "error-message", err);
    }
}

export async function sendDelete(productID) {
    const url = baseURL + "/products/" + productID;
    const method = "DELETE";
    const result = await sendProduct(url, null, method);
    if (result) {
        window.location.href= "./admin-panel.html";
    }
}