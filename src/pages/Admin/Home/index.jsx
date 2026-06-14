import { useEffect, useState } from "react"
import { getOrders, updateOrder, deleteOrder } from "../../../services/api"
import "./style.css"

export default function Admin() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        async function loadOrders() {
            const data = await getOrders()
            setOrders(data)
        }

        loadOrders()
    }, [])

    const handleStatusChange = async (id, paymentStatus) => {
        const updatedOrder = await updateOrder(id, { paymentStatus })

        setOrders((prevOrders) =>
            prevOrders.map((order) => (order.id === id ? updatedOrder : order)),
        )
    }

    const handleDeleteOrder = async (id) => {
        try {
            await deleteOrder(id)

            setOrders((prevOrders) =>
                prevOrders.filter((order) => order.id !== id),
            )
        } catch (error) {
            console.error("Erro ao excluir pedido:", error)
        }
    }

    return (
        <div className="admin-container">
            <h1>Painel Administrativo</h1>

            <p>Total de pedidos: {orders.length}</p>

            {orders.map((order) => (
                <div
                    key={order.id}
                    className="order-card"
                >
                    <h3>{order.customerName}</h3>

                    <p>Endereço: {order.address}</p>

                    <p>
                        Data:
                        {new Date(order.createdAt).toLocaleString("pt-BR")}
                    </p>

                    <p>Telefone: {order.phone}</p>

                    <p>Total: R$ {order.total.toFixed(2)}</p>

                    <p>Pagamento: {order.paymentMethod}</p>

                    <select
                        value={order.paymentStatus}
                        onChange={(e) =>
                            handleStatusChange(order.id, e.target.value)
                        }
                    >
                        <option value="Pendente">Pendente</option>
                        <option value="Em preparo">Em preparo</option>
                        <option value="Saiu para entrega">
                            Saiu para entrega
                        </option>
                        <option value="Entregue">Entregue</option>
                    </select>

                    <h4>Itens</h4>

                    <ul>
                        {order.items.map((item) => (
                            <li key={item.id}>
                                {item.name} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => handleDeleteOrder(order.id)}>
                        Excluir
                    </button>
                </div>
            ))}
        </div>
    )
}
