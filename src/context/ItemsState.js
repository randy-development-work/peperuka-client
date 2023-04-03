import React, {useState, useEffect} from "react";

function ItemsState() {
    const [items, setItems] = useState({})
    useEffect(() => {
        fetch("/items")
        .then((r) => r.json())
        .then(setItems)
    }, [])
    console.log(items);
    // let itemsArray= items.map((item) => {
    //     return <li>item</li>
    // })
    
    return items;
}

export default ItemsState;