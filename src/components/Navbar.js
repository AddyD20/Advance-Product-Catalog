import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../contexts/cartContext";

function Navbar () {

    const {cartItems} = useCart();

    const totalItems = cartItems.reduce((sum, item)=> sum + item.quantity, 0);

    return (
    <div className ="Navbar">
        <div className="navbar-logo">
            <Link to ="/">MyShop</Link>
        </div>

        <div className="navbar-links">
            <Link to = "/">Home</Link>
            <Link to = "/cart" className="cart-link">
            <span role="img" aria-label="cart" className="cart-icon">
                🛒
                {totalItems > 0 && (
                    <span className="cart-count">{totalItems}</span>
                )}
            </span>
        
            </Link>
        </div>
        
    </div>   
    );     
}

export default Navbar;