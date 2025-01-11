import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Header from './components/Header';
import HeaderHeroProducts from './components/HeaderHeroProducts';
import Products from './components/Products';
import FullPageSlider from './components/FullPageSlider';
import Specialization from './components/Specialization';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs'; 
import OurTeam from './components/OurTeam';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
              {/* <Header /> */}
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
          <Route path="/team" element={<OurTeam />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
