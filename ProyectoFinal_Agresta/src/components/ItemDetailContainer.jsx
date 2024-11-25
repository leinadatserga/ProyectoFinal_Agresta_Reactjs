import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Container, Row, Col } from 'react-bootstrap';

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const dataBase = getFirestore ();
       const detalle = doc ( dataBase, "Items", id );
       getDoc ( detalle ).then ( finded => {
        setProduct ({ id:finded.id, ...finded.data () });
       })
    }, [ id ]);

    if (!product) {
        return <p>Cargando...</p>;
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-center mb-5 w-75">
                <Col>
                    <ItemDetail item={product} stock={product.stock} />
                </Col>
            </Row>
        </Container>
    )
};

export default ItemDetailContainer;