import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";


function Navbar () {
    return (
    <div className ="Navbar">
        <div className="navbar-logo">
            <Link to ="/">MyShop</Link>
        </div>

        <div className="navbar-links">
            <Link to = "/">Home</Link>
            <Link to = "/cart">Cart</Link>
        </div>
    </div>   
    );     
}

export default Navbar;