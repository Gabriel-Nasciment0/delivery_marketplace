import { CartContext } from "../../../contexts/CartContext.js"
import { useContext } from "react"
import { Link } from "react-router-dom"
import "./style.css"
function Cart() {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext)

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
    )
    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <h1>Seu carrinho está vazio</h1>

                <Link to="/">Ver produtos</Link>
            </div>
        )
    }
    return (
        <div className="cart-container">
            <h1 className="cart-title">Meu Carrinho</h1>

            <div className="cart-items">
                {cart.map((item) => (
                    <div
                        key={item.id}
                        className="cart-item"
                    >
                        <div className="item-info">
                            <h2>{item.name}</h2>
                            <p>R$ {item.price.toFixed(2)}</p>
                            <p>
                                Subtotal: R${" "}
                                {(item.price * item.quantity).toFixed(2)}
                            </p>
                        </div>

                        <div className="quantity-controls">
                            <button
                                onClick={() => updateQuantity(item.id, -1)}
                                disabled={item.quantity === 1}
                            >
                                -
                            </button>

                            <span>{item.quantity}</span>

                            <button onClick={() => updateQuantity(item.id, 1)}>
                                +
                            </button>
                        </div>

                        <button
                            className="remove-btn"
                            onClick={() => removeFromCart(item.id)}
                        >
                            Remover
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <h2>Total: R$ {total.toFixed(2)}</h2>

                <Link
                    to="/checkout"
                    className="checkout-btn"
                >
                    Finalizar Compra
                </Link>
            </div>
        </div>
    )
}

export default Cart
