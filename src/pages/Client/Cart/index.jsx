import { useContext } from "react"

import { CartContext } from "../../../contexts/CartContext.js"

function Cart() {
    const { cart } = useContext(CartContext)

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
    )
    return (
        <div>
            <h1>Meu Carrinho</h1>
            <p>Total: R$ {total.toFixed(2)}</p>

            {cart.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Quantidade: {item.quantity}</p>
                    <p>Preço: R$ {item.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    )
}

export default Cart
