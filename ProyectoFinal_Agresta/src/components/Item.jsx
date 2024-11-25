import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

const Item = ({ item }) => {
    
    return (
        <Col sm={ 12 } md={ 6 } lg={ 3 } className="mb-4">
            <Card className="product-card h-100 d-flex flex-column">
                <Link to={ `/item/${ item.id }` } className="text-decoration-none">
                    <Card.Body className="d-flex flex-column justify-content-end">
                        <Card.Title className="text-center mb-4">{ item.nombre }</Card.Title>
                    </Card.Body>
                    <Card.Img variant="bottom" src={`/images/${ item.imagen }`} alt={ item.nombre } className="card-image w-75 m-auto" />
                </Link>
            </Card>
        </Col>
    )
};

export default Item;
