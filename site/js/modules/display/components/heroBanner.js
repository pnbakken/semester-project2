import setBackgroundImage from "../../utils/content/setBackgroundImage.js";
import { baseURL } from "../../utils/network/baseUrl.js";
import fetchData from "../../utils/network/fetchData.js";

export default async function heroBanner() {
    const bannerURL = baseURL + "/home";

    const banner = document.querySelector(".hero-banner");

    try {
        const heroImage = await fetchData(bannerURL);
        buildHeroBanner(heroImage, banner);
    } catch (err) {
        console.error(err);
    }                        
}

function buildHeroBanner(heroImage, target) {

    const image = unpackHeroImage(heroImage);

    setBackgroundImage(image.imageURL, target);
    target.innerHTML = `<a class="banner-link" href="#">
                                <p class="hero-text jumbo-text">${image.alt}</p>
                            </a>`;


                            
    function unpackHeroImage(heroImage) {
    
        return {
            alt : heroImage.hero_banner_alt_text,
            imageURL : heroImage.hero_banner.formats.large.url,
        };

    }
}