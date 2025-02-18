import { useEffect, useState } from "react";
import { Product } from "./Product";
import "../styles/productList.css";

export function ProductList({ setCartCount, cartCount, filters }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error al obtener los productos");
                }
                return res.json();
            })
            .then((products) => {
                setProducts(products);
            })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        const filtered = products.filter(product =>
            product.price >= filters.minPrice &&
            product.price <= filters.maxPrice &&
            (filters.category === 'all' || product.category === filters.category)
        );
        setFilteredProducts(filtered);
    }, [filters, products]);

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
