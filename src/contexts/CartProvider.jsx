import { useState } from "react"
import { CartContext } from "./CartContext"

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    function addToCart(product) {
        setCart((prevCart) => {
            const itemExists = prevCart.find((item) => item.id === product.id)

            if (itemExists) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                          }
                        : item,
                )
            }

            return [...prevCart, { ...product, quantity: 1 }]
        })
    }

    function removeFromCart(productId) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
    }

    function updateQuantity(productId, amount) {
        setCart((prevCart) =>
            prevCart
                .map((item) => {
                    if (item.id === productId) {
                        return {
                            ...item,
                            quantity: item.quantity + amount,
                        }
                    }
                    return item
                })
                .filter((item) => item.quantity > 0),
        )
    }
    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    )
}
