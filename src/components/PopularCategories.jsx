import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PopularCategory() {
  const [categories, setCategories] = useState([]);
  const swiperRef = React.useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/pcategories")
      .then((response) => {
        if (typeof response.data === "object") {
          setCategories(response.data);
        } else {
          console.error("Expected JSON but received:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <>
      <style>
        {`
        .Swiper {
        }

        .swiper-button-next {
          right: 150px; 
          color: white;
        }

        .swiper-button-prev {
          left: 130px; 
          color: white;
        }

        .swiper-pagination-bullet-active {
          background-color: black; 
        }
        `}
      </style>
      <Container>
        <h2 className="text-center mt-2">Most Popular</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={4}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="Swiper"
        >
          {Array.isArray(categories) && categories.length > 0 ? (
            categories.map((category) => (
              <SwiperSlide
                key={category.id}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Row className="mt-2 mb-5">
                  <Col>
                    <Card
                      style={{
                        position: "relative",
                        height: "250px",
                        width: "100%",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={category.image}
                        alt={category.name}
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
                        <Link
                          to={`/${category.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          <Button variant="light">{category.name}</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div>No categories available.</div>
            </SwiperSlide>
          )}
        </Swiper>
      </Container>
    </>
  );
}
