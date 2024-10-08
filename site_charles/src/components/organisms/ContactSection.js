import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from '../Molecules/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './Styles.css';

const Contact = () => {

    let infoData = [
        {
            "title": "Endereço",
            "text": "Rua xpto, 100 , Centro-Curitiba",
            "icon": faBuilding,
        },
        {
            "title": "Telefone",
            "text": "41 9 9999-9999",
            "icon": faPhone,
        },
        {
            "title": "E-mail",
            "text": "Example@gmail.com",
            "icon": faEnvelope,
        }
    ]

    return (
        <div id="contact" className='contact-wrapper'>
            <h1 id="contact-title">Contact</h1>
            <Container fluid>
                <Row>
                    <Col lg={3} className='icon-text-wrapper'>
                        { infoData.map((info,index) =>(
                            <section key= {index} className='icon-text-section'>
                                <div className='icon-wrapper'>
                                    <FontAwesomeIcon icon={info.icon} size="1x" />
                                </div>
                                
                                <div className='text-wrapper'>
                                    <h4 className='title-text'>{info.title}</h4>
                                    <p className='title-text'>{info.text}</p>
                                </div>

                            </section>
                        ))}
                        <section>
                            <img className='img-address' src="/images/endereco.png" alt='Imagem do endereço' />
                        </section>
                    </Col>
                    <Col lg={9}>
                        <Form />
                    </Col>
                </Row>
            </Container>
        </div>
      );
  };

export default Contact;