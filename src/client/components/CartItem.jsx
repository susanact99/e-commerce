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
          <h3>{item.name}</h3>
          <p>Price: ${item.price.toFixed(2)}</p>
        </div>
        <div className="item-quantity">
          <button onClick={handleDecrease}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <div className="item-total">
          <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      </div>
    )
  }
  
  export default CartItem
  
  