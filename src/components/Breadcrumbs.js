import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./Breadcrumb.css";


function Breadcrumbs() {
    const location = useLocation();
    
    const pathnames = location.pathname
        .split("/")
        .filter((x) => x && x.toLowerCase() !== "product");

    return (
        <nav className="breadcrumbs">
            <Link to ="/">Home </Link>
            {pathnames.map((value,index) => {
                const to ="/" + pathnames.slice(0, index+1).join("/");
                const isLast = index === pathnames.length -1;

                let label = value.charAt(0).toUpperCase()+value.slice(1);
                if(isLast){
                    label="Product Detail";
                }
                
                return (
                    <span key ={to}>
                        {" > "}
                        {index === pathnames.length - 1 ? (
                            <span>{label}</span>
                        ): (
                            <Link to = {to}> {label}</Link>
                        )}
                    </span>
                );
            })}
        </nav>
    )
}

export default Breadcrumbs;