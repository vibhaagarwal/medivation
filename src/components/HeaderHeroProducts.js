import React from "react";
import { Container, Row, Col, Button, Navbar, Nav, Card } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';
import rightbanner from "../images/banner.png";

const HeaderHeroProducts = () => {
  return (
    <div className="headerheroproduct">
      {/* Header Section */}
      <Navbar expand="lg" className="py-3">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src= {logo} // Replace with actual logo URL
              alt="Logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About Us</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#team">Our Team</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
              <Button className=" btn download-brocher">
                Download Brochure
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="hero-title">
                Innovative Solutions <br />
                for a <span className="highlight">Healthier Tomorrow</span>
              </h1>
              <p className="hero-subtitle">
                We focus on developing and providing medical equipment that not
                only meets today’s standards but anticipates the needs of the
                future.
              </p>
              <div className="button-group">
                <Button variant="outline-primary" className="me-2 know-more">
                  Know More →
                </Button>
                <Button className="btn get-in-touch">Get in Touch →</Button>
              </div>
            </Col>
            <Col md={6} className="text-center">
              <div className="hero-image">
                <img
                  src= {rightbanner} // Replace with actual image URL
                  alt="Hero"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
    </div>
  );
};

export default HeaderHeroProducts;
