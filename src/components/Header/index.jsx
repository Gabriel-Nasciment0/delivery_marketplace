import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import "./style.css"

function Header() {
    const { cart } = useContext(CartContext)

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
    return (
        <header className="header-container">
            <Link
                to="/"
                className="home"
            >
                <img
                    className="logo"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP._I8w8NZABcrN1lmGf2gNlQHaHa%3Fpid%3DApi&f=1&ipt=02eaf23d36bffc12d4fd7d601dbaee6aaee7d7a904eb6465cd60d814bfc9b209&ipo=images"
                    alt="Logo"
                />
            </Link>
            <nav className="nav-links">
                <Link
                    to="/"
                    className="Home"
                >
                    Produtos
                </Link>
                <Link to="/cart">Carrinho ({totalItems}) </Link>
                <Link to="/admin">Pedidos</Link>
                <Link to="/admin/products">Produtos</Link>
                <Link to="/admin/categories">Categorias</Link>
            </nav>
        </header>
    )
}

export default Header
