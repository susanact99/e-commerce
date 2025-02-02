import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded shadow">
          <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded" />
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
          >
            Buy on Amazon
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProductList;