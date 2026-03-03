import { useState, useContext } from "react";
import { Link } from "react-router";
import "./itemcount.css";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ addToCart, product }) => {
    const { cart } = useContext(CartContext);
    const inCart = product ? cart.some(item => item.id === product.id) : false;
    const [count, setCount] = useState(1);

    const subtract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const add = () => {
        if (count < product.stock) {
            setCount(count + 1);
        }
    };

    return (
        <>
            {inCart ?
                <div className="itemcount">
                    <h3>Producto ya agregado al carrito</h3>
                    < Link to="/cart" >
                        <button className="itemcount-button">Ver carrito</button>
                    </Link >
                </div >
                :
                <div className="itemcount">
                    <div className="itemcount-controls">
                        <button className="itemcount-button" onClick={subtract} >-</button>
                        <p className="itemcount-value">{count}</p>
                        <button className="itemcount-button" onClick={add} >+</button>
                    </div>

                    <button className="itemcount-button" onClick={() => addToCart(count)} >Agregar al carrito</button>
                </div>
            }
        </>
    )
}

export default ItemCount