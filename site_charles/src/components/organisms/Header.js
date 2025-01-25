import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Carousel } from 'react-bootstrap';
import WhatsAppButton from '../Molecules/WhatsAppAppButton';
import { JackInTheBox} from 'react-awesome-reveal';
// Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide
import './Styles.css';

import image1 from '../../images/pexels-the-coach-space-2977581 1.png';
import image2 from '../../images/bg.png';
import image3 from '../../images/bg2.png';

const Header = () => {


  const [navbarTransparent, setNavbarTransparent] = useState(true);
  const [activeItem, setActiveItem] = useState('/');

  // Gestion du défilement pour ajouter l'effet de flou au Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarTransparent(false);
      } else {
        setNavbarTransparent(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (path) => {
    setActiveItem(path);
  };


  const carouselItems = [
    { src: image1, alt: 'Image 1', caption: 'Bienvenue chez CHARLES COMPANY' },
    { src: image2 , alt: 'Image 2', caption: 'Service de qualité pour vos projets' },
    { src: image3, alt: 'Image 3', caption: 'Expertise en construction' },
    { src: image1, alt: 'Image 4', caption: 'Fiabilité et sécurité sur le terrain' }
  ];

  return (
    <div className="carousel-container">
      <Carousel className="carousel-fullscreen">
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-image"
              src={item.src}
              alt={item.alt}
              style={{ height: '100vh', objectFit: 'cover' }} 

            />
            <Carousel.Caption className="carousel-caption">
              <JackInTheBox triggerOnce>
                <h1>{item.caption}</h1>
              </JackInTheBox>
              <WhatsAppButton
                phoneNumber="+5541996364063"
                message="Bonjour, je suis intéressé par vos services. Pouvez-vous me contacter ?"
              />
              
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Navbar
        // bg="primary"
        // data-bs-theme="dark"
        expand="lg"
        fixed="top"
        className={`navbar-overlay ${navbarTransparent ? 'navbar-transparent' : 'navbar-blur'}`}
      >
        <Navbar.Brand href="#">ENIGMA ELETRÔNICO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              className={`nav-item-space ${activeItem === '/' ? 'active' : ''}`}
              // active={activeItem === '/'}
              onClick={() => handleNavClick('/')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={`nav-item-space ${activeItem === '#about' ? 'active' : ''}`}
              // active={activeItem === '/about'}
              onClick={() => handleNavClick('/about')}
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#servicos"
              className={`nav-item-space ${activeItem === '#servicos' ? 'active' : ''}`}
              // active={activeItem === '/services'}
              onClick={() => handleNavClick('/services')}
            >
              Serviços
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={`nav-item-space ${activeItem === '#contact' ? 'active' : ''}`}
              // active={activeItem === '/contact'}
              onClick={() => handleNavClick('/contact')}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      
    </div>
  );
};

export default Header;
