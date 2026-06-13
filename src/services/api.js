const BASE_URL = import.meta.env.VITE_API_URL

export async function getProducts() {
    const response = await fetch(`${BASE_URL}/products`)
    return response.json()
}
