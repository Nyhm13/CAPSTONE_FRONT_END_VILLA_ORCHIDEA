import { useContext, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function MyNavBar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="navbar-custom w-100  fixed-top mb-5">
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
                to="/ristorante"
                className="nav-link-custom"
              >
                Ristorante
              </Nav.Link>
              {isAuthenticated ? (
                <>
                  <Nav.Link onClick={logout} className="nav-link-custom">
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    onClick={() => setShowLogin(true)}
                    className="nav-link-custom"
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => setShowRegister(true)}
                    className="nav-link-custom"
                  >
                    Registrati
                  </Nav.Link>
                </>
              )}
              {/* <Nav.Link
              as={NavLink}
              to="/reservations"
              className="nav-link-custom">
              Prenotazioni
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profilo" className="nav-link-custom">
              Profilo
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login" className="nav-link-custom">
              Login
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
      <RegisterModal
        show={showRegister}
        handleClose={() => setShowRegister(false)}
      />
    </>
  );
}
export default MyNavBar;
