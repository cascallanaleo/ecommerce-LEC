import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import db from "../../db/db.js";
import { collection, addDoc } from "firebase/firestore";
import "./checkout.css";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  });
  const [orderId, setOrderId] = useState(null);
  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  const changeInput = (event) => {
    //event.target.name -> obtenemos el "name" del input actual
    //event.target.value -> obtenemos el valor del input actual
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();

    //guardamos los datos de la orden de compra
    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      total: totalPrice()
    };

    uploadOrder(order);
  };

  const uploadOrder = async (order) => {
    try {
      const orderRef = collection(db, "orders");
      const response = await addDoc(orderRef, order);

      //guardamos el id de la orden generada
      setOrderId(response.id);
      //vaciar el carrito
      deleteCart();
    } catch (error) {
      console.log("Error al subir la orden");
    }
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {
        orderId ? (
          <div className="order-confirmation">
            <h2>Orden generada correctamente! 📦</h2>
            <h3>Guarde el id de su orden: {orderId}</h3>
          </div>
        ) : (
          <form className="checkout-form" onSubmit={submitForm} >
            <input type="text" name="fullname" value={dataForm.fullname} onChange={changeInput} placeholder="nombre completo" />
            <input type="number" name="phone" value={dataForm.phone} onChange={changeInput} placeholder="numero de telefono" />
            <input type="email" name="email" value={dataForm.email} onChange={changeInput} placeholder="email" />

            <button type="submit">Terminar mi compra</button>
          </form>
        )
      }

    </div>
  )
}

export default Checkout