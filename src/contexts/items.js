import React from 'react';

import firebase from '../firebase/firebase';

// TODO: データ収集の形式に応じて変更が必要。
// 例えば完全に並列実行の場合、どちらかといえばShopごとに取得するため商品ごとだと微妙。
// 配列化はクライアントにさせ、データとしてはIDでアクセスできる形式が効率よさげ。
// TODO しばらく暫定
export const defaultItems = [
        {
            id: 1,
            title:"アイテムN", 
            price: 30000,
            shops: [
                {
                    id: 1,
                    title: "ショップA",
                    price: 30000,
                    url: "https:www.google.co.jp",
                    description: [],
                },
                {
                    id: 2,
                    title: "ショップB",
                    price: 30000,
                    url: "https:www.google.co.jp",
                    description: [],
                },
                {
                    id: 3,
                    title: "ショップC",
                    price: 30000,
                    url: "https:www.google.co.jp",
                    description: [],
                },
            ],
        },
        {
            id: 2,
            title:"アイテムP", 
            price: 22000,
            shops: [
                {
                    id: 1,
                    title: "ショップA",
                    price: 22000,
                    url: "https:www.google.co.jp",
                    description: [],
                },
                {
                    id: 2,
                    title: "ショップB",
                    price: 21000,
                    url: "https:www.google.co.jp",
                    description: [],
                },
                {
                    id: 3,
                    title: "ショップC",
                    price: 20000,
                    url: "https:www.google.co.jp",
                    description: [],
                },
            ],
        },
        {
            id: 3,
            title:"アイテムS", 
            price: 17500,
            shops: [
                {
                    id: 1,
                    title: "ショップA",
                    price: 17500,
                    url: "https:www.google.co.jp",
                    description: [],
                },
                {
                    id: 2,
                    title: "ショップB",
                    price: 17000,
                    url: "https:www.google.co.jp",
                    description: [],
                },
                {
                    id: 3,
                    title: "ショップC",
                    price: 16000,
                    url: "https:www.google.co.jp",
                    description: [],
                },
            ],
        },
    ];
export let items = [];

// export const defaultItems = {
//     id: 0,
//     title: "",
//     subheader: "",
//     // 以下変更されやすいデータ
//     // TODO priceは廃止の可能性あり
//     price: "",
//     // TODO クエリーに任せるといいかもしれない。
//     shops: [
//         { id: 1, title: "11", price: 0, url: "", description: ["a", "b", "x",], },
//         { id: 2, title: "22", price: 0, url: "", description: ["g", "f", "d",], },
//         { id: 3, title: "33", price: 0, url: "", description: ["d", "g", "a",], },
//     ],
// };

// TODO 部分一致検索として利用する。 オフラインデータとしてパフォーマンス優先のほうがよさそう。
// TODO もう一つはFunctionsを利用して検索を実行された時のみサーバーで実行してデータをクライアントで持たない。＜＝サーバーレスだとデータ読み取り発生が多くてつらい。
// TODO コレクションの１MBの制限超過の可能性をどうするか…ドキュメントの読み取り	ドキュメント 100,000 点あたり $0.06
const itemTitles = [
    {
        id: 1,
        title: "アイテムN",
    },
    {
        id: 2,
        title: "アイテムP",
    },
    {
        id: 3,
        title: "アイテムS",
    },
];

export const findItems = text => {
    console.log("findItems() :", text);

    // TODO upperlowwer

    // TODO Find
    const items = itemTitles.find(element => {
        return element.title.includes(text);
    });

    return items;
};

export const getItems = async (id) => {
    console.log("getItems() length:", items.length);
    if (items.length > 0) {
        console.log("getItems() cached:", items);
        return items;
    }

    // case functions
    // const functions = firebase.app().functions('asia-northeast1');
    // const getItemsFunction = functions.httpsCallable('getItems');
    // try {
    //     const result = await getItemsFunction({});
    //     console.log("getItems() result.data:", result.data);
    //     items = result.data || [];
    //     return items;
    // } catch (e) {
    //     // Getting the Error details.
    //     // const code = e.code;
    //     // const message = e.message;
    //     // const details = e.details;
    //     // ...
    //     console.error("error:", e);
    //     return [];
    // };

    // case firestore
    const db = firebase.app().firestore();
    try {
        // write
        // const result = await db.collection("items").add(defaultItems);
        const collectionRef = db.collection("items");
        // one read
        const docRef = collectionRef.doc("7fIiwMd74s2EYYU2HVdN");
        const result = await docRef.get();
        console.log("getItems() result:", result);
        items = result.data().store || [];
        console.log("getItems() items:", items);
        // query one read
        // const result = await docRef.get();
        // const result = await collectionRef.where("store.price", "==", 22000).get();
        // result.forEach(item => {
        //     items = item.data() || [];
        // });
        // console.log("getItems() items:", items);

        // const is = {
        //     "1": {id: 1},
        //     "2": {id: 2},
        //     "3": {id: 3},
        //     "4": {id: 4},
        // };

        // console.log("★★★ is:", is);
        // console.log("★★★ is.keys:", Object.keys(is).map(key => is[key]));

        return items;
    } catch (e) {
        // Getting the Error details.
        // const code = e.code;
        // const message = e.message;
        // const details = e.details;
        // ...
        console.error("error:", e);
        return [];
    };

};

export const ItemsContext = React.createContext({
    items,
    getItems,
    // TODO TEST いずれItemsに統合するかもしれない
    itemTitles,
});

export default ItemsContext;