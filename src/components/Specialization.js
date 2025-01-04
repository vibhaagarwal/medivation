import React from 'react';
import {Col, Row } from "react-bootstrap";

const Specialization = () => {
  return (
    <section className="specialization">
      <Row>
      <Col md={7}></Col>
      <Col md={5} className='overlay'>
        <h2>MedivationBio</h2>
        <h6>Achieving Possibilities</h6>
        <p>As the Technology is enabling new innovations in the field of science and impacting individual lives, We at MedivationBio are committed to work on the betterment and keep on innovating for providing the best in class medical devices to the world.</p>
      </Col>
      </Row>
    </section>
  );
};

export default Specialization;
