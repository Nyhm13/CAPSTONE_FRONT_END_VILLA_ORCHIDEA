import { useState } from "react";
import { Button, Form, Modal, ModalBody } from "react-bootstrap";

const RegisterModal = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [telefono, setTelefono] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // ✅ stato per mostrare l'errore
  const [shake, setShake] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          username,
          password,
          nome,
          cognome,
          telefono,
        }),
      });
      if (!res.ok) {
        const errorData = await res.json(); // <- ✅ prende il messaggio custom
        throw new Error(errorData.message); // <- mostra quello che arriva
      }
      alert("Registrazione completata! controlla la tua email");
      handleClose();
    } catch (err) {
      console.log(err);
      // alert(err.message);
      setErrorMessage(err.message); // ✅ mostra messaggio backend
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
      <Modal.Header closeButton className="bg-brown  border-0">
        <Modal.Title>Registrati</Modal.Title>
      </Modal.Header>
      <ModalBody>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mt-3  fw-bold">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="mario.rossi@example.it"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mt-3  fw-bold">
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder="Cadoronaldigno23"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mt-3  fw-bold">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="123asd512s"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mt-3  fw-bold">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              placeholder="Mario"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mt-3  fw-bold ">
            <Form.Label>Cognome</Form.Label>
            <Form.Control
              placeholder="Rossi"
              type="text"
              value={cognome}
              onChange={(e) => setCognome(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mt-3  fw-bold">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              placeholder="1234567895"
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </Form.Group>
          {/* ✅ mostra messaggio di errore se esiste */}
          {errorMessage && (
            <div className="text-danger    mt-2">{errorMessage}</div>
          )}
          <Button type="submit" className="mt-3 btn-azzure">
            Registrati
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default RegisterModal;
