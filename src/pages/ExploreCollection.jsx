import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Pagination, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faBars } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ITEMS_PER_PAGE = 7;

const ExploreCollection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [view, setView] = useState("grid");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubcategory(null);
    setCurrentPage(1);
    window.scrollTo(0, 0);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setCurrentPage(1);
  };

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setCurrentPage(1);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const selectedCategoryProducts =
    selectedCategory === "All"
      ? categories && categories.length > 0
        ? categories.flatMap((category) => category.products)
        : []
      : categories?.find((category) => category.name === selectedCategory)
          ?.products || [];

  const filteredProducts = selectedSubcategory
    ? selectedCategoryProducts.filter(
        (product) => product.subcategory === selectedSubcategory
      )
    : selectedCategoryProducts;

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  return (
    <>
      <style>
        {`
          .pagination .page-item {
            margin-right: 10px; 
          }

          .pagination .page-item .page-link {
            background-color: #f0f0f0; 
            color: #333;
            border: 1px solid #ddd; 
          }

          .pagination .page-item.active .page-link {
            background-color: black;
            color: #fff;
          }

          .pagination .page-item .page-link:hover {
            background-color: grey; 
            color: #fff; 
          }

          .even-page .page-link {
            background-color: #28a745;
            color: #fff;
          }

          .odd-page .page-link {
            background-color: #dc3545;
            color: #fff;
          }
             .product-image-wrapper {
            overflow: hidden;
            transition: transform 0.3s ease;
            position: relative; 
          }

          .product-image-wrapper:hover img {
            transform: scale(1.1); 
          }

          .product-image-wrapper img {
            transition: transform 0.3s ease; 
            width: 100%;
            height: 250px; 
            object-fit: cover; 
          }
${
  view === "grid" &&
  `
         .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); 
            grid-gap: 20px; 
          }

          .grid-item-small {
            grid-column: span 2;
            grid-row: span 3;
          }

          .grid-item-medium {
            grid-column: span 2;
            grid-row: span 3;
          }

          .grid-item-large {
            grid-column: span 2;
            grid-row: span 3;
          }

      
            `
}
        `}
      </style>

      <div
        className="content p-3 flex-grow-1"
        style={{ backgroundColor: "#faf8f6" }}
      >
        <h1 className="text-center mb-4 mt-2">Explore Our Collection</h1>

        <div className="d-flex justify-content-center mb-3">
          <Form.Select
            className="me-2"
            style={{ maxWidth: "200px" }}
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">All Categories</option>
            {categories && categories.length > 0 ? (
              categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))
            ) : (
              <option disabled>Loading...</option>
            )}
          </Form.Select>

          <Form.Control
            type="text"
            placeholder="Search"
            style={{ maxWidth: "400px" }}
          />
        </div>

        <div className="d-flex justify-content-end mb-2">
          <ButtonGroup>
            <FontAwesomeIcon
              icon={faThLarge}
              size="2x"
              style={{
                cursor: "pointer",
                color: view === "grid" ? "black" : "grey",
                marginRight: "20px",
              }}
              onClick={() => setView("grid")}
            />
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              style={{
                cursor: "pointer",
                color: view === "list" ? "black" : "grey",
              }}
              onClick={() => setView("list")}
            />
          </ButtonGroup>
        </div>

        <Row>
          <Col md={3}>
            <Sidebar
              onSelectCategory={handleCategorySelect}
              onSelectSubcategory={handleSubcategorySelect}
            />
          </Col>

          <Col md={9}>
            <Row>
              {view === "list" && (
                <Row className="mb-3">
                  <Col md={3}></Col>
                  <Col className="d-flex justify-content-between align-items-center">
                    <Col md={3} style={{ marginLeft: "20px" }}>
                      <h4 className="text-center">Title</h4>
                    </Col>
                    <Col md={3}>
                      <h4 className="text-center">Price</h4>
                    </Col>
                    <Col md={3}>
                      <h4 className="text-center">Author</h4>
                    </Col>
                  </Col>
                </Row>
              )}
              <div className="grid-container">
                {paginatedProducts.map((product) => (
                  <div
                    className={`product-image-wrapper grid-item-${product.gridSize}`}
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                  >
                    {view === "grid" ? (
                      <Card className="border-0">
                        <Card.Img
                          variant="top"
                          src={product.image}
                          style={{
                            objectFit: "cover",
                            height: "250px",
                            width: "100%",
                            backgroundColor: "#f8f8f8",
                            cursor: "pointer",
                          }}
                        />
                        <Card.Body style={{ backgroundColor: "#f8f8f8" }}>
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Text>{product.price}</Card.Text>
                        </Card.Body>
                      </Card>
                    ) : (
                      <Card className=" border-0 d-flex flex-row align-items-center mb-3">
                        <Col md={3}>
                          <Card.Img
                            src={product.image}
                            style={{
                              objectFit: "cover",
                              width: "250px",
                              height: "100px",
                            }}
                          />
                        </Col>
                        <Col md={3}>
                          <Card.Body>
                            <Card.Title className="text-center">
                              {product.name}
                            </Card.Title>
                          </Card.Body>
                        </Col>
                        <Col md={3}>
                          <Card.Body>
                            <Card.Text className="text-center">
                              {product.price}
                            </Card.Text>
                          </Card.Body>
                        </Col>
                        <Col md={3}>
                          <Card.Body>
                            <Card.Text className="text-center">
                              {product.author}
                            </Card.Text>
                          </Card.Body>
                        </Col>
                      </Card>
                    )}
                  </div>
                ))}
              </div>
            </Row>

            <Pagination className="justify-content-center">
              {[...Array(totalPages).keys()].map((page) => (
                <Pagination.Item
                  key={page + 1}
                  active={page + 1 === currentPage}
                  onClick={() => handlePageChange(page + 1)}
                >
                  {page + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ExploreCollection;
