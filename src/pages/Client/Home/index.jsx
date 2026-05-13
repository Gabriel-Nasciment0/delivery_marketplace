import { useEffect, useState, useContext } from "react"
import { getProducts } from "../../../services/api.js"
import ProductCard from "../../../components/ProductCard/index.jsx"
import { CartContext } from "../../../contexts/CartContext.js"

function Home() {
    const [products, setProducts] = useState([])

    const { addToCart, cart } = useContext(CartContext)

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
                    product={p}
                    onAdd={() => addToCart(p)}
                />
            ))}
        </div>
    )
}

export default Home
