import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./styles/globals.css"
import App from "./App.jsx"
import { CartProvider } from "./contexts/CartProvider.jsx"

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CartProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CartProvider>
    </React.StrictMode>,
)
