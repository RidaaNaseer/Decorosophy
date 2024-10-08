import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light mt-5 ">
      <Container fluid>
        <Row className="position-relative">
          <Col md={12} className="text-center">
            <div
              style={{
                position: "relative",
                height: "20px",
                marginBottom: "40px",
              }}
            >
              <a href="#top">
                <Button
                  style={{
                    backgroundColor: "black",
                    border: "2px solid #fff",
                    borderRadius: "5px",
                    color: "#fff",
                    fontSize: "15px",
                    lineHeight: "15px",
                    fontVariationSettings: '"wght" 400',
                    padding: "15px 20px",
                    position: "absolute",
                    top: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  Back to Top
                </Button>
              </a>
            </div>
          </Col>
        </Row>

        <Row className="mb-4 p-1 ">
          <Col md={6}>
            <h5>Sign Up to our Emails</h5>
            <p>
              Hear about collections, exhibitions, courses, and events from the
              Decorosophy.
            </p>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group controlId="formEmail" className="mb-3">
                <Row>
                  <Col xs={8}>
                    <Form.Control
                      type="email"
                      placeholder="email@example.com"
                    />
                  </Col>
                  <Col xs={4}>
                    <Button variant="dark" type="submit">
                      Sign Up
                    </Button>
                  </Col>
                </Row>
              </Form.Group>
              <p className="small">
                You can change your preferences or opt out of hearing from us at
                any time using the unsubscribe link in our emails. Read our full
                privacy notice.
              </p>
            </Form>
          </Col>
        </Row>
        <hr className="my-1" />

        <Row className="justify-content-center p-5">
          <Col md={3} className="flex-column">
            <h5>Customer Service</h5>
            <Row>
              <Col xs={6} className="d-flex">
                <ul className="list-unstyled">
                  <li>Contact</li>
                  <li>Delivery & Times</li>
                  <li>Warranty & Repair</li>
                  <li>Order pay</li>
                  <li>Own delivery service</li>
                  <li>Returns</li>
                  <li>Order business</li>
                  <li>Privacy Statement</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <h5>MisterDesign</h5>
            <Row>
              <Col xs={6} className="d-flex">
                <ul className="list-unstyled">
                  <li>Shop Den Bosch</li>
                  <li>Interior advice</li>
                  <li>Projects</li>
                  <li>Vacancies</li>
                  <li>Terms and Conditions</li>
                  <li>Blog</li>
                  <li>Trends</li>
                  <li>Actions & offers</li>
                </ul>
              </Col>
            </Row>
          </Col>

          <Col md={3}>
            <h5>Popular Categories</h5>
            <Row>
              <Col xs={6} className="d-flex">
                <ul className="list-unstyled">
                  <li>Chairs</li>
                  <li>Bed</li>
                  <li>Sofas</li>
                  <li>Candles</li>
                  <li>Photo Frames</li>
                  <li>Art</li>
                  <li>Flower Vases</li>
                  <li>Lights</li>
                </ul>
              </Col>
            </Row>
          </Col>

          <Col md={3} className="d-flex flex-column align-items-center p-5 ">
            <h5>Subscribe to Our Newsletter</h5>
            <p>Get the latest news and updates right in your inbox.</p>

            <Button variant="dark" className="mt-3">
              Subscribe
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center p-3">
          <Col md={4} className="d-flex flex-column align-items-center">
            <h5>Keep in touch!</h5>
            <ul className="list-unstyled d-flex text-center">
              <li className="me-3">
                <a href="#">Twitter</a>
              </li>
              <li className="me-3">
                <a href="#">Facebook</a>
              </li>
              <li className="me-3">
                <a href="#">Instagram</a>
              </li>
              <li className="me-3">
                <a href="#">Pinterest</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="d-flex flex-column align-items-center">
            <h5>Payement Methods</h5>
            <div>
              <img
                src="/images/visa.png"
                width="40"
                height="30"
                alt="Visa"
                className="me-2"
                style={{ mixBlendMode: "multiply" }}
              />
              <img
                src="/images/MC.png"
                alt="MasterCard"
                width="40"
                height="30"
                className="me-2"
                style={{ mixBlendMode: "multiply" }}
              />
              <img
                src="/images/pp.png"
                width="40"
                height="30"
                alt="PayPal"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </Col>
        </Row>

        <Row className="text-center p-2 bg-dark">
          <Col>
            <p className="small text-white mb-0">
              &copy; MyStore | All rights reserved | All prices include VAT
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
