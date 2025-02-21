import "../styles/product.css";
import { StarRating } from "./StarRating.jsx";
import { useCart } from "../hooks/useCart.jsx"

export function Product({ id, image, title, price, rating, count }) {
    const { cart, addToCart, removeFromCart } = useCart()

    const isProductInCart = cart.some(item => item.id === id)

    const handleCartAction = () => {
        if (isProductInCart) {
            removeFromCart({ id })
        } else {
            addToCart({ id, image, title, price })
        }
    }

    return (
        <div className="product-card nunito-font">
            <img src={image || "/placeholder.svg"} alt={title} className="product-image" />
            <button className="add-cart-button" onClick={handleCartAction}>
                <i className={`bi ${isProductInCart ? 'bi-cart-x' : 'bi-cart-plus'} fs-5`}></i>
            </button>
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