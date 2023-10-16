// import sparrow css
import "../Style/Sparrow.css";

//navbar component css
import "../Style/NavbarComponent.css";

//import svg Data
import svgIcon from "../Components/SvgData.js";

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponent() {
  const contactno = "1-677-124-44227";
  return (
    <Navbar expand="lg" className="navbar-bg-color nav-height">
      <Container fluid>
        <Navbar.Brand href="#home" className="ms-xsm-6 ms-xl-7 ms-sm-5 fs-1 h1">
          SHIPPING
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className=" fw-semibold custom-nav-menu mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Service">Services</Nav.Link>
            <NavDropdown title="Page" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Arham Ullah khan
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#call" className="custom-phone-svg">
              {svgIcon.phoneIcon} CALL US {contactno}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
