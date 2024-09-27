import React, { useRef, useEffect } from "react";
import { Button, Card, Row, Col, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Categories from "../components/Categories";
import PopularCategories from "../components/PopularCategories";
import styled, { keyframes } from "styled-components";
import { bounce, tada } from "react-animations";

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedTitle = styled.div`
  animation: 2s ${slideInLeft} ease-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
`;

const AnimatedText = styled.div`
  animation: 2s ${slideInLeft} ease-out forwards;
  animation-delay: 2.5s;
  opacity: 0;
`;

const AnimatedButton = styled.div`
  animation: 2s ${slideInLeft} ease-out forwards;
  animation-delay: 4s;
  opacity: 0;
`;

const Bounce = styled.div`
  animation: 5s ${keyframes`${bounce}`} infinite;
`;
const Tada = styled.div`
  animation: 5s ${keyframes`${tada}`} infinite;
`;

const Home = () => {
  const categoriesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#categories") {
      categoriesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div className="p-1 ">
        <Card className="border-2 h-100 ">
          <Row className="g-2">
            <Col md={12}>
              <div
                style={{
                  backgroundImage: "url('/images/Home.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100vh",
                  position: "relative",
                  color: "black",
                }}
              >
                <Card.Body
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    backgroundColor: "transparent",
                    padding: "30px",
                    borderRadius: "10px",
                    zIndex: "5",
                  }}
                >
                  <AnimatedTitle>
                    <Card.Title
                      className="mt-2 text-dark"
                      style={{
                        fontFamily: "BlinkMacSystemFont",
                        fontWeight: "bold",
                      }}
                    >
                      Decorate Your Dream Space With Our Finest Collection
                    </Card.Title>
                  </AnimatedTitle>
                  <AnimatedText>
                    <Card.Text className="mb-4 text-dark">
                      Explore our curated collections to discover the perfect
                      pieces for your unique vision.
                    </Card.Text>
                  </AnimatedText>
                  <AnimatedButton>
                    <Button as={Link} to="/explore-collection" variant="dark">
                      Explore Collection
                    </Button>
                  </AnimatedButton>
                </Card.Body>
              </div>
            </Col>
          </Row>
        </Card>
      </div>

      <div ref={categoriesRef}>
        <Categories />
      </div>

      <PopularCategories />

      <h2 className="text-center mt-2">
        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
          About Us
        </Link>
      </h2>

      <div className="py-1">
        <Card className="border-0 p-3 h-100">
          <Row className="align-items-center justify-content-center px-5">
            <Col md={7} className="mb-3">
              <Card.Body>
                <Card.Title className="fst-italic">
                  <Bounce>Home Decor</Bounce>
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  At Decorosophy, we believe that every space tells a story, and
                  we're passionate about helping you create a home that speaks
                  to your soul. Our curated collection of home decor pieces
                  combines timeless elegance with modern functionality, ensuring
                  that each item not only enhances your living space but also
                  stands the test of time.Our handpicked treasures are designed
                  to inspire and transform.
                  <br />
                  <br />
                  Our collection is thoughtfully selected to cater to a wide
                  range of tastes and preferences. We’re dedicated to providing
                  decor that helps you express your unique style and turn your
                  house into a sanctuary of beauty and comfort. Let Decorosophy
                  be your partner in crafting spaces that are as unique and
                  inspiring as you are.
                </Card.Text>
              </Card.Body>
            </Col>

            <Col md={5} className="text-center">
              <Tada>
                <Image
                  src="/images/A1.jpg"
                  alt="Decorosophy"
                  roundedCircle
                  fluid
                  style={{ width: "70%", height: "300px", opacity: 0.8 }}
                />
              </Tada>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default Home;
