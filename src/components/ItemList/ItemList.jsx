import Item from "../Item/Item";
import "./itemList.css";

const ItemList = ({ products }) => {
  return (
    <ul className="item-list">
      { products.length === 0 ? <div>No hay productos para mostrar</div> :
      products.map((product) => (
        <Item key={product.id} product={product} />
      )) }
    </ul>
  )
}

export default ItemList