import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={ 6 } sm={ 8 } xs={ 10 }>
          <Alert variant="danger" className="text-center">
            <h1><b>ERROR 404</b></h1>
            <h2><b>La página que busca no existe!</b></h2>
            <p className="mt-4">La página que intentas acceder no está disponible. Por favor, vuelve al inicio.</p>
            <Button variant="primary" onClick={ goHome } className="mt-3">Volver al inicio</Button>
          </Alert>
        </Col>
      </Row>
    </Container>
  )
};

export default Error404;
