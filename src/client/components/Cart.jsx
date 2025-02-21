import { useCart } from "../hooks/useCart";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "../styles/cart.css";

const Cart = () => {
  const { cart } = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  const updateQuantity = (id, newQuantity) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
      ))}
      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
