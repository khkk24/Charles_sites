import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "../Molecules/Card";
import {  Fade } from 'react-awesome-reveal';
import './Styles.css';


const Service = () => {

    const data = [
        {
            "title":"Serviço I",
            "text" : "Some quick example text to build on the card title and make up the bulk of the card's content.",
            "image": "/images/service/services_1.jpg"
        },
        {
            "title":"Serviço II",
            "text" : "Some quick example text to build on the card title and make up the bulk of the card's content.",
            "image": "/images/service/services_2.jpg"
        },
        {
            "title":"Serviço III",
            "text" : "Some quick example text to build on the card title and make up the bulk of the card's content.",
            "image": "/images/service/services_1.jpg"
        },
        {
            "title":"Serviço IV",
            "text" : "Some quick example text to build on the card title and make up the bulk of the card's content.",
            "image": "/images/service/services_2.jpg"
        },
    ]

    return (
        <div id="servicos" className='service-wrapper'>
            <Fade>
                <h1 id='service-title'> Serviços </h1>
            </Fade>
          
          <Row>
            { data.map((item, index) => (
                <Col className='col-card' key= {index}> <Card data= { item } /> </Col>
            ))}
            
          </Row>
        </div>
      );
  };
  
  export default Service;