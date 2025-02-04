import React from 'react';
import ProductList from './client/components/ProductList';
import Navbar from './client/components/NavBar';


const App = () => {
  return (
    <div>
      <Navbar/>
      <ProductList />
    </div>
  );
};

export default App;