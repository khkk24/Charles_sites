import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Styles.css';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">ENIGMA ELETRÔNICO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-item-space">Home</Nav.Link>
            <Nav.Link href="#home" className="nav-item-space">About</Nav.Link>
            <Nav.Link href="#servicos" className="nav-item-space">Serviços</Nav.Link>
            <Nav.Link href="#contact" className="nav-item-space">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
