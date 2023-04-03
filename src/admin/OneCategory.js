// import { Avatar, Button, List, Skeleton } from 'antd';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Image, List, Button } from "semantic-ui-react";

function OneCategory({ category, onDelete }) {
  const { id, image, name } = category;
  // console.log(category);
  let navigator = useNavigate("/admin");

  function deleteCategory() {
    fetch(`/categories/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDelete(category);
      }
    });
  }

  return (
    <List horizontal divided size="large">
      <List.Item>
        <Image avatar src={image} />
        <List.Content>
          <List.Header>{name}</List.Header>
          <Button primary onClick={() => navigator(`/admin-categories/${id}`)}>
            Edit
          </Button>
          <Button secondary onClick={deleteCategory}>
            Delete
          </Button>
        </List.Content>
      </List.Item>
    </List>
  );
}

export default OneCategory;
