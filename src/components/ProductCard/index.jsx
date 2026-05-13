import "./style.css"
function ProductCard({ product, onAdd }) {
    return (
        <div className="product-card">
            <img
                // src={product.image}
                alt={product.name}
            />

            <h2>{product.name}</h2>
            <p>R$ {product.price.toFixed(2)}</p>

            <button
                onClick={() => {
                    onAdd()
                }}
            >
                Adicionar
            </button>
        </div>
    )
}

export default ProductCard
