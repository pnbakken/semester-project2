
    const form = document.querySelector("#login-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const valid = validateLoginForm();
        if (valid) {
            doLogin();
        } else {
            rejectLogin();
        }
    })


    function validateLoginForm() {

    }

    function doLogin() {

    }

    function rejectLogin() {
        
    }