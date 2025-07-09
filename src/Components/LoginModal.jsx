import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Button, Form, Modal } from "react-bootstrap";

const LoginModal = ({ show, handleClose }) => {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shake, setShake] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, email }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
      console.log(res);
      const token = await res.text();
      login(token);
      console.log(token);
      handleClose();
    } catch (err) {
      console.log(err);
      setErrorMessage(err.message);
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className={`${shake ? "shake" : ""} mt-5`}
    >
      <Modal.Header closeButton className="bg-brown text text-white border-0">
        <Modal.Title>Accedi</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mt-3  fw-bold">
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder="Cadomalatigno23"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mt-3  fw-bold">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="1234512sadaf123"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mt-3  fw-bold">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="mario.rossi@example.it"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          {errorMessage && (
            <div className="text-danger    mt-2">{errorMessage}</div>
          )}
          <Button type="submit" className="mt-3 btn-azzure">
            Entra
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
