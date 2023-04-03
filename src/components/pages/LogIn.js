import React from "react";
import "../App.css";
import styled from "styled-components";
import { Button } from "../styles";
import { Link } from "react-router-dom";
import LogInForm from "../LogInForm";

export default function LogIn({ setUser }) {
  return (
    <Wrapper>
      <h1 className="log-in">LOG IN</h1>
      <LogInForm setUser={setUser} />
      <Divider />
      <p>
        Don't have an account? &nbsp;
        <Button color="secondary" as={Link} to="/signup">
          Sign Up
        </Button>
      </p>
    </Wrapper>
  );
}
const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 8px 0 16px;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;
