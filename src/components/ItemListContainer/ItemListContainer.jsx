import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";
import db from "../../db/db.js"
import { collection, getDocs, query, where } from "firebase/firestore";  
import "./itemlistcontainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  const getProducts = async () => {
    try {
      const productRef = collection(db, "products");
      const q = categoria ? query(productRef, where("category", "==", categoria)) : productRef;  
      const dataDb = await getDocs(q);
      const  data = dataDb.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
    }
     catch (error) {
      console.log("Error al obtener los productos:", error);
    }
      finally {
        setLoading(false);
      }
  }

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, [categoria]);

  return (
    <div className="itemlistcontainer">
      <h2>{greeting}</h2>
      {
        loading === true ? <div>Cargando...</div> : <ItemList products={products} />
      }
    </div>
  )
};

export default ItemListContainer;