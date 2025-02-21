import React, { useContext, useId, useState } from 'react';
import '../styles/filters.css';
import { FiltersContext } from '../context/filters';

export function Filters() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500);
    const {filters, setFilters} = useContext(FiltersContext)
    const minPriceFilterId = useId();
    const maxPriceFilterId = useId();

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
        setFilters(prevFilters => ({
            ...prevFilters,
            minPrice: Number(e.target.value)
        }));
    };

    const handleChangeMaxPrice = (e) => {
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
                    <label htmlFor={minPriceFilterId}>Minimum Price</label>
                    <input
                        type="range"
                        id={minPriceFilterId}
                        step={1}
                        min={0}
                        max={500}
                        value={filters.minPrice}
                        onChange={handleChangeMinPrice}
                    />
                    <span>{filters.minPrice}</span>
                </div>
                <div>
                    <label htmlFor={maxPriceFilterId}>Maximum Price</label>
                    <input
                        type="range"
                        id={maxPriceFilterId}
                        step={1}
                        min={0}
                        max={500}
                        value={filters.maxPrice}
                        onChange={handleChangeMaxPrice}
                    />
                    <span>{filters.maxPrice}</span>
                </div>
            </div>
        </section>
    );
}
