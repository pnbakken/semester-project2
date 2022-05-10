// const priceRegex = /^\d*(\.\d{0,2})?$/;

import setBackgroundImage from "../../utils/content/setBackgroundImage.js";

    const title = document.querySelector("#product-title");
    const price = document.querySelector("#product-price");
    const description = document.querySelector("#product-description");
    const featured = document.querySelector("#product-featured");
    const imageURL = document.querySelector("#product-image-url");


    productForm();
    productImage();

export function productForm() {
    const form = document.querySelector("#product-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("image clicked");
         const valid = validateProductForm(form);
    });
}

async function productImage() {
    const imageSubmit = document.querySelector("#set-image");
    imageSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        if (imageURL.value) {
           getNewProductImage(imageURL.value);
        }
    })

    async function getNewProductImage(url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                setBackgroundImage(url, document.querySelector("#new-product-image"));
            }
            console.log(response);
        } catch(err) {
            console.error(err);
        }
    }
}

function validateProductForm() {
    


    function validateText(text) {
        return (text.value.trim() >= 5);
    }

    function validateImageURL(imageURL) {
        const imageRegex = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
        return imageRegex.test(imageURL.trim());
    }

    function validatePrice(price) {
        const priceRegex = /^\d*(\.\d{0,2})?$/;
        return priceRegex.test(price.value);
    }



    function doValidation(title, price, description, featured, imageURL) {

    }
}

