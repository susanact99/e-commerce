import "../styles/product.css";

export function Product({ image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">${price}</p>
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

