import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import banner from '../images/banner.png';
const Header = () => {
  return (
    <header className="header-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Text Content */}
          <Col md={6} className="text-center text-md-start">
            <h1 className="header-title">
              Innovative Solutions <br />
              for a <span className="highlight">Healthier Tomorrow</span>
            </h1>
            <p className="header-subtitle">
              We focus on developing and providing medical equipment that not
              only meets today’s standards but anticipates the needs of the
              future.
            </p>
            <div className="button-group">
              <Button variant="outline-primary" className="me-2">
                Know More →
              </Button>
              <Button variant="primary">Get in Touch →</Button>
            </div>
          </Col>

          {/* Right Side: Image */}
          <Col md={6} className="text-center">
            <div className="image-wrapper">
              <img
                src={banner} // Replace with actual image URL
                alt="Header Illustration"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
