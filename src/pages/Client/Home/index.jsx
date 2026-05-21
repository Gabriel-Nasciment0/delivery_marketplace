import { CartContext } from "../../../contexts/CartContext.js"
import { useEffect, useState, useContext } from "react"
import { getProducts } from "../../../services/api.js"
import ProductCard from "../../../components/ProductCard/index.jsx"
import "./styles.css"

function Home() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("Todos")
    const { addToCart, cart } = useContext(CartContext)
    console.log(cart)
    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    const categories = ["Todos", "Hambúrguer", "Pizza", "Japonesa"]
    const normalizeText = (text) => {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
    }

    const filteredProducts = products.filter((product) => {
        const matchesCategory =
            selectedCategory === "Todos" ||
            product.category === selectedCategory

        const matchesSearch = normalizeText(product.name).includes(
            normalizeText(search),
        )

        return matchesCategory && matchesSearch
    })
    return (
        <div>
            <h1>Produtos</h1>
            <input
                type="text"
                placeholder="Buscar produto"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
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
            <div className="products-grid">
                {filteredProducts.map((p) => (
                    <ProductCard
                        key={p.id}
                        product={p}
                        onAdd={() => addToCart(p)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
