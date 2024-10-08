import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import Slider from "react-slick";
import axios from "axios";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px); 
  }
  100% {
    transform: translateY(0); 
  }
`;

const FloatingCard = styled(Card)`
  animation: ${float} 3s ease-in-out infinite;
  transition: transform 1.05s ease;

  &:hover {
    transform: scale(1.05);
    animation: none;
  }
`;

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState("");
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        let productData = null;
        let categoryProducts = [];

        response.data.forEach((category) => {
          const foundProduct = category.products.find(
            (p) => p.id === parseInt(productId)
          );
          if (foundProduct) {
            productData = foundProduct;
            categoryProducts = category.products;
          }
        });

        if (productData) {
          setProduct(productData);
          setSelectedImage(productData.image);

          const uniqueRelatedProducts = categoryProducts
            .filter((p) => p.id !== productData.id)
            .filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);

          setRelatedProducts(uniqueRelatedProducts);
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productId]);

  if (!product) {
    return <h2>Loading product details...</h2>;
  }

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
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
            <Card className="mb-3">
              <Card.Body>
                <h5>Features</h5>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
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
                <FloatingCard className="mb-3" style={{ border: "0px" }}>
                  <Card.Img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{relatedProduct.name}</Card.Title>
                    <Card.Text>{relatedProduct.price}</Card.Text>
                  </Card.Body>
                </FloatingCard>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
