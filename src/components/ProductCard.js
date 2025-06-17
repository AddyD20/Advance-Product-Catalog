import React from "react";
import {Link} from "react-router-dom";
import { useCart } from "../contexts/cartContext";
import "./ProductCard.css";

function ProductCard({product}) {

    const {addToCart} = useCart();

    return (
        <div className="product-card">
            <img src= {product.thumbnail} alt={product.title} width = "120" />
            <h3>{product.title}</h3>
            <p className="product-desc">{product.description}</p>
            <p className="product-details ">Price:$.{product.price}</p>
            <div className={`product-stocks${product.stock> 0 ? "": "out"}`}>
                <p>{product.stock >0 ? "In Stock" : "Out of Stock"}</p>
            </div>
            
            <Link to ={`/product/${product.id}`}>
                <button> View Details </button>
            </Link>
            <button disabled = {product.stock === 0}
            onClick={() => addToCart(product)}> Add to Cart</button>
        </div>
    );
}

export default ProductCard;