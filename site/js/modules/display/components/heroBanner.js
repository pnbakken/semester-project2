import setBackgroundImage from "../../utils/content/setBackgroundImage.js";
import { baseURL } from "../../utils/network/baseUrl.js";
import fetchData from "../../utils/network/fetchData.js";
import addLoader from "./common/loader.js";
import createMessage from "./common/message.js";

export default async function heroBanner() {
    const bannerURL = baseURL + "/home";

    const banner = document.querySelector(".hero-banner");
    addLoader(banner);
    try {
        const heroImage = await fetchData(bannerURL);
        buildHeroBanner(heroImage, banner);
    } catch (err) {
        console.error(err);
        createMessage(banner, "error", "Oops, looks like something went wrong");
    }                        
}

function buildHeroBanner(heroImage, target) {

    const image = unpackHeroImage(heroImage);

    setBackgroundImage(image.imageURL, target);
    target.innerHTML = setBannerText(image);

    function setBannerText(image) {
        return `<a class="banner-link" href="./pages/products.html">
                        <h1 class="hero-text">${image.alt}</h1>
                        <p class="pseudo-button">See more</p>
                    </a>`;
    
    }
 

                            
    function unpackHeroImage(heroImage) {
    
        return {
            alt : heroImage.hero_banner_alt_text,
            imageURL : heroImage.hero_banner.formats.large.url,
        };

    }
}