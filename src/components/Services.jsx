import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  BsLightning, BsSun, BsShield, BsTools, BsUmbrella, BsArrowRight, 
  BsHouse, BsBuilding, BsGear, BsFire, BsWifi, BsThermometer,
  BsBattery, BsLightbulb, BsFileText, BsPeople, BsSpeedometer2
} from 'react-icons/bs';
import getImagePath from '../utils/imagePaths';
import SEO from './SEO';
import '../styles/Services.css';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

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

  const handleShowModal = (service) => {
    console.log('handleShowModal called with service:', service);
    setSelectedService(service);
    setShowModal(true);
    console.log('Modal state set to true');
  };

  const handleCloseModal = () => {
    console.log('handleCloseModal called');
    setShowModal(false);
    setSelectedService(null);
    console.log('Modal closed');
  };

  const services = [
    {
      id: 1,
      icon: <BsLightning size={50} />,
      title: 'Elétrica Residencial, Predial, Industrial e Hospitalar',
      description: 'Projetos e instalações elétricas completas para residências, prédios, indústrias e estabelecimentos hospitalares/clínicas com total segurança.',
      detailedDescription: `A EngEnigma oferece soluções completas em instalações elétricas para todos os segmentos, sempre priorizando a segurança, eficiência e conformidade com as normas técnicas.

      **Elétrica Residencial:** Executamos projetos elétricos completos para residências, incluindo dimensionamento de quadros de distribuição, circuitos de iluminação, tomadas de uso geral e específico, instalação de chuveiros elétricos, ar-condicionado e sistemas de proteção. Garantimos total segurança familiar e máxima eficiência energética, sempre seguindo as normas ABNT NBR 5410.

      **Elétrica Predial:** Especialistas em edifícios comerciais e residenciais, desenvolvemos e executamos projetos de baixa e média tensão, sistemas de distribuição elétrica, iluminação de emergência, sistemas de CFTV, controle de acesso e toda infraestrutura elétrica necessária para o funcionamento seguro e eficiente do empreendimento.

      **Elétrica Industrial:** Atendemos indústrias com instalações de alta complexidade técnica, incluindo motores de grande porte, sistemas de automação industrial, painéis de comando e controle, subestações, sistemas de aterramento e adequação rigorosa às Normas Regulamentadoras (NRs), especialmente NR-10.

      **Elétrica Hospitalar:** Executamos instalações críticas em hospitais, clínicas e laboratórios que requerem máxima confiabilidade e continuidade de energia. Incluindo sistemas de emergência, grupos geradores, iluminação cirúrgica, sistemas de alimentação ininterrupta (UPS) e total conformidade com normas da ANVISA e ABNT NBR 13534.`,
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
      detailedDescription: `A EngEnigma é especialista em energia solar fotovoltaica, oferecendo soluções completas e personalizadas para geração de energia limpa, renovável e econômica.

      **Energia Solar Residencial:** Desenvolvemos sistemas fotovoltaicos personalizados para residências, utilizando painéis solares de alta eficiência, inversores de última geração e sistemas de monitoramento em tempo real. Com nossos sistemas, você pode reduzir sua conta de luz em até 95%, além de contribuir para um futuro mais sustentável e valorizar seu imóvel.

      **Sistemas Empresariais:** Oferecemos soluções corporativas que reduzem drasticamente os custos operacionais com energia elétrica. Nossos projetos incluem análise de viabilidade, dimensionamento adequado, instalação completa e acompanhamento da performance, proporcionando retorno do investimento entre 3 a 5 anos e economia contínua por mais de 25 anos.

      **Usinas Fotovoltaicas:** Executamos projetos de grande porte para geração distribuída, incluindo usinas solares comerciais e industriais. Oferecemos gestão completa desde o estudo de viabilidade, projeto executivo, licenciamento, instalação até a operação e manutenção preventiva.

      **Vantagens Exclusivas:** Além da significativa economia na conta de luz, nossos clientes desfrutam de valorização imobiliária, sustentabilidade ambiental, acesso a linhas de financiamento especiais, isenção de impostos e contribuição efetiva para a redução das emissões de CO2.`,
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
      detailedDescription: `Transforme sua residência em uma casa verdadeiramente inteligente com nossos sistemas de automação residencial de última geração, proporcionando máximo conforto, segurança e eficiência energética.

      **Casa Inteligente Completa:** Oferecemos integração total de todos os sistemas da casa - iluminação LED inteligente, climatização automatizada, sistema de som ambiente, controle de persianas e cortinas, gestão de energia e muito mais. Tudo funciona de forma sincronizada através de uma única plataforma central.

      **Comando de Voz Avançado:** Compatibilidade completa com assistentes virtuais como Alexa, Google Assistant e Siri. Controle natural e intuitivo: "Ok Google, ative o modo cinema", "Alexa, ajuste a temperatura para 22 graus", "Siri, desligue todas as luzes". A tecnologia a serviço da sua comodidade.

      **Cenários Personalizados:** Programação de rotinas automáticas adaptadas ao seu estilo de vida - modo "Chegando em Casa" (acende luzes, liga ar-condicionado), modo "Saindo de Casa" (desliga tudo, ativa segurança), modo "Dormir" (luzes gradualmente diminuem, temperatura se ajusta), modo "Festa" (iluminação colorida, som ambiente).

      **Controle Total via Smartphone:** Aplicativo exclusivo para controle completo da casa de qualquer lugar do mundo. Monitore consumo de energia, receba notificações de segurança, controle temperatura, iluminação e todos os dispositivos em tempo real, mesmo quando estiver viajando.

      **Eficiência e Economia:** Sistema inteligente de gestão energética que otimiza automaticamente o consumo, reduzindo significativamente sua conta de luz através de algoritmos avançados de machine learning.`,
      features: [
        'Casa inteligente',
        'Comando de voz',
        'Controle automatizado',
        'Integração de sistemas'
      ],
      image: getImagePath('/images/proj_icone.png'),
      color: 'info'
    },
    {
      id: 4,
      icon: <BsShield size={50} />,
      title: 'Sistema de Segurança Eletrônica',
      description: 'Proteção completa com câmeras de segurança 4K, alarmes inteligentes, controle de acesso biométrico e monitoramento 24h.',
      detailedDescription: `A EngEnigma oferece as mais avançadas soluções em segurança eletrônica, proporcionando proteção total para residências, empresas e condomínios através de tecnologia de ponta e monitoramento profissional.

      **CFTV 4K Ultra HD:** Sistemas de videomonitoramento com câmeras de altíssima resolução 4K, visão noturna infravermelha até 40 metros, lentes varifocais motorizadas e recursos de inteligência artificial para detecção automática de movimento e reconhecimento facial. Gravação em nuvem e local com backup redundante.

      **Alarmes Inteligentes:** Centrais de alarme conectadas com sensores de movimento PIR duais, sensores magnéticos para portas e janelas, detectores de quebra de vidro e botões de pânico. Sistema com discadora GSM para notificações via SMS e aplicativo móvel com alertas em tempo real.

      **Controle de Acesso Biométrico:** Fechaduras eletrônicas com leitura de digital, reconhecimento facial, cartão de proximidade e senhas. Controle total de horários de acesso, relatórios detalhados e integração com sistema de ponto eletrônico para empresas.

      **Monitoramento 24h:** Central de monitoramento própria com profissionais treinados operando 24 horas por dia, 7 dias por semana. Resposta imediata a eventos, comunicação direta com Polícia Militar e Corpo de Bombeiros quando necessário.

      **Aplicativo Móvel Exclusivo:** Controle total via smartphone - visualização das câmeras em tempo real, ativação/desativação de alarmes, abertura remota de portões, histórico de eventos e notificações push instantâneas.`,
      features: [
        'CFTV 4K Ultra HD',
        'Alarmes inteligentes',
        'Controle de acesso biométrico',
        'Monitoramento 24h profissional'
      ],
      image: getImagePath('/images/seg_camera.png'),
      color: 'danger'
    },
    {
      id: 5,
      icon: <BsUmbrella size={50} />,
      title: 'SPDA - Proteção contra Descargas Atmosféricas',
      description: 'Instalação e manutenção de sistemas de proteção contra raios e descargas atmosféricas para proteção completa de edificações.',
      detailedDescription: `A EngEnigma é especialista em Sistemas de Proteção contra Descargas Atmosféricas (SPDA), oferecendo proteção completa contra raios e garantindo a segurança de pessoas, equipamentos e edificações.

      **Projeto Técnico Especializado:** Elaboração de projetos técnicos rigorosamente conforme ABNT NBR 5419, incluindo análise de risco detalhada, cálculos de probabilidade de descargas, dimensionamento preciso do sistema e definição do nível de proteção adequado para cada tipo de edificação específica.

      **Sistema de Captação Avançado:** Instalação profissional de para-raios Franklin, para-raios radioativos (quando aplicável), hastes captoras, cabos condutores de descida em cobre nu, gaiolas de Faraday para proteção interna e todos os componentes dimensionados para máxima eficiência na interceptação de descargas atmosféricas.

      **Aterramento de Alta Performance:** Implementação de sistemas de aterramento de baixa resistência utilizando hastes profundas de alta condutividade, malhas de terra interligadas, tratamento químico do solo quando necessário e medições precisas de resistividade para garantir dissipação segura e eficiente da energia atmosférica.

      **Proteção Contra Surtos (DPS):** Instalação estratégica de Dispositivos de Proteção contra Surtos nos quadros elétricos principais e secundários, proteção específica para equipamentos eletrônicos sensíveis, sistemas de telecomunicações e redes de dados, evitando danos causados por sobretensões induzidas.

      **Certificação e Conformidade:** Emissão de laudos técnicos oficiais, Anotação de Responsabilidade Técnica (ART), certificações exigidas pelo Corpo de Bombeiros, documentação para seguradoras e acompanhamento de inspeções periódicas para manutenção da validade das certificações.`,
      features: [
        'Projeto de SPDA',
        'Instalação de para-raios',
        'Sistema de aterramento',
        'Certificação e laudo técnico'
      ],
      image: getImagePath('/images/proj_spda2.png'),
      color: 'success'
    },
    {
      id: 6,
      icon: <BsFire size={50} />,
      title: 'Prevenção a Incêndio',
      description: 'Sistemas completos de prevenção e combate a incêndios com detectores inteligentes, alarmes, sprinklers e equipamentos certificados.',
      detailedDescription: `A EngEnigma desenvolve e implementa sistemas completos de prevenção e combate a incêndios, garantindo a máxima segurança de vidas e patrimônio através de tecnologia avançada e conformidade total com as normas técnicas.

      **Detecção Inteligente:** Instalação de detectores de fumaça ópticos e iônicos de última geração, detectores de temperatura compensados, detectores de chama infravermelha e ultravioleta, sensores de gases tóxicos e sistemas addressáveis que identificam precisamente o local do sinistro em tempo real.

      **Sistemas de Alarme Avançados:** Centrais de alarme de incêndio certificadas pelo Corpo de Bombeiros, sirenes e sinalizadores visuais de alta potência, acionadores manuais estrategicamente posicionados, comunicação automática com Corpo de Bombeiros e integração com sistemas de automação predial.

      **Sistemas de Combate:** Projeto e instalação de sistemas de sprinklers automáticos (água, espuma, gases limpos), hidrantes internos e externos, bombas de incêndio redundantes, reservatórios técnicos dimensionados, mangueiras e esguichos certificados, extintores adequados para cada classe de risco.

      **Pressurização de Escadas:** Sistemas de pressurização para rotas de fuga em edifícios altos, garantindo que as escadas de emergência permaneçam livres de fumaça durante evacuações, conforme exigências das normas de segurança contra incêndio.

      **Certificação e Manutenção:** Projetos aprovados pelo Corpo de Bombeiros, Auto de Vistoria do Corpo de Bombeiros (AVCB), manutenção preventiva e corretiva de todos os equipamentos, treinamento de brigada de incêndio e planos de emergência personalizados.`,
      features: [
        'Detectores de fumaça',
        'Sistemas de alarme',
        'Equipamentos de combate',
        'Conformidade com normas'
      ],
      image: getImagePath('/images/proj_incendio.png'),
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
      image: getImagePath('/images/rede_internet2.png'),
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
      image: getImagePath('/images/proj_ar_condicionador.png'),
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
    },
    {
      id: 13,
      icon: <BsSpeedometer2 size={50} />,
      title: 'Eficiência Energética',
      description: 'Soluções tecnológicas integradas para criar sistemas energéticos mais eficientes e sustentáveis, reduzindo custos operacionais e impacto ambiental.',
      detailedDescription: `A eficiência energética fundamenta-se na ideia de utilizar a energia de forma mais racional e eficaz, garantindo que uma maior parte da energia consumida seja convertida em trabalho útil, com o mínimo de desperdício possível.

      **Nossa Abordagem:** Buscamos constantemente por métodos que permitam aproveitar ao máximo cada unidade de energia consumida, promovendo benefícios ambientais, econômicos e sociais. Nossa equipe é capaz de integrar soluções tecnológicas para criar um sistema energético mais eficiente e sustentável.

      **Soluções Empresariais:** Especializamos em atender donos de empresas e mercados de grande e médio porte que enfrentam faturas de energia elevadas. Oferecemos soluções personalizadas que não só reduzem os custos operacionais e o impacto ambiental, mas também contribuem para a modernização da infraestrutura e a transição para uma economia de baixo consumo energético.

      **Metodologia Eficiente:** Utilizamos a energia de maneira mais eficaz, gerando economia nos custos operacionais e reduzindo o impacto ambiental. Isso significa usar menos energia para realizar a mesma tarefa ou produzir o mesmo resultado, minimizando o desperdício e otimizando os recursos disponíveis.

      **Benefícios Principais:**
      
      **1. Economia de Custos:** Redução significativa do consumo de energia, com contas de eletricidade, aquecimento e combustível menores, especialmente em longo prazo.
      
      **2. Redução de Impactos Ambientais:** Diminuição da emissão de gases de efeito estufa ao reduzir a necessidade de produção de energia a partir de fontes fósseis.
      
      **3. Aumento da Vida Útil dos Equipamentos:** Equipamentos que operam adequadamente tendem a funcionar de forma eficaz e menos estressante, aumentando durabilidade e reduzindo manutenção.
      
      **4. Competitividade Econômica:** Empresas que adotam práticas de eficiência energética reduzem custos operacionais, tornando-se mais competitivas no mercado.
      
      **5. Conformidade com Normas:** Cumprimento de metas de eficiência energética através de políticas públicas e regulamentações ambientais, proporcionando vantagens competitivas.`,
      features: [
        'Análise de consumo energético',
        'Soluções para empresas de grande porte',
        'Redução de custos operacionais',
        'Modernização de infraestrutura',
        'Conformidade com normas ambientais'
      ],
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'success'
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
                        onClick={() => handleShowModal(service)}
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
              {/* <div className="company-image slide-element"> */}
                <img 
                  src={getImagePath("/images/BRINDE-2.jpg")}
                  alt="Engenigma - Nossa Empresa" 
                  className="img-fluid rounded shadow-lg"
                  style={{width: "100%", height: "400px", objectFit: "cover"}}
                />
                {/* <div className="image-badge">
                  <span>Engenigma 2024</span>
                </div> */}
              {/* </div> */}
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
                <img src={getImagePath("/images/clients/copel.png")} alt="Copel" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/STM_emprendimento.jpeg")} alt="STM Empreendimento" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/LHC-PB-Horizontal.jpg")} alt="LHC" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/Masterdomus-_Fundo azul escuro h2.jpg")} alt="Masterdomus" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/gnatus.png")} alt="Gnatus" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/prefetura_de_curitiba.jpeg")} alt="Prefeitura de Curitiba" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/logo_sao_josé_dos_pinhais.png")} alt="São José dos Pinhais" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/prefeitura_de_são_bento_de_sul.png")} alt="São Bento do Sul" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/baixados_3.png")} alt="Cliente" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/5d7a8980d3a74.jpg")} alt="Cliente" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/Screenshot_5.png")} alt="Cliente" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/images.jpeg")} alt="Cliente" />
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="client-logo">
                <img src={getImagePath("/images/clients/copel.png")} alt="Copel" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/STM_emprendimento.jpeg")} alt="STM Empreendimento" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/LHC-PB-Horizontal.jpg")} alt="LHC" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/Masterdomus-_Fundo azul escuro h2.jpg")} alt="Masterdomus" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/gnatus.png")} alt="Gnatus" />
              </div>
              <div className="client-logo">
                <img src={getImagePath("/images/clients/prefetura_de_curitiba.jpeg")} alt="Prefeitura de Curitiba" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Suppliers Section */}
      <section className="suppliers-section py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="mb-3">Nossos Fornecedores</h2>
              <p className="text-muted">
                Trabalhamos com os melhores fornecedores do mercado para garantir a qualidade dos nossos serviços
              </p>
            </Col>
          </Row>
          
          {/* Suppliers Carousel */}
          <div className="suppliers-carousel-container">
            <div className="suppliers-carousel">
              <div className="supplier-logo">
                <img src={getImagePath("/images/suppliers/co_fio.png")} alt="Co Fio" />
              </div>
              <div className="supplier-logo">
                <img src={getImagePath("/images/suppliers/furukawa.png")} alt="Furukawa" />
              </div>
              <div className="supplier-logo">
                <img src={getImagePath("/images/suppliers/intelbras.png")} alt="Intelbras" />
              </div>
              <div className="supplier-logo">
                <img src={getImagePath("/images/suppliers/shinaider.png")} alt="Schneider" />
              </div>
              <div className="supplier-logo">
                <img src={getImagePath("/images/suppliers/soprano.png")} alt="Soprano" />
              </div>
              <div className="supplier-logo">
                <img src={getImagePath("/images/suppliers/supplier1.png")} alt="Fornecedor" />
              </div>
              <div className="supplier-logo">
                <img src={getImagePath("/images/suppliers/tramontina.png")} alt="Tramontina" />
              </div>
              <div className="supplier-logo">
                <img src={getImagePath("/images/suppliers/weg.png")} alt="WEG" />
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="supplier-logo">
                <img src={getImagePath("/images/suppliers/co_fio.png")} alt="Co Fio" />
              </div>
              <div className="supplier-logo">
                <img src={getImagePath("/images/suppliers/furukawa.png")} alt="Furukawa" />
              </div>
              <div className="supplier-logo">
                <img src={getImagePath("/images/suppliers/intelbras.png")} alt="Intelbras" />
              </div>
              <div className="supplier-logo">
                <img src={getImagePath("/images/suppliers/shinaider.png")} alt="Schneider" />
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
                      <p className="mb-0 text-muted">Av. Mal. Floriano Peixoto, 9986 - Boqueirão, Curitiba - PR, 81670-000</p>
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
                    variant="success" 
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
                    variant="warning" 
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

      {/* Service Details Modal */}
      {console.log('Modal render - showModal:', showModal, 'selectedService:', selectedService)}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="xl" 
        centered
        className="service-modal"
        scrollable
        keyboard={true}
      >
        <Modal.Header className={`bg-${selectedService?.color || 'primary'} text-white service-modal-header`}>
          <Modal.Title className="d-flex align-items-center w-100">
            <span className="me-3 service-modal-icon" style={{ fontSize: '1.8rem' }}>
              {selectedService?.icon}
            </span>
            <div className="flex-grow-1">
              <h4 className="mb-0 service-modal-title">{selectedService?.title}</h4>
            </div>
          </Modal.Title>
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Close"
            onClick={handleCloseModal}
            style={{ position: 'relative', zIndex: 10 }}
          ></button>
        </Modal.Header>
        <Modal.Body className="p-0">
          {selectedService && (
            <div className="service-modal-content">
              {/* Hero Section */}
              <div className="service-modal-hero p-4 bg-light">
                <Row className="align-items-center">
                  <Col lg={8}>
                    <p className="lead mb-0 text-dark">
                      {selectedService.description}
                    </p>
                  </Col>
                  <Col lg={4} className="text-center">
                    <div className={`service-modal-badge bg-${selectedService.color} text-white p-3 rounded-circle d-inline-flex align-items-center justify-content-center`} 
                         style={{ width: '80px', height: '80px' }}>
                      <span style={{ fontSize: '2rem' }}>{selectedService.icon}</span>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <div className="service-description mb-4">
                  <h5 className={`text-${selectedService.color} mb-3 d-flex align-items-center`}>
                    <BsFileText className="me-2" />
                    Descrição Detalhada
                  </h5>
                  <div className="detailed-description">
                    {selectedService.detailedDescription?.split('\n\n').map((section, index) => {
                      if (section.trim().startsWith('**') && section.trim().includes(':**')) {
                        const [title, ...content] = section.split(':**');
                        return (
                          <div key={index} className="mb-4">
                            <h6 className={`fw-bold text-${selectedService.color} mb-2`}>
                              {title.replace(/\*\*/g, '')}
                            </h6>
                            <p className="mb-2 text-muted lh-lg">
                              {content.join(':**').trim()}
                            </p>
                          </div>
                        );
                      }
                      return section.trim() && (
                        <p key={index} className="mb-3 text-muted lh-lg">
                          {section.trim()}
                        </p>
                      );
                    })}
                  </div>
                </div>
                
                {/* Features Section */}
                <div className="service-features mb-4">
                  <h5 className={`text-${selectedService.color} mb-3 d-flex align-items-center`}>
                    <BsTools className="me-2" />
                    Principais Características
                  </h5>
                  <Row>
                    {selectedService.features?.map((feature, index) => (
                      <Col lg={6} md={12} key={index} className="mb-3">
                        <div className={`d-flex align-items-center p-2 rounded bg-light border-start border-4 border-${selectedService.color}`}>
                          <BsArrowRight className={`text-${selectedService.color} me-3 flex-shrink-0`} />
                          <span className="text-dark">{feature}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
                
                {/* CTA Section */}
                <div className={`modal-cta p-4 bg-${selectedService.color} bg-opacity-10 rounded-3 border border-${selectedService.color} border-opacity-25`}>
                  <Row className="align-items-center">
                    <Col lg={8} className="mb-3 mb-lg-0">
                      <h6 className={`text-${selectedService.color} mb-2 d-flex align-items-center`}>
                        <BsPeople className="me-2" />
                        Interessado neste serviço?
                      </h6>
                      <p className="mb-0 text-muted small">
                        Entre em contato conosco para um orçamento personalizado
                      </p>
                    </Col>
                    <Col lg={4}>
                      <div className="d-flex gap-2 flex-column flex-lg-row">
                        <Button 
                          as={Link}
                          to={`/orcamentos?servico=${encodeURIComponent(selectedService.title)}`}
                          variant={selectedService.color}
                          size="sm"
                          className="flex-grow-1"
                          onClick={handleCloseModal}
                        >
                          Solicitar Orçamento
                        </Button>
                        <Button 
                          as="a"
                          href={`https://wa.me/5541995226237?text=Olá! Gostaria de saber mais sobre ${selectedService.title}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant={`outline-${selectedService.color}`}
                          size="sm"
                          className="flex-grow-1"
                        >
                          WhatsApp
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Services;
