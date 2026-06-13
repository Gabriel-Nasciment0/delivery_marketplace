const BASE_URL = import.meta.env.VITE_API_URL

export async function getProducts() {
    const response = await fetch(`${BASE_URL}/products`)
    return response.json()
}

export async function getOrders() {
    const response = await fetch(`${BASE_URL}/orders`)
    return response.json()
}

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
