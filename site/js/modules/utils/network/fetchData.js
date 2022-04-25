export default async function fetchData(url) {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;
}