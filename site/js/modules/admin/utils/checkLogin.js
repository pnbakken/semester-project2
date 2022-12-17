import { getFromLocal } from "../../utils/storage/storage.js";

export default (function checkLogin() {
    const user = getFromLocal("user");
    if (!user) {
        window.location.href="./admin-login.html";
    } else {
        document.querySelector(".logout-button").style="display: inline;";
    }
})();