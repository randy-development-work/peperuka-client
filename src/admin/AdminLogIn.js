import React from 'react'
import "../components/App.css";
import styled from "styled-components";
import { Button } from "../components/styles/Button";
import { Link } from "react-router-dom";
import AdminLogInForm from './AdminLogInForm';
import "./AdminLogIn.css"

function AdminLogIn({setAdmin}) {
  return (
    // <Wrapper>
    //   <h1 className="admin-in">LOG IN, ADMIN</h1>
    //   <LogInForm setUser={setUser} />
    //   <Divider />
    //   {/* <p>
    //     Don't have an account? &nbsp;
    //     <Button color="secondary" as={Link} to="/signup">
    //       Sign Up
    //     </Button>
    //   </p> */}
    // </Wrapper>

    <div className='admin-in'>
        <video src='/videos/corporate.mp4' autoPlay loop muted/>
        <h1 style = {{fontFamily: "'Eczar', serif"}}>ADMIN LOG IN</h1>
        <AdminLogInForm setAdmin={setAdmin} />
    </div>
  )
}
// const Logo = styled.h1`
//   font-family: "Permanent Marker", cursive;
//   font-size: 3rem;
//   color: deeppink;
//   margin: 8px 0 16px;
// `;

// const Wrapper = styled.section`
//   max-width: 500px;
//   margin: 40px auto;
//   padding: 16px;
// `;

// const Divider = styled.hr`
//   border: none;
//   border-bottom: 1px solid #ccc;
//   margin: 16px 0;
// `;

export default AdminLogIn