import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
  const [ products, setProducts ] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const dataBase = getFirestore ();
        const productsCollection = collection ( dataBase, "Items" );
        const search = categoryId ? query ( productsCollection, where ( "categoria", "==", categoryId )) : productsCollection;
        getDocs ( search ).then ( result => {
            if ( result.size > 0 ) {
                setProducts ( result.docs.map ( finded => ({ id:finded.id, ...finded.data() })));
            } else {
                console.error ( "Error, no hay productos en 'collection'" );
            }
        });
  }, [ categoryId ]);
  const unparsedCategory = categoryId ? categoryId : "";
  let category;
  if ( unparsedCategory === "monitores-vitales" ) {
    category = "Monitores Vitales";
  } else if ( unparsedCategory === "equipos-quirofano" ) { 
    category = "Equipos de Quirófano";
  } else if ( unparsedCategory === "cirugia-protesis" ) {
    category = "Cirugía y Prótesis";
  } else if ( unparsedCategory === "accesorios-clinicos" ) {
    category = "Accesorios Clínicos";
  } else {
    category = "";
  };

  return (
    <Container fluid className="mb-5">
      <div>
        <p className="bienvenida">{ greeting + category + " ↓ ↓" }</p>
      </div>
      <Row>
        <ItemList product={ products } />
      </Row>
    </Container>
  )
};

export default ItemListContainer;
