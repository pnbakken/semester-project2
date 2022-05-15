const search = document.querySelector("#search-bar");

export default function search() {
    
    search.addEventListener("submit", (event) => {
        event.preventDefault();
    })

}

function doSearch(query, list) {
    const results = list.filter((item) => {
        if (item.title.toLowerCase().includes(query.toLowerCase() || item.description.toLowerCase().includes(query.toLowerCase()))) return true;
    })
}