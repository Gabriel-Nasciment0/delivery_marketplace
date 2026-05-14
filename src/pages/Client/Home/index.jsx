import { useEffect, useState, useContext } from "react"
import { getProducts } from "../../../services/api.js"
import ProductCard from "../../../components/ProductCard/index.jsx"
import { CartContext } from "../../../contexts/CartContext.js"

function Home() {
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("Todos")
    const { addToCart, cart } = useContext(CartContext)

    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    console.log(cart)
    const categories = ["Todos", "Hambúrguer", "Pizza", "Japonesa"]

    const filteredProducts =
        selectedCategory === "Todos"
            ? products
            : products.filter(
                  (product) => product.category === selectedCategory,
              )
    return (
        <div>
            <h1>Produtos</h1>
            <div>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {filteredProducts.map((p) => (
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
