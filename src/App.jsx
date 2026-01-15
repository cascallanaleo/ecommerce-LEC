import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ActualizaCarrito from './components/ActualizaCarrito/ActualizaCarrito';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';

function App() {
  const [contadorCarrito, setContadorCarrito] = useState(0);

  const actualizarCarrito = (valor) => {
    setContadorCarrito((prev) => {
      const nuevo = prev + valor;
      return nuevo < 0 ? 0 : nuevo; 
    });
  };

  return (
    <div>
      <NavBar contadorCarrito={contadorCarrito}/>
      <ItemListContainer greeting={"Bienvenidos a LEC Equipamientos Comerciales"} />
      <ActualizaCarrito actualizarCarrito={actualizarCarrito} />
    </div>
  )
};
export default App;
