import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  BsLightning, BsSun, BsShield, BsTools, BsUmbrella, BsArrowRight, 
  BsHouse, BsBuilding, BsGear, BsFire, BsWifi, BsThermometer,
  BsBattery, BsLightbulb, BsFileText, BsPeople
} from 'react-icons/bs';
import SEO from './SEO';
import '../styles/Services.css';

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.slide-element');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      icon: <BsLightning size={50} />,
      title: 'Elétrica Residencial, Predial, Industrial e Hospitalar',
      description: 'Projetos e instalações elétricas completas para residências, prédios, indústrias e estabelecimentos hospitalares/clínicas com total segurança.',
      features: [
        'Projeto elétrico residencial e comercial',
        'Instalação predial e industrial',
        'Sistemas hospitalares especializados',
        'Adequação às normas ABNT e NRs'
      ],
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'primary'
    },
    {
      id: 2,
      icon: <BsSun size={50} />,
      title: 'Sistema de Energia Fotovoltaica',
      description: 'Instalação de sistemas de energia solar fotovoltaica residencial, empresarial e usinas fotovoltaicas para economia e sustentabilidade.',
      features: [
        'Energia solar residencial',
        'Sistemas empresariais',
        'Usinas fotovoltaicas',
        'Monitoramento e economia'
      ],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'warning'
    },
    {
      id: 3,
      icon: <BsHouse size={50} />,
      title: 'Automação Residencial',
      description: 'Casa inteligente com comando de voz, controle automatizado e sistemas integrados para maior conforto e praticidade.',
      features: [
        'Casa inteligente',
        'Comando de voz',
        'Controle automatizado',
        'Integração de sistemas'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'info'
    },
    {
      id: 4,
      icon: <BsShield size={50} />,
      title: 'Sistema de Segurança Eletrônica',
      description: 'Sistemas completos de segurança incluindo alarmes, cerca elétrica, câmeras de segurança e outros dispositivos de proteção.',
      features: [
        'Sistemas de alarme',
        'Cerca elétrica',
        'Câmeras de segurança',
        'Monitoramento 24h'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'danger'
    },
    {
      id: 5,
      icon: <BsUmbrella size={50} />,
      title: 'SPDA - Proteção contra Descargas Atmosféricas',
      description: 'Instalação e manutenção de sistemas de proteção contra raios e descargas atmosféricas para proteção completa de edificações.',
      features: [
        'Projeto de SPDA',
        'Instalação de para-raios',
        'Sistema de aterramento',
        'Certificação e laudo técnico'
      ],
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'success'
    },
    {
      id: 6,
      icon: <BsFire size={50} />,
      title: 'Prevenção a Incêndio',
      description: 'Sistemas de prevenção e combate a incêndios com detectores, alarmes e equipamentos de segurança conforme normas técnicas.',
      features: [
        'Detectores de fumaça',
        'Sistemas de alarme',
        'Equipamentos de combate',
        'Conformidade com normas'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'danger'
    },
    {
      id: 7,
      icon: <BsWifi size={50} />,
      title: 'Rede e Cabeamento Estruturado',
      description: 'Instalação de redes de dados e cabeamento estruturado para empresas, oferecendo conectividade eficiente e organizada.',
      features: [
        'Cabeamento estruturado',
        'Redes de dados',
        'Infraestrutura de TI',
        'Conectividade empresarial'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'primary'
    },
    {
      id: 8,
      icon: <BsThermometer size={50} />,
      title: 'Ar Condicionado / Climatização',
      description: 'Projeto, instalação e manutenção de sistemas de ar condicionado e climatização residencial, comercial e industrial.',
      features: [
        'Climatização residencial',
        'Sistemas comerciais',
        'Climatização industrial',
        'Manutenção especializada'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'info'
    },
    {
      id: 9,
      icon: <BsBuilding size={50} />,
      title: 'Subestação de Média e Alta Tensão',
      description: 'Projeto, instalação e manutenção de subestações de média e alta tensão com manutenção preventiva, preditiva e corretiva.',
      features: [
        'Projeto de subestação',
        'Instalação especializada',
        'Manutenção preventiva',
        'Manutenção preditiva e corretiva'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'warning'
    },
    {
      id: 10,
      icon: <BsBattery size={50} />,
      title: 'Nobreak e Grupo Gerador',
      description: 'Dimensionamento e instalação de sistemas Nobreak e Grupos Geradores de energia elétrica para residências, empresas e indústrias.',
      features: [
        'Nobreak residencial e empresarial',
        'Grupos geradores',
        'Dimensionamento técnico',
        'Instalação completa'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'success'
    },
    {
      id: 11,
      icon: <BsFileText size={50} />,
      title: 'Laudos Técnicos',
      description: 'Elaboração de laudos técnicos especializados e documentação técnica para conformidade e certificação de instalações elétricas.',
      features: [
        'Laudos técnicos especializados',
        'Documentação técnica',
        'Certificações',
        'Conformidade com normas'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'secondary'
    },
    {
      id: 12,
      icon: <BsPeople size={50} />,
      title: 'Consultoria e Treinamento',
      description: 'Serviços de consultoria especializada e treinamentos técnicos para equipes e empresas do setor elétrico.',
      features: [
        'Consultoria especializada',
        'Treinamentos técnicos',
        'Capacitação de equipes',
        'Assessoria técnica'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'info'
    }
  ];

  return (
    <div className="services-page">
      <SEO 
        title="Serviços - Instalações Elétricas, Energia Solar e Segurança"
        description="Conheça todos os nossos serviços: instalações elétricas, sistemas fotovoltaicos, segurança eletrônica, SPDA e manutenção. Qualidade garantida!"
        keywords="serviços elétricos, instalação elétrica, energia solar fotovoltaica, segurança eletrônica, SPDA, manutenção elétrica"
      />
      
      {/* Header Section */}
      <section className="services-header py-5">
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="page-title slide-element">Nossos Serviços</h1>
              <p className="page-description slide-element">
                Oferecemos soluções completas em instalações elétricas com qualidade, 
                segurança e tecnologia de ponta
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="services-grid py-5">
        <Container>
          <Row>
            {services.map((service, index) => (
              <Col lg={6} className="mb-4" key={service.id}>
                <Card className={`service-card h-100 slide-element border-${service.color}`}>
                  <div className="service-image-container">
                    <div 
                      className="service-image"
                      style={{ backgroundImage: `url(${service.image})` }}
                    >
                      <div className="service-overlay">
                        <div className={`service-icon text-${service.color}`}>
                          {service.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <Card.Title className="service-title">
                        {service.title}
                      </Card.Title>
                      <Badge bg={service.color} className="service-badge">
                        #{service.id}
                      </Badge>
                    </div>
                    <Card.Text className="service-description">
                      {service.description}
                    </Card.Text>
                    <div className="service-features mb-4">
                      <h6 className="features-title">Principais características:</h6>
                      <ul className="features-list">
                        {service.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-transparent">
                    <div className="service-actions d-flex justify-content-between">
                      <Button 
                        variant={`outline-${service.color}`} 
                        size="sm"
                        className="learn-more-btn"
                      >
                        Saiba Mais <BsArrowRight className="ms-1" />
                      </Button>
                      <Button 
                        as={Link}
                        to={`/orcamentos?servico=${encodeURIComponent(service.title)}`}
                        variant={service.color} 
                        size="sm"
                        className="contact-btn"
                      >
                        Solicitar Orçamento
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title slide-element">Por que escolher a Engenigma?</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="text-center mb-4">
              <div className="benefit-item slide-element">
                <div className="benefit-icon mb-3">
                  <BsShield size={40} className="text-primary" />
                </div>
                <h5>Segurança Garantida</h5>
                <p>Todos os nossos serviços seguem rigorosamente as normas ABNT e NR-10</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="benefit-item slide-element">
                <div className="benefit-icon mb-3">
                  <BsTools size={40} className="text-success" />
                </div>
                <h5>Profissionais Qualificados</h5>
                <p>Equipe técnica certificada e em constante atualização</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="benefit-item slide-element">
                <div className="benefit-icon mb-3">
                  <BsLightning size={40} className="text-warning" />
                </div>
                <h5>Atendimento Rápido</h5>
                <p>Soluções ágeis para emergências e projetos urgentes</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Engenigma Company Stats */}
      <section className="company-stats-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <div className="company-image slide-element">
                <img 
                  src="/images/engenigma-brand-1.jpg" 
                  alt="Engenigma - Nossa Empresa" 
                  className="img-fluid rounded shadow-lg"
                  style={{width: "100%", height: "400px", objectFit: "cover"}}
                />
                <div className="image-badge">
                  <span>Engenigma 2024</span>
                </div>
              </div>
            </Col>
            <Col lg={6} className="slide-element">
              <h2 className="mb-4">A Engenigma em Números</h2>
              <p className="mb-4">
                Desde 2021, construímos uma trajetória sólida de excelência em serviços elétricos, 
                conquistando a confiança de centenas de clientes em Curitiba e região.
              </p>
              <Row className="stats-grid">
                <Col sm={6} className="mb-3">
                  <div className="stat-card">
                    <h3 className="stat-number">4+</h3>
                    <p className="stat-label">Anos de Experiência</p>
                  </div>
                </Col>
                <Col sm={6} className="mb-3">
                  <div className="stat-card">
                    <h3 className="stat-number">200+</h3>
                    <p className="stat-label">Projetos Executados</p>
                  </div>
                </Col>
                <Col sm={6} className="mb-3">
                  <div className="stat-card">
                    <h3 className="stat-number">100%</h3>
                    <p className="stat-label">Clientes Satisfeitos</p>
                  </div>
                </Col>
                <Col sm={6} className="mb-3">
                  <div className="stat-card">
                    <h3 className="stat-number">24h</h3>
                    <p className="stat-label">Suporte Emergencial</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Clients Section */}
      <section className="clients-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="mb-3">Nossos Clientes</h2>
              <p className="text-muted">
                Confiam em nossos serviços empresas de diversos segmentos e órgãos públicos
              </p>
            </Col>
          </Row>
          
          {/* Clients Carousel */}
          <div className="clients-carousel-container">
            <div className="clients-carousel">
              <div className="client-logo">
                <img src="/images/clients/lhc.jpg" alt="LHC" />
              </div>
              <div className="client-logo">
                <img src="/images/clients/masterdomus.jpg" alt="Masterdomus" />
              </div>
              <div className="client-logo">
                <img src="/images/clients/gnatus.png" alt="Gnatus" />
              </div>
              <div className="client-logo">
                <img src="/images/clients/curitiba.jpeg" alt="Prefeitura de Curitiba" />
              </div>
              <div className="client-logo">
                <img src="/images/clients/sao_jose_pinhais.png" alt="São José dos Pinhais" />
              </div>
              <div className="client-logo">
                <img src="/images/clients/sao_bento_sul.png" alt="São Bento do Sul" />
              </div>
              <div className="client-logo">
                <img src="/images/clients/client1.png" alt="Cliente" />
              </div>
              <div className="client-logo">
                <img src="/images/clients/client2.jpeg" alt="Cliente" />
              </div>
              <div className="client-logo">
                <img src="/images/clients/client3.jpeg" alt="Cliente" />
              </div>
              <div className="client-logo">
                <img src="/images/clients/client4.png" alt="Cliente" />
              </div>
              <div className="client-logo">
                <img src="/images/clients/client5.jpg" alt="Cliente" />
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="client-logo">
                <img src="/images/clients/lhc.jpg" alt="LHC" />
              </div>
              <div className="client-logo">
                <img src="/images/clients/masterdomus.jpg" alt="Masterdomus" />
              </div>
              <div className="client-logo">
                <img src="/images/clients/gnatus.png" alt="Gnatus" />
              </div>
              <div className="client-logo">
                <img src="/images/clients/curitiba.jpeg" alt="Prefeitura de Curitiba" />
              </div>
              <div className="client-logo">
                <img src="/images/clients/sao_jose_pinhais.png" alt="São José dos Pinhais" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Certification and Professional Section */}
      <section className="certification-section py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={10} className="mx-auto">
              <h2 className="mb-4">Qualidade e Certificação Garantidas</h2>
              <div className="certification-content">
                <p className="lead mb-4">
                  Todos os serviços prestados pela <strong>EngEnigma Instalações Elétricas e Manutenção</strong> 
                  são executados por profissionais certificados e qualificados, sempre seguindo todos os 
                  critérios técnicos de acordo com as Normas Regulamentadoras vigentes.
                </p>
                
                <div className="highlight-box slide-element">
                  <div className="certification-badge mb-3">
                    <BsShield size={60} className="text-primary" />
                  </div>
                  <h4 className="text-primary mb-3">Empresa Registrada no CREA-PR</h4>
                  <p className="mb-0">
                    Somos uma empresa com <strong>Registro no Conselho Regional de Engenharia 
                    e Agronomia do Estado do Paraná - CREA-PR</strong>, garantindo a conformidade 
                    técnica e legal de todos os nossos serviços.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          
          <Row className="mt-5">
            <Col md={4} className="text-center mb-4">
              <div className="quality-item slide-element">
                <div className="quality-icon mb-3">
                  <BsFileText size={40} className="text-success" />
                </div>
                <h5>Normas Técnicas</h5>
                <p>Seguimos rigorosamente todas as Normas Regulamentadoras e ABNT</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="quality-item slide-element">
                <div className="quality-icon mb-3">
                  <BsPeople size={40} className="text-primary" />
                </div>
                <h5>Profissionais Certificados</h5>
                <p>Equipe qualificada e certificada para todos os tipos de serviços</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="quality-item slide-element">
                <div className="quality-icon mb-3">
                  <BsShield size={40} className="text-warning" />
                </div>
                <h5>Registro CREA-PR</h5>
                <p>Empresa devidamente registrada no Conselho de Engenharia do Paraná</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Information Section */}
      <section className="company-info-section py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={8}>
              <Card className="company-info-card shadow-lg border-0">
                <Card.Header className="bg-success text-white text-center py-3">
                  <h4 className="mb-0">Informações da Empresa</h4>
                </Card.Header>
                <Card.Body className="p-4">
                  <div className="company-info-item d-flex align-items-center">
                    <div className="info-icon-bg bg-light rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{width: '60px', height: '60px', minWidth: '60px'}}>
                      <BsBuilding size={24} className="text-primary" />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1 text-dark fw-bold">Endereço</h6>
                      <p className="mb-0 text-muted">Curitiba, PR - Brasil</p>
                    </div>
                  </div>

                  <div className="company-info-item d-flex align-items-center">
                    <div className="info-icon-bg bg-light rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{width: '60px', height: '60px', minWidth: '60px'}}>
                      <BsLightning size={24} className="text-primary" />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1 text-dark fw-bold">Telefone</h6>
                      <p className="mb-0 text-muted">
                        <a href="tel:+5541304599287" className="text-decoration-none text-muted">
                          (41) 3045-9287
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="company-info-item d-flex align-items-center">
                    <div className="info-icon-bg bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{width: '60px', height: '60px', minWidth: '60px'}}>
                      <BsTools size={24} className="text-white" />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1 text-dark fw-bold">E-mail</h6>
                      <p className="mb-0 text-muted">
                        <a href="mailto:servicos@engenigmainstalacoeseletricas.com" className="text-decoration-none text-muted">
                          servicos@engenigmainstalacoeseletricas.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="company-info-item d-flex align-items-center">
                    <div className="info-icon-bg bg-light rounded-circle d-flex align-items-center justify-content-center me-3" 
                         style={{width: '60px', height: '60px', minWidth: '60px'}}>
                      <BsGear size={24} className="text-warning" />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1 text-dark fw-bold">Horário de Atendimento</h6>
                      <p className="mb-0 text-muted">Segunda a Sexta: 8:00 - 18:00</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="services-cta py-5">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <div className="cta-content slide-element">
                <h2>Precisa de algum desses serviços?</h2>
                <p>
                  Nossa equipe está pronta para atender suas necessidades com qualidade 
                  e eficiência. Entre em contato para um orçamento personalizado.
                </p>
                <div className="cta-buttons">
                  <Button 
                    as={Link}
                    to="/orcamentos"
                    variant="primary" 
                    size="lg" 
                    className="me-3"
                  >
                    Solicitar Orçamento
                  </Button>
                  <Button 
                    as="a"
                    href="https://wa.me/5541995226237?text=Olá! Gostaria de falar sobre os serviços da Engenigma."
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-primary" 
                    size="lg"
                  >
                    Falar no WhatsApp
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

export default Services;
