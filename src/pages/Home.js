import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/products";
import ProductCard from "../components/ProductCard";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(setProducts);
    }, []);

    return (
        <div>
            <h2>Product Catalog</h2>
            <div>
                {products.map(product =>
                    <ProductCard key = {product.id} product={product} />
                )}
            </div>
        </div>
    );
}

export default Home;