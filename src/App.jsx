import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a LEC Equipamientos Comerciales"} />} />
        <Route path="/categorias/:categoria" element={<ItemListContainer greeting={"Bienvenidos a LEC Equipamientos Comerciales"} />} />
        <Route path="/itemdetail/:productId" element={<ItemDetailContainer  />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} /> 

        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  )
};
export default App;
