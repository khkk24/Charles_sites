import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const QuemSomos = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <h1 className={`text-center mb-5 ${darkMode ? 'text-light' : 'text-dark'}`}>
            Quem Somos
          </h1>
          
          <Card className={`mb-5 ${darkMode ? 'bg-dark text-light' : ''}`}>
            <Card.Body className="p-5">
              <h2 className="mb-4">QUEM SOMOS</h2>
              <p className="mb-4" style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                Fundada no início de 2021 pelo Engenheiro Mahutin Charles Géraud ABAMI, a <strong>ENGENIGMA INSTALAÇÕES ELÉTRICAS E MANUTENÇÃO LTDA</strong>, nasceu com objetivo de fornecer serviços especializados na instalação, manutenção, reparo e modernização de sistemas elétricos em diversos tipos de edificações, como residências, comércios, indústrias e espaços públicos; agregando valor aos projetos dos clientes e promovendo um ambiente mais sustentável e confiável. Além disso, garantia de segurança, eficiência e conformidade das instalações elétricas com as normas técnicas e regulamentações vigentes.
              </p>
              <p className="mb-4" style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                A <strong>ENGENIGMA INSTALAÇÕES ELÉTRICAS E MANUTENÇÃO LTDA</strong>, defende desde sua fundação o conceito de que todos devem ter acesso a serviços de eletricista prestados por profissionais experientes e capacitados com um custo acessível; por este motivo que nós atendemos a todo tipo de demanda, que vai desde uma simples troca de tomada residencial até o desenvolvimento de projetos de instalações elétricas de alta complexidade, inclusive com a aprovação dos órgãos competentes (CREA-PR).
              </p>
              <p className="mb-4" style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                Nossa equipe é composta por engenheiros especialistas e mestres em projetos e instalações elétricas de baixa, média e alta tensão. Nossos técnicos são experientes e capacitados para solucionar seus problemas. Nossos engenheiros estão sempre em busca de aprimoramento e atualização técnica para oferecer as melhores soluções do mercado, adaptando-se às demandas e tendências do setor.
              </p>
            </Card.Body>
          </Card>

          <h2 className={`text-center mb-4 ${darkMode ? 'text-light' : 'text-dark'}`}>
            Nossos Parceiros
          </h2>
          
          <Carousel className="mb-5" indicators={false} controls={true}>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                <img
                  src="/images/partners/partner1.png"
                  alt="Parceiro 1"
                  style={{ maxHeight: '150px', maxWidth: '300px', objectFit: 'contain' }}
                  className="img-fluid"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                <img
                  src="/images/partners/partner2.png"
                  alt="Parceiro 2"
                  style={{ maxHeight: '150px', maxWidth: '300px', objectFit: 'contain' }}
                  className="img-fluid"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                <img
                  src="/images/partners/partner3.png"
                  alt="Parceiro 3"
                  style={{ maxHeight: '150px', maxWidth: '300px', objectFit: 'contain' }}
                  className="img-fluid"
                />
              </div>
            </Carousel.Item>
          </Carousel>

          <Row className="mb-4">
            <Col md={12}>
              <Card className={`mb-4 ${darkMode ? 'bg-dark text-light' : ''}`}>
                <Card.Body className="p-4">
                  <h3 className="mb-3">MISSÃO</h3>
                  <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    Nossa missão é fornecer soluções elétricas seguras, eficientes e sustentáveis, garantindo a satisfação dos clientes por meio de um atendimento personalizado e de excelência. Buscamos inovar constantemente, respeitando as normas técnicas e contribuindo para um futuro mais sustentável.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Row className="mb-4">
            <Col md={12}>
              <Card className={`mb-4 ${darkMode ? 'bg-dark text-light' : ''}`}>
                <Card.Body className="p-4">
                  <h3 className="mb-3">VISÃO</h3>
                  <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    Ser reconhecida como a empresa líder em projetos, instalações e manutenções elétricas, destacando-se pela excelência, inovação e compromisso com a sustentabilidade. Almejamos expandir nossa atuação, oferecendo soluções energéticas de ponta que contribuam para um futuro mais seguro e eficiente.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Row>
            <Col md={12}>
              <Card className={`h-100 ${darkMode ? 'bg-dark text-light' : ''}`}>
                <Card.Body className="p-4">
                  <h3 className="mb-3">VALORES</h3>
                  <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    Nossos valores são a base do nosso trabalho: <strong>segurança em primeiro lugar</strong>, <strong>qualidade em tudo o que fazemos</strong>, <strong>integridade em nossas relações</strong>, <strong>inovação para o futuro</strong>, <strong>sustentabilidade para o planeta</strong>, <strong>responsabilidade com nossos compromissos</strong>, <strong>trabalho em equipe para alcançar resultados excepcionais</strong>, <strong>foco no cliente para superar expectativas</strong> e <strong>compromisso social para contribuir com o desenvolvimento da sociedade</strong>.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default QuemSomos;
