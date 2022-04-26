import fetchData from "../../network/fetchData.js";
import { baseURL } from "../../settings/baseUrl.js";

export default async function getAllProducts() {
    const productURL = baseURL + "/products";

    const allProducts = await fetchData(productURL);
    return  allProducts;
}