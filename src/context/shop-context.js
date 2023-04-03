import React, { useState, useEffect, createContext } from 'react'
// import ItemsState from './ItemsState'
import { PRODUCTS } from '../products'

export const ShopContext = createContext(null);

// function for default no of items in cart
const getDefaultCart = () => {

    let cart = {};
    for (let i=1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    // console.log(PRODUCTS);
    return cart;
}

export function ShopContextProvider(props) {
    
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
    }

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
    }

    const contextValue = {cartItems, addToCart, removeFromCart}
    console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}


