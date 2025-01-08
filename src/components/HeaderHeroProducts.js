import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import rightbanner from "../images/banner.png";

const HeaderHeroProducts = () => {
  return (
    <div className="headerheroproduct">
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
