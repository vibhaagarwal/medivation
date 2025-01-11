import React from "react";
import {Col } from "react-bootstrap";
import footerlogo from "../images/footer-logo.png"

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src={footerlogo} alt ="footer-logo" />
          <p className="footer-address">
            Lane no 6,<br />
            SIDCO Industrial Complex, Bari Brahmna,<br />
            Jammu & Kashmir - 181133, India
          </p>
        </div>

        <div className="footer-links">
          {/* <div className="links-section">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li>About Us</li>
              <li>Blogs</li>
              <li>Our Team</li>
              <li>Contact</li>
            </ul>
          </div> */}
          <div className="links-section">
            <h3>PRODUCTS</h3>
            <ul>
              <li>Coronary Stent</li>
              <li>PTCA Balloons Catheters SC/NC</li>
            </ul>
          </div>
          <div className="links-section">
            <h3>VASCULAR ACCESSORIES</h3>
            <ul>
              <li>Guiding Catheter</li>
              <li>Diagnostic Catheter</li>
              <li>Introducer Sheath</li>
              <li>Angiographic Guide Wire</li>
              <li>Syringes</li>
              <li>High-pressure tube (Braided)</li>
            </ul>
          </div>
          <div className="links-section">
            <h3>MEDICAL DISPOSABLES</h3>
            <ul>
              <li>Blood Collection Tube</li>
              <li>Infusion (IV Cannula)</li>
            </ul>
          </div>
        </div>
      </div>
      <Col md={4}>
      <div className="footer-contact">
            <div className="contact-item">
              <strong>Email me at</strong>
              <p>info@medivationbio.com</p>
            </div>
            <div className="contact-item">
              <strong>Call Us</strong>
              <p>+91-9818494265</p>
            </div>
          </div>
          </Col>
    </footer>
    <div className="footer-bottom">
    <p>Copyright © 2024 - MedivationBio India Pvt. Ltd</p>
  </div>
  </>
  );
};

export default Footer;
