import setBackgroundImage from "../../utils/content/setBackgroundImage.js";

export default async function jumbotron() {
    const imageURL = "";

    const jumbotron = document.querySelector(".jumbotron");
    const heroImage = "../../../../../assets/images/hero-image.jpg";

    setBackgroundImage(heroImage, jumbotron);
    jumbotron.innerHTML = `<a class="jumbo-link" href="#">
                                <h2 class="hero-heading jumbo-heading">On some faraway beach</h2>
                                <p class="hero-text jumbo-text">New seascape collection in store</p>
                            </a>`;
                            
}