import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import Login from "./Login";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <header
      style={{
        position: "absolute",
        width: "100%",
        zIndex: "10",
        backgroundColor: location.pathname === "/" ? "transparent" : "#faf8f6",
      }}
    >
      <Navbar
        expand="md"
        style={{
          backgroundColor:
            location.pathname === "/" ? "transparent" : "#faf8f6",
        }}
      >
        <Container className="p-2">
          <Navbar.Brand href="/">
            <img
              src="/images/d1.jfif"
              width="100"
              height="60"
              className="d-inline-block align-top"
              alt="Home Decor"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="text-dark">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-dark">
                About
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search Products here"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
            <Nav>
              <Nav.Link className="text-dark" href="#wishlist">
                <FaHeart /> Wishlist
              </Nav.Link>
              <Nav.Link className="text-dark" href="#cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <NavDropdown
                title={<FaUser className="text-dark" />}
                id="basic-nav-dropdown"
                align="end"
              >
                <NavDropdown.Item onClick={handleLoginClick}>
                  Sign In / Sign Up
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login show={showLogin} onHide={handleCloseLogin} />
    </header>
  );
};

export default Header;
