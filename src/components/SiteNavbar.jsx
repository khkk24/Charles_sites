import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/SiteNavbar.css';

const SiteNavbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark-theme' : 'light-theme'}`}
      variant={darkMode ? 'dark' : 'light'}
    >
      <div className="navbar-container-fluid">
        <Navbar.Brand href="/" className="brand-logo">
          <img 
            src="/images/engenigma-logo.jpg" 
            alt="Engenigma Logo" 
            height="80"
            style={{height: "80px"}}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <LinkContainer to="/">
              <Nav.Link>Início</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link>Serviços</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/quem-somos">
              <Nav.Link>Quem Somos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/equipe">
              <Nav.Link>Equipe</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/orcamentos">
              <Nav.Link>Orçamentos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ouvidoria">
              <Nav.Link>Ouvidoria</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dashboard">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contato</Nav.Link>
            </LinkContainer>
            <Button 
              variant="outline-primary" 
              size="sm" 
              className="ms-2 theme-toggle"
              onClick={toggleTheme}
            >
              {darkMode ? <BsSun /> : <BsMoon />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default SiteNavbar;
