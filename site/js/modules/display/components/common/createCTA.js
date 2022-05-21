export default function createCTA(text, path) {
    return `<div class="cta">
                <p>${text}</p>
                <a class="pseudo-button green-bg" href="${path}products.html">See more</a>
            </div>`;
}