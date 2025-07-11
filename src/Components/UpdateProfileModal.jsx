import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const UpdateProfileModal = ({ show, handleClose, token }) => {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [telefono, setTelefono] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shake, setShake] = useState(false);
  const [errorField, setErrorField] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:8080/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setNome(data.nome);
        setCognome(data.cognome);
        setTelefono(data.telefono);
        setUsername(data.username);
        setEmail(data.email);
        setPassword("");
        setErrorMessage("");
        setErrorField("");
      } catch (err) {
        console.error(err);
      }
    };
    if (show) fetchProfile();
  }, [show, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setErrorField("");

    try {
      const res = await fetch(`http://localhost:8080/users/me`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          nome,
          cognome,
          telefono,
          password,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setErrorMessage(errorData.message || "Errore aggiornamento");
        if (errorData.message.includes("username")) {
          setErrorField("username");
        } else if (errorData.message.includes("email")) {
          setErrorField("email");
        } else if (errorData.message.includes("telefono")) {
          setErrorField("telefono");
        } else {
          setErrorField("");
        }

        setShake(true);
        setTimeout(() => setShake(false), 500);
        return;
      }
      alert("Profilo aggiornato con successo!");
      handleClose();
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className={`${shake ? "shake" : ""} mt-5`}
    >
      <Modal.Header closeButton className="bg-brown text-white border-0">
        <Modal.Title>Aggiorna Profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Username */}
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (errorField === "username") {
                  setErrorField("");
                  setErrorMessage("");
                }
              }}
              isInvalid={errorField === "username"}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errorField === "username" && errorMessage}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errorField === "email") {
                  setErrorField("");
                  setErrorMessage("");
                }
              }}
              isInvalid={errorField === "email"}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errorField === "email" && errorMessage}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Nome */}
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </Form.Group>

          {/* Cognome */}
          <Form.Group className="mb-3">
            <Form.Label>Cognome</Form.Label>
            <Form.Control
              value={cognome}
              onChange={(e) => setCognome(e.target.value)}
              required
            />
          </Form.Group>

          {/* Telefono */}
          <Form.Group className="mb-3">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              placeholder="+39 235 258 248"
              value={telefono}
              onChange={(e) => {
                setTelefono(e.target.value);
                if (errorField === "telefono") {
                  setErrorField("");
                  setErrorMessage("");
                }
              }}
              isInvalid={errorField === "telefono"}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errorField === "telefono" && errorMessage}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3">
            <Form.Label>Nuova Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          {errorMessage && !errorField && (
            <div className="text-danger mb-2">{errorMessage}</div>
          )}

          <Button type="submit">Salva modifiche</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateProfileModal;
