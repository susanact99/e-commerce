import React, { useState } from "react";
import '../styles/navbar.css';


const Navbar = () => {

  const [toggle,setToggle] = useState(false)



  return (
    <nav className="navbar">
        <div className="container nunito-font">

            <div className="menu">
                <button className="menu-toggle" onClick={() => setToggle(!toggle)}><i className={toggle ? "bi bi-justify" : "bi bi-x-lg"}></i></button>
                <ul className="nav-links " id="nav-links">
                    <li><a href="#" className="active" >Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Skincare Blog</a></li>
                    <li><a href="#">Decoration Blog</a></li>
                </ul>
            </div>
            
            <div className="search-bar">
                <input type="text" placeholder="Search..."/>
                <button><i className="bi bi-search"></i></button>
            </div>

            <div className="user-actions">
                <button className="btn sign-in">Sign in</button>
                <span className="cart-button"><i className="bi bi-cart"></i></span>
            </div>

        </div>
    </nav>
  );
};

export default Navbar;
