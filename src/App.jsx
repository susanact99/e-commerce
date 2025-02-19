import React, { useContext, useState } from 'react';
import ProductList from './client/components/ProductList';
import Navbar from './client/components/NavBar';
import { Carousel } from './client/components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Filters } from './client/components/Filters';
import { FiltersContext } from './client/constext/filters';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");


  const {setFilters} = useContext(FiltersContext)

  return (
    <div id='home'>
      <Navbar
        cartCount={cartCount}
        setSearchTerm={setSearchTerm}
      />
      <Carousel />
      <Filters setFilters={setFilters} />
      <ProductList
        cartCount={cartCount}
        setCartCount={setCartCount}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default App;
