import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Dropdown,
  Breadcrumb,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Vases = () => {
  const [filter, setFilter] = useState("Availability");
  const [sortBy, setSortBy] = useState("Featured");
  const [vasesProducts, setVasesProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        const vasesCategory = response.data.find(
          (category) => category.id === "2"
        );
        setVasesProducts(vasesCategory ? vasesCategory.products : []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleFilterChange = (filterOption) => {
    setFilter(filterOption);
    // Implement additional filter logic if needed
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    // Implement additional sorting logic if needed
  };

  return (
    <Container fluid className="mt-5">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/#categories" }}>
          Categories
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Vases</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="mb-4">
        <Col md={6}>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="filter-dropdown">
              Filter: {filter}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleFilterChange("Availability")}>
                Availability
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange("Price")}>
                Price
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={6} className="text-end">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="sort-dropdown">
              Sort by: {sortBy}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleSortChange("Featured")}>
                Featured
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleSortChange("Price: Low to High")}
              >
                Price: Low to High
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleSortChange("Price: High to Low")}
              >
                Price: High to Low
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row>
        {vasesProducts.map((product) => (
          <Col md={4} className="mb-4" key={product.id}>
            <Card
              className="border-0"
              style={{ width: "100%", height: "100%" }}
            >
              <div style={{ position: "relative" }}>
                <Card.Img src={product.image} alt={product.name} />
                {product.discount && (
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      backgroundColor: "#f76c6c",
                      color: "#fff",
                      padding: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {product.discount}
                  </span>
                )}
              </div>
              <Card.Body className="text-center">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <span
                    style={{ textDecoration: "line-through", color: "grey" }}
                  >
                    Rs. {product.originalPrice}
                  </span>{" "}
                  <br />
                  Now Rs. {product.price}
                </Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Vases;
