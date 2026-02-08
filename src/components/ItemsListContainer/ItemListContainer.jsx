import { useState, useEffect } from "react"
import { useParams } from "react-router"
import "./ItemListContainer.css"
import { getProducts } from "../../data/data.js"
import ItemList from "../ItemList/ItemList.jsx"

function ItemListContainer({ greeting }) {
    const [cargando, setcargando] = useState(true)
    const [productos, setProductos] = useState([])
    const { categoria } = useParams()
    useEffect(() => {
        setcargando(true)   
        getProducts()
        .then((res) => {
            if (categoria) {
                setProductos(res.filter((prod) => prod.category === categoria))
            } else {
                setProductos(res)
            }
        })
        .catch((error) => console.log(error))
        .finally(() => setcargando(false))
    }, [categoria])

    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>
            {cargando ? (<h2>Cargando...</h2>)
            : (<ItemList products={productos} />)}
        </div>
    )
}   

export default ItemListContainer
