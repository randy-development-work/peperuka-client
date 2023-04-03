import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Button } from "./Button";
import "./Navbar.css";
import { ShoppingCart } from "phosphor-react";
import { HeartFilled } from "@ant-design/icons";
import { Icon } from 'semantic-ui-react'

function Navbar({ user, setUser, admin, setAdmin }) {
  let navigator = useNavigate();
  const [click, setClick] = useState(false); //state for menu responsiveness
  const [btn, setBtn] = useState(true); //state for button styling

  const handleClick = () => setClick(!click);
  const closeResMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setBtn(false);
    } else {
      setBtn(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const [isBHover, setIsBHover] = useState(false);

  const handleEnter = () => {
    setIsBHover(true);
  };

  const handleLeave = () => {
    setIsBHover(false);
  };

  const [isAdHover, setIsAdHover] = useState(false);

  const handleIn = () => {
    setIsAdHover(true);
  };

  const handleOut = () => {
    setIsAdHover(false);
  };

  window.addEventListener("resize", showButton);

  //   logging user out
  function handleLogOut() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  // admin logout
  function handleAdminLeave() {
    fetch("/adminout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setAdmin(null);
      }
    });
  }

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    fetch("/carts")
    .then((r)=> r.json())
    .then((data) => {
        setCartItems(data.cartItems)
        setCartCount(data.count)
    })   

},[cartItems])

  const btnStyle = {
    backgroundColor: isHover ? "#FFF" : "transparent",
    color: isHover ? "#242424" : "#FFF",
    padding: "8px 20px",
    border: "1px solid var(--primary)",
    transition: "all 0.35s ease-out",
    cursor: "pointer",
    fontFamily: "'Eczar', serif",
    padding: "8px 20px",
    borderRadius: "2px",
    // outline: "none",
    // border: "none",
    padding: "8px 20px",
    fontSize: "18px",
    borderRadius: "5px",
  };
  const btn2Style = {
    backgroundColor: isBHover ? "#FFF" : "transparent",
    color: isBHover ? "#242424" : "#FFF",
    padding: "8px 20px",
    border: "1px solid var(--primary)",
    transition: "all 0.35s ease-out",
    cursor: "pointer",
    fontFamily: "'Eczar', serif",
    // outline: "none",
    // border: "none",
    fontSize: "17.5px",
    borderRadius: "5px",
  };

  const btn3Style = {
    backgroundColor: isAdHover ? "#FFF" : "transparent",
    color: isAdHover ? "#242424" : "#FFF",
    padding: "8px 20px",
    border: "1px solid var(--primary)",
    transition: "all 0.35s ease-out",
    cursor: "pointer",
    fontFamily: "'Eczar', serif",
    // outline: "none",
    // border: "none",
    fontSize: "18px",
    borderRadius: "5px",
  };


  if (!user && !admin) {
    return (
      <Fragment>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeResMenu}>
              PEPERUKA <i className="fa-solid fa-truck-ramp-box fa-bounce" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeResMenu}>
                  Home
                </Link>
              </li>
              {/* <li className='nav-item'>
                        <Link to="/soon" className='nav-links' onClick={closeResMenu}>
                            Coming Soon
                        </Link>
                    </li> */}
              <li className="nav-item">
                <Link to="/about" className="nav-links" onClick={closeResMenu}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/admin-login"
                  className="nav-links-res"
                  onClick={closeResMenu}
                >
                  Admin
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/signup"
                  className="nav-links-res"
                  onClick={closeResMenu}
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-links-res"
                  onClick={closeResMenu}
                >
                  Log In
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-links-res"
                  onClick={() => {
                    closeResMenu();
                    alert("You need to be Logged In!");
                  }}
                >
                  <ShoppingCart size={32} color="#fff" />
                </Link>
              </li>
            </ul>
            <Link to="/admin-login" style={{ marginRight: "3px" }}>
              {btn && (
                <button
                style={btn3Style}
                onMouseEnter={handleIn}
                onMouseLeave={handleOut}
                >
                  Admin
                </button>
              )}
            </Link>
            <Link to="/signup" style={{ marginRight: "3px" }}>
              {btn && (
                <button
                  style={btnStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  SignUp
                </button>
              )}
            </Link>

            <Link to="/login" style={{ marginRight: "0px" }}>
              {btn && (
                <button
                  style={btn2Style}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  LogIn
                </button>
              )}
            </Link>

            <Link
              to="/login"
              onClick={() => {
                alert("You need to be Logged In!");
              }}
            >
              <ShoppingCart size={32} color="#fff" />
            </Link>
          </div>
        </nav>
      </Fragment>
    );
  } else if(user) {
    return (
      <Fragment>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeResMenu}>
              PEPERUKA <i className="fa-solid fa-truck-ramp-box fa-bounce" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeResMenu}>
                  Home
                </Link>
              </li>
              {/* <li className='nav-item'>
                                            <Link to="/soon" className='nav-links' onClick={closeResMenu}>
                                                Coming Soon
                                            </Link>
                                        </li> */}
              <li className="nav-item">
                <Link to="/about" className="nav-links" onClick={closeResMenu}>
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <h2 style={{ color: "red", borderRadius: "5px", marginTop: "10px" }}>
                <Icon name='user' size='massive'/> Hi, {user.username}
                </h2>
              </li>
              <li className="nav-item">
                <Link
                  to="/admin-login"
                  className="nav-links-res"
                  onClick={() => {
                    closeResMenu();
                  }}
                >
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-links-res"
                  onClick={() => {
                    closeResMenu();
                    handleLogOut();
                  }}
                >
                  Log Out
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/cart"
                  className="nav-links-res"
                  onClick={closeResMenu}
                >
                  <ShoppingCart size={32} color="#fff" />
                </Link>
              </li>
            </ul>

            <Link to="/admin-login" style={{ marginRight: "8px" }}>
              {btn && (
                <button
                  style={btn3Style}
                  onMouseEnter={handleIn}
                  onMouseLeave={handleOut}
                  
                >
                  Admin
                </button>
              )}
            </Link>

            <Link to="/" style={{ marginRight: "8px" }}>
              {btn && (
                <button
                  style={btn2Style}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  onClick={() => {
                    handleLogOut();
                    alert("You're Logged Out")
                  }}
                >
                  Log Out
                </button>
              )}
            </Link>

            <Link to="/cart" style={{ right: "1px" }}>
              <ShoppingCart size={32} color="#fff" />
              {cartCount > 0 ? cartCount : null}
            </Link>
          </div>
        </nav>
      </Fragment>
    );
  } else if(admin) {
    return (
      <Fragment>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeResMenu}>
              PEPERUKA <i className="fa-solid fa-truck-ramp-box fa-bounce" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeResMenu}>
                  Home
                </Link>
              </li>
              {/* <li className='nav-item'>
                                            <Link to="/soon" className='nav-links' onClick={closeResMenu}>
                                                Coming Soon
                                            </Link>
                                        </li> */}
              <li className="nav-item">
                <Link to="/about" className="nav-links" onClick={closeResMenu}>
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <h2 style={{ color: "red", borderRadius: "5px", marginTop: "10px", cursor:"pointer"}} onClick={() => {
                  navigator("/admin")
                }}>
                <Icon name='user secret' size='massive'/> What's up, Admin
                </h2>
              </li>
              <li className="nav-item">
                <Link
                  to="/admin-login"
                  className="nav-links-res"
                  onClick={() => {
                    closeResMenu();
                    handleAdminLeave();
                  }}
                >
                  Leave Session
                </Link>
              </li>
            </ul>

            <Link to="/admin-login" style={{ marginRight: "3px" }}>
              {btn && (
                <button
                style={btn3Style}
                onMouseEnter={handleIn}
                onMouseLeave={handleOut}
                  onClick={() => {
                    handleAdminLeave();
                    alert("You're Logged Out")
                  }}
                >
                  Leave Session
                </button>
              )}
            </Link>

          </div>
        </nav>
      </Fragment>
    );

  }
}

export default Navbar;
