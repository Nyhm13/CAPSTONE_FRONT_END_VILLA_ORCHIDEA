import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function HomePage() {
  const carouselHeight = "639px";
  useEffect(() => {
    const carousel = document.querySelector(".animated-carousel");
    if (carousel) {
      carousel.classList.add("visible");
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
            Agriturismo con piscina e ristorante ad Ali Terme
          </h1>
          <h5 className="text-center px-5 mt-3 mb-0 mb-lg-4  py-lg-2  font-playfair ">
            Il posto ideale per un weekend di puro relax . . .
          </h5>
        </Col>
      </Row>
      {/* carosello part */}
      <Carousel
        data-bs-theme="dark"
        className=" mx-sm-5 mx-md-0 animated-carousel"
        interval={3000}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Villa di notte.jpg"
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
            src="Carosello foto 1.jpg"
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
            src="Carosello foto 2.jpg"
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
            src="Carosello foto 4.jpg"
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
            Concediti un soggiorno indimenticabile alla scoperta delle
            meraviglie del territorio siciliano. <br /> Scegli i servizi della
            nostra Villa Orchidea, agriturismo con piscina e ristorante ad Alì
            Terme. <br /> La struttura, a metà strada tra Messina e Taormina, si
            trova in una posizione ideale per gli amanti del mare che desiderano
            visitare le bellezze naturalistiche della zona e il patrimonio
            storico-architettonico delle vicine città. <br /> Contattaci al più
            presto per informazioni o per verificare le nostre disponibilità.
          </p>
        </Col>
      </Row>
      {/* sezione info sul agriturismo  */}
      <Row className="align-items-center  mx-auto justify-content-center my-5  px-3">
        <Col md={4} className="mb-4 mb-md-0 ">
          <h2 className="fw-bold mb-4 shadow-text great-vibes-regular fw-bold  fs-1 text-center text-md-start">
            L'agriturismo
          </h2>
          <p className="font-playfair fs-5  text-center text-md-start">
            Come ospite di Villa Orchidea trascorrerai un tranquillo soggiorno
            alloggiando in una camera dotata di tutti i comfort a pochi passi
            dal mare. Ma potrai anche vivere esperienze memorabili assaporando i
            deliziosi piatti della cucina tipica locale. In più, la piscina
            dell’agriturismo è sempre a tua disposizione per concederti una
            pausa rigenerante, come pure i tavoli da ping pong e il campo da
            tennis dove potrai passare momenti piacevoli e divertenti in
            compagnia.
          </p>
        </Col>
        <Col md={4} className="text-center">
          <div className="image-wrapper position-relative d-inline-block">
            <div className=" border border-dark  border-5 shadow-lg">
              <img
                src="/FotoSection.jpg"
                alt="Villa Orchidea"
                className="img-fluid"
                style={{
                  width: "450px",
                  height: "400px",
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
      {/* sezione banner con cards */}
      <Container fluid className="bg-dark text-white py-5">
        <h3 className="text-center mb-5">Comfort e servizi personalizzati</h3>
        <Row className="justify-content-center gap-3">
          <Col xs={10} md={2} className="banner-card-dx banner-card bg-gold">
            <i className="bi bi-door-open fs-1"></i>
            <p className="mt-3 fs-5 footer-text">12 camere</p>
          </Col>
          <Col
            xs={10}
            md={2}
            className="banner-card-sx banner-card bg-white text-dark"
          >
            <i className="bi bi-water fs-1"></i>
            <p className="mt-3 fs-5">Piscina e campo da tennis</p>
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
            <i className="bi bi-heart-fill  fs-1"></i>
            <p className="mt-3 fs-5">Organizzazione matrimoni</p>
          </Col>
        </Row>
      </Container>
      {/* sezione organizzazione eventi */}
      <Row className="align-items-center  mx-auto justify-content-center my-5">
        <Col md={4} className="text-center">
          <div className="image-wrapper position-relative d-inline-block">
            <div className=" golden-border">
              <img
                src="/Tavola apparecchiata.jpg"
                alt="Villa Orchidea"
                className="img-fluid"
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
            Organizzazione eventi
          </h2>
          <p className="font-playfair fs-5 text-center text-md-start">
            Villa Orchidea è una cornice magica e suggestiva per le tue
            cerimonie. Con l’aiuto dei nostri chef e del personale
            dell’agriturismo avrai l’occasione di organizzare ricevimenti e
            matrimoni in grande stile. L’ampio giardino con piscina rende
            davvero unica e incantevole la location, regalando il giusto tocco
            di carattere e raffinatezza all’evento e ai tuoi momenti più
            speciali.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
