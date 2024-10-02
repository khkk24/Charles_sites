import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {  Fade , JackInTheBox} from 'react-awesome-reveal';

import './Styles.css';

const AboutSection = () => {
  return (
    <div className="about-us-container">
      <Container fluid className="d-flex flex-column justify-content-between align-items-center h-100">
        {/* Titre "About Us" en haut et centré */}
        <Row className="about-us-header">
          <Col>
            <Fade>
              <p className="about-us-heading">About Us</p>
            </Fade>
            
          </Col>
        </Row>

        {/* Contenu principal centré au milieu */}
        <Row className="about-us-main">
          <Col>
            <JackInTheBox>
            <h1 className="about-us-title">We are a strategic partner<br />to our amazing clients.</h1></JackInTheBox>
          </Col>
        </Row>

        {/* Sous-titre ou contenu complémentaire en bas */}
        <Row className="about-us-footer">
          <Col>
            <p className="about-us-subtitle">
              At Nova Civil we are committed to providing a quality service to our clients and developing long term relationships 
              to ensure the best outcomes for our clients, and our company.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
