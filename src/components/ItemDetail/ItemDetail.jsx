import "./itemdetail.css";
import ActualizaCarrito from "../ActualizaCarrito/ActualizaCarrito";

const ItemDetail = ({ product, actualizarCarrito }) => {
  return (
    <div className="itemdetail">
      <div className="img-container-itemdetail">
        <img className="img-itemdetail" src={product.image} alt="" />
      </div>

      <div className="text-itemdetail">
        <h2 className="title-itemdetail">{product.name}</h2>
        <p className="description-itemdetail">{product.description}</p>

        <div className="price-itemdetail">
         Precio: <span className="price-value">$ {product.price.toLocaleString('es-AR')} </span>
        </div>

        <ActualizaCarrito actualizarCarrito={actualizarCarrito} />
      </div>
    </div>
  );
};

export default ItemDetail;