import React, { useEffect, useState } from "react";
import OneItem from "./OneItem";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

function AdminItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then((json) => setItems(json));
  }, []);

  function onDestroyItem(destroyed) {
    const newItems = items.filter(
      (item) => item.id !== destroyed.id
    );
    setItems(newItems);
  }

  return (
    <div style={{ backgroundColor: "grey" }}>
      <h1 style={{marginLeft: "520px", color: "black"}}><b>Shopping Items</b></h1>
      <MDBRow
        className="row-cols-1 row-cols-md-4 g-5"
        style={{
          paddingBottom: "20px",
          paddingRight: "15px",
          paddingLeft: "15px",
        }}
      >
        {items.map((item) => {
          return <OneItem item={item} onDestroyItem={onDestroyItem} />;
        })}
      </MDBRow>
    </div>
  );
}

export default AdminItems;
