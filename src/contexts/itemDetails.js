import React from 'react';

import config from '../configs/site';

const localStorageKey = 'getItemDetails';

export let itemDetails = [];
export let timestamp = 0;

export const getItemDetails = async (errorCallback) => {
    if (itemDetails.length > 0) {
        console.log("getItemDetails() cached memory:", itemDetails.length);
        return { itemDetails, timestamp } ;
    }

    try {
        const data = await getItemDetailsFromStorage();
        itemDetails = data.items; // .sort((a, b) => b.percentage - a.percentage);
        // store timestamp
        timestamp = data.timestamp;
        console.log('getItemDetails itemDetails:', itemDetails);

        // for offline
        localStorage.setItem(localStorageKey, JSON.stringify(data));

    } catch (e) {
        // Getting the Error details.
        // const code = e.code;
        // const message = e.message;
        // const details = e.details;
        // ...
        console.error("error:", e);
        if (window.gtag) {
            window.gtag('event', 'exception', {
            'description': e,
            'fatal': false
          });
        }
        if (errorCallback) {
            errorCallback();
        }
        // offline対応
        const data = getItemDetailsFromLocalStorage();
        itemDetails = data.items; // .sort((a, b) => b.percentage - a.percentage);
        // store timestamp
        timestamp = data.timestamp;
        console.log('getItemDetails itemDetails:', itemDetails);
    }
    return { itemDetails, timestamp };
};

async function getItemDetailsFromStorage() {
    const url = config.itemDetailsUrl;
    const response = await fetch(url, {
        method: 'GET',
        // headers: { "If-Match": "*" },
        // headers: { "If-Modified-Since": "Fri, 19 Feb 2010 22:04:23 GMT"},
        // "expose-headers": { "If-Match": "*" },
        mode: 'cors',
        cache: 'default'
    });
    if (!response.ok) {
        const description = `status code:${response.status} , text:${response.statusText}`;
        throw new Error(description);
    }
    const json = await response.json();
    if (!json.items) {
        json.items = [];
    }
    return json;
}

const getItemDetailsFromLocalStorage = () => {
    const data = localStorage.getItem(localStorageKey);
    return data ? JSON.parse(data) : { items: [], timestamp: Date.now() };
}

export const ItemDetailsContext = React.createContext({
    itemDetails,
    getItemDetails,
    timestamp,
});

export default ItemDetailsContext;
