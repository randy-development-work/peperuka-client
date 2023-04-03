import React, { useEffect, useState } from "react";

// function Products() {
//     const [items, setItems] = useState([])
//     useEffect(() => {
//         fetch("/items")
//         .then((r)=>r.json())
//         .then(setItems)
//     }, [])
// }

export const PRODUCTS = [
  {
    id: 1,
    productName: "IPhone",
    price: 999.0,
    productImage: "product1",
  },
  {
    id: 2,
    productName: "Macbook Pro 2022 (M1)",
    price: 1999.0,
    productImage: "product2",
  },
  {
    id: 3,
    productName: "Cannon M50 Camera",
    price: 699.0,
    productImage: "product3",
  }
]