import { useEffect, useState } from 'react';
import "./productList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener los productos");
        } else {
          return res.json();
        }
      })
      .then((products) => setProducts(products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">${product.price}</p>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="product-button"
          >
            Buy on Amazon
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
