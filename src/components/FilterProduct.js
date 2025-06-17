import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductCard.css";
import "./FilterProduct.css";

function FilterProduct({products}) {

    const [page, setPage] = useState(1);
    const [category, setCategory] = useState("All");
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [minRating, setMinRating] = useState(0);
    const limit= 12;


    const categories = ["All", ...Array.from(new Set((products || []).map(p => p.category)))];

    //filtering logic
    const filteredProducts = products.filter(product => {
        const inCategory = category === "All" || product.category === category;
        const inPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        const inRating = product.rating >= minRating;
        return inCategory && inPrice && inRating;
    });

    //pagination logic
    const totalPages = Math.max(1, Math.ceil(filteredProducts.length/limit));
    const paginatedProducts = filteredProducts.slice((page -1) * limit , page * limit);

    //reset page to 1 when filters change 
    useEffect(() => {
        setPage(1);
    },[category, priceRange, minRating]);

    useEffect(() =>{
        if (page > totalPages) {
            setPage(totalPages);
        }
    }, [totalPages, page]);

    return (

        <div>
            <div className="filter-bar">

                <select value = {category} onChange={e => setCategory(e.target.value)}>
                    {categories.map(cat => (
                        <option value ={cat} key = {cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                        ))}
                </select>
                <div className="price-filter">
                    <label className="price-label">Price: </label>
                    <input 
                    type="number" 
                    value={priceRange[0]} 
                    min = {0} max={priceRange[1]}
                    onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="price-input"
                    placeholder="Min Price"
                    />

                    <span className="price-sep"> - </span>
                    
                    <input
                    type = "number"
                    value={priceRange[1]}
                    min={priceRange[0]}
                    onChange={e => setPriceRange([priceRange[0],Number(e.target.value)])}
                    className="price-input"
                    placeholder="Max Price"
                />



                </div>
                

                

                

                <select value={minRating} onChange={e => setMinRating(Number(e.target.value))}>
                    <option value={0}>All Ratings</option>
                    <option value={4}>4 Stars & up</option>
                    <option value={3}>3 Stars & up</option>
                    <option value={2}>2 Stars & up</option>
                </select>
            </div>

            <div className="product-grid">
                {paginatedProducts.length === 0 ? (
                    <p>No products match your filters</p>
                ): (
                    paginatedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                )}
            </div>

            <div className="pagination-controls">
                    <button onClick={() => setPage(page -1)} disabled={page === 1}>
                        Previous
                    </button>
                    <span>
                        Page {page} of {totalPages}
                    </span>
                    <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                        Next
                    </button>
            </div>
        </div>
    )
}

export default FilterProduct;