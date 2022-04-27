const storage = window.localStorage;
console.log(storage);

export function saveToLocal(key,item) {
    storage.setItem(key, JSON.stringify(item));
}

export function getFromLocal(key) {
    const foundItem = JSON.parse(storage.getItem(key));
    if(foundItem) {
        return foundItem;
    } else return null;
}

export function clearItem(key) {
    storage.removeItem(key);
}

export function clearStorage() {
    storage.clear();
}