import { createContext, useState } from "react";

const CartContext = createContext(null);


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (newProduct) => {
    //No hace falta validar si existe el producto para sumar cantidades
    // porque el boton de agregar al carrito se encuentra deshabilitado si el producto
    // ya se encuentra en el carrito.
    setCart([ ...cart, newProduct ]);
  };

  const totalQuantity = () => {
    const quantity = cart.reduce((total, productCart)=> total + productCart.quantity , 0);
    return quantity;
  }

  const totalPrice = () => {
    const price = cart.reduce((total, productCart)=> total + ( productCart.quantity * productCart.price ) , 0);
    return price;
  }

  const deleteCart = () => {
    setCart([]);
  }

  const deleteProduct = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  }

  console.log(cart);

  return (
    <CartContext.Provider value={ { cart, addProduct, totalQuantity, totalPrice, deleteCart, deleteProduct } } >
      { children }
    </CartContext.Provider>
  )
};

export { CartProvider, CartContext }