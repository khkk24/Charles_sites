import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {JackInTheBox} from 'react-awesome-reveal';
import './Styles.css';

// Importer les logos
// import slackLogo from '../../images/slack.png';
// import airbnbLogo from '../../images/airbnb.png';
// import amazonLogo from '../../images/amazon.png';
// import googleLogo from '../../images/google.png';
// import netflixLogo from '../../images/netflix.png';

const ClientsSection = () => {
  return (
    <div className="client-page">
      <Container fluid className="d-flex flex-column align-items-center">
        {/* Titre "Clientes" centré en haut */}
        <Row className="client-header">
          <Col>
            <JackInTheBox triggerOnce>
              <h1 className="client-title">Clientes</h1>
            </JackInTheBox>
          </Col>
        </Row>

        {/* Section des logos clients */}
        {/* <Row className="client-logos d-flex justify-content-center">
          <Col xs={6} md={2}>
            <Image src={slackLogo} alt="Slack" fluid className="client-logo" />
          </Col>
          <Col xs={6} md={2}>
            <Image src={airbnbLogo} alt="Airbnb" fluid className="client-logo" />
          </Col>
          <Col xs={6} md={2}>
            <Image src={amazonLogo} alt="Amazon" fluid className="client-logo" />
          </Col>
          <Col xs={6} md={2}>
            <Image src={googleLogo} alt="Google" fluid className="client-logo" />
          </Col>
          <Col xs={6} md={2}>
            <Image src={netflixLogo} alt="Netflix" fluid className="client-logo" />
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default ClientsSection;
