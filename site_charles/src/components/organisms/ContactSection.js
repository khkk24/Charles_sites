import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from '../Molecules/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import './Styles.css';

const Contact = () => {
    return (
        <div className='contact-wrapper'>
            <h1>Contact</h1>
            <Container>
                <Row>
                    <Col lg={5} className='icon-text-wrapper'>
                    
                        <section className='icon-text'>
                            <div>
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </div>
                            
                            <div>
                                <h3>Endereço</h3>
                                <p>Rua xpto, 100 , Centro-Curitiba</p>
                            </div>
    
                        </section>
                    </Col>
                    <Col lg={7}>
                        <Form />
                    </Col>
                </Row>
            </Container>
        </div>
      );
  };

export default Contact;