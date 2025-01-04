import React from 'react';
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import icon1 from "../images/icon-1.svg";
import icon2 from "../images/icon-2.svg";
import icon3 from "../images/icon-3.svg";

const Products = () => {
  return (
    <section className="product-section">
    <Container>
      {/* <h2 className="section-title text-center mb-5">Our Products</h2> */}
      <Row>
        <Col md={5} className=" text-md-start product-left-section">
            <h2 className="product-title">Our Products</h2>
            <p className="section-subtitle">
              Our Specialization on the Multiple Health Products like Caridac, Chest, IVR Canuala, etc. Our Specialization on the Multiple Health Products like Caridac.
            </p>
            <button className="explore-button">Explore More →</button>
        </Col>
        <Col md={7} className="">
        <Col md={12} className="mb-4">
        <Card className="product-card">
            <div className="product-icons">
              <img src={icon1} />
            </div>          
            <Card.Body>
            <Button variant="link">Explore More →</Button>
              <h5>Coronary Stent</h5>
              <p>
                Medivation Bio focuses on manufacturing the best coronary
                stents by meeting the highest quality standards of accuracy
                and safety.
              </p>
            </Card.Body>
          </Card>
          </Col>
          <Col md={12} className="mb-4">
          <Card className="product-card">
          <div className="product-icons">
              <img src={icon2} />
            </div> 
            <Card.Body>
            <Button variant="link">Explore More →</Button>
              <h5>PTCA Balloons Catheters SC/NC</h5>
              <p>
                Delivering the best Coronary Balloon Catheters that meet the
                highest standards.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} className="mb-4">
          <Card className="product-card">
          <div className="product-icons">
              <img src={icon3} />
            </div> 
            <Card.Body>
            <Button variant="link">Explore More →</Button>
              <h5>Medical Disposables</h5>
              <p>
                Over 500 products for healthcare professionals promoting
                health and well-being for patients.
              </p>
              
            </Card.Body>
          </Card>
        </Col>
        </Col>
      </Row>
    </Container>
  </section>
  );
};

export default Products;
