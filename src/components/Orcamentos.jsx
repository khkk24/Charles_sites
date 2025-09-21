import { Container, Row, Col, Card, Form, Button, Alert, Modal } from 'react-bootstrap';
import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { BsCheckCircle, BsXCircle, BsWhatsapp, BsPhone } from 'react-icons/bs';

const Orcamentos = () => {
  const { darkMode } = useContext(ThemeContext);
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    tipoServico: '',
    descricao: '',
    prazo: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [modalMessage, setModalMessage] = useState('');

  // Récupérer le service depuis l'URL et pré-remplir le formulaire
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const servicoParam = searchParams.get('servico');
    if (servicoParam) {
      setFormData(prev => ({
        ...prev,
        tipoServico: servicoParam
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        // Monta query string para GET
        const queryString = new URLSearchParams(formData).toString();
        const url = `https://script.google.com/macros/s/AKfycbw92G-dxc6hoDR85PjOgISEyIXM8Ye3XTZee8jGnpprq0IvU9hwWvckUmgj5BN1DcOw/exec?${queryString}`;

        const response = await fetch(url, { method: "GET" });
        const result = await response.json();

        if(result.status === "ok") {
          // Limpar formulário
          setFormData({
            nome: '',
            email: '',
            telefone: '',
            empresa: '',
            tipoServico: '',
            descricao: '',
            prazo: ''
          });
          
          // Mostrar modal de sucesso
          setModalType('success');
          setModalMessage('Sua solicitação de orçamento foi enviada com sucesso! Nossa equipe entrará em contato em breve.');
          setShowModal(true);
          
          // Manter alerta antigo também
          setAlertType('success');
          setShowAlert(true);
        } else {
          // Mostrar modal de erro
          setModalType('error');
          setModalMessage('Erro ao enviar solicitação. Tente novamente ou entre em contato via WhatsApp.');
          setShowModal(true);
          
          setAlertType('danger');
          setShowAlert(true);
        }
      } catch (error) {
        // Mostrar modal de erro
        setModalType('error');
        setModalMessage('Erro ao enviar solicitação. Verifique sua conexão e tente novamente.');
        setShowModal(true);
        
        setAlertType('danger');
        setShowAlert(true);
      } finally {
        setTimeout(() => setShowAlert(false), 5000);
      }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento para ${formData.tipoServico || 'serviços elétricos'}.`
    );
    window.open(`https://wa.me/5541995226237?text=${message}`, '_blank');
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <h1 className={`text-center mb-5 ${darkMode ? 'text-light' : 'text-dark'}`}>
            Solicitar Orçamento
          </h1>
          
          {showAlert && (
            <Alert variant="success" className="mb-4">
              Solicitação de orçamento enviada com sucesso! Entraremos em contato em breve.
            </Alert>
          )}

          <Row>
            <Col lg={8}>
              <Card className={`mb-4 ${darkMode ? 'bg-dark text-light' : ''}`}>
                <Card.Body className="p-4">
                  <h3 className="mb-4">Formulário de Orçamento</h3>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Nome Completo *</Form.Label>
                          <Form.Control
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                            className={darkMode ? 'bg-secondary text-light' : ''}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={darkMode ? 'bg-secondary text-light' : ''}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Telefone *</Form.Label>
                          <Form.Control
                            type="tel"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            required
                            className={darkMode ? 'bg-secondary text-light' : ''}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Empresa</Form.Label>
                          <Form.Control
                            type="text"
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleChange}
                            className={darkMode ? 'bg-secondary text-light' : ''}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Tipo de Serviço *</Form.Label>
                      <Form.Select
                        name="tipoServico"
                        value={formData.tipoServico}
                        onChange={handleChange}
                        required
                        className={darkMode ? 'bg-secondary text-light' : ''}
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="instalacoes">Instalações Elétricas</option>
                        <option value="solar">Energia Solar Fotovoltaica</option>
                        <option value="seguranca">Segurança Eletrônica</option>
                        <option value="spda">SPDA</option>
                        <option value="manutencao">Manutenção Elétrica</option>
                        <option value="outro">Outro</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Descrição do Projeto *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                        placeholder="Descreva detalhadamente seu projeto..."
                        required
                        className={darkMode ? 'bg-secondary text-light' : ''}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Prazo Desejado</Form.Label>
                      <Form.Select
                        name="prazo"
                        value={formData.prazo}
                        onChange={handleChange}
                        className={darkMode ? 'bg-secondary text-light' : ''}
                      >
                        <option value="">Selecione um prazo</option>
                        <option value="urgente">Urgente (até 1 semana)</option>
                        <option value="curto">Curto prazo (1-4 semanas)</option>
                        <option value="medio">Médio prazo (1-3 meses)</option>
                        <option value="longo">Longo prazo (mais de 3 meses)</option>
                      </Form.Select>
                    </Form.Group>

                    <Button variant="success" type="submit" size="lg">
                      Solicitar Orçamento
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <Card className={`mb-4 ${darkMode ? 'bg-dark text-light' : ''}`}>
                <Card.Body>
                  <h4>Por que escolher a ENGENIGMA?</h4>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">✓ Mais de 10 anos de experiência</li>
                    <li className="mb-2">✓ Equipe especializada</li>
                    <li className="mb-2">✓ Projetos personalizados</li>
                    <li className="mb-2">✓ Acompanhamento completo</li>
                    <li className="mb-2">✓ Preços competitivos</li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className={darkMode ? 'bg-dark text-light' : ''}>
                <Card.Body>
                  <h5>Contato Direto</h5>
                  <p className="mb-2">📞 (41) 99522-6237</p>
                  <p className="mb-2">📧 contato@engenigma.com.br</p>
                  <p className="mb-0">⏰ Seg-Sex: 8h às 18h</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

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
                Orçamento Solicitado!
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
                Nossa equipe técnica analisará sua solicitação e retornará com um orçamento detalhado em até 24 horas úteis.
              </p>
            </div>
          )}
          {modalType === 'error' && (
            <div className="error-alternatives mt-3">
              <p className="text-muted small mb-3">
                Você também pode solicitar seu orçamento pelos meios alternativos:
              </p>
              <div className="d-flex gap-2 justify-content-center">
                <Button 
                  variant="warning" 
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
            {modalType === 'success' ? 'Perfeito!' : 'Fechar'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Orcamentos;
