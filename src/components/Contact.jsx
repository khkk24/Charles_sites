import React, { useState, useEffect } from 'react';
import { 
  Container, Row, Col, Card, Form, Button, Alert, 
  InputGroup, Spinner 
} from 'react-bootstrap';
import { 
  BsEnvelope, BsPhone, BsGeoAlt, BsClock, 
  BsPerson, BsChat, BsWhatsapp, BsInstagram, BsFacebook 
} from 'react-icons/bs';
import SEO from './SEO';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');

  const services = [
    'Instalações Elétricas',
    'Manutenção Elétrica',
    'Sistemas Fotovoltaicos',
    'Segurança Eletrônica',
    'SPDA',
    'Outro'
  ];

  const contactInfo = {
    address: 'Curitiba, PR - Brasil',
    phone: '(41) 3045-9287',
    email: 'servicos@engenigmainstalacoeseletricas.com',
    whatsapp: '5541995226237',
    hours: 'Segunda a Sexta: 8:00 - 18:00'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-up-element');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        // Monta query string para GET
        const queryString = new URLSearchParams(formData).toString();
        const url = `https://script.google.com/macros/s/AKfycbzcJPNiUTLZCIv9kgfhAFACqfXKqBprRTzEpM-6lt9Gc677SBRmG_oCnIL4Dt-kaKb3Tg/exec?${queryString}`;

        const response = await fetch(url, { method: "GET" });
        const result = await response.json();

        if(result.status === "ok") {
          setAlertType('success');
          setShowAlert(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
          });
        } else {
          setAlertType('danger');
          setShowAlert(true);
        }
      } catch (error) {
        setAlertType('danger');
        setShowAlert(true);
      } finally {
        setLoading(false);
        setTimeout(() => setShowAlert(false), 5000);
      }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento para ${formData.service || 'serviços elétricos'}.`
    );
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contato - Solicite seu Orçamento Gratuito"
        description="Entre em contato com a Engenigma para orçamentos de instalações elétricas, energia solar e segurança eletrônica. Atendemos Curitiba e região."
        keywords="contato engenigma, orçamento instalação elétrica, telefone engenigma, endereço Curitiba"
      />
      
      {/* Header Section */}
      <section className="contact-header py-5">
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="page-title fade-up-element">Entre em Contato</h1>
              <p className="page-description fade-up-element">
                Estamos prontos para atender suas necessidades. Entre em contato conosco 
                e solicite um orçamento personalizado.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="contact-content py-5">
        <Container>
          <Row>
            {/* Contact Form */}
            <Col lg={8} className="mb-5">
              <Card className="contact-form-card fade-up-element">
                <Card.Header className="bg-primary text-white">
                  <h4 className="mb-0">
                    <BsEnvelope className="me-2" />
                    Solicitar Orçamento
                  </h4>
                </Card.Header>
                <Card.Body className="p-4">
                  {showAlert && (
                    <Alert 
                      variant={alertType} 
                      dismissible 
                      onClose={() => setShowAlert(false)}
                      className="mb-4"
                    >
                      {alertType === 'success' ? (
                        'Mensagem enviada com sucesso! Entraremos em contato em breve.'
                      ) : (
                        'Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.'
                      )}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Nome Completo</Form.Label>
                          <InputGroup>
                            <InputGroup.Text>
                              <BsPerson />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Digite seu nome completo"
                              required
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>E-mail</Form.Label>
                          <InputGroup>
                            <InputGroup.Text>
                              <BsEnvelope />
                            </InputGroup.Text>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="seu@email.com"
                              required
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Telefone/WhatsApp</Form.Label>
                          <InputGroup>
                            <InputGroup.Text>
                              <BsPhone />
                            </InputGroup.Text>
                            <Form.Control
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="(41) 99999-9999"
                              required
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Serviço de Interesse</Form.Label>
                          <Form.Select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Selecione um serviço</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>
                                {service}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label>Mensagem</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <BsChat />
                        </InputGroup.Text>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Descreva detalhes do projeto ou tire suas dúvidas..."
                          required
                        />
                      </InputGroup>
                    </Form.Group>

                    <div className="form-actions d-flex gap-3">
                      <Button 
                        variant="primary" 
                        type="submit" 
                        size="lg"
                        disabled={loading}
                        className="flex-fill"
                      >
                        {loading ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                              className="me-2"
                            />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <BsEnvelope className="me-2" />
                            Enviar Mensagem
                          </>
                        )}
                      </Button>
                      <Button 
                        variant="success" 
                        size="lg" 
                        onClick={openWhatsApp}
                        className="whatsapp-btn"
                      >
                        <BsWhatsapp className="me-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
{/* Contact Info Sidebar */}
<Col lg={4}>
  <div className="contact-sidebar">
    {/* Company Info */}
    <Card className="contact-info-card mb-4 fade-up-element">
      <Card.Header className="bg-success text-white">
        <h5 className="mb-0">Informações da Empresa</h5>
      </Card.Header>
      <Card.Body>

        {/* Endereço */}
        <div className="contact-item d-flex align-items-start mb-3">
          <div 
            className="contact-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{ width: "50px", height: "50px" }}
          >
            <BsGeoAlt size={22} />
          </div>
          <div className="contact-details flex-grow-1">
            <strong className="d-block">Endereço</strong>
            <p className="mb-0">{contactInfo.address}</p>
          </div>
        </div>

        {/* Telefone */}
        <div className="contact-item d-flex align-items-start mb-3">
          <div 
            className="contact-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{ width: "50px", height: "50px" }}
          >
            <BsPhone size={22} />
          </div>
          <div className="contact-details flex-grow-1">
            <strong className="d-block">Telefone</strong>
            <p className="mb-0">{contactInfo.phone}</p>
          </div>
        </div>

        {/* E-mail */}
        <div className="contact-item d-flex align-items-start mb-3">
          <div 
            className="contact-icon bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{ width: "50px", height: "50px" }}
          >
            <BsEnvelope size={22} />
          </div>
          <div className="contact-details flex-grow-1">
            <strong className="d-block">E-mail</strong>
            <p className="mb-0">{contactInfo.email}</p>
          </div>
        </div>

        {/* Horário */}
        <div className="contact-item d-flex align-items-start">
          <div 
            className="contact-icon bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{ width: "50px", height: "50px" }}
          >
            <BsClock size={22} />
          </div>
          <div className="contact-details flex-grow-1">
            <strong className="d-block">Horário de Atendimento</strong>
            <p className="mb-0">{contactInfo.hours}</p>
          </div>
        </div>

      </Card.Body>
    </Card>





                {/* Company Details */}
                <Card className="company-details-card mb-4 fade-up-element">
                  <Card.Header className="bg-info text-white">
                    <h5 className="mb-0">Dados da Empresa</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="company-detail">
                      <strong>Razão Social:</strong>
                      <p>Engenigma Instalações Elétricas & Manutenção LTDA - ME</p>
                    </div>
                    <div className="company-detail">
                      <strong>CNPJ:</strong>
                      <p>41.379.006/0001-07</p>
                    </div>
                    <div className="company-detail">
                      <strong>Fundação:</strong>
                      <p>Março de 2021</p>
                    </div>
                    <div className="company-detail">
                      <strong>Localização:</strong>
                      <p>Curitiba, PR</p>
                    </div>
                  </Card.Body>
                </Card>

                {/* Social Media */}
                <Card className="social-media-card fade-up-element">
                  <Card.Header className="bg-dark text-white">
                    <h5 className="mb-0">Redes Sociais</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="social-links d-flex justify-content-around">
                      <Button 
                        variant="outline-success" 
                        className="social-btn"
                        onClick={openWhatsApp}
                      >
                        <BsWhatsapp size={20} />
                        <span>WhatsApp</span>
                      </Button>
                      <Button variant="outline-primary" className="social-btn">
                        <BsFacebook size={20} />
                        <span>Facebook</span>
                      </Button>
                      <Button variant="outline-danger" className="social-btn">
                        <BsInstagram size={20} />
                        <span>Instagram</span>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Google Maps Section */}
      <section className="maps-section py-5 bg-light">
        <Container>
          <Row>
            <Col>
              <Card className="maps-card fade-up-element">
                <Card.Header>
                  <h4 className="mb-0">
                    <BsGeoAlt className="me-2" />
                    Nossa Localização
                  </h4>
                </Card.Header>
                <Card.Body className="p-0">
                  <div className="maps-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.72853347695!2d-49.364912837109356!3d-25.494712484375954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce35351cdb3dd%3A0x6d2f6ba5bacbe809!2sCuritiba%2C%20PR!5e0!3m2!1spt!2sbr!4v1642000000000!5m2!1spt!2sbr"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Emergency Contact */}
      <section className="emergency-section py-4">
        <Container>
          <Row className="text-center">
            <Col>
              <div className="emergency-contact fade-up-element">
                <h3 className="text-danger mb-3">Emergência Elétrica?</h3>
                <p>Para situações de emergência, entre em contato imediatamente</p>
                <Button 
                  variant="danger" 
                  size="lg" 
                  onClick={openWhatsApp}
                  className="emergency-btn"
                >
                  <BsPhone className="me-2" />
                  Ligar Agora: {contactInfo.phone}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
