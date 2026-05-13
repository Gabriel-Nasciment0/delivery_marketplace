import { Routes, Route } from "react-router-dom"
import Home from "./pages/Client/Home"
import Cart from "./pages/Client/Cart"

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/cart"
                element={<Cart />}
            />
        </Routes>
    )
}

export default App
