import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';

const ItemCount = ({ agregar, quantity }) => {
    const [counter, setCounter] = useState ( 0 );
    const [counterStock, setCounterStock] = useState ( quantity );
    const [added, setAdded] = useState ( false );
    const plusAdd = () => {
        if ( counter < quantity && counterStock > 0 ) {
            setAdded ( true );
            setCounter ( counter + 1 );
            setCounterStock ( counterStock - 1 );
        };
    };
    const offAdd = () => {
        if ( counter > 0 ) {
            setAdded ( true );
            setCounter ( counter - 1 );
            setCounterStock ( counterStock + 1 );
        };
    };
    const onAdd = () => {
        if ( counterStock >=0 ) {
        setAdded ( true );
        agregar ( counter );
        setCounter ( 0 );
        };
    };


    return (
        <Container>
            <Row>
                <Col>
                    <ButtonGroup size="lg" aria-label="Basic example">
                        <Button variant="outline-dark" onClick={offAdd}>-</Button>
                        <Button variant="info">{counter}</Button>
                        <Button variant="outline-dark" onClick={plusAdd}>+</Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-between">
                    {added && counter > 0 
                        ? <Link to="/cart" className="btn btn-info" onClick={onAdd}>Enviar al Carrito <b>➜</b></Link> 
                        : <Button variant="info"><b>Agrega un Producto</b></Button>}
                    <Button variant="outline-light" active>Stock: {counterStock}</Button>
                </Col>
            </Row>
        </Container>
    )
};

export default ItemCount;