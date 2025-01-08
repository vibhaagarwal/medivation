import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactUsImg from "../images/contact-us.png"; // Replace with the correct path to the image
import Header from './Header';
import Footer from './Footer'

const ContactUs = () => {
  return (
    <>
    <Header />
    <div className="contact-us-container ">
    <div className="contact-us-content ">
        <Row className="m-0">
        {/* Left Side: Image */}
        <Col md={5} className="contact-us-image">
            <img src={ContactUsImg} alt="Building" />
        </Col>

        {/* Right Side: Form & Details */}
        <Col md={7} className="contact-us-form-details">

            <h1>Contact Us</h1>
        <Row className="contact-wrapper">
            <form className="contact-form col-md-7">
            <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="2" placeholder="Your message"></textarea>
            </div>
            <div className="">
            <button type="submit" className="submit-button">Submit</button>
            </div>
            </form>

            {/* Contact Details */}
            <Col md={5} className="contact-details">
            <p><strong>Contact</strong></p>
            <p>+91-9818494265</p>
            <p>care@medivationbio.com</p>
            <p><strong>Based in</strong></p>
            <p>Lane no 6, SIDCO Industrial Complex, Bari Brahmana, Jammu & Kashmir - 181133, India</p>
            </Col>
            </Row>

        </Col>
        </Row>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactUs;
