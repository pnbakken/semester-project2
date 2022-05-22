export default function setBreadcrumb(location) {
    document.querySelector(".breadcrumb").innerHTML += `&nbsp;/&nbsp;<span class="this-location">${location}</span>`;
}