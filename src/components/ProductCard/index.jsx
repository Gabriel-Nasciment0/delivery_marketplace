import "./style.css"
function ProductCard({ product, onAdd }) {
    return (
        <div className="product-card">
            <img
                className="product-image"
                // src={product.image}
                src="https://images.pexels.com/photos/6605397/pexels-photo-6605397.jpeg"
                alt={product.name}
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">R$ {product.price.toFixed(2)}</p>

            <button
                className="add-button"
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
