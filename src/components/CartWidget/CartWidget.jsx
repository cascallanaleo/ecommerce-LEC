import { BsCart2 } from "react-icons/bs";
import "./CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router";


const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const quantity = totalQuantity();
  return (
    <Link to = "/cart" className="cartwidget">
      < BsCart2 size = { 30} />
      { quantity > 0 && <p className="cart-cantidad">{quantity}</p>}
    </Link>
  )
}

export default CartWidget