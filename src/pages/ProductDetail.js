import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductCard from "../components/ProductCard";

function ProductDetail() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        setLoading(true);
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
            
        fetch(`https://dummyjson.com/products/category/${encodeURIComponent(data.category)}`)
            .then(res => res.json()
        .then(relatedData => {
            const filtered =relatedData.products.filter(p => p.id !== data.id).slice(0,4);
            setRelatedProducts(filtered);
            setLoading(false);
            }))
        });
    }, [id]);

    if (loading) return <p>Loading ...</p>
    if (!product) return <p> Product not found.</p>

    return (
        <div>
            <Breadcrumbs/>
            <h2>{product.title}</h2>
            <img src = {product.thumbnail} alt = {product.title} width="200" />
            <p>{product.description}</p>
            <p>Price: Rs.{product.price}</p>
            <p>Stock: {product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
            <p>Rating: {product.rating}</p>

            <h3> Related Products</h3>
            <div style={{display: "flex", gap:"16px", flexWrap:"wrap"}}>
                {relatedProducts.length>0 ? (
                    relatedProducts.map(rp => (
                        <ProductCard key={rp.id} product={rp} />
                    ))
                ): (
                    <p>No Related products found</p>
                )}
            </div>
        </div>
    );
}

export default ProductDetail;