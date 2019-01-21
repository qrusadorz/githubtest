import React from 'react';

import firebase from '../firebase/firebase';

// case firestore
const db = firebase.app().firestore();

// TODO: データ収集の形式に応じて変更が必要。
// 例えば完全に並列実行の場合、どちらかといえばShopごとに取得するため商品ごとだと微妙。
// 配列化はクライアントにさせ、データとしてはIDでアクセスできる形式が効率よさげ。
// TODO しばらく暫定
export const defaultItems = [
    {
        id: 1,
        name: "アイテムN",
        price: 30000,
        shops: [
            {
                id: 1,
                name: "ショップA",
                price: 30000,
                url: "https:www.google.co.jp",
                description: [],
            },
            {
                id: 2,
                name: "ショップB",
                price: 30000,
                url: "https:www.google.co.jp",
                description: [],
            },
            {
                id: 3,
                name: "ショップC",
                price: 30000,
                url: "https:www.google.co.jp",
                description: [],
            },
        ],
    },
    {
        id: 2,
        name: "アイテムP",
        price: 22000,
        shops: [
            {
                id: 1,
                name: "ショップA",
                price: 22000,
                url: "https:www.google.co.jp",
                description: [],
            },
            {
                id: 2,
                name: "ショップB",
                price: 21000,
                url: "https:www.google.co.jp",
                description: [],
            },
            {
                id: 3,
                name: "ショップC",
                price: 20000,
                url: "https:www.google.co.jp",
                description: [],
            },
        ],
    },
    {
        id: 3,
        name: "アイテムS",
        price: 17500,
        shops: [
            {
                id: 1,
                name: "ショップA",
                price: 17500,
                url: "https:www.google.co.jp",
                description: [],
            },
            {
                id: 2,
                name: "ショップB",
                price: 17000,
                url: "https:www.google.co.jp",
                description: [],
            },
            {
                id: 3,
                name: "ショップC",
                price: 16000,
                url: "https:www.google.co.jp",
                description: [],
            },
        ],
    },
];
export let items = [];

export const defaultItem = {
    // 部分一致検索としてまとまって必要
    id: 0,  // nameからMD5?
    name: "",
    // TODO priceは部分一致にあればベストだが更新されやすいので切り離しが妥当と思う。
    price: 1000,

    // 詳細
    // 説明概要
    subheader: "",
    // 以下変更されやすいデータ
    // TODO クエリーに任せるといいかもしれない。
    shops: [
        { 
            id: 1, // nameからMD5?
            name: "ショップ", 
            price: 30000, 
            url: "https:www.google.co.jp", 
            description: ["a", "b", "x",], 
        },
        { id: 2, name: "22", price: 0, url: "", description: ["g", "f", "d",], },
        { id: 3, name: "33", price: 0, url: "", description: ["d", "g", "a",], },
    ],
};

// TODO 部分一致検索として利用する。 オフラインデータとしてパフォーマンス優先のほうがよさそう。
// TODO もう一つはFunctionsを利用して検索を実行された時のみサーバーで実行してデータをクライアントで持たない。＜＝サーバーレスだとデータ読み取り発生が多くてつらい。
// TODO コレクションの１MBの制限超過の可能性をどうするか…ドキュメントの読み取り	ドキュメント 100,000 点あたり $0.06
const itemTitles = [
    {
        id: 1,
        name: "アイテムN",
    },
    {
        id: 2,
        name: "アイテムP",
    },
    {
        id: 3,
        name: "アイテムS",
    },
];

// export const findItems = text => {
//     console.log("findItems() text:", text);

//     // TODO upperlowwer

//     // TODO Find
//     const items = itemTitles.find(element => {
//         return element.name.includes(text);
//     });

//     return items;
// };

export const getItems = async (id) => {
    console.log("getItems() length:", items.length);
    if (items.length > 0) {
        // console.log("getItems() cached:", items);
        console.log("getItems() cached");
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

    try {
        // write
        // await createTestItems();
        // delete
        // await deleteTestItems();
        const collectionRef = db.collection("items");
        // one read
        const docRef = collectionRef.doc("Dwnt22xauW0F8AZIb6rh");
        const result = await docRef.get();
        // console.log("getItems() result:", result);
        items = result.data().store || [];
        // console.log("getItems() items:", items);
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

const createTestItems = async () => {
    // TODO create testdata
    const testItems = { store : [] };
    for (let i = 0; i < 1000; i++) {
        testItems.store.push({
            id: i + 1,
            name: "アイテム" + (i + 1),
            price: 30000,
            shops: [
                {
                    id: 1,
                    name: "ショップA" + i,
                    price: 30000,
                    url: "https:www.google.co.jp",
                    description: [],
                },
                {
                    id: 2,
                    name: "ショップB" + i,
                    price: 30000,
                    url: "https:www.google.co.jp",
                    description: [],
                },
                {
                    id: 3,
                    name: "ショップC" + i,
                    price: 30000,
                    url: "https:www.google.co.jp",
                    description: [],
                },
            ],
        });
    }

    await db.collection("items").add(testItems);
}

const deleteTestItems = async () => {
    try {
        await db.collection("items").doc("80Je3jq0UypPpPKOouEh").delete();
    } catch (e) {
        // Getting the Error details.
        // const code = e.code;
        // const message = e.message;
        // const details = e.details;
        // ...
        console.error("error:", e);
    };
}

export const ItemsContext = React.createContext({
    items,
    getItems,
    // TODO TEST いずれItemsに統合するかもしれない
    itemTitles,
});

export default ItemsContext;