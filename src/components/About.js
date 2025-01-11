import React from "react";
import {Col } from "react-bootstrap";
import Header from './Header';
import Footer from './Footer';

const About = () => {
  return (
    <>
    <Header />
        <div className="about-section">
            <div className="about-container">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">
                    <strong>MedivationBio: Redefining the Pinnacle of Cardiovascular Excellence</strong> Rooted in precision and driven by purpose, MedivationBio stands as a beacon of innovation in the world of medical technology. We are not simply creating products; we are crafting the very foundation of tomorrow’s healthcare solutions.
                </p>
                <div className="about-mission-vision">
                    <div className="about-box">
                        <h2 className="about-subtitle">Our Mission</h2>
                        <p className="about-text">
                            To spearhead the evolution of cardiovascular medical technology, providing life-saving solutions that enhance the quality of life and redefine the standard of care worldwide.
                        </p>
                    </div>
                    <div className="about-box">
                        <h2 className="about-subtitle">Our Vision</h2>
                        <p className="about-text">
                            To emerge as the undisputed leader in cardiovascular innovation, pioneering medical technologies that revolutionize healthcare for generations to come.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    <Footer />
  </>
  );
};

export default About;
