import { useState, useEffect } from "react";

export const resources = {
  CATEGORIES: "https://peperuka-server.onrender.com/categories",
  ITEMS: "/items",
  CARTS: "/carts",
  USERS: "/me"
};

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(resources.CATEGORIES)
      .then((resp) => resp.json())
      .then((json) => setCategories(json))
      .catch((error) => console.log(error))
  }, []);

  return categories;
};
