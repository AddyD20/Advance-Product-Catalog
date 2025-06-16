import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <p>Loading ...</p>
    if (!product) return <p> Product not found.</p>

    return (
        <div>
            <h2>{product.title}</h2>
            <img src = {product.thumbnail} alt = {product.title} width="200" />
            <p>{product.description}</p>
            <p>Price: Rs.{product.price}</p>
            <p>Stock: {product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
            <p>Rating: {product.rating}</p>
        </div>
    );
}

export default ProductDetail;