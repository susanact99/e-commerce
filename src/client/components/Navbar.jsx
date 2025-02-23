import React, { useState } from "react";
import { Badge } from "@mui/material";
import "../styles/navbar.css";
import { SearchBar } from "./SearchBar";
import { useCart } from "../hooks/useCart";
import { Menu } from "./Menu";

function Navbar({ setSearchTerm, setShowCart, showCart }) {
    const [searchBar, setSearchBar] = useState(false);
    const {cartCount} = useCart()



    return (
        <nav className="navbar nunito-font ">
            <Menu/>
            <SearchBar
                searchBar={searchBar}
                setSearchBar={setSearchBar}
                setSearchTerm={setSearchTerm}
            />

            <div className="user-actions" onClick={()=>setShowCart(!showCart)}>
                <Badge
                    badgeContent={cartCount}
                    overlap="circular"
                    showZero
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    sx={{
                        "& .MuiBadge-badge": {
                            backgroundColor: "#212529",
                            color: "white",
                            right: "-0.2rem",
                        },
                    }}
                >
                    <i className="bi bi-cart"></i>
                </Badge>
            </div>
        </nav>
    );
}

export default Navbar;
