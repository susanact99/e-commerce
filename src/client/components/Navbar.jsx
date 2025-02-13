import React, { useState } from "react";
import { Badge } from '@mui/material';
import '../styles/navbar.css';


function Navbar({ cartCount }) {

    const [toggle, setToggle] = useState(false)

    const [searchBar, setSearchBar] = useState(false)

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
                <div className="search-bar-container">
                    <i className="bi bi-search search-display-button" onClick={() => setSearchBar(!searchBar)}></i>
                    <div className="search-bar" style={{ display: searchBar ? "flex" : "none" }}>
                        <input type="text" placeholder="Search..." />
                        <button><i className="bi bi-search"></i></button>
                    </div>
                </div>

                <div className="user-actions">
                    <button className="btn sign-in">Sign in</button>
                    <Badge
                        badgeContent={cartCount}
                        overlap="circular"
                        showZero
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        sx={{
                            "& .MuiBadge-badge": {
                                backgroundColor: "#212529",
                                color: "white",
                                right: "-0.2rem"
                            }
                        }}
                    >
                        <i className="bi bi-cart"></i>
                    </Badge>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;
