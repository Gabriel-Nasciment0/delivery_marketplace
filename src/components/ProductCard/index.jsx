import "./style.css"
function ProductCard({ Product, onAdd }) {
    return (
        <div className="product-card">
            <img
                // src={Product.image}
                alt={Product.name}
            />

            <h2>{Product.name}</h2>
            <p>R$ {Product.price.toFixed(2)}</p>

            <button onClick={onAdd}>Adicionar</button>
        </div>
    )
}

export default ProductCard
