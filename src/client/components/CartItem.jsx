const CartItem = ({ item, updateQuantity }) => {
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
          <spam> {item.price.toFixed(2)}$</spam>
        </div>
      </div>

      <div className="item-total">
        <button onClick={handleDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrease}>+</button>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CartItem

