import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const Categories = () => {
  return (
    <>
      <h2 className="text-center mt-3">Top Categories</h2>
      <div className="d-flex py-4">
        <Container fluid>
          <Row className="g-3">
            <Col md={6}>
              <Card className="h-100">
                <div style={{ position: "relative", height: "620px" }}>
                  <Card.Img
                    variant="top"
                    src="/images/furniture.jpg"
                    alt="Furniture"
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                  <Card.Body
                    className="text-center"
                    style={{
                      position: "absolute",
                      top: "90%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Button variant="light">Furniture</Button>
                  </Card.Body>
                </div>
              </Card>
            </Col>

            <Col md={6}>
              <Row className="g-3">
                <Col md={6}>
                  <Card>
                    <div style={{ position: "relative", height: "300px" }}>
                      <Card.Img
                        variant="top"
                        src="/images/candles.jpg"
                        alt="Candle"
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                        }}
                      />
                      <Card.Body
                        className="text-center"
                        style={{
                          position: "absolute",
                          top: "85%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <Button variant="light">Candles</Button>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card>
                    <div style={{ position: "relative", height: "300px" }}>
                      <Card.Img
                        variant="top"
                        src="/images/vase.jpg"
                        alt="Vase"
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                        }}
                      />
                      <Card.Body
                        className="text-center"
                        style={{
                          position: "absolute",
                          top: "85%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <Button variant="light">Vases</Button>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card>
                    <div style={{ position: "relative", height: "300px" }}>
                      <Card.Img
                        variant="top"
                        src="/images/art.jpg"
                        alt="Art"
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                        }}
                      />
                      <Card.Body
                        className="text-center"
                        style={{
                          position: "absolute",
                          top: "85%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <Button variant="light">Art</Button>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card>
                    <div style={{ position: "relative", height: "300px" }}>
                      <Card.Img
                        variant="top"
                        src="/images/lights.jpg"
                        alt="Lighting"
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                        }}
                      />
                      <Card.Body
                        className="text-center"
                        style={{
                          position: "absolute",
                          top: "85%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <Button variant="light">Lighting</Button>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Categories;
