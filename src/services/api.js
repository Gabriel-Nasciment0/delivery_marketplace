const BASE_URL = "http://localhost:3000/"

export async function getProducts() {
    const response = await fetch(`${BASE_URL}/products`)
    return response.json()
}
