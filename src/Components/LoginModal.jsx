import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Button, Form, Modal } from "react-bootstrap";

const LoginModal = ({ show, handleClose }) => {
  const { login } = useContext(AuthContext);

  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");
  const { email, setEmail } = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, email }),
      });
      if (!res.ok) throw new Error("Credenziali non valide");
      console.log(res);
      const token = await res.text();
      login(token);
      handleClose();
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="bg-brown text text-white border-0">
        <Modal.Title>Accedi</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-brown ">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mt-3 text-white fw-bold">
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder="Cadomalatigno23"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mt-3 text-white fw-bold">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="1234512sadaf123"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mt-3 text-white fw-bold">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="mario.rossi@example.it"
              type="text"
              value={username}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" className="mt-3 btn-azzure">
            Entra
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
