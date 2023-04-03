import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import { Button } from './Button';
import './Welcome.css';


function Welcome() {
  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };

   let navigator = useNavigate();

   const redirect = () => {navigator("/about")}

  return (
    <div className='welcome'>
      <video src='/videos/home.mp4' autoPlay loop muted />
      <h1 style = {{fontFamily: "'Eczar', serif"}}>ORDER NOW</h1>
      <p>Everything you Need is Here</p>
      <div className='welcome-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button> */}
        <button
        
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          // onClick={console.log('hey')}
          style = {{
            backgroundColor: isHover ? "#FFF" : "transparent",
            color: isHover ? "#242424" : "#FFF",
            border: "1px solid var(--primary)",
            transition: "all 0.35s ease-out",
            fontFamily: "'Eczar', serif",
            padding: "12px 26px",
            fontSize: "20px",
            borderRadius: "5px"
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={redirect}
        >
          {/* <Link to="/about"> */}
          THIS IS US <i className='far fa-play-circle' />
          {/* </Link> */}
        </button>
      </div>
    </div>
  )
}

export default Welcome