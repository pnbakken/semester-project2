import { removeStorageItem } from "../../utils/storage/storage.js";

export default (function adminLogout() {
    const logoutButton = document.querySelector(".logout-button");
    logoutButton.addEventListener("click", (event) => {
        event.preventDefault();
        doLogout();
    })
})();

function doLogout() {
    clearUser();
    window.location.href="../../index.html";

    function clearUser() {
        removeStorageItem("user");
    }
}

