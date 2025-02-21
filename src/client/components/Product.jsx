import "../styles/product.css";
import { StarRating } from "./StarRating.jsx";
import {useCart} from "../hooks/useCart.jsx"


export function Product({ image, title, price, rating, count, cartCount, setCartCount }) {
    const {addToCart} = useCart()

    return (
        <div className="product-card nunito-font">
            <img src={image} alt={title} className="product-image" />
            <button className="add-cart-button" onClick={addToCart}><i className="bi bi-cart-plus fs-5"></i></button>
            <div className="product-title-container">
                <h2 className="product-title" title={title}>{title}</h2>
            </div>
            <div className="price-rating-container">
                <p className="product-price">${price}</p>
                <StarRating rating={rating} count={count} />
            </div>
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="product-button"
            >
                Buy on Amazon
            </a>
        </div>
    );
}

