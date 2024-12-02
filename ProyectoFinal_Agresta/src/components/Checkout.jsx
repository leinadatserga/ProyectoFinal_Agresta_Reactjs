import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "./context/CartContextProvider";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

const Checkout = () => {
    const { cart, clear, totalCart, totalToPay } = useContext ( CartContext );
    const [ nombre, setNombre ] = useState ("");
    const [ email, setEmail ] = useState ("");
    const [ telefono, setTelefono ] = useState ("");
    const navig = useNavigate ();
    const subirStock = ( idProd, newStock ) => {
        const dtbs= getFirestore ();
        const stockDoc = doc ( dtbs, "Items", idProd );
        updateDoc ( stockDoc, { stock:newStock });
    };
    const actualizarStock = () => {
        cart.map ( items => ( subirStock ( items.id, items.stock-items.amount )));
    };
    const emitirOrden = () => {
        if ( nombre ==="" || email === "" || telefono === "" ) {
            return false;
        } else {
        actualizarStock ();
        const cliente = { name:nombre, phone:telefono, email:email };
        const productos = cart.map ( item => ({ quantity:item.amount, title:item.nombre, price:item.precio, subtotal:item.amount*item.precio }));
        const dia = new Date ();
        const fecha = `${ dia.getDate () }/${ dia.getMonth () + 1 }/${ dia.getFullYear () } ${ dia.getHours () }:${ dia.getMinutes () }`;
        const monto = totalToPay ();
        const order = { buyer:cliente, items:productos, date:fecha, total:monto };
        const bd = getFirestore ();
        const ordenesCollection = collection ( bd, "orders" );
        addDoc ( ordenesCollection, order ).then ( resultado => {
            clear ();
            navig("/congrats/" + resultado.id )
        })
        .catch ( resultado => {
            console.error();
            ( "Error! no se pudo realizar la orden" );
        });
        };
    };

    return (
        <Container className="my-5 carrito">
            <Row>
                <Col className="text-center">
                    <h1 className="rounded-4 text-light bg-info text-center fw-bolder fs-1 p-5">Orden de Compra</h1>
                </Col>
            </Row>
            <h3 className="ingresa text-warning">Para emitir la Orden de Compra, ingresa tus datos a continuación:</h3>
            <Container>
                <Row>
                    <Col md={4} className="offset-md-4">
                        <Form className="was-validated">
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 text-white">Nombre</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="Nombre Apellido"
                                onInput={(e) => { setNombre(e.target.value) }}
                                required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="fs-3 text-white">Correo</Form.Label>
                                <Form.Control
                                type="email"
                                placeholder="nombre@mail.com"
                                onInput={(e) => { setEmail(e.target.value) }}
                                required
                                />
                            </Form.Group>
                            <Form.Group className="mb-5">
                                <Form.Label className="fs-3 text-white">Teléfono</Form.Label>
                                <Form.Control
                                type="number"
                                placeholder="01234567"
                                onInput={(e) => { setTelefono(e.target.value) }}
                                required
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col>
                    <Table className="table">
                        <thead className="text-light text-center">
                            <tr className="bg-primary fw-bolder fs-5">
                                <th>Producto</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cart.map((item) => (
                            <tr key={item.id} className="text-center">
                                <td><img src={ "/images/" + item.imagen } alt={ item.nombre } width={100} /></td>
                                <td className="fs-5">{ item.nombre }</td>
                                <td className="fs-5 text-black">{ `U$D ${ item.precio }` }</td>
                                <td className="fs-5">{item.amount}</td>
                                <td className="fs-5 text-black">{ `U$D ${ item.amount * item.precio }` }</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Table className="emitir col-12">
                <tbody>
                    <tr>
                        <td><p className="fs-3 fst-italic text-light">Total de Productos: { totalCart() }</p></td>
                        <td className="text-center">
                            
                        </td>
                        <td className="text-end">
                            <Button
                                className="btn btn-success fs-3 text-warning"
                                type="submit"
                                onClick={ () => { emitirOrden() }}
                            >
                                Emitir Orden
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
};

export default Checkout;