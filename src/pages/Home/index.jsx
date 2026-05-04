import { useEffect, useState } from "react"
import { getProducts } from "../../services/api"
import ProductCard from "../../components/ProductCard"

function Home() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    function addToCart(product) {
        setCart((prevCart) => {
            const itemExists = prevCart.find((item) => item.id === product.id)
            if (itemExists) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                )
            }
            return [...prevCart, { ...product, quantity: 1 }]
        })
    }

    useEffect(() => {
        getProducts().then(setProducts)
    }, [])
    console.log(cart)
    return (
        <div>
            <h1>Produtos</h1>

            {products.map((p) => (
                <ProductCard
                    key={p.id}
                    Product={p}
                    onAdd={() => addToCart(p)}
                />
            ))}
        </div>
    )
}

export default Home
