import { createContext, useState } from "react"

export const CartContext = createContext();


export function CartProvider ({children}){
    const [cart, setCart] = useState([])
    const [cartCount, setCartCount] = useState(0)


    const addToCart = (product) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id);
    
        if (productInCartIndex >= 0) {
            // Si el producto ya está en el carrito, solo aumenta la cantidad
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1;
            setCart(newCart);
        } else {
            // Si el producto NO está en el carrito, agrégalo y aumenta cartCount
            setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
            setCartCount(prevCount => prevCount + 1);
        }
    };
    
    const clearCart = () => {
        setCart([])
        setCartCount(0)
    }

    return(
        <CartContext.Provider value={{ cart, cartCount, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}