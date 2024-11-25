import { useState, useEffect, useContext } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContextProvider";

const ItemDetail = ({ item, stock }) => {
    const { addItem } = useContext ( CartContext );
    const agregar = ( counter ) => {
        addItem ( producto, counter )
    };
    const [ producto, setProducto ] = useState ({});
    useEffect (() => {
        setProducto ( item );
    }, [ item ]);

    return (
        <Container className="my-1">
            <Row className="justify-content-center">
                <Col md={ 6 }>
                    <Card className="text-center text-primary shadow-lg">
                        <Card.Body>
                            <Card.Title as="h3" className="text-primary pt-1 mb-5">{ producto.nombre }</Card.Title>
                            <Card.Img 
                                variant="top" 
                                src={ "/images/" + producto.imagen } 
                                alt={ producto.nombre } 
                                className="img-fluid" 
                            />
                            <Card.Text className="fs-4 mt-3">
                                { producto.descripcion }
                            </Card.Text>
                            <h4 className="bg-info rounded text-danger p-2">
                                Precio: u$s { producto.precio } iva incl.
                            </h4>
                            { stock && <ItemCount quantity = { stock } agregar = { agregar } /> }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default ItemDetail;