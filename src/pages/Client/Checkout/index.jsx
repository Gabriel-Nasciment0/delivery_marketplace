import { CartContext } from "../../../contexts/CartContext"
import { createOrder } from "../../../services/api"
import { useContext, useState } from "react"
import "./style.css"
export default function Checkout() {
    const { cart } = useContext(CartContext)
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        paymentMethod: "",
        notes: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        const paymentStatus =
            formData.paymentMethod === "PIX" ? "Pendente" : "Pagar na entrega"

        const order = {
            id: crypto.randomUUID(),

            customerName: formData.name,
            phone: formData.phone,
            address: formData.address,

            paymentMethod: formData.paymentMethod,
            paymentStatus,

            items: cart,
            total,

            notes: formData.notes,

            createdAt: new Date().toISOString(),
        }

        const itemsMessage = cart
            .map(
                (item) =>
                    `${item.name} X ${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}`,
            )
            .join("\n")

        const message = `
Novo Pedido

${itemsMessage}

Total: R$ ${total.toFixed(2)}

Cliente
Nome: ${formData.name}
Telefone: ${formData.phone}
Endereço: ${formData.address}

Método de Pagamento:
${formData.paymentMethod}

Status:
${paymentStatus}

Observações:
${formData.notes}
`

        const encodedMessage = encodeURIComponent(message)

        const phoneNumber = "" //para testar o envio de pedidos pelo WhattsApp

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

        try {
            await createOrder(order)

            window.open(whatsappUrl, "_blank")

            setFormData({
                name: "",
                phone: "",
                address: "",
                paymentMethod: "",
                notes: "",
            })
        } catch (error) {
            console.error("Erro ao criar pedido:", error)
        }
    }

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
    )

    if (cart.length === 0) {
        return (
            <div className="checkout-container">
                <h1 className="checkout-title">Carrinho vazio</h1>
                <p>Adicione produtos antes de finalizar o pedido.</p>
            </div>
        )
    }
    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Finalizar Pedido</h1>
            <div className="order-summary">
                <h2>Resumo do Pedido</h2>

                {cart.map((item) => (
                    <div
                        key={item.id}
                        className="summary-item"
                    >
                        <span>{item.name}</span>
                        <span>x{item.quantity}</span>
                    </div>
                ))}

                <h3>Total: R$ {total.toFixed(2)}</h3>
            </div>
            <form
                onSubmit={handleSubmit}
                className="checkout-form"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Telefone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Endereço"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
                <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecionar Método de Pagamento</option>
                    <option value="Cartão de Crédito">Cartão de Crédito</option>

                    <option value="Cartão de Débito">Cartão de Débito</option>

                    <option value="PIX">PIX</option>

                    <option value="Dinheiro">Dinheiro</option>
                </select>
                <textarea
                    name="notes"
                    placeholder="Observações"
                    value={formData.notes}
                    onChange={handleChange}
                />

                <button type="submit">Enviar Pedido via WhatsApp</button>
            </form>
        </div>
    )
}
