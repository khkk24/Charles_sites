import FormBS from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRef, useState } from "react";

import emailjs from 'emailjs-com';

import Button from '../Atoms/Button';
import './Styles.css';

const Form = () => {
    const form = useRef();

    //const [messageBody, setMessageBody] = useState('')
    
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        subject: '',
        phone: '',
        message:   '',
        to_name: "Mr Charles"
    });

    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        //setMessageBody( formData.subject + formData.message + "para contato" + formData.phone + Form.email )
        
        // Concatenar os campos para a mensagem completa
        const fullMessage = `
            Assunto: ${formData.subject}
            Mensagem: ${formData.message}
            Para contato: ${formData.phone}
            Email: ${formData.email}
        `;

        // Atualiza o campo de mensagem com a mensagem completa
        setFormData((prevState) => ({
            ...prevState,
            message: fullMessage,
        }));


        emailjs.sendForm(
            'service_okr3rlj',    // Replace with your actual service ID
            'template_b4m0z0m',   // Replace with your actual template ID
            form.current,
            'YnQvqRmgLwSgQPCts'        // Replace with your actual public key or user ID
          )
          .then((result) => {
            console.log('Email sent successfully:', result.text);
            alert('Email sent successfully!');
          }, (error) => {
            console.error('Error sending email:', error.text);
            alert('Failed to send email.');
          });

        console.log('Form Data:', formData);
      };

  return (
    <div className='form-wrapper'>
        <FormBS ref={form}  onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <FormBS.Group className="mb-3"  controlId="formName">
                        <FormBS.Label>Nome</FormBS.Label>
                        <FormBS.Control
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            size="lg" type="text" placeholder="Fulano" />
                    </FormBS.Group>
                </Col>
                <Col>
                    <FormBS.Group className="mb-3" controlId="formEmail">
                        <FormBS.Label>Email</FormBS.Label>
                        <FormBS.Control
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                         size="lg" type="email" placeholder="name@example.com" />
                    </FormBS.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormBS.Group className="mb-3" controlId="formSubject">
                        <FormBS.Label>Assunto</FormBS.Label>
                        <FormBS.Control
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                         size="lg" type="text" placeholder="Planta" />
                    </FormBS.Group>
                </Col>
                <Col>
                    <FormBS.Group className="mb-3" controlId="formPhone">
                        <FormBS.Label>Telefone</FormBS.Label>
                        <FormBS.Control
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                         size="lg" type="tel" placeholder="41 9 9999-9999" />
                    </FormBS.Group>
                </Col>
            </Row>
        
            <FormBS.Group className="mb-3" controlId="formMessage">
                <FormBS.Label>Mensagem</FormBS.Label>
                <FormBS.Control
                name="message"
                value={formData.message}
                onChange={handleChange}
                 as="textarea" rows={6} />
            </FormBS.Group>
            <div className="form-btn" >
                <Button text="Enviar mensagem"/>
            </div>
        </FormBS>
        
    </div>
  );
}

export default Form;