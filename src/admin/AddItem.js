import React, { useState, Fragment } from "react";
import { useCategories } from "../library";

function AddItem() {
  const categories = useCategories();
  const [newItem, setNewItem] = useState({
    name: "",
    image: "",
    vendor: "",
    location: "",
    price: "",
    vendor_contact: "",
    category_id: 0
  });

  function handleFormInput(event) {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
  }

  function handleAdd(event) {
    event.preventDefault();
    const newData = {
      image: newItem.image,
      name: newItem.name,
      vendor: newItem.vendor,
      vendor_contact: newItem.vendor_contact,
      location: newItem.location,
      price: newItem.price,
      category_id: newItem.category_id,
    };

    fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setNewItem([...newItem, data]);
      });
    alert(`New Item Added: ${newItem.name}`);
    event.target.reset();
  }

  return (
    <Fragment>
      <h3 style={{ textAlign: "center", marginTop: "70px" }}>ADD NEW ITEM</h3>
      <div>
        <form
          method="PATCH"
          className="edit-form"
          style={{
            width: "75%",
            border: "1px solid #ccc",
            padding: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "50px",
            backgroundColor: "#f5f5f5",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
          onSubmit={handleAdd}
        >
          {/* handle image upload */}
          <label htmlFor="category-name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="individual-name"
            value={newItem.name}
            onChange={handleFormInput}
            style={{ marginBottom: "10px" }}
          />
          <label htmlFor="category-image" className="form-label">
            Image:
          </label>
          <input
            type="text"
            name="image"
            className="form-control"
            id="individual-image"
            value={newItem.image}
            onChange={handleFormInput}
            style={{ marginBottom: "5px" }}
          />
          <label htmlFor="category-vendor" className="form-label">
            Vendor:
          </label>
          <input
            type="text"
            name="vendor"
            className="form-control"
            id="individual-vendor"
            value={newItem.vendor}
            onChange={handleFormInput}
            style={{ marginBottom: "5px" }}
          />
          <label htmlFor="category-vendor-contact" className="form-label">
            Vendor Contact:
          </label>
          <input
            type="text"
            name="vendor_contact"
            className="form-control"
            id="individual-vendor_contact"
            value={newItem.vendor_contact}
            onChange={handleFormInput}
            style={{ marginBottom: "10px" }}
          />
          <label htmlFor="category-location" className="form-label">
            Vendor Location:
          </label>
          <input
            type="text"
            name="location"
            className="form-control"
            id="individual-location"
            value={newItem.location}
            onChange={handleFormInput}
            style={{ marginBottom: "10px" }}
          />
          <label htmlFor="category-price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            name="price"
            className="form-control"
            id="individual-price"
            value={newItem.price}
            onChange={handleFormInput}
            style={{ marginBottom: "10px" }}
          />
          <label htmlfor="category">Category:</label>
          <select
            id="item_category"
            name="category_id"
            onChange={handleFormInput}
          >
            <option value="">Select Item Category...</option>
            {categories.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          <br />

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            ADD ITEM
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default AddItem;
