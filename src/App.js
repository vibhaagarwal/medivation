import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from './components/Header';
import HeaderHeroProducts from './components/HeaderHeroProducts';
import Products from './components/Products';
import FullPageSlider from './components/FullPageSlider';
import Specialization from './components/Specialization';
// import Innovations from './components/Innovations';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs'; // Import Contact Us page

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Header />
                <HeaderHeroProducts />
                <Products />
                <FullPageSlider />
                <Achievements />
                <Blog />
                <Specialization />
                <Footer />
              </>
            }
          />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
