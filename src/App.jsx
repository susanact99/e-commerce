import React from 'react';
import ProductList from './client/components/ProductList';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Amazon Affiliate Store</h1>
      <ProductList />
    </div>
  );
};

export default App;