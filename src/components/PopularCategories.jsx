import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Card, Row, Col, Container, Button } from "react-bootstrap";

export default function PopularCategory() {
  const categories = [
    { id: 1, name: "Ceramic Vases", image: "/images/cvase.jpg" },
    { id: 2, name: "ArmChair", image: "/images/chair.jpg" },
    { id: 3, name: "End Tables", image: "/images/table.avif" },
    { id: 4, name: "Decorative Lighting", image: "/images/light.webp" },
    { id: 5, name: "Photo Frame", image: "/images/frame.jpg" },
    { id: 6, name: "Tin Candles", image: "/images/candle.jfif" },
  ];

  return (
    <>
      <style>
        {`
      .mySwiper {
       padding: 5px;
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
      <div>
        <Container>
          <h2 className="text-center mt-2">Most Popular</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={4}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
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
                          top: "85%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <Button
                          variant="light"
                          style={{
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            maxWidth: "100%",
                          }}
                        >
                          {category.name}
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </>
  );
}
