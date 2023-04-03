import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
// import './Categories.css';

// import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { Card, Col, Row } from "antd";

function EachCategory({ category }) {
  // console.log(props);
  const { id, image, name } = category;
  console.log(category);
  let navigator = useNavigate();

  const handleClick = () => {
    navigator(`categories/${id}`)
  }
  // const imgStyle={
  //   height: 240,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   backgroundImage: `url(${image})`
  // }
  return (
    <Fragment className="frag_item">
      {/* <Card className='card-style'> */}
      {/* <Image src={image} wrapped ui={true} /> */}
      {/* <Link to={`categories/${id}`} className="rounded-top" style={{
                height: 240,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`
            }}
            
            ></Link>
            <Card.Content>
            <Card.Header style = {{fontFamily: "'Eczar', serif"}}>{name}</Card.Header>            
          
            </Card.Content> */}

      {/* </Card> */}
      <Col span={8}>
        <Card
          bordered={false}
          hoverable
        //   cover={<img alt={name} src={image} />         
        // }

          size="small"
          style={{
            width: 240,
            marginLeft: "75px",
            marginBottom: "10px"
          }}
        >
          <div onClick={() => {
            handleClick();
          }}            
            style={{
              height: 140,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${image})`,
            }}
          ></div>
          {name}
        </Card>
      </Col>
    </Fragment>
  );
}

export default EachCategory;
