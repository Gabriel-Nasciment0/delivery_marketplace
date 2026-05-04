import { useEffect, useState } from "react"
import { getProducts } from "../../services/api"

function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    return (
        <div>
            <h1>Produtos</h1>

            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>R$ {product.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Home
