import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsTrash3Fill } from "react-icons/bs";
import { Link } from "react-router";
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice, deleteCart, deleteProduct } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>El carrito está vacío</h2>
        <Link to="/" className="cart-link">Continuar comprando</Link>
      </div>
    )
  }

  return (
    <div className="cart">
      {
        cart.map((productCart) => (
          <div className="list-cart" key={productCart.id} >
            <img className="image-product-cart" src={productCart.image} alt="" />
            <p>{productCart.name}</p>
            <p>Precio Unitario: ${productCart.price}</p>
            <p>Cantidad: {productCart.quantity}</p>
            <p>Precio parcial: ${productCart.quantity * productCart.price}</p>
            <button onClick={() => deleteProduct(productCart.id)} className="cart-button-dlt">
              <BsTrash3Fill /> Eliminar
            </button>
          </div>
        ))
      }

      <div className="cart-footer">
        <button className="cart-button" onClick={deleteCart} ><BsTrash3Fill />Vaciar carrito</button>
        <div className="cart-summary">
          <h2>Precio total: ${totalPrice()}</h2>
          <Link to="/checkout" className="cart-link" >Continuar con mi compra</Link>
        </div>
      </div>
    </div>
  )
}

export default Cart