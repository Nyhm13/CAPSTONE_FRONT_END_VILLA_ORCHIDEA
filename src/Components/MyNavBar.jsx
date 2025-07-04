// src/components/Navbar.jsx
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function MyNavBar() {
  return (
    <Navbar expand="lg" className="navbar-custom w-100">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-white fw-bold">
          <img src="/VILLA-ORCHIDEA-266w.webp" alt="logo villa" height={60} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/reservations"
              className="nav-link-custom"
            >
              Prenotazioni
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profilo" className="nav-link-custom">
              Profilo
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login" className="nav-link-custom">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavBar;
