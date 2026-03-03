import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  const addToCart = (count) => {
    const newProduct = { ...product, quantity: count }
    addProduct(newProduct);
  }
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

        <ItemCount addToCart={addToCart} product={product} />
      </div>
    </div>
  );
};

export default ItemDetail;