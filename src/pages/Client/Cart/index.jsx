import { useContext } from "react"

import { CartContext } from "../../../contexts/CartContext.js"
import { Link } from "react-router-dom"

function Cart() {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext)

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
                    <button onClick={() => updateQuantity(item.id, -1)}>
                        -
                    </button>
                    <button onClick={() => updateQuantity(item.id, 1)}>
                        +
                    </button>
                    <p>Preço: R$ {item.price.toFixed(2)}</p>
                    <button onClick={() => removeFromCart(item.id)}>
                        Remover
                    </button>
                </div>
            ))}

            <Link to="/checkout">Finalizar Compra</Link>
        </div>
    )
}

export default Cart
