import React from 'react';

export const items = [];

export const defaultItems = {
    id: 0,
    title: "",
    subheader: "",
    // 以下変更されやすいデータ
    // TODO priceは廃止の可能性あり
    price: "",
    // TODO クエリーに任せるといいかもしれない。
    shops:[
      { id: 1, title: "11", price: 0, url: "", description: ["a","b","x",],}, 
      { id: 2, title: "22", price: 0, url: "", description: ["g","f","d",],}, 
      { id: 3, title: "33", price: 0, url: "", description: ["d","g","a",],}, 
    ], 
  }; 

// TODO 部分一致検索として利用する。 オフラインデータとしてパフォーマンス優先のほうがよさそう。
// TODO もう一つはFunctionsを利用して検索を実行された時のみサーバーで実行してデータをクライアントで持たない。＜＝サーバーレスだとデータ読み取り発生が多くてつらい。
// TODO コレクションの１MBの制限超過の可能性をどうするか…ドキュメントの読み取り	ドキュメント 100,000 点あたり $0.06
export const ItemTitles = [
    {
        id: 1,
        title: "アイテムN",
    },
    {
        id: 2,
        title: "アイテムS",
    },
    {
        id: 3,
        title: "アイテムN",
    },
];

// TODO 必要かは要検討。
export const shops = ["ショップN", "ショップS", "ショップA"];

export const getItems = id => {
    console.log("getItems()");
    // TODO: データ取得
    const items = [
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

    return items;
};

export const ItemsContext = React.createContext({
    items,
    getItems,
});

export default ItemsContext;