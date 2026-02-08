import { Link } from "react-router";
import "./item.css";

const Item = ({ product }) => {
  return (
    <li className="item">
      <div className="img-item-container">
        <img className="img-item" src={product.image} alt="" />
      </div>
      <div className="text-item">
        <p className="title-item">{product.name}</p>
        <p className="price-item">$ {product.price.toLocaleString('es-AR')}</p>
        <Link to={`/ItemDetail/${product.id}`} className="button-item">Ver Detalle - Comprar</Link>
      </div>
    </li>
  )
}

export default Item