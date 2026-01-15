import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import "./CartWidget.css"

function CartWidget({contadorCarrito}) {
  return (
    <div className="CartWidget">

      <BsCart2 size={30} />
      <p className="Cart-cantidad">{contadorCarrito}</p>
      
    </div>
  )
}

export default CartWidget