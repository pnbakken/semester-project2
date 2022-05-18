export default async function fetchData(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        if (result && !result.error) {
            return result;
        } else return null;
        
    } catch (err) {
        console.error(err);
        return null;
    }
    
}