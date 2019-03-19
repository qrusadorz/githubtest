import React from 'react';

import config from '../configs/site';

export let itemDetails = [];
export let timestamp = 0;

const isDevelop = process.env.NODE_ENV === "development";

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

        // TODO off line対応として開放を検討。
        if (isDevelop) {
            localStorage.setItem('itemDetails', JSON.stringify(itemDetails));
        }

        return { itemDetails, timestamp };
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
        return { itemDetails: {}, timestamp: Date.now() };
    }
};

async function getItemDetailsFromStorage() {
    const url = config.itemDetailsUrl;
    const response = await fetch(url + 'xxx', {
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

export const ItemDetailsContext = React.createContext({
    itemDetails,
    getItemDetails,
    timestamp,
});

export default ItemDetailsContext;
