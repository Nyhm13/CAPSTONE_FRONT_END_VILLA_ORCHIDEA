import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const ReservationModal = ({ show, handleClose, token }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedFascia, setSelectedFascia] = useState("");
  const [numeroPosti, setNumeroPosti] = useState("");
  const [note, setNote] = useState("");
  const [availability, setAvailability] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [errorField, setErrorField] = useState("");
  const [shake, setShake] = useState(false);

  //  Aggiorna la disponibilità quando l'utente seleziona la data
  const handleDateChange = async (e) => {
    const date = new Date(e.target.value);
    setSelectedDate(date);
    setErrorMessage("");
    setErrorField("");

    try {
      const res = await fetch(
        `http://localhost:8080/reservations/availability?date=${
          date.toISOString().split("T")[0]
        }`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!res.ok) throw new Error("Impossibile recuperare la disponibilità");
      const data = await res.json();
      setAvailability(data);
      console.log(availability);
    } catch (err) {
      console.error(err);
      setAvailability(null);
    }
  };

  //  Gestione submit prenotazione
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setErrorField("");

    try {
      const res = await fetch("http://localhost:8080/reservations", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dataPrenotazione: selectedDate.toISOString().split("T")[0],
          fasciaOraria: selectedFascia,
          numeroPosti: parseInt(numeroPosti),
          note: note,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setErrorMessage(errorData.message || "Errore prenotazione");

        if (errorData.message.includes("posti")) {
          setErrorField("numeroPosti");
        } else if (errorData.message.includes("data")) {
          setErrorField("data");
        } else {
          setErrorField("");
        }
        setShake(true);
        setTimeout(() => setShake(false), 500);
        return;
      }

      alert("Prenotazione effettuata con successo!");
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
        <Modal.Title>Nuova Prenotazione</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Campo data */}
          <Form.Group className="mb-3">
            <Form.Label>Data prenotazione</Form.Label>
            <Form.Control
              type="date"
              value={
                selectedDate ? selectedDate.toISOString().split("T")[0] : ""
              }
              onChange={handleDateChange}
              isInvalid={errorField === "data"}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errorField === "data" && errorMessage}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Mostra disponibilità */}
          {availability && (
            <div className="mb-3">
              <p>
                <strong>Posti disponibili:</strong>
              </p>
              <ul>
                <li>FULLDAY: {availability.FULLDAY}</li>
                <li>MORNING: {availability.MORNING}</li>
                <li>AFTERNOON: {availability.AFTERNOON}</li>
              </ul>
            </div>
          )}

          {/* Fascia oraria */}
          <Form.Group className="mb-3">
            <Form.Label>Fascia oraria</Form.Label>
            <Form.Select
              value={selectedFascia}
              onChange={(e) => setSelectedFascia(e.target.value)}
              required
            >
              <option value="">-- Seleziona fascia --</option>
              <option value="FULLDAY">Full Day</option>
              <option value="MORNING">Mattina</option>
              <option value="AFTERNOON">Pomeriggio</option>
            </Form.Select>
          </Form.Group>

          {/* Numero posti */}
          <Form.Group className="mb-3">
            <Form.Label>Numero posti</Form.Label>
            <Form.Control
              type="number"
              value={numeroPosti}
              onChange={(e) => {
                setNumeroPosti(e.target.value);
                if (errorField === "numeroPosti") {
                  setErrorField("");
                  setErrorMessage("");
                }
              }}
              isInvalid={errorField === "numeroPosti"}
              required
              min={1}
            />
            <Form.Control.Feedback type="invalid">
              {errorField === "numeroPosti" && errorMessage}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Note */}
          <Form.Group className="mb-3">
            <Form.Label>Note</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Eventuali note..."
            />
          </Form.Group>
          {errorMessage && !errorField && (
            <div className="text-danger mb-2">{errorMessage}</div>
          )}

          <Button type="submit" className="btn-azzure">
            Prenota
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ReservationModal;
