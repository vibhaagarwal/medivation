import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from './components/Header';
import HeaderHeroProducts from './components/HeaderHeroProducts';
import Products from './components/Products';
import FullPageSlider from './components/FullPageSlider';
import Specialization from './components/Specialization';
// import Innovations from './components/Innovations';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <HeaderHeroProducts />
      <Products /> 
      <FullPageSlider />
      {/* <Innovations /> */}
      <Achievements />
      <Blog />
      <Specialization />
      <Footer />
    </div>
  );
}

export default App;
