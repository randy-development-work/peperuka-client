import React, { useEffect, useState, Fragment } from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { useNavigate, useParams } from "react-router-dom";

function EditItem() {
  let navigator = useNavigate();
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [editData, setEditData] = useState([]);
  const { itemID } = useParams();

  useEffect(() => {
    fetch("/categories")
      .then((resp) => resp.json())
      .then((json) => setCategories(json))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("/items")
      .then((resp) => resp.json())
      .then((json) => setItems(json));
  }, []);

  const {
    id,
    name,
    image,
    vendor,
    vendor_contact,
    category_id,
    location,
    price,
  } = items;

  // fetch the items & pre-fill the form so that the user does not have to write from scratch
  useEffect(() => {
    fetch(`/items/${itemID}`)
      .then((r) => r.json())
      .then((data) => setEditData(data));
  }, [itemID]);

//   console.log(editData?.category?.name);

  const handleFormInput = (event) => {
    const key = event.target.name;
    const val = event.target.value;

    setEditData({ ...editData, [key]: val });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // set the request to the server
    fetch(`/items/${itemID}`, {
      method: "PATCH",
      body: JSON.stringify(editData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      // .then((status) => {
      //     // TODO: Redirect to the user page
      //     if (status === 200) return redirect(`/charities`);
      // })
      .then((updatedData) => setItems(updatedData));
    alert(`Successfully edited ${editData.name}.`);
    navigator("/admin-items");
  };

  return (
    <Fragment>
      <h3 style={{ textAlign: "center", marginTop: "70px" }}>
        Edit {editData?.name}
      </h3>
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
          onSubmit={handleSubmit}
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
            value={editData?.name}
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
            value={editData?.image}
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
            value={editData?.vendor}
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
            value={editData?.vendor_contact}
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
            value={editData?.location}
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
            value={editData?.price}
            onChange={handleFormInput}
            style={{ marginBottom: "10px" }}
          />
          <label htmlfor="category">Category:</label>
          <select id="categories" name="category_id" onChange={handleFormInput}>
            <option value={editData?.category?.id}>
              {editData?.category?.name}
            </option>
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
            SAVE YOUR CHANGES
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default EditItem;
