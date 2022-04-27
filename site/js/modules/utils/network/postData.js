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
        console.log("POSTing to " + url);
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }

}