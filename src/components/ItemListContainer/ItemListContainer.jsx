import { getProducts } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";
import "./itemlistcontainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((response) => {
        if(categoria){
          const filteredProducts = response.filter( (product) => product.category === categoria );
          setProducts(filteredProducts);
        }else{
          setProducts(response);
        }
      })
      .catch((error)=> {
        console.log(error);
      })
      .finally(()=> {
        setLoading(false);
      });

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