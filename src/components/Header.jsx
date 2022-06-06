import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import logo from '../assest/images/logo2.png'

const Header = () => {
    return (

    
        <>
            <nav className="navbar navbar-expand-lg navbar-light " style={{color:"#01579b"}}> 
                <div className="container-fluid ">
                  <div>
                  <img src={logo} alt="logo" style={{height:"150px",marginLeft:"100px"}}></img>

                  </div>
                {/* <NavLink className="navbar-brand mx-auto fw-bold" style={{color:"#d68102"}} to="/">TECHMART</NavLink> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    
                        <ul className="navbar-nav  mb-2 mb-lg-0" style={{marginLeft:"850px"}} >
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/" style={{color:"white"}}>Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/products" style={{color:"white"}}>Product</NavLink>
                            </li> */}
                            <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{color:"white"}}
                >
                  Category
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/products" style={{color:"black"}}>
                      Mobile Phones
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/accessories" style={{color:"black"}}>
                    Mobile Phones Accessories

                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/headset" style={{color:"black"}}>
                      Headset And Headphones
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/smart" style={{color:"black"}}>
                      Smart Devices
                    </NavLink>
                  </li>
                </ul>
              </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" style={{color:"white"}}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" style={{color:"white"}}>Contact</NavLink>
                            </li>
                            
                            
                        </ul>
                    
                    <Login/>
                     <Signup/> 
                    <CartBtn/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
