import "./ActualizaCarrito.css";

function ActualizaCarrito({ actualizarCarrito }) {
  return (
    <div className="ActualizaCarrito">
      <h3>Agrega o elimina</h3>

      <button className="ActualizaCarrito-button" onClick={() => actualizarCarrito(1)}> + </button>
      <button className="ActualizaCarrito-button" onClick={() => actualizarCarrito(-1)}> - </button>
      
    </div>
  );
}

export default ActualizaCarrito;
