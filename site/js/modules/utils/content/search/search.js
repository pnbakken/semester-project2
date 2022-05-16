const search = document.querySelector("#search-bar");

export function commonSearch(path) {
        
    search.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = document.querySelector("#search-input").value;
        console.log(query);
        if (query) {
            window.location.href= path + `?search_query=${query}`;
        }
    })
}

export function productSearch(products) {
    const productSearch = document.querySelector("#product-search-input");

}

export function doSearch(query, list) {
    const results = list.filter((item) => {
        if (item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase())) return true;
    })
    return results;
}