import CartWidget from "../CartWidget/CartWidget"
import ItemListContainer from "../ActualizaCarrito/ActualizaCarrito"
import "./NavBar.css"
import logo from "../../img/logo.png"
import { Link, NavLink } from "react-router"

function NavBar({contadorCarrito}) {
    return (
        <nav className="nav">
            <Link to='/'>
                <img className="nav-logo" src={logo} alt="" />
            </Link>

            <ul className="nav-list">
                <NavLink to="/categorias/balanza" className="NavItem">Balanzas</NavLink>
                <NavLink to="/categorias/amasadora" className="NavItem">Amasadoras</NavLink>
                <NavLink to="/categorias/cortadora" className="NavItem">Cortadoras</NavLink>
                <NavLink to="/categorias/otro" className="NavItem">Otros</NavLink>
            </ul>

            <div className="nav-cart">
                <CartWidget contadorCarrito={contadorCarrito}/>
            </div>

        </nav>
    )
}

export default NavBar