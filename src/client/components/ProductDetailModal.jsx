"use client"

import { useEffect } from "react"
import { StarRating } from "./StarRating"


export function ProductDetailModal({ product, onClose, onAddToCart }) {
  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  // Cerrar el modal al hacer clic en el fondo
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Prevenir que el clic en el contenido del modal cierre el modal
  const handleContentClick = (e) => {
    e.stopPropagation()
  }

  if (!product) return null

  const isProductInCart = false // Esto debería venir de tu lógica de carrito

  return (
    <div className="product-modal-backdrop" onClick={handleBackdropClick}>
      <div className="product-modal-content nunito-font" onClick={handleContentClick}>
        <button className="product-modal-close" onClick={onClose}>
        <i className="bi bi-x-lg"></i>
        </button>

        <div className="product-modal-grid">
          <div className="product-modal-image-container">
            <img src={product.image || "/placeholder.svg"} alt={product.title} className="product-modal-image" />
          </div>

          <div className="product-modal-details">
            <h2 className="product-modal-title">{product.title}</h2>

            <p className="product-modal-description">{product.description}</p>

            <div className="product-modal-rating">
              <StarRating rating={product.rating?.rate} count={product.rating?.count} />
            </div>

            <div className="product-modal-price-container">
              <span className="product-modal-price">${product.price}</span>
            </div>

            <div className="product-modal-actions">
              <button className="product-modal-cart-button" onClick={() => onAddToCart(product)}>
                <i className={`bi ${isProductInCart ? "bi-cart-x" : "bi-cart-plus"} fs-5 me-2`}></i>
                {isProductInCart ? "Quitar del carrito" : "Añadir al carrito"}
              </button>

              <a href="#" className="product-button product-modal-buy-button">
                Comprar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

