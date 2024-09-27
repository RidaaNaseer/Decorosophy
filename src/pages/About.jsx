import React from "react";
import { Row, Col, Image, Card } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web";

const About = () => {
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 800 },
  });

  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  const imageAnimation = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    config: { duration: 3000 },
  });

  return (
    <>
      <div
        className="mt-5"
        style={{
          padding: "0 12px",
        }}
      >
        <animated.h1 style={titleAnimation} className="text-center mb-5">
          About Us
        </animated.h1>

        <Row
          className="align-items-center justify-content-center mb-5"
          style={{ backgroundColor: "#faf8f6" }}
        >
          <Col md={7}>
            <Card.Body>
              <animated.div style={titleAnimation}>
                <Card.Title>About Us</Card.Title>
              </animated.div>

              <animated.div style={textAnimation}>
                <Card.Text style={{ textAlign: "justify" }}>
                  At Decorosophy, we believe in the power of thoughtful design.
                  Our carefully chosen selection is a reflection of your unique
                  style and individuality, not just decor. We carefully choose
                  each item by hand to make sure it symbolizes a timeless
                  elegance mixed with a modern sensibility.
                </Card.Text>
              </animated.div>
            </Card.Body>
          </Col>

          <Col md={4} className="text-center">
            <animated.div style={imageAnimation}>
              <Image
                src="/images/aboutus1.webp"
                alt="About Us"
                fluid
                style={{ width: "300px", height: "300px" }}
              />
            </animated.div>
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center mb-5">
          <Col md={4} className="text-center">
            <animated.div style={imageAnimation}>
              <Image
                src="/images/mission.jfif"
                alt="Our Mission"
                fluid
                style={{ width: "300px", height: "300px" }}
              />
            </animated.div>
          </Col>

          <Col md={7}>
            <Card.Body>
              <animated.div style={titleAnimation}>
                <Card.Title>
                  Our Mission: Better Home Better LifeStyle
                </Card.Title>
              </animated.div>

              <animated.div style={textAnimation}>
                <Card.Text style={{ textAlign: "justify" }}>
                  Our mission at Decorosophy is to bring timeless elegance and
                  modern functionality into every home. We strive to offer decor
                  that enhances your living space, reflects your unique style,
                  and stands the test of time. Our goal is to work with you to
                  design a space that not only complements your style but also
                  expresses who you are. Our collection of decor items is
                  intended to inspire and elevate your area, transforming it
                  into a personalized refuge where you can genuinely feel at
                  home whether you're remodeling a single room or your entire
                  house.
                </Card.Text>
              </animated.div>
            </Card.Body>
          </Col>
        </Row>

        <Row
          className="align-items-center justify-content-center"
          style={{ backgroundColor: "#faf8f6" }}
        >
          <Col md={7}>
            <Card.Body>
              <animated.div style={titleAnimation}>
                <Card.Title>Our Story</Card.Title>
              </animated.div>

              <animated.div style={textAnimation}>
                <Card.Text style={{ textAlign: "justify" }}>
                  Decorosophy was founded on the belief that home decor should
                  be more than just aesthetically pleasing; it should tell a
                  story. We are passionate about helping our customers create
                  spaces that are not only beautiful but also meaningful and
                  inspiring.
                  <br />
                  Our mission is to provide decor that resonates with your
                  personal journey, turning your home into a canvas that
                  reflects your unique experiences and aspirations.
                </Card.Text>
              </animated.div>
            </Card.Body>
          </Col>

          <Col md={4} className="text-center">
            <animated.div style={imageAnimation}>
              <Image
                src="/images/story.webp"
                alt="Our Story"
                fluid
                style={{ width: "300px", height: "300px" }}
              />
            </animated.div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default About;
