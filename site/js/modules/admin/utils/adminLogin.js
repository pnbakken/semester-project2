import postData from "../../utils/network/postData.js";
import {baseURL} from "../../utils/network/baseUrl.js";
import { saveToLocal } from "../../utils/storage/storage.js";
import createMessage from "../../display/components/common/message.js";
import clearElement from "../../display/components/common/clearElement.js";

    const form = document.querySelector("#login-form");
    const formMessage = document.querySelector(".form-message");
    const loginURL = baseURL + "/auth/local/"; 

    let loginEmail;
    let loginPassword;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        loginEmail = form.querySelector("#login-email").value;
        loginPassword = form.querySelector("#login-password").value;

        if (validateLoginForm()) {
            doLogin();
            clearElement(formMessage);
        } else {
            rejectLogin();
            createMessage(formMessage, "warning-message", "You must enter email and password");
        }
    })

    function validateLoginForm() {
        
        
        let valid = true;
        if (!validateLoginEmail(loginEmail)) {
            valid = false;
            console.log(loginEmail);
            console.log("email invalid");
        }
        if (!validatePassword(loginPassword)) {
            valid = false;
            console.log(loginPassword);
            console.log("password invalid");
        }

        return valid;

        function validateLoginEmail(email) {
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (email.trim()) {
                return emailRegex.test(email);
            } else return false;
        }

        function validatePassword(password) {
            if (password.trim()) {
                return true;
            } else return false;
        }
    }

    async function doLogin() {
        const data = {
            "identifier": loginEmail,
            "password": loginPassword,
        };
        let user = await postData(loginURL, data);
        console.log(user);
        if (!user.error) {
            storeCredentials(user);
            window.location.href = "./admin-panel.html";
        } else {
            createMessage(formMessage, "error-message", user.message[0].messages[0].message);
        }

        function storeCredentials(user) {
            const userKey = "user";

            saveToLocal(userKey, user);
        }
    }

    function rejectLogin() {

    }