import { useContext, useEffect, useState } from "react";
import { Product } from "./Product";
import { FiltersContext } from "../context/filters";
import { useCart } from "../hooks/useCart";

export function ProductList({ searchTerm }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { filters } = useContext(FiltersContext)
    const { cart } = useCart()

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
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filters.category === 'all' || product.category === filters.category)
        );
        setFilteredProducts(filtered);
    }, [filters, products, searchTerm]);

    return (
        <div className="product-grid" id="product-list">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        rating={product.rating?.rate}
                        count={product.rating?.count}
                    />
                ))
            ) : (
                <h4 className="no-products-message">No products were found...<i className="bi bi-search-heart"></i></h4>
            )}
        </div>
    );
}

export default ProductList;