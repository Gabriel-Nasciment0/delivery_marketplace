import { useEffect, useState } from "react"
import { getOrders } from "../../services/api"

export default function Admin() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        async function loadOrders() {
            const data = await getOrders()
            setOrders(data)
        }

        loadOrders()
    }, [])

    return (
        <div>
            <h1>Painel Administrativo</h1>

            {orders.map((order) => (
                <div key={order.id}>
                    <h3>{order.customerName}</h3>

                    <p>Total: R$ {order.total}</p>

                    <p>
                        Pagamento:
                        {order.paymentMethod}
                    </p>

                    <p>
                        Status:
                        {order.paymentStatus}
                    </p>
                </div>
            ))}
        </div>
    )
}
