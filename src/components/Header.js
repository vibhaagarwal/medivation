// import React from "react";
// import { Container, Row, Col, Button, Navbar, Nav, Card } from "react-bootstrap";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../images/logo.png';
// import ContactUs from './components/ContactUs';

// const Header = () => {
//   return (
//     <div>
//       {/* Header Section */}
//       <Navbar expand="lg" className="py-3">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               src= {logo} // Replace with actual logo URL
//               alt="Logo"
//               className="logo"
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#about">About Us</Nav.Link>
//               <NavDropdown title="Products" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//               <Nav.Link href="#blog">Blog</Nav.Link>
//               <Nav.Link href="#team">Our Team</Nav.Link>
//               <Nav.Link href="#contact" to="/contact">Contact Us</Nav.Link>
//               <Button className=" btn download-brocher">
//                 Download Brochure
//               </Button>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { Container, Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <div>
      {/* Header Section */}
      <Navbar expand="lg" className="py-3">
        <Container>
          <Navbar.Brand as={Link} to="/https://perfectfinancialssolution.in">
            <img
              src={logo} // Replace with actual logo URL
              alt="Logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/products/action">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/another-action">Another Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/something">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/products/separated-link">Separated Link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/team">Our Team</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              <Button className="btn download-brocher">Download Brochure</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
