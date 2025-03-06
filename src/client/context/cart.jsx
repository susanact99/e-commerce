import { createContext, useEffect, useState } from "react"

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [cartCount, setCartCount] = useState(0)

    const addToCart = (product) => {
        setCart(prevCart => {
            const productInCart = prevCart.find(item => item.id === product.id);
    
            if (productInCart) {
                // If the product is already in the cart, increase the quantity
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                Swal.fire({
                    text: 'Product added to cart',
                    icon: 'success',
                    timer: 3000,
                    showConfirmButton: false,
                    background: 'rgb(245, 240, 230)',
                    toast: true,
                  });
                return [...prevCart, { ...product, quantity: 1 }];
                
            }
        });
    };
    
    const removeFromCart = (product) => {
        setCart(prevCart => {
            const productInCart = prevCart.find(item => item.id === product.id);
            
            if (productInCart.quantity > 1) {
                // If quantity > 1, decrease the quantity
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
                );
            } else {
                // If quantity is 1, remove the item from the cart
                return prevCart.filter(item => item.id !== product.id);
            }
        });
    };

    const clearCart = () => {
        setCart([])
    }

    // Update cartCount whenever the cart changes
    useEffect(() => {
        const newCartCount = cart.reduce((total, item) => total + item.quantity, 0);
        setCartCount(newCartCount);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, cartCount, setCart, addToCart, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}