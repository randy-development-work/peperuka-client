import React from "react";
import "./Admin.css";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

function Admin() {
  let navigator = useNavigate();
  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  return (
    <div className="admin">
      {/* <video src='/videos/corporate.mp4' autoPlay loop muted/> */}
      <h1 style={{ fontFamily: "'Eczar', serif" }}>ADMIN</h1>
      <Card title="Admin Actions">
        <Card.Grid
          style={gridStyle}
          onClick={() => {
            navigator("/admin-categories");
          }}
        >
          View All Categories
        </Card.Grid>
        <Card.Grid
          style={gridStyle}
          onClick={() => {
            navigator("/admin-addcategory");
          }}
        >
          Add Category
        </Card.Grid>
        <Card.Grid
          style={gridStyle}
          onClick={() => {
            navigator("/admin-items");
          }}
        >
          View All Items
        </Card.Grid>
        <Card.Grid
          style={gridStyle}
          onClick={() => {
            navigator("/admin-additem");
          }}
        >
          Add Item
        </Card.Grid>
        <Card.Grid
          style={gridStyle}
          onClick={() => {
            navigator("/create-admin");
          }}
        >
          Add New Admin
        </Card.Grid>
        
      </Card>
    </div>
  );
}

export default Admin;
