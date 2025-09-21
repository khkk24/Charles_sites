import React, { useState, useEffect } from 'react';
import { 
  Container, Row, Col, Card, Form, Button, Alert, 
  InputGroup, Spinner, Modal 
} from 'react-bootstrap';
import { 
  BsEnvelope, BsPhone, BsGeoAlt, BsClock, 
  BsPerson, BsChat, BsWhatsapp, BsInstagram, BsFacebook,
  BsCheckCircle, BsXCircle 
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
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [modalMessage, setModalMessage] = useState('');

  const services = [
    'Instalações Elétricas',
    'Manutenção Elétrica',
    'Sistemas Fotovoltaicos',
    'Segurança Eletrônica',
    'SPDA',
    'Outro'
  ];

  const contactInfo = {
    address: 'Av. Mal. Floriano Peixoto, 9986 - Boqueirão, Curitiba - PR, 81670-000',
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
          // Limpar formulário
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
          });
          
          // Mostrar modal de sucesso
          setModalType('success');
          setModalMessage('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
          setShowModal(true);
          
          // Manter alerta antigo também
          setAlertType('success');
          setShowAlert(true);
        } else {
          // Mostrar modal de erro
          setModalType('error');
          setModalMessage('Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.');
          setShowModal(true);
          
          setAlertType('danger');
          setShowAlert(true);
        }
      } catch (error) {
        // Mostrar modal de erro
        setModalType('error');
        setModalMessage('Erro ao enviar mensagem. Verifique sua conexão e tente novamente.');
        setShowModal(true);
        
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
        description="Entre em contato com a ENGENIGMA para orçamentos de instalações elétricas, energia solar e segurança eletrônica. Atendemos Curitiba e região."
        keywords="contato ENGENIGMA, orçamento instalação elétrica, telefone ENGENIGMA, endereço Curitiba"
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
            <strong className="d-block">Telefones</strong>
            <p className="mb-1">
              <a href="tel:+554130459287" className="text-decoration-none text-muted">
                (41) 3045-9287
              </a>
            </p>
            <p className="mb-0">
              <a href="tel:+5541995226237" className="text-decoration-none text-muted">
                (41) 995226237
              </a>
            </p>
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
                      <p>ENGENIGMA Instalações Elétricas & Manutenção LTDA - ME</p>
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.6858333333335!2d-49.26555555555556!3d-25.42611111111111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4e5e4e5e4e5%3A0x123456789abcdef!2sAv.%20Mal.%20Floriano%20Peixoto%2C%209986%20-%20Boqueir%C3%A3o%2C%20Curitiba%20-%20PR%2C%2081670-000!5e0!3m2!1spt!2sbr!4v1692000000000!5m2!1spt!2sbr"
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
                <div className="d-flex gap-2 flex-column flex-md-row">
                  <Button 
                    variant="danger" 
                    size="lg" 
                    as="a"
                    href="tel:+554130459287"
                    className="emergency-btn flex-grow-1"
                  >
                    <BsPhone className="me-2" />
                    (41) 3045-9287
                  </Button>
                  <Button 
                    variant="outline-danger" 
                    size="lg" 
                    onClick={openWhatsApp}
                    className="emergency-btn flex-grow-1"
                  >
                    <BsPhone className="me-2" />
                    (41) 995226237
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modal de Confirmação */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered
        size="md"
        className="confirmation-modal"
      >
        <Modal.Header closeButton className={modalType === 'success' ? 'bg-success text-white' : 'bg-danger text-white'}>
          <Modal.Title className="d-flex align-items-center">
            {modalType === 'success' ? (
              <>
                <BsCheckCircle className="me-2" size={24} />
                Mensagem Enviada!
              </>
            ) : (
              <>
                <BsXCircle className="me-2" size={24} />
                Erro no Envio
              </>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center p-4">
          <div className={`confirmation-icon mb-3 ${modalType === 'success' ? 'text-success' : 'text-danger'}`}>
            {modalType === 'success' ? (
              <BsCheckCircle size={60} />
            ) : (
              <BsXCircle size={60} />
            )}
          </div>
          <p className="lead mb-3">{modalMessage}</p>
          {modalType === 'success' && (
            <div className="success-details">
              <p className="text-muted small">
                Nossa equipe analisará sua solicitação e retornará em até 24 horas úteis.
              </p>
            </div>
          )}
          {modalType === 'error' && (
            <div className="error-alternatives mt-3">
              <p className="text-muted small mb-3">
                Você também pode entrar em contato pelos meios alternativos:
              </p>
              <div className="d-flex gap-2 justify-content-center">
                <Button 
                  variant="outline-success" 
                  size="sm"
                  onClick={() => {
                    openWhatsApp();
                    setShowModal(false);
                  }}
                >
                  <BsWhatsapp className="me-1" />
                  WhatsApp
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="sm"
                  as="a"
                  href="tel:+554130459287"
                  onClick={() => setShowModal(false)}
                >
                  <BsPhone className="me-1" />
                  Telefone
                </Button>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button 
            variant={modalType === 'success' ? 'success' : 'secondary'} 
            onClick={() => setShowModal(false)}
            size="lg"
          >
            {modalType === 'success' ? 'Entendi!' : 'Fechar'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
