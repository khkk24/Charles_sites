import { Container, Row, Col, Card, Alert, Button, Form } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Ouvidoria = () => {
  const { darkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    subject: '',
    message: '',
    anonymous: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio
    alert('Sua mensagem foi enviada com sucesso. Retornaremos em breve!');
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <h1 className={`text-center mb-5 ${darkMode ? 'text-light' : 'text-dark'}`}>
            Ouvidoria Engenigma
          </h1>
          
          <Row className="mb-5">
            <Col lg={8} className="mx-auto">
              <Alert variant="info" className="text-center">
                <h5>Canal de Comunicação Direta</h5>
                <p className="mb-0">
                  Nossa ouvidoria é um canal direto para receber suas sugestões, reclamações, 
                  elogios e denúncias. Sua opinião é fundamental para melhorarmos nossos serviços.
                </p>
              </Alert>
            </Col>
          </Row>

          <Row>
            <Col lg={8}>
              <Card className={`shadow-sm ${darkMode ? 'bg-dark text-light' : ''}`}>
                <Card.Header className={darkMode ? 'bg-secondary' : 'bg-primary'}>
                  <h4 className="mb-0 text-white">Formulário de Contato</h4>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Nome Completo</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required={!formData.anonymous}
                            disabled={formData.anonymous}
                            className={darkMode ? 'bg-secondary text-light' : ''}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required={!formData.anonymous}
                            disabled={formData.anonymous}
                            className={darkMode ? 'bg-secondary text-light' : ''}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Telefone</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={formData.anonymous}
                            className={darkMode ? 'bg-secondary text-light' : ''}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Tipo de Manifestação</Form.Label>
                          <Form.Select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            required
                            className={darkMode ? 'bg-secondary text-light' : ''}
                          >
                            <option value="">Selecione...</option>
                            <option value="elogio">Elogio</option>
                            <option value="sugestao">Sugestão</option>
                            <option value="reclamacao">Reclamação</option>
                            <option value="denuncia">Denúncia</option>
                            <option value="duvida">Dúvida</option>
                            <option value="solicitacao">Solicitação</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Assunto</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={darkMode ? 'bg-secondary text-light' : ''}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Mensagem</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={darkMode ? 'bg-secondary text-light' : ''}
                        placeholder="Descreva detalhadamente sua manifestação..."
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Check
                        type="checkbox"
                        name="anonymous"
                        checked={formData.anonymous}
                        onChange={handleChange}
                        label="Manifestação anônima"
                        className={darkMode ? 'text-light' : ''}
                      />
                      <small className={`form-text ${darkMode ? 'text-light' : 'text-muted'}`}>
                        Manifestações anônimas não receberão retorno por email ou telefone.
                      </small>
                    </Form.Group>

                    <div className="text-center">
                      <Button type="submit" variant="primary" size="lg">
                        Enviar Manifestação
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className={`mb-4 shadow-sm ${darkMode ? 'bg-dark text-light' : ''}`}>
                <Card.Header className={darkMode ? 'bg-secondary' : 'bg-success'}>
                  <h5 className="mb-0 text-white">Informações Importantes</h5>
                </Card.Header>
                <Card.Body>
                  <div className="mb-3">
                    <h6>⏰ Tempo de Resposta</h6>
                    <p className="small mb-0">
                      • Sugestões e Elogios: até 5 dias úteis<br/>
                      • Reclamações: até 3 dias úteis<br/>
                      • Denúncias: até 24 horas
                    </p>
                  </div>
                  
                  <div className="mb-3">
                    <h6>📞 Contato Direto</h6>
                    <p className="small mb-0">
                      Telefone: (41) 999229302<br/>
                      WhatsApp: (41) 995226237<br/>
                      Email: ouvidoria@engenigma.com.br
                    </p>
                  </div>
                  
                  <div>
                    <h6>🔒 Privacidade</h6>
                    <p className="small mb-0">
                      Todas as informações são tratadas com total confidencialidade, 
                      conforme nossa política de privacidade.
                    </p>
                  </div>
                </Card.Body>
              </Card>

              <Card className={`shadow-sm ${darkMode ? 'bg-dark text-light' : ''}`}>
                <Card.Header className={darkMode ? 'bg-secondary' : 'bg-warning'}>
                  <h5 className="mb-0 text-dark">Código de Ética</h5>
                </Card.Header>
                <Card.Body>
                  <p className="small">
                    A Engenigma está comprometida com os mais altos padrões éticos 
                    e de qualidade. Nossa ouvidoria é um canal para garantir que 
                    esses valores sejam sempre respeitados.
                  </p>
                  <Button variant="outline-primary" size="sm" className="w-100">
                    Baixar Código de Ética
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Ouvidoria;
