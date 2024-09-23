import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import Slider from "react-slick";
import { categories } from "../data";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleProductClick = (relatedProductId) => {
    navigate(`/product/${relatedProductId}`);
    window.scrollTo(0, 0);
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

            <div className="d-flex align-items-center mb-3">
              <Button
                variant="secondary"
                className="me-2"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button variant="outline-secondary">Add to Wishlist</Button>
            </div>

            <Card className="mb-3">
              <Card.Body>
                <h5>Description</h5>
                <p>{product.description}</p>
              </Card.Body>
            </Card>

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
                onClick={() => handleProductClick(relatedProduct.id)}
                style={{ cursor: "pointer" }}
              >
                <Card className="mb-3" style={{ border: "0px" }}>
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
