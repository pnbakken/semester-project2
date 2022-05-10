export default function setBackgroundImage(imageURL, target) {
    target.style = `background-image:url("${imageURL}");
                    display: block;`;
}