import { commonSearch } from "../../utils/content/search/search.js";
import productDisplay from "../components/products/productDisplay.js";

(function products() {
    productDisplay();
    commonSearch("./products.html");
})();

function checkSearch() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
}