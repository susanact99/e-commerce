import React, { useContext, useState } from 'react';
import ProductList from './client/components/ProductList';
import Navbar from './client/components/NavBar';
import Cart from "./client/components/Cart"
import { Carousel } from './client/components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Filters } from './client/components/Filters';
import { FiltersContext } from './client/context/filters';
import { CartProvider } from './client/context/cart';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setFilters } = useContext(FiltersContext)
  const [showCart, setShowCart] = useState(false)

  return (
    <CartProvider>
      <div id='home'>
        <Navbar
          setSearchTerm={setSearchTerm}
          setShowCart={setShowCart}
          showCart={showCart}
        />
        <Carousel />
        <Filters setFilters={setFilters} />
        <ProductList
          searchTerm={searchTerm}
        />
      </div>
      {showCart && <Cart/>}
    </CartProvider>

  );
};

export default App;
