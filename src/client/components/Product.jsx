"use client"

import "../styles/product.css"
import { StarRating } from "./StarRating.jsx"
import { useCart } from "../hooks/useCart.jsx"
import { useState } from "react"
import { ProductDetailModal } from "./ProductDetailModal.jsx"

export function Product({ id, image, title, price, rating, count, description, category, fullProduct }) {
  const { cart, addToCart, removeFromCart } = useCart()
  const [showModal, setShowModal] = useState(false)

  const isProductInCart = cart.some((item) => item.id === id)

  const handleCartAction = (e) => {
    e.stopPropagation() // Prevenir que el clic se propague al contenedor
    if (isProductInCart) {
      removeFromCart({ id })
    } else {
      addToCart({ id, image, title, price })
    }
  }

  const handleProductClick = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className="product-card nunito-font" onClick={handleProductClick}>
        <img src={image || "/placeholder.svg"} alt={title} className="product-image" />
        <button className="add-cart-button" onClick={handleCartAction}>
          <i className={`bi ${isProductInCart ? "bi-cart-x" : "bi-cart-plus"} fs-5`}></i>
        </button>
        <div className="product-title-container">
          <h2 className="product-title" title={title}>
            {title}
          </h2>
        </div>
        <div className="price-rating-container">
          <p className="product-price">${price}</p>
          <StarRating rating={rating} count={count} />
        </div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
          className="product-button"
        >
          Buy Now!
        </a>
      </div>

      {showModal && (
        <ProductDetailModal
          product={
            fullProduct || {
              id,
              image,
              title,
              price,
              rating: { rate: rating, count },
              description: description || "Descripción no disponible",
              category,
            }
          }
          onClose={handleCloseModal}
          onAddToCart={(product) => {
            if (isProductInCart) {
              removeFromCart({ id: product.id })
            } else {
              addToCart({
                id: product.id,
                image: product.image,
                title: product.title,
                price: product.price,
              })
            }
          }}
        />
      )}
    </>
  )
}

