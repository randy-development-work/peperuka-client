import React, { useContext, useState } from 'react'
// import { ShopContext } from '../context/shop-context';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

function OneItem({item, user}) {
  let navigator = useNavigate();
  
    const {id, name, image, vendor, vendor_contact, category_id, price, location, user_id} = item;
    // const [inCart, setInCart] = useState(false);
    // const { addToCart, cartItems } = useContext(ShopContext);

    // styling for button when clicked      
    // const switchCart = () => setInCart(!inCart)
    const background = "#020202" //inCart ? "rgb(181 172 171)" : "#020202";
    const color = "#fff" //inCart ? "#000000" : "#fff";

    const [errors, setErrors] = useState([]);
    const addToCart = () => {
      fetch('/carts', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          image,
          vendor,
          price,
          user_id: user.id
        }),
      }).then((r) => {
        if (r.ok) {
          alert("Added to Cart")
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })
    }

  return (
    <Card className='card-style'>
            {/* <Image src={image} wrapped ui={true} /> */}
            <div className="rounded-item" style={{
                height: 240,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`
            }}
            
            ></div>
            <Card.Content>
            <Card.Header style = {{fontFamily: "'Eczar', serif"}}>{name}</Card.Header>
            <Card.Meta>{location}</Card.Meta>
            <Card.Description>
                <h4>Vendor:</h4>
            </Card.Description>
            <Card.Description>
                {vendor} | {vendor_contact}
                <br />
                <br />
                <p className='money-bill'>
                <Icon name="money bill alternate"/> &nbsp;
                {price}
                </p>
            </Card.Description>
            </Card.Content>
            <Card.Content extra style={{alignItems: "center"}}>
            <a>
                
                <Button primary style={{
                  color: color,
                  background: background,
                  
                }}
                onClick={() => { user ? 
                    // switchCart();
                  addToCart() : navigator("/login")
                }}
                >
                  <Icon name='add to cart' /> Add to Cart
                  </Button>
                {/* <Button secondary><Icon name='delete calendar' />Delete</Button> */}
            </a>
            </Card.Content>
        </Card>
  )
}

export default OneItem;
