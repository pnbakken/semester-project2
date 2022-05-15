import checkLogin from "./utils/checkLogin.js";
import adminProductList from "./display/adminProductList.js"; 
import { commonSearch } from "../utils/content/search/search.js";

(function adminPanel() {
    adminProductList();
    commonSearch("../products.html");
})();
