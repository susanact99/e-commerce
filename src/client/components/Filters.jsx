import React, { useState } from 'react';
import '../styles/filters.css';

export function Filters({ setFilters }) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500);

    const categories = [
        { category: "all", id: 0 },
        { category: "men's clothing", id: 1 },
        { category: "jewelery", id: 2 },
        { category: "electronics", id: 3 },
        { category: "women's clothing", id: 4 }
    ];

    const handleCategoryClick = (category) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            category
        }));
    };

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value);
        setFilters(prevFilters => ({
            ...prevFilters,
            minPrice: Number(e.target.value)
        }));
    };

    const handleChangeMaxPrice = (e) => {
        setMaxPrice(e.target.value);
        setFilters(prevFilters => ({
            ...prevFilters,
            maxPrice: Number(e.target.value)
        }));
    };

    return (
        <section>
            <div className='main-container'>
                <h5 className='categories-header'>-MAIN CATEGORIES-</h5>
                <div className='categories-container'>
                    {categories.map((item) => (
                        <button
                            key={item.id}
                            className='category'
                            onClick={() => handleCategoryClick(item.category)}
                        >
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
            <div className='price'>
                <div>
                    <label htmlFor="priceMin">Minimum Price</label>
                    <input
                        type="range"
                        id='priceMin'
                        step={1}
                        min={0}
                        max={500}
                        value={minPrice}
                        onChange={handleChangeMinPrice}
                    />
                    <span>{minPrice}</span>
                </div>
                <div>
                    <label htmlFor="priceMax">Maximum Price</label>
                    <input
                        type="range"
                        id='priceMax'
                        step={1}
                        min={0}
                        max={500}
                        value={maxPrice}
                        onChange={handleChangeMaxPrice}
                    />
                    <span>{maxPrice}</span>
                </div>
            </div>
        </section>
    );
}
