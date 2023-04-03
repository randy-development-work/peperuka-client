import logo from "../logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./Items";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Footer from "./Footer";
import Cart from "./pages/Cart";
import CheckOut from "./CheckOut";
import Admin from "../admin/Admin";
import AdminLogIn from "../admin/AdminLogIn";
import AdminCategories from "../admin/AdminCategories";
import EditCategory from "../admin/EditCategory";
import AddCategory from "../admin/AddCategory";
import AdminItems from "../admin/AdminItems";
import AddItem from "../admin/AddItem";
import CreateAdmin from "../admin/CreateAdmin";
import EditItem from "../admin/EditItem";

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  // auto-login
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // admin auto-login
  useEffect(() => {
    fetch("/ad").then((r) => {
      if (r.ok) {
        r.json().then((admin) => setAdmin(admin));
      }
    });
  }, []);

  return (
    <>
      <Navbar user={user} setUser={setUser} admin={admin} setAdmin={setAdmin} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories/:categoryID" element={<Items user={user} />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/login" element={<LogIn setUser={setUser} />} />
        <Route path="/cart" element={<Cart user={user} />} />
        <Route path="/checkout" element={<CheckOut />} />

        <Route path="/admin" element={<Admin admin={admin} />} />
        <Route
          path="/admin-login"
          element={<AdminLogIn admin={admin} setAdmin={setAdmin} />}
        />
        <Route path="/admin-categories" element={<AdminCategories />} />
        <Route
          path="/admin-categories/:categoryID"
          element={<EditCategory />}
        />
        <Route path="/admin-addcategory" element={<AddCategory />} />
        <Route path="/admin-items" element={<AdminItems/>} />
        <Route path="/admin-additem" element={<AddItem />} /> 
        <Route path="/create-admin" element={<CreateAdmin />} />
        <Route
          path="/admin-items/:itemID"
          element={<EditItem />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
