import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';

const Congrats = () => {
    const { id } = useParams();
    
    return (
        <Container className="my-5">
            <Row>
                <Col className="text-center fs-1">
                    <h1 className="gracias rounded">Gracias por tu Compra!!</h1>
                    <p className="clvorden text-info">
                        La clave de tu Orden es: 
                    </p>
                    <p className="text-light">{id}</p>
                    <Link to="/">
                        <Button variant="link" className="inicio fs-5 mt-4 text-decoration-none">
                        ↑ ↑ ↑ ↑ ↑ ↑  VOLVER AL INICIO  ↑ ↑ ↑ ↑ ↑ ↑
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
};

export default Congrats;
