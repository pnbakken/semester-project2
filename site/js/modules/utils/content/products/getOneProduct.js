import fetchData from "../../network/fetchData.js";
import { baseURL } from "../../network/baseUrl.js";



export default async function getOneProduct(id) {
    const productURL = baseURL + "/products/" + id;

    const singleProduct = await fetchData(productURL);
    return  singleProduct;
}