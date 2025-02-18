import React, { useState } from 'react';
import ProductList from './client/components/ProductList';
import Navbar from './client/components/NavBar';
import { Carousel } from './client/components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Filters } from './client/components/Filters';

const App = () => {
    const [cartCount, setCartCount] = useState(0);
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0,
        maxPrice: 1000
    });

    return (
        <div>
            <Navbar cartCount={cartCount} />
            <Carousel />
            <Filters setFilters={setFilters} />
            <ProductList
                cartCount={cartCount}
                setCartCount={setCartCount}
                filters={filters}
            />
        </div>
    );
};

export default App;
