import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import "../styles/productList.css";

export function ProductList({ setCartCount, cartCount, selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener los productos");
        } else {
          return res.json();
        }
      })
      .then((products) => {
        setProducts(products);
        setFilteredProducts(products);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          rating={product.rating?.rate}
          count={product.rating?.count}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
      ))}
    </div>
  );
}

export default ProductList;