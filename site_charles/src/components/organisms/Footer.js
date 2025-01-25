

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'; 
import './Styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Colonne logo et infos de contact */}
          <Col md={3}>
            <img src="" alt="Nova Logo" className="footer-logo mb-3" />
            <p>Rua Pisa 23 Santa Felicidade Curitiba PR, CEP:  82020-710</p>
            <p>CNPJ: 41.379.006/0001-07</p>
            <p>+55 41 99999-9999</p>
            <div className="footer-socials">
              <a href="https://facebook.com" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </Col>

          {/* Colonne Company */}
          <Col md={3}>
            <h5>Empresa</h5>
            <ul className="list-unstyled">
              <li><a href="#about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              
            </ul>
          </Col>

          {/* Colonne Projects */}
          <Col md={3}>
            <h5>Projetos</h5>
            <ul className="list-unstyled">
              
            </ul>
          </Col>

          {/* Colonne Feedback */}
          <Col md={3}>
            <h5>Feedback</h5>
            <ul className="list-unstyled">
              
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
