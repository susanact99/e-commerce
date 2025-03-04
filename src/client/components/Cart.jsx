import { useCart } from "../hooks/useCart";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "../styles/cart.css";

const Cart = () => {
  const { cart, setCart, clearCart } = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  const updateQuantity = (id, newQuantity) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
  };

  return (
    <div className="cart nunito-font">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
      ))}
      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button>Buy now</button>
      </div>
      <button onClick={clearCart}>Clear cart</button>
    </div>
  );
};

export default Cart;
