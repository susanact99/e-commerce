
import { useEffect, useState } from "react";
import { Product } from "./Product";
import "../styles/productList.css";

export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price} />
      ))}
    </div>
  );
}

export default ProductList;
