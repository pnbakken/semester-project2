import fetchData from "../../network/fetchData.js";
import { baseURL } from "../../network/baseUrl.js";

export let allProducts;

export default async function getAllProducts() {
    const productURL = baseURL + "/products";

    allProducts = await fetchData(productURL);
    return  allProducts;
}