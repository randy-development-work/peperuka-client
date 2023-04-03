import React, {Fragment, useState} from 'react'
import { useNavigate } from 'react-router-dom'

function AddCategory() {
    const [newCategory, setNewCategory] = useState({
        name: "",
        image: ""
    });

    function handleFormInput(event) {
        setNewCategory({
            ...newCategory,
            [event.target.name]: event.target.value,
        })

    }

    function handleAdd(event) {
        event.preventDefault();
        const newData = {
            image: newCategory.image,
            name: newCategory.name
        }

        fetch('/categories', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newData)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setNewCategory([...newCategory, data])
            
        })
        alert("New Category Added")
        event.target.reset()
    }
  return (
    <Fragment>
      <h3 style={{ textAlign: "center", marginTop: "70px" }}>Add New Category</h3>
      <div>
        <form
          method="POST"
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
          onSubmit={handleAdd}
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
            value={newCategory.image}
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
            value={newCategory.name}
            onChange={handleFormInput}
            style={{ marginTop: "8px" }}
          />

          <button type="submit" className="btn btn-primary">
            ADD CATEGORY
          </button>
        </form>
      </div>
    </Fragment>
  )
}

export default AddCategory