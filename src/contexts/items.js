import React from 'react';

export const items = {};
export const getItems = id => {
    console.log("getItems()");
    // TODO: データ取得
    const items = {
        1: { title:"アイテムN", price1:"30000", price2:"29000", price3:"28000", },
        2: { title:"アイテムP", price1:"22000", price2:"21000", price3:"20000", },
        3: { title:"アイテムA", price1:"17500", price2:"17000", price3:"13000", },
        4: { title:"B", price1:"", price2:"", price3:"", },
        5: { title:"C", price1:"", price2:"", price3:"", },
        6: { title:"D", price1:"", price2:"", price3:"", },
        7: { title:"E", price1:"", price2:"", price3:"", },
        8: { title:"F", price1:"", price2:"", price3:"", },
        9: { title:"G", price1:"", price2:"", price3:"", },
        10: { title:"H", price1:"", price2:"", price3:"", },
    };

    return items;
};

export const ItemsContext = React.createContext({
    items,
    getItems,
    // setItems: (items) => {
    //     // TODO: 
    // },
});

export default ItemsContext;