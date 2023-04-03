import React, { useEffect, useState } from "react";
// import { useCategories } from "../library";
import OneCategory from "./OneCategory";

function AdminCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories")
      .then((resp) => resp.json())
      .then((json) => setCategories(json));
  }, []);


  function onDelete(deleted) {
    const newCategories = categories.filter(
      (category) => category.id !== deleted.id
    );
    setCategories(newCategories);
  }

  let onecategory = categories.map((category) => {
    return (
      <OneCategory key={category.id} category={category} onDelete={onDelete} />
    );
  });
  return (
    <div>
      <h2>Categories</h2>
      {onecategory}
    </div>
  );
}

export default AdminCategories;
