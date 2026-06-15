import { useEffect, useState } from "react"
import {
    createCategory,
    getCategories,
    deleteCategory,
} from "../../../services/api"

export default function Categories() {
    const [categories, setCategories] = useState([])

    const [formData, setFormData] = useState({
        name: "",
        image: "",
    })

    useEffect(() => {
        async function loadCategories() {
            const data = await getCategories()
            setCategories(data)
        }

        loadCategories()
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()

        const newCategory = await createCategory(formData)

        setCategories((prev) => [...prev, newCategory])

        setFormData({
            name: "",
            image: "",
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const handleDelete = async (id) => {
        await deleteCategory(id)

        setCategories((prev) => prev.filter((category) => category.id !== id))
    }
    return (
        <div>
            <h1>Categorias</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nome da categoria"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="image"
                    placeholder="URL da imagem"
                    value={formData.image}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Adicionar Categoria</button>
            </form>
            {categories.map((category) => (
                <div key={category.id}>
                    <img
                        src={category.image}
                        alt={category.name}
                        width="150"
                    />

                    <h3>{category.name}</h3>

                    <button onClick={() => handleDelete(category.id)}>
                        Excluir
                    </button>
                </div>
            ))}
        </div>
    )
}
