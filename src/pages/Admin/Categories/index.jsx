import { useEffect, useState } from "react"
import { getCategories } from "../../../services/api"

export default function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const data = await getCategories()
            setCategories(data)
        }

        loadCategories()
    }, [])

    return (
        <div>
            <h1>Categorias</h1>

            {categories.map((category) => (
                <div key={category.id}>
                    <img
                        src={category.image}
                        alt={category.name}
                        width="100"
                    />

                    <h3>{category.name}</h3>
                </div>
            ))}
        </div>
    )
}
