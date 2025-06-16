import React from "react";
import "./Footer.css";

function Footer() {
    return (

        <div className="footer">
            <p>{new Date().getFullYear()} MyShop. All rights reserved</p>
        </div>

    );
}

export default Footer;