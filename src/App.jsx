import { Routes, Route } from "react-router-dom"
import Home from "./pages/Client/Home"
import Cart from "./pages/Client/Cart"
import Checkout from "./pages/Client/Checkout"
import Header from "./components/Header"

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/cart"
                    element={<Cart />}
                />
                <Route
                    path="/checkout"
                    element={<Checkout />}
                />
            </Routes>
        </>
    )
}

export default App
