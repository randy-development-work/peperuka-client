import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Image, List } from "semantic-ui-react";
import { Button, Space, Tooltip } from "antd";
import { HomeOutlined } from "@ant-design/icons";

function Cart({ user }) {
  let navigator = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  // const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/carts")
      .then((r) => r.json())
      .then((data) => {
        setCartItems(data.cartItems);
        setTotal(data.total);
        setCount(data.count);
      });
  }, []);

  // function to remove the cart item
  const removeFromCart = (id) => {
    fetch(`/carts/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        setCartItems(json.cartItems);
        setTotal(json.total);
        setCount(json.count);
      });
  };

  const clearCart = () => {
    fetch("/carts", {
        method: "DELETE",
    })
    .then((resp) => resp.json())
    .then((json) => {
        setCartItems(json.cartItems);
        setTotal(json.total);
        setCount(json.count);
    })
  }

  if (cartItems.length > 0) {
    return (
      <Fragment>
        <h2>Cart</h2>
        {cartItems.map((cartitem) => (
          <List animated verticalAlign="middle">
            <List.Item>
              <List.Content floated="right">
                <Button onClick={() => removeFromCart(cartitem.id)}>
                  Remove from Cart
                </Button>
              </List.Content>
              <Image avatar src={cartitem.image} />
              <List.Content>
                <List.Header>{cartitem.name}</List.Header>
                <List.Description>
                  Vendor:{" "}
                  <a>
                    <b>{cartitem.vendor}</b>
                  </a>{" "}
                </List.Description>
                <List.Description>
                  <b>{cartitem.price}</b>
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        ))}
        <h2 style={{ alignItems: "center", marginLeft: "0px" }}>
          Total: {total}
        </h2>

        <Button size='large' type='primary' style={{backgroundColor:'black', marginLeft: "600px", size:"500px"}}
          onClick={() => {
            navigator("/checkout");
            clearCart();
          }}
        >
          {" "}
          CheckOut{" "}
        </Button>
      </Fragment>
    );
  } else {
    return (
    <Fragment style={{ alignItems: "center" }}>
      <h2>Cart is Empty</h2>
      <Link to="/">
        <Tooltip title="home">
          <Button icon={<HomeOutlined />} style={{ marginLeft: "570px", marginBottom: "30px" }}>
            Find an Item
          </Button>
        </Tooltip>
      </Link>
    </Fragment>
    )
  }
}

export default Cart;
