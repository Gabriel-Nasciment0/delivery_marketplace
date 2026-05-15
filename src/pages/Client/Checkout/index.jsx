import { CartContext } from "../../../contexts/CartContext"
import { useContext, useState } from "react"
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const itemsMessage = cart
            .map(
                (item) =>
                    `${item.name} X ${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}`,
            )
            .join("\n")

        const total = cart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0,
        )

        const message = `
        Novo pedido

        ${itemsMessage}

        Total: R$ ${total.toFixed(2)}

        Cliente
        Nome: ${formData.name}
        Telefone: ${formData.phone}
        Endereço: ${formData.address}

        Método de Pagamento:
        ${formData.paymentMethod}

        Observações:
        ${formData.notes}
        `

        const encodedMessage = encodeURIComponent(message)

        const phoneNumber = "5531972064997" // Substitua pelo número do WhatsApp do restaurante
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        window.open(whatsappUrl, "_blank")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
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
                    <option value="">Select Payment Method</option>
                    <option value="credit_card">Credit Card</option>
                    <option value="debit_card">Debit Card</option>
                    <option value="pix">Pix</option>
                    <option value="cash">Cash</option>
                </select>
                <textarea
                    name="notes"
                    placeholder="Notes"
                    value={formData.notes}
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
