import React from 'react';
import ProductList from './client/components/ProductList';
import Navbar from './client/components/NavBar';
import { Carousel } from './client/components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <ProductList />
    </div>
  );
};

export default App;