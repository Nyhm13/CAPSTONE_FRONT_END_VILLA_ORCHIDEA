import { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
import UpdateReservationModal from "./UpdateReservationModal";
import UpdateProfileModal from "./UpdateProfileModal";

function MiePrenotazioni() {
  const { token, userRole } = useContext(AuthContext);
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    // Evita redirect prematuro prima di montare
    if (!token || (userRole !== "ADMIN" && userRole !== "USER")) {
      setShouldRedirect(true);
    }
  }, [token, userRole]);

  //  Carica prenotazioni
  const fetchReservations = async () => {
    try {
      const res = await fetch("http://localhost:8080/reservations/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Errore caricamento");
      const data = await res.json();
      //   Ordina le prenotazioni in modo crescente in base alla data
      const sorted = data.sort(
        (a, b) => new Date(a.dataPrenotazione) - new Date(b.dataPrenotazione)
      );
      setReservations(sorted);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (token) fetchReservations();
  }, [token]);

  const handleDelete = async (id) => {
    if (!window.confirm("Sei sicuro di voler cancellare?")) return;
    try {
      await fetch(`http://localhost:8080/reservations/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchReservations();
    } catch (err) {
      console.error(err);
    }
  };

  const openUpdateModal = (reservation) => {
    setSelectedReservation(reservation);
    setShowUpdateModal(true);
  };

  if (shouldRedirect) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container className="mt-8">
      <Row className=" justify-content-center">
        <Col md={8} className=" p-5 p-md-0">
          <div className="text-center my-3">
            <img src="/VILLA-ORCHIDEA-266w.webp" alt="logo azienda" />
          </div>
          <h1 className="text-center shadow-text great-vibes-regular fw-bold mt-5 fs-1">
            Area Personale
          </h1>
          <h5 className="text-center px-5 mt-3 mb-0 mb-lg-4  py-lg-2  font-playfair ">
            Qui potrai modificare o cancellare le tue prenotazioni!
          </h5>
        </Col>
      </Row>

      {reservations.length === 0 ? (
        <p className="text-center">Nessuna prenotazione trovata.</p>
      ) : (
        <Row className="g-4  justify-content-center">
          {reservations.map((r) => {
            const isPast = new Date(r.dataPrenotazione) < new Date();
            return (
              <Col key={r.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  className={`h-100 shadow scale-card ${
                    isPast ? "card-past" : "golden-border"
                  }`}
                >
                  <Card.Body>
                    <Card.Title>📅 {r.dataPrenotazione}</Card.Title>
                    <Card.Text>
                      🕘 Fascia: {r.fasciaOraria} <br />
                      👥 Posti: {r.numeroPosti} <br />
                      {r.note && <>📝Note: {r.note}</>}
                    </Card.Text>
                    <Button
                      variant="danger"
                      size="sm"
                      className="me-2"
                      onClick={() => handleDelete(r.id)}
                    >
                      Elimina
                    </Button>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => openUpdateModal(r)}
                    >
                      Modifica
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
      <Row className=" justify-content-center">
        <Col md={8} className=" p-5 p-md-0">
          <div className="text-center my-3">
            <h3 className="text-center shadow-text great-vibes-regular fw-bold mt-5 fs-1">
              Modifica Profilo
            </h3>
            <h5 className="text-center px-5 mt-3 mb-0 mb-lg-4  py-lg-2  font-playfair ">
              Cliccando sul bottone modifica profilo potrai cambiare le
              Informazioni del tuo Account
            </h5>
            <Button
              className=" mt-4"
              variant="info"
              onClick={() => setShowUpdateProfileModal(true)}
            >
              Modifica Profilo
            </Button>
          </div>
        </Col>
      </Row>

      <UpdateReservationModal
        show={showUpdateModal}
        handleClose={() => setShowUpdateModal(false)}
        reservation={selectedReservation}
        token={token}
        refreshList={fetchReservations}
      />
      <UpdateProfileModal
        show={showUpdateProfileModal}
        handleClose={() => setShowUpdateProfileModal(false)}
        token={token}
      />
    </Container>
  );
}

export default MiePrenotazioni;
