import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="nav" id="top">
      <div className="cart">
        <div className="iconoContainer">
          <img className="icono" src="/images/Icono AG.png" alt="logoPrincipal" />
        </div>
        <NavLink to="/" className="p-0">
          <img className="marca" src="/images/agrestaMS1.jpg" alt="marca" />
        </NavLink>
        <CartWidget />
      </div>

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-4">
              <Nav.Item>
                <NavLink to="/category/monitores-vitales/" className="fs-3 m-2 text-decoration-none">
                  - Monitores Vitales -
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/category/equipos-quirofano" className="fs-3 m-2 text-decoration-none">
                  - Equipos de Quirófano -
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/category/cirugia-protesis" className="fs-3 m-2 text-decoration-none">
                  - Cirugía y Prótesis -
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/category/accesorios-clinicos" className="fs-3 m-2 text-decoration-none">
                  - Accesorios Clínicos -
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
};

export default NavBar;
