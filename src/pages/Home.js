import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/products";
import ProductCard from "../components/ProductCard";
import FilterProduct from "../components/FilterProduct";

import "../components/ProductCard.css";
import "./Home.css";
import { data } from "react-router-dom";

function Home() {
    const [products, setProducts] = useState([]);
    const [page , setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 12;


    useEffect(() => {
        getAllProducts().then(data => {
            setProducts(data);
        });
    }, []);


    return (
        

        <div className="catalog-container"> 
            <h2>Discover handpicked products tailored just for you — filter, explore, and find your perfect fit.</h2>
            <p className="catalog-desc">
                Browse our latest collection of handpicked products . Use the filters to narrow down by category , price , or rating and find exactly what you're looking for!
            </p>
            <FilterProduct products={products} />
        </div>
    );
}

export default Home;