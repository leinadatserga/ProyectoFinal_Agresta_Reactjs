import Swal from "sweetalert2";
import { useContext } from "react";
import { CartContext } from "./context/CartContextProvider";
import { Link } from "react-router-dom";
import { Table, Button, Row, Col, Container } from "react-bootstrap"; // Importa los componentes necesarios de React Bootstrap

const Cart = () => {
    const { cart, removeItem, clear, totalCart, totalToPay } = useContext(CartContext);

    const warning = () => {
        Swal.fire({
            icon: "info",
            title: "No hay productos en el Carrito!",
            showClass: { popup: "animate__animated animate__fadeInDown" },
            hideClass: { popup: "animate__animated animate__fadeOutDown" },
            html: "Puedes volver a la  <b><a href='/'>Página Principal</a> </b>,  y escoger entre todos nuestros Artículos!",
            confirmButtonText: "Excelente !"
        });
    }

    if (totalCart() === 0) {
        warning();
        return (
            <Container className="my-5">
                <Row>
                    <Col className="text-center">
                        <h1 className="rounded-4 text-light bg-primary text-center fw-bolder fs-1 p-5">Carrito Vacío!</h1>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container className="my-5">
                <Row>
                    <Col className="text-center">
                        <h1 className="rounded-4 text-light bg-info text-center fw-bolder fs-1 p-5">Carrito</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover className="text-center items-table">
                            <thead className="text-light bg-primary">
                                <tr className="fw-bolder fs-5">
                                    <th scope="col">Producto</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(items => (
                                    <tr key={items.id}>
                                        <td><img src={"/images/" + items.imagen} alt={items.nombre} width={80} /></td>
                                        <td className="fs-5">{items.nombre}</td>
                                        <td className="fs-5 text-black">{"U$D " + items.precio}</td>
                                        <td className="fs-5">{items.amount}</td>
                                        <td className="fs-5 text-black">{"U$D " + items.amount * items.precio}</td>
                                        <td>
                                            <Button 
                                                variant="white"
                                                onClick={() => { removeItem(items.id) }}
                                                className="btn-sm"
                                            >
                                                <img src={"/images/Quitar.png"} alt={"quit"} width={60} />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table className="table-final">
                            <tbody>
                                <tr>
                                    <td>
                                        <p className="fs-5 fw-bold fst-italic">Productos:<button className="cant ms-3 me-3 text-center hover-none">{totalCart()}</button></p>
                                    </td>
                                    <td>
                                        <p className="fs-5 fw-bold fst-italic">
                                            Vaciar Carrito: 
                                            <Button 
                                                variant="white" 
                                                onClick={() => { clear() }}
                                            >
                                                <img src={"/images/EmptyCart.png"} alt={"empty cart"} width={70} />
                                            </Button>
                                        </p>
                                    </td>
                                    <td>
                                        <p className="text-black fs-3 fw-bold fst-italic"> Total a Pagar: {"U$D " + totalToPay()} 
                                            <img src={"/images/Total.png"} alt="total" width={60} />
                                        </p>
                                    </td>
                                    <td>
                                        <Link to={"/checkout"}>
                                            <Button variant="success" className="text-warning fs-2 fw-bold fst-italic bg-success rounded">
                                                Finalizar Compra 
                                                <img src={"/images/Buy.png"} alt="buy" width={60} />
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    };
};

export default Cart;
