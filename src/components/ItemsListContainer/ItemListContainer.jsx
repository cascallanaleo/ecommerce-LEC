import "./ItemListContainer.css"
function ItemListContainer({ greeting }) {
    return (
        <div>
            <h3 className="ItemListContainer-h3"> {greeting} </h3>
        </div>
    )
}

export default ItemListContainer