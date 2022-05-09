// const priceRegex = /^\d*(\.\d{0,2})?$/;

function productForm() {
    const form = document.querySelector("#product-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
         const valid = validateProductForm(form);
    });
}

function validateProductForm(form) {
    const title = form.querySelector("#product-title");
    const price = form.querySelector("#product-price");
}