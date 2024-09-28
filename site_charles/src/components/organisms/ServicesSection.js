import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "../Molecules/Card";
import './Styles.css';

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
const Service = () => {

    return (
        <div className='service-wrapper'>
          <h1 id='service-title'> Serviços </h1>
          <Row>
            { data.map((item, index) => (
                <Col className='col' key= {index}> <Card data= { item } /> </Col>
            ))}
            
          </Row>
        </div>
      );
  };
  
  export default Service;