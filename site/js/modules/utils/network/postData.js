export default async function postData(url, data) {
    const sendData = JSON.stringify(data);
    const options = {
        method: "POST",
        body : sendData,
        headers : {
            "Content-type" : "application/json",
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }

}