import React, { Fragment } from 'react';
import '../App.css';
import styled from "styled-components";
import { Button } from "../styles";
import { Link } from 'react-router-dom';
import SignUpForm from '../SignUpForm';

function SignUp({setUser}) {
  return ( 
    <Wrapper>
      <h1 className='sign-up'>SIGNUP</h1>
      <SignUpForm setUser={setUser}/>
      <Divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" as={Link} to="/login">
              Log In
            </Button>
          </p>

    </Wrapper> 
    )
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

export default SignUp;