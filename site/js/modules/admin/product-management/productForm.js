// const priceRegex = /^\d*(\.\d{0,2})?$/;

import setBackgroundImage from "../../utils/content/setBackgroundImage.js";

    const title = document.querySelector("#product-title");
    const price = document.querySelector("#product-price");
    const description = document.querySelector("#product-description");
    const featured = document.querySelector("#product-featured");
    const imageURL = document.querySelector("#product-image-url");

    let productID = null;

export default function attachProductForm(editing, id=null) {
    if (id) {
        productID = id;
    }
    productForm();
    productImage();
}
    

function productForm() {
    const form = document.querySelector("#product-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
         actionProductForm();
         
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

async function actionProductForm() {

    const valid = await checkValid();
    const product = collectProduct();
    if (valid) {
        console.log("Form valid");
        if (productID) {
            updateProduct(product, productID);
        } else {
            createNewProduct(product);
        }
    } else {
        console.log("form invalid");
    }
    
    
    function collectProduct() {
        const product = {
            "title" : title.value,
            "price" : price.value,
            "description" : description.value,
            "image_url": imageURL.value,
            "featured": featured.checked,
            
        }
        return product;
    }


    async function checkValid() {
        let valid = true;

    //Do checks and react

    if (validateText(title)) {
        toggleInvalid(title, false);
        console.log("Title valid");
    } else {
        toggleInvalid(title, true);
        valid = false;
        console.log("Title invalid");
    }

    if (await validateImageURL(imageURL)) {
        toggleInvalid(imageURL, false);
        console.log("image valid");
    } else {
        toggleInvalid(imageURL, true);
        valid = false;
        console.log("Image invalid");
    }

    if (validatePrice(price)) {
        toggleInvalid(price, false);
    } else {
        toggleInvalid(price, true);
        valid = false;
    }

    if (validateText(description)) {
        toggleInvalid(description, false);
    } else {
        toggleInvalid(description, true);
    }

    return valid;


    function toggleInvalid(target, invalid) {
        if (invalid) {
            target.classList.add("invalid-input");
        } else {
            target.classList.remove("invalid-input");
        }
    }



    function validateText(text) {
        return (text.value.trim());
    }

    async function validateImageURL(imageURL) {
        const imageRegex = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
        if (imageRegex.test(imageURL.value)) {
            try {
                const response = await fetch(imageURL.value);
                if (response.ok) {
                    return true;
                } else return false;
            } catch (err) {
                console.error(err)
                return false;
            }
        } else return false;
    }

    function validatePrice(price) {
        const priceRegex = /^\d*(\.\d{0,2})?$/;
        return (price.value);
    }
    }
}

