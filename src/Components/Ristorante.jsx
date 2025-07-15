import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

function Ristorante() {
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
    <Container fluid className="p-0 mt-8">
      <Row className=" justify-content-center ">
        <div className="text-center my-3 ">
          <img src="/VILLA-ORCHIDEA-266w.webp" alt="logo azienda" />
        </div>
        <div fluid className="animated-carousel">
          <img
            src="Ristorante esterno.jpg"
            alt="esterno ristorante"
            style={{
              height: "500px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <Col md={8} className=" p-5 p-md-0">
          <h1 className="text-center shadow-text great-vibes-regular fw-bold mt-5 fs-1">
            Agriturismo con cucina tipica locale e prodotti a km 0{" "}
          </h1>
          <h5 className="text-center px-5 mt-3 mb-0 mb-lg-4  py-lg-2  font-playfair ">
            Cosa aspetti per goderti un ottima cucina ?
          </h5>
        </Col>
      </Row>
      <Row className=" justify-content-center">
        <Col md={8}>
          <div className="text-center my-3">
            <img src="icona villa .webp" alt="logo azienda" />
          </div>

          <p className="text-center px-5 font-playfair fs-5">
            Villa Orchidea è un agriturismo con camere e ristorante ad Alì
            Terme. Qui ti offriremo un’esperienza di gusto autentica, con
            prodotti a km 0 e specialità siciliane. La struttura è circondata da
            numerose piante di ulivo e di limoneti, che ci permettono di portare
            in tavola un olio extravergine di oliva assicurato e un limone
            biologico dalla freschezza incredibile. Inoltre ci prendiamo cura di
            tantissime varietà di ortaggi che stagionalmente vengono raccolti
            per portarli in cucina e prepararli con tanta passione esaltandone
            le grandi proprietà nutritive ed i loro sapori unici. La vicinanza
            con il mare e i numerosi contatti con pescatori del posto fanno si
            che sui vostri piatti vi sarà sempre del pesce azzurro di altissima
            qualità . Prenota un tavolo a pranzo o a cena: sapremo soddisfare
            anche i palati più esigenti.
          </p>
        </Col>
      </Row>
      {/* sezione banner con card */}
      <Container fluid className="bg-dark text-white py-5 mt-5">
        <h3 className="text-center mb-5">Comfort e servizi personalizzati</h3>
        <Row className="justify-content-center gap-3">
          <Col xs={10} md={2} className="banner-card-dx banner-card bg-gold">
            <img
              src="dinner.png"
              alt="picture of fork knife and dish"
              className="dish d-block"
            />
            <p className="mt-3 fs-6  mt-lg-0 footer-text text-center">
              Menu fisso tutti i giorni a pranzo
            </p>
          </Col>
          <Col
            xs={10}
            md={2}
            className="banner-card-sx banner-card bg-white text-dark"
          >
            <i className="bi bi-book fs-1"></i>
            <p className="mt-3  mt-md-0 mt-lg-0   footer-text text-center">
              Menu alla carta tutti i giorni a cena
            </p>
          </Col>
          <Col xs={10} md={2} className="banner-card-dx banner-card bg-gold">
            <img
              src="pizza icon.png"
              alt="picture of sliced pizza"
              className="dish "
            />
            <p className="mt-3  my-md-0 mt-lg-0 fs-5 footer-text text-center overflow-hidden">
              Pizzeria aperta tutti i giorni a cena
            </p>
          </Col>
          <Col
            xs={10}
            md={2}
            className="banner-card-sx banner-card bg-white text-dark"
          >
            <img
              src="dinner.png"
              alt="picture of fork knife and dish"
              className="dish-dark"
            />
            <p className="mt-3  my-md-0 mt-lg-0 fs-5 footer-text text-center overflow-hidden">
              Posti interni ed esterni
            </p>
          </Col>
        </Row>
      </Container>
      {/* sezione ristorante */}

      <Container className=" my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center shadow-text great-vibes-regular fw-bold mt-5 fs-1">
              Piatti tipici e nuove invenzioni
            </h2>
            <p className="text-center px-5 font-playfair fs-5">
              Nel nostro ristorante con specialità siciliane proponiamo un menu
              con piatti di carne e di pesce, pensato e creato dai nostri chef.
              <br />
              Disponiamo di un’ampia sala interna, ideale per accogliere un gran
              numero di ospiti anche in occasione di eventi e cerimonie. Durante
              la bella stagione ti offriamo l’opportunità di cenare all’aperto,
              per gustare i piatti del ristorante sotto le stelle.
            </p>
          </Col>
        </Row>
        <Row className="g-2 justify-content-center mt-4 gap-md-5">
          {[
            "piatto 1.jpg",
            "piatto 2.jpg",
            "piatto 3.jpg",
            "piatto 4.jpg",
            "piatto 5.jpg",
            "piatto 6.jpg",
            "piatto 7.jpg",
            "piatto 8.jpg",
            "piatto 9.jpg",
          ].map((src, idx) => (
            <Col key={idx} xs={6} md={3} className="gallery-item p-0 mb-5">
              <img
                src={`${src}`}
                alt={`Gallery ${idx}`}
                className="img-fluid rounded"
              />
            </Col>
          ))}
        </Row>
      </Container>
      {/* sezione pizze */}
      <Container className=" my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center shadow-text great-vibes-regular fw-bold mt-5 fs-1">
              Pizzeria
            </h2>
            <p className="text-center px-5 font-playfair fs-5">
              Oltre alle squisite specialità siciliane, al ristorante di Villa
              Orchidea prepariamo pizze fragranti e deliziose, rigorosamente
              cotte nel forno a legna. Potrai scegliere la tua pizza preferita
              tra un’ampia varietà di proposte. Dalle più classiche, come la
              pizza Margherita o la Quattro Stagioni a quelle speciali, con
              ingredienti e materie prime a km 0. Per le nostre pizze
              impieghiamo esclusivamente impasti a lunga lievitazione, leggeri e
              gustosi anche nelle varianti più particolari e innovative.
            </p>
          </Col>
        </Row>
        <Row className="g-2 justify-content-center mt-4 gap-md-5 ">
          {[
            "pizza 1.jpg",
            "pizza 2.jpg",
            "pizza 3.jpg",
            "pizza 4.jpg",
            "pizza 5.jpg",
            "pizza 6.jpg",
            "pizza 7.jpg",
            "pizza 8.jpg",
            "pizza 9.jpg",
          ].map((src, idx) => (
            <Col key={idx} xs={6} md={3} className="gallery-item p-0 mb-5">
              <img
                src={`${src}`}
                alt={`Gallery ${idx}`}
                className="img-fluid rounded"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Ristorante;
