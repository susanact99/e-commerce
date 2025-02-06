import "../styles/product.css";
import { StarRating } from "./StarRating.jsx";

export function Product({ image, title, price, rating, count }) {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
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

