import React from 'react';

// import firebase from '../firebase/firebase';

import config from '../configs/site';
// case firestore
// const db = firebase.app().firestore();
// case storage
// const storage = firebase.app().storage();

const localStorageKey = 'getItems';

export let items = [];
export let groups = [];
export let timestamp = 0;

// export const defaultItem = {
//     // 部分一致検索としてまとまって必須
//     id: "xxxxxx",   // nameからMD5。id
//     name: "",       // IDになるのでユニーク文字列かつ表示用。n

//     thumbnail: "",  // IDでいい気がする。同一商品で別のIDの画像を利用する場合のみ利用。tb
//     // TODO priceは部分一致にあればベストだが更新されやすいので切り離しが妥当。今後要検討。
//     price: 1000,     // 定価。p
//     bestprice: 1000, // 最高価格。p
//     percentage: 80,  // 定価との割合。pt
//     timestamp: 0,    // 更新日

//     // 詳細
//     // 説明概要
//     subheader: "",
//     // 以下変更されやすいデータ。データが大きくなったら分離予定。
//     // TODO 最終的にはクエリーに任せることも検討
//     sites: [
//         { 
//             // id: "xxxxxx",   // 使うならnameからMD5でよさそうだ
//             // name: "ショップ", // 表示しないなら不要。
//             price: 30000, 
//             url: "https:www.google.co.jp", 
//             description: ["a", "b", "x",],  // 現状未設定
//         },
//         { id: 2, name: "22", price: 0, url: "", description: ["g", "f", "d",], },
//         { id: 3, name: "33", price: 0, url: "", description: ["d", "g", "a",], },
//     ],
// };

// TODO 部分一致検索として利用する。 オフラインデータとしてパフォーマンス優先のほうがよさそう。
// TODO もう一つはFunctionsを利用して検索を実行された時のみサーバーで実行してデータをクライアントで持たない。＜＝サーバーレスだとデータ読み取り発生が多くてつらい。
// TODO コレクションの１MBの制限超過の可能性をどうするか…ドキュメントの読み取り	ドキュメント 100,000 点あたり $0.06

export const getItems = async (errorCallback) => {
    if (items.length > 0) {
        console.log("getItems() cached memory:", items.length);
        return { items, timestamp } ;
    }

    try {
        // const data = getItemsFromLocalStorage();
        // const data = await getItemsFromStore();
        const data = await getItemsFromStorage();
        items = data.items.sort((a, b) => b.percentage - a.percentage);
        // store groups
        groups = data.brands || [];
        // store timestamp
        timestamp = data.timestamp;

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
        const data = getItemsFromLocalStorage();
        items = data.items.sort((a, b) => b.percentage - a.percentage);
        // store groups
        groups = data.brands || [];
        // store timestamp
        timestamp = data.timestamp;
    }
    return { items, timestamp };
};

async function getItemsFromStorage() {
    // const pathReference = storage.ref('latest.json');
    // const url = await pathReference.getDownloadURL();
    const url = config.itemsUrl;
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

const getItemsFromLocalStorage = () => {
    const data = localStorage.getItem(localStorageKey);
    return data ? JSON.parse(data) : { items: [], brands: [], timestamp: Date.now() };
}

// async function getItemsFromStore() {
//     const collectionRef = db.collection("items");
//     // one read
//     const docRef = collectionRef.doc("latest");
//     const result = await docRef.get();
//     const data = result.data().items || [];
//     // console.log("getItems() items:", items);
//     // query one read
//     // const result = await docRef.get();
//     // const result = await collectionRef.where("store.price", "==", 22000).get();
//     // result.forEach(item => {
//     //     items = item.data() || [];
//     // });
//     // console.log("getItems() items:", items);
//     return data;
// }

// async function getItemsFromFunction() {
//     // case functions
//     // const functions = firebase.app().functions('asia-northeast1');
//     // const getItemsFunction = functions.httpsCallable('getItems');
//     // try {
//     //     const result = await getItemsFunction({});
//     //     console.log("getItems() result.data:", result.data);
//     //     items = result.data || [];
//     //     return items;
//     // } catch (e) {
//     //     // Getting the Error details.
//     //     // const code = e.code;
//     //     // const message = e.message;
//     //     // const details = e.details;
//     //     // ...
//     //     console.error("error:", e);
//     //     return [];
//     // };
// }


// const createTestItems = async () => {
//     const testItems = { store : [] };
//     for (let i = 0; i < 1000; i++) {
//         testItems.store.push({
//             id: i + 1,
//             name: "アイテム" + (i + 1),
//             price: 32000,
//             bestprice: 30000,
//             sites: [
//                 {
//                     id: 1,
//                     name: "ショップA" + i,
//                     price: 30000,
//                     url: "https:www.google.co.jp",
//                     description: [],
//                 },
//                 {
//                     id: 2,
//                     name: "ショップB" + i,
//                     price: 30000,
//                     url: "https:www.google.co.jp",
//                     description: [],
//                 },
//                 {
//                     id: 3,
//                     name: "ショップC" + i,
//                     price: 30000,
//                     url: "https:www.google.co.jp",
//                     description: [],
//                 },
//             ],
//         });
//     }

//     await db.collection("items").add(testItems);
// }

// const deleteTestItems = async (id) => {
//     try {
//         await db.collection("items").doc(id).delete();
//     } catch (e) {
//         // Getting the Error details.
//         // const code = e.code;
//         // const message = e.message;
//         // const details = e.details;
//         // ...
//         console.error("error:", e);
//     };
// }

// get item done.
// getItems();


export const ItemsContext = React.createContext({
    items,
    getItems,
    groups,
    timestamp,
});

export default ItemsContext;
