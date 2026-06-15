import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import ClientHome from "./pages/Client/Home"
import ClientCart from "./pages/Client/Cart"
import ClientCheckout from "./pages/Client/Checkout"
import AdminHome from "./pages/Admin/Home"
import AdminProducts from "./pages/Admin/Products"
import AdminCategories from "./pages/Admin/Categories"

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route
                    path="/"
                    element={<ClientHome />}
                />
                <Route
                    path="/cart"
                    element={<ClientCart />}
                />
                <Route
                    path="/checkout"
                    element={<ClientCheckout />}
                />
                <Route
                    path="/admin"
                    element={<AdminHome />}
                />
                <Route
                    path="/admin/products"
                    element={<AdminProducts />}
                />
                <Route
                    path="/admin/categories"
                    element={<AdminCategories />}
                />
            </Routes>
        </>
    )
}

export default App
