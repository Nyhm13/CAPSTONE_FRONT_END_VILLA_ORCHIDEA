import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UpdateReservationModal from "./UpdateReservationModal";

const AdminPanel = () => {
  const { token, userRole } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState("");
  const [reservations, setReservations] = useState([]);
  const [availability, setAvailability] = useState(null);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  if (!token || userRole !== "ADMIN") {
    return <Navigate to="/" replace />;
  }

  //  Fetch prenotazioni per data
  const fetchReservationsByDate = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/reservations?date=${selectedDate}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!res.ok) throw new Error("Errore caricamento prenotazioni");
      const data = await res.json();
      // Ordina le fasce FULLDAY > MORNING > AFTERNOON
      const ordered = data.sort((a, b) => {
        const order = { FULLDAY: 1, MORNING: 2, AFTERNOON: 3 };
        return order[a.fasciaOraria] - order[b.fasciaOraria];
      });
      setReservations(ordered);
    } catch (err) {
      console.error(err);
    }
  };

  //  Fetch disponibilità per data
  const fetchAvailability = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/reservations/availability?date=${selectedDate}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!res.ok) throw new Error("Errore disponibilità");
      const data = await res.json();
      setAvailability(data);
    } catch (err) {
      console.error(err);
    }
  };

  //  Gestore di ricerca
  const handleSearch = async () => {
    if (!selectedDate) return;
    await fetchReservationsByDate();
    await fetchAvailability();
  };

  //  Elimina prenotazione
  const handleDelete = async (id) => {
    if (!window.confirm("Confermi cancellazione?")) return;
    try {
      await fetch(`http://localhost:8080/reservations/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchReservationsByDate();
      fetchAvailability();
    } catch (err) {
      console.error(err);
    }
  };

  const openUpdateModal = (reservation) => {
    setSelectedReservation(reservation);
    setShowUpdateModal(true);
  };

  return (
    <Container className="mt-8 mb-5">
      <Row className=" justify-content-center">
        <Col md={12} className=" p-5 p-md-0">
          <div className="text-center my-3">
            <img src="/VILLA-ORCHIDEA-266w.webp" alt="logo azienda" />
          </div>
        </Col>
      </Row>
      <Row className=" my-5 justify-content-center">
        <Col md={8}>
          <h2>Area Riservata Admin</h2>
          <Form.Label>Seleziona Data</Form.Label>
          <Form.Control
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <Button className="mt-2" onClick={handleSearch}>
            Cerca Prenotazioni
          </Button>
        </Col>
      </Row>

      {availability && (
        <Row className="mt-4 justify-content-center">
          <Col md={8}>
            <h5>Disponibilità Rimanente</h5>
            <ul>
              <li>FULLDAY: {availability.FULLDAY}</li>
              <li>MORNING: {availability.MORNING}</li>
              <li>AFTERNOON: {availability.AFTERNOON}</li>
            </ul>
          </Col>
        </Row>
      )}

      {reservations.length > 0 && (
        <Row className="mt-4 justify-content-center">
          <Col md={8}>
            <h5 className="my-3">Prenotazioni del giorno</h5>
            {reservations.map((r) => (
              <Card key={r.id} className="mb-3 shadow scale-card">
                <Card.Body>
                  <Card.Title>
                    Nome: {r.user.nome} {r.user.cognome} <br />
                    Username: {r.user.username}
                    <br />
                    Telefono: {r.user.telefono}
                  </Card.Title>
                  <Card.Text>
                    📅 {r.dataPrenotazione} | 🕘 {r.fasciaOraria} | 👥{" "}
                    {r.numeroPosti} posti
                    {r.note && (
                      <>
                        <br /> 📝 Note: {r.note}
                      </>
                    )}
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(r.id)}
                    className="me-2"
                  >
                    Elimina
                  </Button>
                  <Button variant="warning" onClick={() => openUpdateModal(r)}>
                    Modifica
                  </Button>
                </Card.Body>
              </Card>
            ))}
            <h5 className="mt-5 mb-3">Prenotazioni del Giorno - Lista</h5>
            <Button
              variant="secondary"
              className="mb-4"
              onClick={() => window.print()}
            >
              Stampa Lista
            </Button>
            {availability && (
              <Row className="mt-2 justify-content-start">
                <Col md={8}>
                  <h5>Disponibilità Rimanente</h5>
                  <ul className=" d-flex gap-5">
                    <li>FULLDAY: {availability.FULLDAY}</li>
                    <li>MORNING: {availability.MORNING}</li>
                    <li>AFTERNOON: {availability.AFTERNOON}</li>
                  </ul>
                </Col>
              </Row>
            )}
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Cognome</th>
                  <th>Data</th>
                  <th>Fascia</th>
                  <th>Posti</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((r) => (
                  <tr key={r.id}>
                    <td>{r.user?.nome}</td>
                    <td>{r.user?.cognome}</td>
                    <td>{r.dataPrenotazione}</td>
                    <td>{r.fasciaOraria}</td>
                    <td>{r.numeroPosti}</td>
                    <td>{r.note || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      )}

      <UpdateReservationModal
        show={showUpdateModal}
        handleClose={() => setShowUpdateModal(false)}
        reservation={selectedReservation}
        token={token}
        refreshList={() => {
          fetchReservationsByDate();
          fetchAvailability();
        }}
      />
    </Container>
  );
};

export default AdminPanel;
