import { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const UpdateReservationModal = ({
  show,
  handleClose,
  reservation,
  token,
  refreshList,
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedFascia, setSelectedFascia] = useState("");
  const [numeroPosti, setNumeroPosti] = useState("");
  const [note, setNote] = useState("");
  const [availability, setAvailability] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorField, setErrorField] = useState("");
  const [shake, setShake] = useState(false);

  // Popola i campi quando ricevi una prenotazione da modificare
  useEffect(() => {
    const loadAvailability = async () => {
      if (reservation && token) {
        try {
          const res = await fetch(
            `http://localhost:8080/reservations/availability?date=${reservation.dataPrenotazione}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          if (!res.ok) throw new Error("Errore caricamento disponibilità");
          const data = await res.json();
          setAvailability(data);
        } catch (err) {
          console.error(err);
          setAvailability(null);
        }
      }
    };

    if (reservation) {
      setSelectedDate(reservation.dataPrenotazione);
      setSelectedFascia(reservation.fasciaOraria);
      setNumeroPosti(reservation.numeroPosti);
      setNote(reservation.note || "");
      setErrorMessage("");
      setErrorField("");
      loadAvailability();
    }
  }, [reservation, token]);

  //  Aggiorna disponibilità quando cambia la data
  const handleDateChange = async (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    setAvailability(null);
    setErrorMessage("");
    setErrorField("");

    if (!token) return;

    try {
      const res = await fetch(
        `http://localhost:8080/reservations/availability?date=${newDate}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!res.ok) throw new Error("Errore caricamento disponibilità");
      const data = await res.json();
      setAvailability(data);
      // console.log("disponibilita di posti ", data);
    } catch (err) {
      console.error(err);
    }
  };

  //  Fetch put  invio aggiornamento
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setErrorField("");

    try {
      const res = await fetch(
        `http://localhost:8080/reservations/${reservation.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dataPrenotazione: selectedDate,
            fasciaOraria: selectedFascia,
            numeroPosti: parseInt(numeroPosti),
            note: note,
          }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        setErrorMessage(errorData.message || "Errore aggiornamento");
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

      alert("Prenotazione aggiornata!");
      handleClose();
      refreshList();
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
      <Modal.Header closeButton className="bg-brown text-white">
        <Modal.Title>Modifica Prenotazione</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Campo Data */}
          <Form.Group className="mb-3">
            <Form.Label>📅Data prenotazione</Form.Label>
            <Form.Control
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              isInvalid={errorField === "data"}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errorField === "data" && errorMessage}
            </Form.Control.Feedback>
          </Form.Group>

          {/*  Mostra disponibilità */}
          {availability && (
            <div className="mb-3">
              <strong>Disponibilità aggiornata:</strong>
              <ul>
                <li>FULLDAY: {availability.FULLDAY}</li>
                <li>MORNING: {availability.MORNING}</li>
                <li>AFTERNOON: {availability.AFTERNOON}</li>
              </ul>
            </div>
          )}

          {/* Fascia Oraria */}
          <Form.Group className="mb-3">
            <Form.Label>🕘 Fascia Oraria</Form.Label>
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
            <Form.Label> 👥 Numero posti</Form.Label>
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
            <Form.Label>📝Note</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Eventuali note..."
            />
          </Form.Group>

          {/* Messaggio di errore generico */}
          {errorMessage && !errorField && (
            <div className="text-danger mb-2">{errorMessage}</div>
          )}

          <Button type="submit" className="btn-azzure">
            Salva modifiche
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateReservationModal;
