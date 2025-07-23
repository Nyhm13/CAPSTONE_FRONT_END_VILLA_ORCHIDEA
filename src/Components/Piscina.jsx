import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import ReservationModal from "./ReservationModal";
import { AuthContext } from "./AuthContext";

function Piscina() {
  const { isAuthenticated, token } = useContext(AuthContext);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const carouselHeight = "639px";
  useEffect(() => {
    const carousel = document.querySelector(".animated-carousel");
    if (carousel) {
      carousel.classList.remove("visible");
      setTimeout(() => {
        carousel.classList.add("visible");
      }, 50);
    }
  }, []);
  return (
    // sezione intro
    <Container fluid className="p-0 mt-8">
      <Row className=" justify-content-center">
        <Col md={8} className=" p-5 p-md-0">
          <div className="text-center my-3">
            <img src="/VILLA-ORCHIDEA-266w.webp" alt="logo azienda" />
          </div>
          <h1 className="text-center shadow-text great-vibes-regular fw-bold mt-5 fs-1">
            La piscina di Villa Orchidea
          </h1>
          <h5 className="text-center px-5 mt-3 mb-0 mb-lg-4  py-lg-2  font-playfair ">
            Cosa aspetti a goderdi una giornata dedicata al relax?
          </h5>
        </Col>
      </Row>
      {/* carosello part */}
      <Carousel
        data-bs-theme="dark"
        className=" mx-sm-5 mx-md-0 animated-carousel"
        interval={2000}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Carosello foto 2.jpg"
            alt="First slide picture of the villa"
            style={{
              height: carouselHeight,
              objectFit: "cover",
              objectPosition: "50% 65%",
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="piscina 2.jpg"
            alt="Second slide picture of girl in pool"
            style={{
              height: carouselHeight,
              objectFit: "cover",
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="piscina 3.jpg"
            alt="Third slide picture of a girl relaxing by the pool"
            style={{
              height: carouselHeight,
              objectFit: "cover",
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="piscina1.jpg"
            alt="Forth slide picture of the pool"
            style={{
              height: carouselHeight,
              objectFit: "cover",
            }}
          />
        </Carousel.Item>
      </Carousel>
      {/* sezione invite to join us */}
      <Row className=" justify-content-center">
        <Col md={8}>
          <div className="text-center my-3">
            <img src="icona villa .webp" alt="logo azienda" />
          </div>
          <p className="text-center px-5 font-playfair fs-5">
            Concediti un’esperienza di puro relax nella nostra splendida piscina
            immersa nel verde di Villa Orchidea. Rilassati al sole su comodi
            lettini, rinfrescati con un tuffo rigenerante e lasciati coccolare
            da un ambiente curato e tranquillo, lontano dal caos quotidiano. La
            piscina, ideale per famiglie, coppie e gruppi di amici, offre spazi
            ampi e zone d’ombra per vivere al meglio ogni momento della
            giornata. Siamo a metà strada tra Messina e Taormina, una posizione
            strategica per chi ama combinare mare, natura e cultura. Ti
            aspettiamo per regalarti una giornata indimenticabile all’insegna
            del benessere.
          </p>
        </Col>
      </Row>
      {/* sezione info sulla piscina  */}
      <Row className="align-items-center  mx-auto justify-content-center my-5  px-3">
        <Col md={4} className="mb-4 mb-md-0 ">
          <h2 className="fw-bold mb-4 shadow-text great-vibes-regular fw-bold  fs-1 text-center text-md-start">
            Servizi Piscina
          </h2>
          <p className="font-playfair fs-5  text-center text-md-start">
            La piscina mette a disposizione 50 postazioni con comodissime
            sdraio, un piano bar dove potete consumare bibite di ogni tipo,una
            scelta di cocktails,granite,gelati e caffe. Per effettuare una
            prenotazione dovete <b>Registrarvi</b> e successivamente scegliere
            la <b>Data</b>,il numero di <b>Postazioni</b>, il tipo di{" "}
            <b>Fascia Oraria</b> che puo essere <b>FULLDAY</b> che prevedere
            intera giornata dalle 9:00-18:00, <b>MORNING</b> che prevede mezza
            giornata di mattina 9:00-13:20 oppure <b>AFTERNOON</b> che prevede
            mezza giornata di pomeriggio 13:30-18:00. E severamente vietato
            introdurre cibo dal esterno e consumarlo nei pressi della piscina ma
            potrette usulfruire del nostro ristorante che mettera a vostra
            disposizione un menu del giorno per il pranzo se volete pranzare con
            noi!
          </p>
          <small>
            I bambini sotto i 12 anni non vengono inclusi nel numero di
            postazioni richieste e avranno una tariffa ridotta rispetto a chi
            prenota una postazione
          </small>
        </Col>
        <Col md={4} className="text-center">
          <div className="image-wrapper position-relative d-inline-block">
            <div className=" border border-dark  border-5 shadow-lg">
              <img
                src="piscina alto.jpg"
                alt="Villa Orchidea"
                className="img-fluid"
                style={{
                  width: "450px",
                  height: "500px",
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
      {/* sezione banner con cards */}
      <Container fluid className="bg-dark text-white py-5">
        <h3 className="text-center mb-5">Comfort e servizi </h3>
        <Row className="justify-content-center gap-3">
          <Col xs={10} md={2} className="banner-card-dx banner-card bg-gold">
            <i className="bi bi-segmented-nav fs-1"></i>
            <p className="mt-3 fs-5 ">50 postazioni </p>
          </Col>
          <Col
            xs={10}
            md={2}
            className="banner-card-sx banner-card bg-white text-dark"
          >
            <i className="bi bi-water fs-1"></i>
            <p className="mt-3 fs-5">Privè con jacuzzi</p>
          </Col>
          <Col xs={10} md={2} className="banner-card-dx banner-card bg-gold">
            <i className="bi bi-wifi fs-1"></i>
            <p className="mt-3 fs-5">Wi-Fi e parcheggio gratuiti</p>
          </Col>
          <Col
            xs={10}
            md={2}
            className="banner-card-sx banner-card bg-white text-dark"
          >
            <i className="bi bi-cup-straw  fs-1"></i>
            <p className="mt-3 fs-5">Piano bar</p>
          </Col>
        </Row>
      </Container>
      {/* sezione organizzazione eventi */}
      <Row className="align-items-center  mx-auto justify-content-center my-5">
        <Col md={4} className="text-center">
          <div className="image-wrapper position-relative d-inline-block">
            <div className=" golden-border">
              <img
                src="jacuzzi.jpg"
                alt="Villa Orchidea"
                className="img-fluid object-fit-cover"
                style={{
                  width: "450px",
                  height: "400px",
                }}
              />
            </div>
          </div>
        </Col>
        <Col md={4} className="mb-4 mb-md-0 ">
          <h2 className="fw-bold mb-4 shadow-text great-vibes-regular fw-bold  fs-1 text-center text-md-start">
            Area privè
          </h2>
          <p className="font-playfair fs-5 text-center text-md-start">
            Inoltre alla piscina potete contattare il responsabile della piscina
            per poter prenotare l`area privè che prevedere un zona riservata con
            una jacuzi e confortevoli baldrachini. Per maggiori informazioni sui
            prezzi e sulla durata contattate il responsabile della piscina
          </p>
          {isAuthenticated && (
            <div className="text-center my-5">
              <Button
                className="btn-azzure text-black"
                onClick={() => setShowReservationModal(true)}
              >
                Prenota la tua postazione
              </Button>
            </div>
          )}

          {/* MODALE PRENOTAZIONE */}
          <ReservationModal
            show={showReservationModal}
            handleClose={() => setShowReservationModal(false)}
            token={token}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Piscina;
