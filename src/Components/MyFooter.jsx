import { Col, Container, Row } from "react-bootstrap";

function MyFooter() {
  return (
    <Container fluid className=" bg-brown mt-5">
      <Row className=" text-center d-flex row-cols-3">
        <Col>
          <p className=" fw-bold mt-3 mb-0 ">
            <img src="/icona villa .webp" alt="" />
            SOCIAL
          </p>
          <div className="d-flex justify-content-center align-items-center ">
            <a
              href="https://www.facebook.com/villaorchideaaliterme"
              className="text-white me-3 d-flex justify-content-center align-items-center gap-3 text-start"
              target="blank"
            >
              <i className="bi bi-facebook fs-4 text-center"></i>
              <p className="m-0 footer-text ">Facebook</p>
            </a>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <a
              href="https://www.instagram.com/villaorchidea_aliterme/?utm_medium=copy_link"
              className="text-white me-3 d-flex justify-content-center align-items-center gap-3 text-start"
              target="blank"
            >
              <i className="bi bi-instagram fs-4 text-center"></i>
              <p className="m-0 footer-text">Instagram</p>
            </a>
          </div>
          {/* <div className="d-flex justify-content-center align-items-center">
            <a
              href="https://www.agriturismovillaorchidea.it/?_gl=1*1bo21pb*_up*MQ..*_ga*Mzc1OTA1MDgyLjE3NTE1NjYzMDI.*_ga_23LNSPS7Q6*czE3NTE2NTQyOTgkbzQkZzEkdDE3NTE2NTQzMDIkajU2JGwwJGgw"
              className="text-white me-3 d-flex justify-content-center align-items-center gap-1 text-start"
              target="blank"
            >
              <i className="bi bi-globe fs-4 text-center"></i>
              <p className="m-0 text-nowrap footer-text">Sito Ufficiale</p>
            </a>
          </div> */}
        </Col>
        <Col>
          <p className=" fw-bold mt-3 mb-0 text-nowrap">
            <img src="/icona villa .webp" alt="" />
            SEDE
          </p>
          <p className="m-0 footer-text">
            Via Contrada Baglio, <br />
            98021 Alì Terme (ME)
          </p>
        </Col>
        <Col>
          <p className=" fw-bold mt-3 mb-0 text-nowrap">
            <img src="/icona villa .webp" alt="" />
            RECAPITI
          </p>
          <p className=" m-0  text-nowrap footer-text">+39 340 8230288</p>
          <p className=" m-0 text-nowrap footer-text ">+39 3480952641</p>
          <p className=" m-0 mb-3 text-nowrap footer-text">+39 0942 701025</p>
        </Col>
      </Row>
      <Row className="text-center py-2">
        <Col>
          <small>
            &copy; {new Date().getFullYear()} Villa Orchidea. Tutti i diritti
            riservati.
          </small>
        </Col>
      </Row>
    </Container>
  );
}
export default MyFooter;
