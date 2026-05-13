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

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}
