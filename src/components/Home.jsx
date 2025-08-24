import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  BsLightning, BsSun, BsShield, BsTools, BsGraphUp, BsHouse, 
  BsBuilding, BsFire, BsWifi, BsThermometer, BsBattery, 
  BsFileText, BsPeople, BsUmbrella 
} from 'react-icons/bs';
import SEO from './SEO';
import '../styles/Home.css';

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-element');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const carouselItems = [
    {
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      title: 'Instalações Elétricas Profissionais',
      description: 'Projetos elétricos seguros e eficientes para sua residência ou empresa'
    },
    {
      image: '/images/engenigma-brand-1.jpg',
      title: 'Engenigma - Sua Empresa de Confiança',
      description: 'Especialistas em instalações elétricas com anos de experiência e qualidade garantida'
    },
    {
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      title: 'Energia Solar Fotovoltaica',
      description: 'Soluções sustentáveis em energia renovável para economia e sustentabilidade'
    },
    {
      image: '/images/engenigma-brand-2.jpg',
      title: 'Excelência em Serviços Elétricos',
      description: 'Nossa equipe qualificada oferece as melhores soluções para suas necessidades elétricas'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Segurança Eletrônica',
      description: 'Sistemas de segurança modernos para proteção total do seu patrimônio'
    }
  ];

  const services = [
    {
      icon: <BsLightning size={40} />,
      title: 'Elétrica Residencial, Predial e Industrial',
      description: 'Projetos e instalações elétricas completas para residências, prédios e indústrias'
    },
    {
      icon: <BsSun size={40} />,
      title: 'Energia Solar Fotovoltaica',
      description: 'Sistemas solares residenciais, empresariais e usinas fotovoltaicas'
    },
    {
      icon: <BsHouse size={40} />,
      title: 'Automação Residencial',
      description: 'Casa inteligente com comando de voz e sistemas automatizados'
    },
    {
      icon: <BsShield size={40} />,
      title: 'Segurança Eletrônica',
      description: 'Alarmes, cercas elétricas, câmeras e monitoramento 24h'
    },
    {
      icon: <BsUmbrella size={40} />,
      title: 'SPDA',
      description: 'Proteção contra descargas atmosféricas e para-raios'
    },
    {
      icon: <BsFire size={40} />,
      title: 'Prevenção a Incêndio',
      description: 'Sistemas de detecção e combate a incêndios'
    },
    {
      icon: <BsWifi size={40} />,
      title: 'Rede e Cabeamento',
      description: 'Cabeamento estruturado e redes de dados empresariais'
    },
    {
      icon: <BsThermometer size={40} />,
      title: 'Ar Condicionado',
      description: 'Climatização residencial, comercial e industrial'
    },
    {
      icon: <BsBuilding size={40} />,
      title: 'Subestações',
      description: 'Projeto e manutenção de subestações de média e alta tensão'
    },
    {
      icon: <BsBattery size={40} />,
      title: 'Nobreak e Geradores',
      description: 'Sistemas de energia de emergência e backup'
    },
    {
      icon: <BsFileText size={40} />,
      title: 'Laudos Técnicos',
      description: 'Documentação técnica e certificações especializadas'
    },
    {
      icon: <BsPeople size={40} />,
      title: 'Consultoria e Treinamento',
      description: 'Assessoria técnica e capacitação de equipes'
    }
  ];

  return (
    <div className="home-page">
      <SEO 
        title="Engenigma Instalações Elétricas - Curitiba, PR"
        description="Especialistas em instalações elétricas, energia solar e segurança eletrônica em Curitiba. Projetos residenciais, comerciais e industriais. Orçamento gratuito!"
        keywords="instalações elétricas Curitiba, energia solar, segurança eletrônica, SPDA, manutenção elétrica, projeto elétrico"
      />
      
      {/* Hero Section com Carousel */}
      <section className="hero-section" ref={heroRef}>
        <Carousel fade className="hero-carousel">
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
              <div 
                className="carousel-image"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="carousel-overlay">
                  <Container>
                    <Row className="justify-content-center text-center">
                      <Col lg={8}>
                        <div className="hero-content fade-element">
                          <h1 className="hero-title">{item.title}</h1>
                          <p className="hero-description">{item.description}</p>
                          <div className="hero-buttons">
                            <Button 
                              as={Link}
                              to="/services"
                              variant="primary" 
                              size="lg" 
                              className="me-3"
                            >
                              Nossos Serviços
                            </Button>
                            <Button 
                              as={Link}
                              to="/contact"
                              variant="outline-light" 
                              size="lg"
                            >
                              Entre em Contato
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="fade-element">
              <h2 className="section-title">Bem-vindos à Engenigma</h2>
              <p className="section-description">
                A <strong>Engenigma Instalações Elétricas & Manutenção LTDA - ME</strong> é uma empresa 
                líder em soluções elétricas, estabelecida em março de 2021 em Curitiba, PR. 
                Com mais de 4 anos de experiência no mercado, oferecemos serviços completos de 
                projeto, instalação e manutenção elétrica para residências, edifícios comerciais 
                e complexos industriais. Nossa equipe certificada garante excelência técnica, 
                segurança e inovação em cada projeto executado.
              </p>
              <div className="company-stats">
                <div className="stat-item">
                  <BsGraphUp className="stat-icon" />
                  <div>
                    <h4>4+ Anos</h4>
                    <p>de Experiência</p>
                  </div>
                </div>
                <div className="stat-item">
                  <BsShield className="stat-icon" />
                  <div>
                    <h4>100%</h4>
                    <p>Segurança</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className="fade-element">
              <div className="company-image">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Engenigma Instalações Elétricas" 
                  className="img-fluid rounded"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Showcase Section */}
      <section className="company-showcase py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title fade-element">A Engenigma em Ação</h2>
              <p className="section-description fade-element">
                Conheça nossos projetos e a qualidade dos nossos serviços
              </p>
            </Col>
          </Row>
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4">
              <div className="company-showcase-image fade-element">
                <img 
                  src="/images/engenigma-brand-1.jpg" 
                  alt="Projetos da Engenigma" 
                  className="img-fluid rounded shadow-lg"
                  style={{width: "100%", height: "300px", objectFit: "cover"}}
                />
              </div>
            </Col>
            <Col lg={6} className="fade-element">
              <h3 className="mb-3">Excelência em Projetos Elétricos</h3>
              <p className="mb-4">
                Nossa equipe especializada trabalha com os mais altos padrões de qualidade, 
                oferecendo soluções personalizadas para cada cliente. Cada projeto é executado 
                com precisão técnica e total segurança.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Projetos personalizados</li>
                <li className="mb-2">✓ Equipamentos de última geração</li>
                <li className="mb-2">✓ Certificação e garantia</li>
                <li className="mb-2">✓ Atendimento especializado</li>
              </ul>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2 mb-4">
              <div className="company-showcase-image fade-element">
                <img 
                  src="/images/engenigma-brand-2.jpg" 
                  alt="Equipe Engenigma" 
                  className="img-fluid rounded shadow-lg"
                  style={{width: "100%", height: "300px", objectFit: "cover"}}
                />
              </div>
            </Col>
            <Col lg={6} className="order-lg-1 fade-element">
              <h3 className="mb-3">Nossa Equipe Qualificada</h3>
              <p className="mb-4">
                Profissionais experientes e certificados, sempre atualizados com as mais 
                recentes tecnologias e normas do setor elétrico. Garantimos excelência 
                em cada serviço executado.
              </p>
              <div className="company-stats-inline">
                <div className="stat-inline">
                  <strong>4+</strong>
                  <span>Anos de experiência</span>
                </div>
                <div className="stat-inline">
                  <strong>100+</strong>
                  <span>Projetos executados</span>
                </div>
                <div className="stat-inline">
                  <strong>24h</strong>
                  <span>Suporte de emergência</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="services-preview py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title fade-element">Nossos Principais Serviços</h2>
              <p className="section-description fade-element">
                Soluções completas em instalações elétricas com qualidade e segurança
              </p>
            </Col>
          </Row>
          <Row>
            {services.map((service, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card 
                  as={Link}
                  to="/services"
                  className="service-card h-100 fade-element text-decoration-none"
                  style={{ cursor: 'pointer' }}
                >
                  <Card.Body className="text-center">
                    <div className="service-icon mb-3">
                      {service.icon}
                    </div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="text-center mt-4">
            <Col>
              <Button 
                as={Link}
                to="/services"
                variant="primary" 
                size="lg" 
                className="fade-element"
              >
                Ver Todos os Serviços
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <Container>
          <Row className="text-center">
            <Col>
              <div className="cta-content fade-element">
                <h2>Precisa de um Orçamento?</h2>
                <p>Entre em contato conosco e receba um orçamento personalizado</p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Button 
                    as={Link}
                    to="/orcamentos"
                    variant="primary" 
                    size="lg" 
                    className="cta-button"
                  >
                    Solicitar Orçamento
                  </Button>
                  <Button 
                    as="a"
                    href="https://wa.me/5541995226237?text=Olá! Gostaria de conhecer os serviços da Engenigma."
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-primary" 
                    size="lg" 
                    className="cta-button"
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
