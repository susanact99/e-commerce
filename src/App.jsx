import React, { useState } from 'react';
import ProductList from './client/components/ProductList';
import Navbar from './client/components/NavBar';
import { Carousel } from './client/components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Categories } from './client/components/Categories';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Carousel />
      <Categories setSelectedCategory={setSelectedCategory} />
      <ProductList
        cartCount={cartCount}
        setCartCount={setCartCount}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default App;