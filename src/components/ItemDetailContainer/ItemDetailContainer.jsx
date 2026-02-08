import { useState, useEffect } from "react"
import { getProductById } from "../../data/data.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import "./itemdetailcontainer.css";

const ItemDetailContainer = ({ actualizarCarrito }) => {
  const [product, setProduct] = useState({});
  const [cargando, setCargando] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [productId]);

  return (
    <div className="itemdetailcontainer">
      {
        cargando === true ? <div>Cargando...</div> : <ItemDetail product={product} actualizarCarrito={actualizarCarrito} />
      }
    </div>
  )
}

export default ItemDetailContainer