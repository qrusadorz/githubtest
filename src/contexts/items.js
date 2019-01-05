import React from 'react';

export const items = [];

export const defaultItems = {
    title: "",
    subheader: "",
    price: "",
    shops:[
      { title: "11", price: "0", subheader: "", description: ["a","b","x",],}, 
      { title: "22", price: "0", subheader: "", description: ["g","f","d",],}, 
      { title: "33", price: "0", subheader: "", description: ["d","g","a",],}, 
    ], 
  }; 

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
                    url: "",
                    description: [],
                },
                {
                    id: 2,
                    title: "ショップB",
                    price: 30000,
                    url: "",
                    description: [],
                },
                {
                    id: 3,
                    title: "ショップC",
                    price: 30000,
                    url: "",
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
                    url: "",
                    description: [],
                },
                {
                    id: 2,
                    title: "ショップB",
                    price: 21000,
                    url: "",
                    description: [],
                },
                {
                    id: 3,
                    title: "ショップC",
                    price: 20000,
                    url: "",
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
                    url: "",
                    description: [],
                },
                {
                    id: 2,
                    title: "ショップB",
                    price: 17000,
                    url: "",
                    description: [],
                },
                {
                    id: 3,
                    title: "ショップC",
                    price: 16000,
                    url: "",
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