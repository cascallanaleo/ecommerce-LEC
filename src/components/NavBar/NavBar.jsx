import CartWidget from "../CartWidget/CartWidget"
import ItemListContainer from "../ActualizaCarrito/ActualizaCarrito"
import "./NavBar.css"
import logo from "../../img/logo.png"

function NavBar({contadorCarrito}) {
    return (
        <nav className="nav">
            <img className="nav-logo" src={logo} alt="" />

            <ul className="nav-list">
                <li>Balanzas</li>
                <li>Amasadoras</li>
                <li>Cortadoras</li>
                <li>Otros</li>
            </ul>

            <div className="nav-cart">
                <CartWidget contadorCarrito={contadorCarrito}/>
            </div>

        </nav>
    )
}

export default NavBar