import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ActualizaCarrito from './components/ActualizaCarrito/ActualizaCarrito';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router';


function App() {
  const [contadorCarrito, setContadorCarrito] = useState(0);

  const actualizarCarrito = (valor) => {
    setContadorCarrito((prev) => {
      const nuevo = prev + valor;
      return nuevo < 0 ? 0 : nuevo;
    });
  };

  return (
    <BrowserRouter>
      <NavBar contadorCarrito={contadorCarrito} />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a LEC Equipamientos Comerciales"} />} />
        <Route path="/categorias/:categoria" element={<ItemListContainer saludo={"Bienvenidos a LEC Equipamientos Comerciales"} />} />
        {/* <Route path="/detail/:productId" element={<ItemDetailContainer />} /> */}
        <Route path="*" element={<div>404 not found</div>} />

        {/* <ActualizaCarrito actualizarCarrito={actualizarCarrito} /> */}
      </Routes>
    </BrowserRouter>
  )
};
export default App;
