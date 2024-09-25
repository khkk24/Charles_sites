import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "../Molecules/Card";
import './Styles.css';

const data = [
    {
        "id": 1,
        "title":"Serviço I",
        "text" : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "image": "/images/service/services_1.jpg"
    },
    {
        "id": 2,
        "title":"Serviço II",
        "text" : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "image": "/images/service/services_2.jpg"
    },
    {
        "id": 3,
        "title":"Serviço III",
        "text" : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "image": "/images/service/services_1.jpg"
    },
    {
        "id": 4,
        "title":"Serviço IV",
        "text" : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "image": "/images/service/services_2.jpg"
    },
]
const Service = () => {

    return (
        <div className='service-wrapper'>
          <h1 id='service-title'> Serviços </h1>
          <Row className='teste1' >
            { data.map((item) => (
                <Col className='teste' key= {item.id}> <Card data= { item } /> </Col>
            ))}
            
          </Row>
        </div>
      );
  };
  
  export default Service;