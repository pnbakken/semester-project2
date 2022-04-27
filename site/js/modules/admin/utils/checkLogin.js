import { getFromLocal } from "../../utils/settings/storage.js";

export default (function checkLogin() {
    const user = getFromLocal("user");
    if (!user) {
        window.location.href="./admin-login.html";
    }
})();