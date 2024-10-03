import FormBS from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../Atoms/Button';
import './Styles.css';

const Form = () => {

  return (
    <div className='form-wrapper'>
        <FormBS>
            <Row>
                <Col>
                    <FormBS.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <FormBS.Label>Nome</FormBS.Label>
                        <FormBS.Control size="lg" type="text" placeholder="Fulano" />
                    </FormBS.Group>
                </Col>
                <Col>
                    <FormBS.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <FormBS.Label>Email</FormBS.Label>
                        <FormBS.Control size="lg" type="email" placeholder="name@example.com" />
                    </FormBS.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormBS.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <FormBS.Label>Assunto</FormBS.Label>
                        <FormBS.Control size="lg" type="text" placeholder="Planta" />
                    </FormBS.Group>
                </Col>
                <Col>
                    <FormBS.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <FormBS.Label>Telefone</FormBS.Label>
                        <FormBS.Control size="lg" type="tel" placeholder="41 9 9999-9999" />
                    </FormBS.Group>
                </Col>
            </Row>
        
            <FormBS.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <FormBS.Label>Mensagem</FormBS.Label>
                <FormBS.Control as="textarea" rows={6} />
            </FormBS.Group>
        </FormBS>
        <div className="form-btn" >
            <Button text="Enviar mensagem"/>
        </div>
    </div>
  );
}

export default Form;