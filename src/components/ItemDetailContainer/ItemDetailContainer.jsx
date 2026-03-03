import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import db from "../../db/db.js"
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router";
import "./itemdetailcontainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [cargando, setCargando] = useState(true);
  const { productId } = useParams();

  const getProduct = async () => {
    try {
      const docRef = doc(db, "products", productId);
      const dataDb = await getDoc(docRef);
      if (dataDb.exists()) {
        const data = { id: dataDb.id, ...dataDb.data() };
        setProduct(data);
      } else {
        console.log("No se encontró el producto!");
      }
    } catch (error) {
      console.log(`Error al traer el producto por id: ${productId}`, error);
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    getProduct();
  }, [productId]);

  return (
    <div className="itemdetailcontainer">
      {
        cargando === true ? <div>Cargando...</div> : <ItemDetail product={product}  />
      }
    </div>
  )
}

export default ItemDetailContainer