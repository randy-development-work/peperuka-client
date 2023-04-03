import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { Button, Error, Input, FormField, Label } from "../components/styles";

function EditCategory() {
  const [categories, setCategories] = useState([]);
  // const { categoryId } = useParams();
  let params = useParams();

  useEffect(() => {
    fetch("/categories")
      .then((resp) => resp.json())
      .then((json) => setCategories(json))
      .catch((error) => console.log(error));
  }, []);

  const { id, image, name } = categories;

  const [editData, setEditData] = useState({});
  const navigator = useNavigate();

  // fetch the category & pre-fill the form so that the user does not have to write from scratch
  useEffect(() => {
    fetch(`/pata/${params.categoryID}`)
      .then((r) => r.json())
      .then((data) => setEditData(data));
  }, [params.categoryId]);

  console.log("edit", editData.id);
  console.log(editData.name);

  const handleSubmit = (event) => {
    event.preventDefault();

    // set the request to the server
    fetch(`/categories/${params.categoryID}`, {
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
      .then((updatedData) => setCategories(updatedData));
    alert("Edit Successful.");
    navigator("/admin-categories");
  };

  const handleFormInput = (event) => {
    const key = event.target.name;
    const val = event.target.value;

    setEditData({ ...editData, [key]: val });
  };

  console.log(editData);

  return (
    <Fragment>
      <h3 style={{ textAlign: "center", marginTop: "70px" }}>Edit {editData?.name}</h3>
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
          }}
          onSubmit={handleSubmit}
        >
          {/* handle image upload */}
          <label htmlFor="category-image" className="form-label">
            Category image
          </label>
          <input
            type="text"
            name="image"
            className="form-control"
            id="individual-image"
            value={editData?.image}
            onChange={handleFormInput}
            style={{ marginTop: "8px" }}
          />
          <label htmlFor="category-name" className="form-label">
            Category name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="individual-name"
            value={editData?.name}
            onChange={handleFormInput}
            style={{ marginTop: "8px" }}
          />

          <button type="submit" className="btn btn-primary">
            SAVE YOUR CHANGES
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default EditCategory;
