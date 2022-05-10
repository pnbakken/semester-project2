const storage = window.localStorage;

export function saveToLocal(key,item) {
    console.log("Storing " + item + " to " + key);
    storage.setItem(key, JSON.stringify(item));
}

export function getFromLocal(key) {
    const foundItem = JSON.parse(storage.getItem(key));
    if(foundItem) {
        return foundItem;
    } else return null;
}

export function removeStorageItem(key) {
    storage.removeItem(key);
}

export function clearStorage() {
    storage.clear();
}