export const setToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
export const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (!data) return {};
    const value = JSON.parse(data);
    return value;
}

export default { setToLocalStorage, getFromLocalStorage };
