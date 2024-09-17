import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Row, Col, Card, ListGroup } from "react-bootstrap";
import Slider from "react-slick";
import { categories } from "../data";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [dragging, setDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const product = categories
    .flatMap((category) => category.products)
    .find((p) => p.id === parseInt(productId));

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
  }, [productId]);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const relatedProducts = categories
    .flatMap((category) => category.products)
    .filter((p) => p.id !== parseInt(productId))
    .slice(0, 8);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
  };

  const handleMouseDown = () => {
    setDragging(false);
  };

  const handleMouseMove = () => {
    setDragging(true);
  };

  const handleMouseUp = (relatedProductId) => {
    if (!dragging) {
      navigate(`/product/${relatedProductId}`);
    }
  };

  return (
    <>
      <div className="content p-5 flex-grow-1 mt-4">
        <Row>
          <Col md={6}>
            <div>
              <img
                src={selectedImage}
                alt={product.name}
                style={{ width: "100%", height: "500px", objectFit: "fill" }}
              />

              <div className="d-flex justify-content-start mt-2">
                {product.thumbnails.map((thumb, index) => (
                  <img
                    key={index}
                    src={thumb}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="me-2"
                    style={{ width: "80px", height: "70px", cursor: "pointer" }}
                    onClick={() => setSelectedImage(thumb)}
                  />
                ))}
              </div>
            </div>
          </Col>

          <Col md={6}>
            <h2>{product.name}</h2>
            <h4 className="text-danger">{product.price}</h4>
            <p>Product Code: {product.id}</p>

            <div>
              <p>
                <strong>Size:</strong>
                {product.sizes ? (
                  product.sizes.map((size, index) => (
                    <Button
                      key={index}
                      variant="outline-secondary"
                      className="me-2"
                      style={{ margin: "0.5rem" }}
                    >
                      {size}
                    </Button>
                  ))
                ) : (
                  <span>No size options available</span>
                )}
              </p>
            </div>

            <div className="d-flex align-items-center mb-3">
              <Button variant="secondary" className="me-2">
                Add to Cart
              </Button>
              <Button variant="outline-secondary">Add to Wishlist</Button>
            </div>

            <Card className="mb-3 ">
              <Card.Body>
                <h5>Description</h5>
                <p>{product.description}</p>
              </Card.Body>
            </Card>

            {product.features && (
              <ListGroup className="mb-3">
                <ListGroup.Item>
                  <strong>Features:</strong>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            )}

            <ListGroup>
              <ListGroup.Item>
                Delivered in 5 to 10 working days
                <br />
                <b>Note:</b> Actual colors may vary from image.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <hr className="my-5" />

        <div className="mt-5">
          <h3>You may also like</h3>
          <Slider {...sliderSettings}>
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="p-3"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={() => handleMouseUp(relatedProduct.id)}
              >
                <Card
                  className="mb-3"
                  style={{ cursor: "pointer", border: "0px" }}
                >
                  <Card.Img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{relatedProduct.name}</Card.Title>
                    <Card.Text>{relatedProduct.price}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
