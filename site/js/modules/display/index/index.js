import featuredProducts from "../components/products/featuredProducts.js";
import heroBanner from "../components/heroBanner.js";
import {commonSearch} from "../../utils/content/search/search.js";

(function index() {
    heroBanner();
    featuredProducts("./pages/");
    commonSearch("./pages/products.html");
})();