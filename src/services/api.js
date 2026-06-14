const BASE_URL = import.meta.env.VITE_API_URL
//pedidos
export async function createOrder(order) {
    const response = await fetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    })

    return response.json()
}

export async function getOrders() {
    const response = await fetch(`${BASE_URL}/orders`)
    return response.json()
}

export async function updateOrder(orderId, status) {
    const response = await fetch(`${BASE_URL}/orders/${orderId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
    })
    return response.json()
}

export async function deleteOrder(id) {
    await fetch(`${BASE_URL}/orders/${id}`, {
        method: "DELETE",
    })
}
//produtos
export async function createProduct(product) {
    const response = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    })

    return response.json()
}

export async function getProducts() {
    const response = await fetch(`${BASE_URL}/products`)
    return response.json()
}

export async function updateProduct(id, product) {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    })

    return response.json()
}

export async function deleteProduct(id) {
    await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
    })
}
