import React from "react";
import {Link} from "react-router-dom";
import { useCart } from "../contexts/cartContext";

function ProductCard({product}) {

    const {addToCart} = useCart();

    return (
        <div>
            <img src= {product.thumbnail} alt={product.title} width = "120" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price:Rs.{product.price}</p>
            <p>{product.stock >0 ? "In Stock" : "Out of Stock"}</p>
            <Link to ={`/product/${product.id}`}>
                <button> View Details </button>
            </Link>
            <button disabled = {product.stock === 0}
            onClick={() => addToCart(product)}> Add to Cart</button>
        </div>
    );
}

export default ProductCard;