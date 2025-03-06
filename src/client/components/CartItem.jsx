import { useCart } from "../hooks/useCart";


const CartItem = ({ item, updateQuantity }) => {

  const {removeFromCart} = useCart();

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1)
  }

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1)
    }
  }

  return (
    <div className="cart-item">
      <div className="item-details">
        <img src={item.image} alt={item.title} />
        <div className="item-title">
          <h5>{item.title}</h5>
          <span> {item.price.toFixed(2)}$</span>
        </div>
      </div>

      <div className="item-total">
        <button onClick={handleDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrease}>+</button>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <button className="remove-from-cart-button" onClick={() => removeFromCart(item)} >
        <i className="bi bi-trash3"></i>
      </button>
    </div>
  )
}

export default CartItem

