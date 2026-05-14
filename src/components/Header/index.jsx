import { Link } from "react-router-dom"
import "./style.css"
function Header() {
    return (
        <header>
            <Link to="/">Home</Link>

            <Link to="/cart">Carrinho</Link>

            
        </header>
    )
}

export default Header
