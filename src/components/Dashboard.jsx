import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  BsLightning, BsSun, BsShield, BsTools, BsUmbrella, BsFire, BsWifi, 
  BsThermometer, BsBuilding, BsBattery, BsFileText, BsPeople,
  BsTrophy, BsStar, BsCheckCircleFill, BsLock, BsEye, BsPlay,
  BsGraphUp, BsCalendar, BsGear, BsAward, BsSpeedometer, BsHouse
} from 'react-icons/bs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import getImagePath from '../utils/imagePaths';
import SEO from './SEO';
import '../styles/Dashboard.css';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

const Dashboard = () => {
  const [userLevel, setUserLevel] = useState(3);
  const [totalPoints, setTotalPoints] = useState(1250);
  const [completedServices, setCompletedServices] = useState(5);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [viewedPages, setViewedPages] = useState(['home', 'services', 'dashboard']);

  // Dados atualizados da empresa (2021-2025)
  const companyStats = {
    yearsExperience: 4,
    projectsCompleted: 200,
    clientsSatisfied: 150,
    activeProjects: 25
  };

  const services = [
    {
      id: 1,
      title: 'Elétrica Residencial, Predial, Industrial e Hospitalar',
      icon: <BsLightning size={30} />,
      completed: true,
      points: 300,
      level: 'Expert',
      color: 'primary',
      description: 'Projetos elétricos completos para todos os segmentos com segurança total.',
      category: 'Instalações',
      progress: 100,
      unlockDate: '2025-01-15'
    },
    {
      id: 2,
      title: 'Sistema de Energia Fotovoltaica',
      icon: <BsSun size={30} />,
      completed: true,
      points: 350,
      level: 'Master',
      color: 'warning',
      description: 'Soluções sustentáveis em Energia Solar para economia e meio ambiente.',
      category: 'Energia Renovável',
      progress: 100,
      unlockDate: '2025-01-20'
    },
    {
      id: 3,
      title: 'Automação Residencial',
      icon: <BsHouse size={30} />,
      completed: true,
      points: 280,
      level: 'Avançado',
      color: 'info',
      description: 'Casa inteligente com comando de voz e sistemas automatizados.',
      category: 'Smart Home',
      progress: 100,
      unlockDate: '2025-02-01'
    },
    {
      id: 4,
      title: 'Segurança Eletrônica',
      icon: <BsShield size={30} />,
      completed: true,
      points: 270,
      level: 'Expert',
      color: 'danger',
      description: 'Sistemas de segurança 4K, alarmes inteligentes e monitoramento 24h.',
      category: 'Segurança',
      progress: 100,
      unlockDate: '2025-02-10'
    },
    {
      id: 5,
      title: 'SPDA - Proteção Atmosférica',
      icon: <BsUmbrella size={30} />,
      completed: true,
      points: 250,
      level: 'Expert',
      color: 'success',
      description: 'Sistemas de proteção contra descargas atmosféricas certificados.',
      category: 'Proteção',
      progress: 100,
      unlockDate: '2025-02-15'
    },
    {
      id: 6,
      title: 'Prevenção a Incêndio',
      icon: <BsFire size={30} />,
      completed: false,
      points: 320,
      level: 'Master',
      color: 'danger',
      description: 'Sistemas completos de detecção e combate a incêndios.',
      category: 'Segurança',
      progress: 65,
      unlockDate: null
    },
    {
      id: 7,
      title: 'Rede e Cabeamento Estruturado',
      icon: <BsWifi size={30} />,
      completed: false,
      points: 200,
      level: 'Intermediário',
      color: 'primary',
      description: 'Infraestrutura de TI e redes empresariais.',
      category: 'Conectividade',
      progress: 40,
      unlockDate: null
    },
    {
      id: 8,
      title: 'Ar Condicionado / Climatização',
      icon: <BsThermometer size={30} />,
      completed: false,
      points: 230,
      level: 'Avançado',
      color: 'info',
      description: 'Sistemas de climatização residencial, comercial e industrial.',
      category: 'Climatização',
      progress: 30,
      unlockDate: null
    },
    {
      id: 9,
      title: 'Subestação de Média e Alta Tensão',
      icon: <BsBuilding size={30} />,
      completed: false,
      points: 400,
      level: 'Master',
      color: 'warning',
      description: 'Projetos e manutenção de subestações especializadas.',
      category: 'Infraestrutura',
      progress: 20,
      unlockDate: null
    },
    {
      id: 10,
      title: 'Nobreak e Grupo Gerador',
      icon: <BsBattery size={30} />,
      completed: false,
      points: 280,
      level: 'Expert',
      color: 'success',
      description: 'Sistemas de alimentação ininterrupta e geradores.',
      category: 'Backup Energético',
      progress: 55,
      unlockDate: null
    },
    {
      id: 11,
      title: 'Laudos Técnicos',
      icon: <BsFileText size={30} />,
      completed: false,
      points: 150,
      level: 'Básico',
      color: 'secondary',
      description: 'Documentação técnica e certificações especializadas.',
      category: 'Documentação',
      progress: 10,
      unlockDate: null
    },
    {
      id: 12,
      title: 'Consultoria e Treinamento',
      icon: <BsPeople size={30} />,
      completed: false,
      points: 180,
      level: 'Intermediário',
      color: 'info',
      description: 'Capacitação técnica e consultoria especializada.',
      category: 'Educação',
      progress: 15,
      unlockDate: null
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Primeiro Contato',
      description: 'Visitou o site da ENGENIGMA',
      icon: <BsStar />,
      unlocked: true,
      date: '2025-01-01',
      points: 50,
      rarity: 'Comum'
    },
    {
      id: 2,
      title: 'Explorador Curioso',
      description: 'Visitou 5 páginas diferentes do site',
      icon: <BsEye />,
      unlocked: viewedPages.length >= 3,
      date: viewedPages.length >= 3 ? '2025-01-15' : null,
      points: 100,
      rarity: 'Raro'
    },
    {
      id: 3,
      title: 'Conhecedor de Serviços',
      description: 'Desbloqueou 5 badges de serviços',
      icon: <BsAward />,
      unlocked: completedServices >= 5,
      date: completedServices >= 5 ? '2025-02-15' : null,
      points: 200,
      rarity: 'Épico'
    },
    {
      id: 4,
      title: 'Especialista ENGENIGMA',
      description: 'Completou todos os serviços disponíveis',
      icon: <BsTrophy />,
      unlocked: completedServices === services.length,
      date: null,
      points: 500,
      rarity: 'Lendário'
    },
    {
      id: 5,
      title: 'Cliente Potencial',
      description: 'Solicitou orçamento via formulário',
      icon: <BsCheckCircleFill />,
      unlocked: false,
      date: null,
      points: 150,
      rarity: 'Raro'
    },
    {
      id: 6,
      title: 'Conectado',
      description: 'Entrou em contato via WhatsApp',
      icon: <BsPlay />,
      unlocked: false,
      date: null,
      points: 100,
      rarity: 'Comum'
    }
  ];

  // Dados atualizados para os gráficos
  const doughnutData = {
    labels: [
      'Instalações Elétricas', 'Energia Solar', 'Automação', 'Segurança', 
      'SPDA', 'Prevenção Incêndio', 'Outros Serviços'
    ],
    datasets: [
      {
        data: [35, 25, 15, 12, 8, 3, 2],
        backgroundColor: [
          '#0d6efd', '#ffc107', '#17a2b8', '#dc3545', 
          '#28a745', '#fd7e14', '#6c757d'
        ],
        borderColor: '#ffffff',
        borderWidth: 3,
        hoverBorderWidth: 5
      }
    ]
  };

  // Dados de projetos mensais atualizados (2024-2025)
  const projectsData = {
    labels: ['Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev'],
    datasets: [
      {
        label: 'Projetos Concluídos',
        data: [18, 22, 19, 28, 25, 32, 30, 35],
        backgroundColor: 'rgba(13, 110, 253, 0.1)',
        borderColor: '#0d6efd',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#0d6efd',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6
      },
      {
        label: 'Orçamentos Solicitados',
        data: [25, 30, 28, 35, 32, 40, 38, 42],
        backgroundColor: 'rgba(255, 193, 7, 0.1)',
        borderColor: '#ffc107',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#ffc107',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6
      }
    ]
  };

  // Dados de crescimento da empresa
  const growthData = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Clientes Atendidos',
        data: [20, 45, 80, 120, 150],
        backgroundColor: 'rgba(40, 167, 69, 0.2)',
        borderColor: '#28a745',
        borderWidth: 3,
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 1
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  };

  const progressPercentage = (completedServices / services.length) * 100;

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowServiceModal(true);
  };

  const getTotalAchievementPoints = () => {
    return achievements.filter(a => a.unlocked).reduce((total, a) => total + a.points, 0);
  };

  const getNextLevelPoints = () => {
    const levels = [0, 500, 1000, 2000, 3500, 5000];
    const currentLevelPoints = levels[userLevel - 1] || 0;
    const nextLevelPoints = levels[userLevel] || 5000;
    return nextLevelPoints - currentLevelPoints;
  };

  const getCurrentLevelProgress = () => {
    const levels = [0, 500, 1000, 2000, 3500, 5000];
    const currentLevelPoints = levels[userLevel - 1] || 0;
    const nextLevelPoints = levels[userLevel] || 5000;
    const progressInLevel = totalPoints - currentLevelPoints;
    const levelRange = nextLevelPoints - currentLevelPoints;
    return Math.min((progressInLevel / levelRange) * 100, 100);
  };

  useEffect(() => {
    // Animação de entrada dos elementos
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scale-element');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="dashboard-page">
      <SEO 
        title="Dashboard - Acompanhe sua Jornada"
        description="Dashboard gamificado da ENGENIGMA. Explore nossos serviços, desbloqueie badges e acompanhe estatísticas de projetos elétricos."
        keywords="dashboard ENGENIGMA, gamificação, badges elétricos, estatísticas projetos"
      />
      
      {/* Header Section - Redesigned */}
      <section className="dashboard-header py-5 position-relative overflow-hidden">
        <div className="dashboard-bg-animation"></div>
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <div className="user-profile scale-element">
                <div className="d-flex align-items-center mb-3">
                  <div className="level-badge me-3">
                    <BsTrophy size={24} className="text-warning" />
                    <span className="ms-2 fw-bold">Nível {userLevel}</span>
                  </div>
                  <Badge bg="success" className="pulse-animation">
                    {completedServices}/{services.length} Serviços Descobertos
                  </Badge>
                </div>
                <h1 className="dashboard-title mb-3">
                  Dashboard ENGENIGMA
                  <div className="title-underline"></div>
                </h1>
                <p className="dashboard-subtitle mb-4">
                  Explore nossa jornada de excelência em Instalações Elétricas e descubra 
                  como nossos <strong>{companyStats.yearsExperience} anos de experiência</strong> podem 
                  transformar seus projetos.
                </p>
                <div className="level-progress-container">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="small fw-bold">Progresso do Nível {userLevel}</span>
                    <span className="small">{totalPoints} / {totalPoints + getNextLevelPoints()} pontos</span>
                  </div>
                  <ProgressBar 
                    variant="warning" 
                    now={getCurrentLevelProgress()} 
                    className="level-progress"
                    style={{ height: '8px' }}
                  />
                </div>
              </div>
            </Col>
            <Col lg={4} className="text-center">
              <div className="company-logo-container scale-element">
                <img 
                  src={getImagePath("/images/engenigma-logo.jpg")}
                  alt="ENGENIGMA Logo" 
                  className="company-logo-dashboard"
                  style={{ maxWidth: '200px', height: 'auto' }}
                />
                <div className="floating-stats">
                  <div className="stat-bubble">
                    <BsCalendar className="text-primary" />
                    <span>Desde 2021</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Enhanced Stats Section */}
      <section className="stats-section py-5 bg-light position-relative">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="section-title scale-element">
                <BsGraphUp className="me-2 text-primary" />
                ENGENIGMA em Números
              </h2>
              <p className="text-muted">Nossa trajetória de crescimento e excelência</p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <Card className="stat-card-enhanced scale-element border-0 shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <div className="stat-icon mb-3">
                    <BsCalendar size={32} className="text-primary" />
                  </div>
                  <div className="stat-number-large">{companyStats.yearsExperience}+</div>
                  <div className="stat-label-enhanced">Anos de Experiência</div>
                  <small className="text-muted">Desde 2021 no mercado</small>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="stat-card-enhanced scale-element border-0 shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <div className="stat-icon mb-3">
                    <BsCheckCircleFill size={32} className="text-success" />
                  </div>
                  <div className="stat-number-large">{companyStats.projectsCompleted}+</div>
                  <div className="stat-label-enhanced">Projetos Concluídos</div>
                  <small className="text-muted">Com 100% de qualidade</small>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="stat-card-enhanced scale-element border-0 shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <div className="stat-icon mb-3">
                    <BsPeople size={32} className="text-warning" />
                  </div>
                  <div className="stat-number-large">{companyStats.clientsSatisfied}+</div>
                  <div className="stat-label-enhanced">Clientes Satisfeitos</div>
                  <small className="text-muted">Relacionamentos duradouros</small>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="stat-card-enhanced scale-element border-0 shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <div className="stat-icon mb-3">
                    <BsGear size={32} className="text-info" />
                  </div>
                  <div className="stat-number-large">{companyStats.activeProjects}</div>
                  <div className="stat-label-enhanced">Projetos Ativos</div>
                  <small className="text-muted">Em desenvolvimento</small>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gamification Stats */}
      <section className="gamification-stats py-4">
        <Container>
          <Row>
            <Col md={3} className="mb-3">
              <Card className="gamification-card scale-element">
                <Card.Body className="text-center">
                  <BsTrophy size={24} className="text-warning mb-2" />
                  <div className="gamification-number">{userLevel}</div>
                  <div className="gamification-label">Nível Atual</div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
              <Card className="gamification-card scale-element">
                <Card.Body className="text-center">
                  <BsStar size={24} className="text-primary mb-2" />
                  <div className="gamification-number">{totalPoints}</div>
                  <div className="gamification-label">Pontos Totais</div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
              <Card className="gamification-card scale-element">
                <Card.Body className="text-center">
                  <BsAward size={24} className="text-success mb-2" />
                  <div className="gamification-number">{achievements.filter(a => a.unlocked).length}</div>
                  <div className="gamification-label">Conquistas</div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
              <Card className="gamification-card scale-element">
                <Card.Body className="text-center">
                  <BsSpeedometer size={24} className="text-info mb-2" />
                  <div className="gamification-number">{Math.round(progressPercentage)}%</div>
                  <div className="gamification-label">Progresso</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Progress Section */}
      <section className="progress-section py-4">
        <Container>
          <Row>
            <Col>
              <Card className="progress-card scale-element">
                <Card.Header>
                  <h5 className="mb-0">Progresso de Descoberta dos Serviços</h5>
                </Card.Header>
                <Card.Body>
                  <div className="progress-info mb-3">
                    <span>Você já conhece {completedServices} de {services.length} serviços</span>
                    <span className="float-end">{Math.round(progressPercentage)}%</span>
                  </div>
                  <ProgressBar 
                    variant="success" 
                    now={progressPercentage} 
                    className="mb-3 custom-progress"
                    style={{ height: '10px' }}
                  />
                  <small className="text-muted">
                    Continue explorando nossos serviços para desbloquear mais badges!
                  </small>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Enhanced Services Badges */}
      <section className="badges-section py-5">
        <Container>
          <Row>
            <Col>
              <div className="section-header text-center mb-5">
                <h2 className="section-title scale-element">
                  <BsAward className="me-2 text-primary" />
                  Catálogo de Serviços ENGENIGMA
                </h2>
                <p className="section-subtitle text-muted">
                  Descubra nossos 12 serviços especializados e desbloqueie badges exclusivos
                </p>
                <div className="progress-summary mb-4">
                  <span className="badge bg-success me-2">{completedServices} Descobertos</span>
                  <span className="badge bg-warning me-2">{services.filter(s => !s.completed && s.progress > 0).length} Em Progresso</span>
                  <span className="badge bg-secondary">{services.filter(s => !s.completed && s.progress === 0).length} Bloqueados</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            {services.map((service) => (
              <Col xl={3} lg={4} md={6} className="mb-4" key={service.id}>
                <Card 
                  className={`service-badge-card scale-element ${service.completed ? 'completed' : 'locked'} h-100`}
                  onClick={() => handleServiceClick(service)}
                  style={{ cursor: 'pointer' }}
                >
                  <Card.Header className={`bg-${service.color} bg-opacity-10 border-0`}>
                    <div className="d-flex justify-content-between align-items-center">
                      <Badge bg={service.color} className="service-category-badge">
                        {service.category}
                      </Badge>
                      {service.completed && (
                        <BsCheckCircleFill className="text-success" size={20} />
                      )}
                    </div>
                  </Card.Header>
                  <Card.Body className="text-center p-4">
                    <div className={`service-badge-icon mb-3 ${service.completed ? '' : 'grayscale'}`}>
                      {service.completed ? service.icon : <BsLock size={30} />}
                    </div>
                    <Card.Title className="service-badge-title h6">
                      {service.title}
                    </Card.Title>
                    <div className="service-level mb-3">
                      <Badge 
                        bg={service.completed ? service.color : 'secondary'} 
                        className="level-badge-enhanced"
                      >
                        {service.completed ? service.level : 'Bloqueado'}
                      </Badge>
                    </div>
                    <Card.Text className="service-badge-description small text-muted">
                      {service.description}
                    </Card.Text>
                    {service.completed && (
                      <div className="service-points d-flex align-items-center justify-content-center">
                        <BsStar className="text-warning me-1" />
                        <span className="fw-bold">{service.points} pts</span>
                        {service.unlockDate && (
                          <small className="text-muted ms-2">
                            Desbloqueado em {new Date(service.unlockDate).toLocaleDateString('pt-BR')}
                          </small>
                        )}
                      </div>
                    )}
                    {!service.completed && service.progress > 0 && (
                      <div className="service-progress mt-3">
                        <div className="d-flex justify-content-between mb-1">
                          <small>Progresso</small>
                          <small>{service.progress}%</small>
                        </div>
                        <ProgressBar 
                          variant={service.color} 
                          now={service.progress} 
                          style={{ height: '6px' }}
                        />
                      </div>
                    )}
                    {!service.completed && service.progress === 0 && (
                      <div className="locked-service-info">
                        <BsLock className="text-muted mb-2" />
                        <small className="text-muted d-block">
                          Explore nossos serviços para desbloquear
                        </small>
                      </div>
                    )}
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-0 pb-3">
                    <Button 
                      variant={service.completed ? `outline-${service.color}` : 'outline-secondary'} 
                      size="sm" 
                      className="w-100"
                    >
                      {service.completed ? 'Ver Detalhes' : 'Explorar Serviço'}
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Enhanced Charts Section */}
      <section className="charts-section py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col>
              <div className="section-header text-center">
                <h2 className="section-title scale-element">
                  <BsGraphUp className="me-2 text-primary" />
                  Analytics & Performance
                </h2>
                <p className="section-subtitle text-muted">
                  Acompanhe o crescimento e performance da ENGENIGMA
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="mb-4">
              <Card className="chart-card-enhanced scale-element border-0 shadow-sm h-100">
                <Card.Header className="bg-primary text-white">
                  <h5 className="mb-0 d-flex align-items-center">
                    <BsSpeedometer className="me-2" />
                    Distribuição de Serviços
                  </h5>
                </Card.Header>
                <Card.Body className="p-4">
                  <div style={{ height: '300px', position: 'relative' }}>
                    <Doughnut data={doughnutData} options={chartOptions} />
                  </div>
                  <div className="chart-insights mt-3">
                    <small className="text-muted">
                      <strong>Insights:</strong> Instalações Elétricas e Energia Solar 
                      representam 60% dos nossos projetos.
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={8} className="mb-4">
              <Card className="chart-card-enhanced scale-element border-0 shadow-sm h-100">
                <Card.Header className="bg-success text-white">
                  <h5 className="mb-0 d-flex align-items-center">
                    <BsGraphUp className="me-2" />
                    Performance Mensal 2024-2025
                  </h5>
                </Card.Header>
                <Card.Body className="p-4">
                  <div style={{ height: '300px', position: 'relative' }}>
                    <Line data={projectsData} options={chartOptions} />
                  </div>
                  <Row className="chart-metrics mt-3">
                    <Col md={6}>
                      <div className="metric-item">
                        <BsCheckCircleFill className="text-success me-2" />
                        <span className="fw-bold">35</span> projetos em Fevereiro
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="metric-item">
                        <BsGraphUp className="text-primary me-2" />
                        <span className="fw-bold">+40%</span> crescimento no último trimestre
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card className="chart-card-enhanced scale-element border-0 shadow-sm">
                <Card.Header className="bg-warning text-dark">
                  <h5 className="mb-0 d-flex align-items-center">
                    <BsCalendar className="me-2" />
                    Crescimento da ENGENIGMA (2021-2025)
                  </h5>
                </Card.Header>
                <Card.Body className="p-4">
                  <div style={{ height: '250px', position: 'relative' }}>
                    <Line data={growthData} options={chartOptions} />
                  </div>
                  <Row className="growth-highlights mt-4">
                    <Col md={3} className="text-center">
                      <div className="growth-stat">
                        <BsCalendar className="text-primary mb-2" size={24} />
                        <div className="fw-bold">2021</div>
                        <small className="text-muted">Fundação</small>
                      </div>
                    </Col>
                    <Col md={3} className="text-center">
                      <div className="growth-stat">
                        <BsPeople className="text-success mb-2" size={24} />
                        <div className="fw-bold">150+</div>
                        <small className="text-muted">Clientes Atuais</small>
                      </div>
                    </Col>
                    <Col md={3} className="text-center">
                      <div className="growth-stat">
                        <BsGraphUp className="text-warning mb-2" size={24} />
                        <div className="fw-bold">650%</div>
                        <small className="text-muted">Crescimento</small>
                      </div>
                    </Col>
                    <Col md={3} className="text-center">
                      <div className="growth-stat">
                        <BsAward className="text-info mb-2" size={24} />
                        <div className="fw-bold">12</div>
                        <small className="text-muted">Serviços Especializados</small>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Enhanced Achievements Section */}
      <section className="achievements-section py-5">
        <Container>
          <Row>
            <Col>
              <div className="section-header text-center mb-5">
                <h2 className="section-title scale-element">
                  <BsTrophy className="me-2 text-warning" />
                  Sistema de Conquistas
                </h2>
                <p className="section-subtitle text-muted">
                  Desbloqueie conquistas especiais explorando nossos serviços
                </p>
                <div className="achievements-summary">
                  <span className="achievement-points-total">
                    {getTotalAchievementPoints()} pontos de conquistas
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            {achievements.map((achievement) => (
              <Col lg={4} md={6} className="mb-4" key={achievement.id}>
                <Card className={`achievement-card-enhanced scale-element ${achievement.unlocked ? 'unlocked' : 'locked'} h-100`}>
                  <Card.Body className="p-4">
                    <div className="achievement-header d-flex align-items-center mb-3">
                      <div className={`achievement-icon-enhanced me-3 ${achievement.unlocked ? 'text-warning' : 'text-muted'}`}>
                        {achievement.icon}
                      </div>
                      <div className="achievement-rarity">
                        <Badge 
                          bg={achievement.unlocked ? 
                            (achievement.rarity === 'Lendário' ? 'warning' : 
                             achievement.rarity === 'Épico' ? 'danger' : 
                             achievement.rarity === 'Raro' ? 'info' : 'secondary') 
                            : 'secondary'} 
                          className="rarity-badge"
                        >
                          {achievement.rarity}
                        </Badge>
                      </div>
                    </div>
                    <div className="achievement-info">
                      <h5 className="achievement-title-enhanced mb-2">{achievement.title}</h5>
                      <p className="achievement-description-enhanced text-muted mb-3">
                        {achievement.description}
                      </p>
                      <div className="achievement-footer d-flex justify-content-between align-items-center">
                        <div className="achievement-points">
                          <BsStar className="text-warning me-1" />
                          <span className="fw-bold">{achievement.points} pts</span>
                        </div>
                        {achievement.unlocked && achievement.date && (
                          <div className="achievement-date">
                            <small className="text-success">
                              <BsCheckCircleFill className="me-1" />
                              {new Date(achievement.date).toLocaleDateString('pt-BR')}
                            </small>
                          </div>
                        )}
                        {!achievement.unlocked && (
                          <div className="achievement-locked">
                            <BsLock className="text-muted" />
                          </div>
                        )}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Enhanced CTA Section */}
      <section className="dashboard-cta py-5 bg-gradient position-relative overflow-hidden">
        <div className="cta-bg-animation"></div>
        <Container>
          <Row className="text-center">
            <Col lg={10} className="mx-auto">
              <div className="cta-content-enhanced scale-element">
                <div className="cta-icon-container mb-4">
                  <BsTrophy size={48} className="text-warning" />
                </div>
                <h2 className="cta-title-enhanced mb-4">
                  Continue sua Jornada de Descoberta!
                </h2>
                <p className="cta-description-enhanced mb-4">
                  Você já conhece <strong>{completedServices} de {services.length} serviços</strong> da ENGENIGMA. 
                  Explore nosso portfólio completo, descubra soluções inovadoras e desbloqueie todos os badges. 
                  Cada descoberta te aproxima de se tornar um verdadeiro especialista em nossos serviços!
                </p>
                <div className="cta-stats mb-4">
                  <Row>
                    <Col md={4}>
                      <div className="cta-stat">
                        <div className="cta-stat-number">{Math.round(progressPercentage)}%</div>
                        <div className="cta-stat-label">Progresso Atual</div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="cta-stat">
                        <div className="cta-stat-number">{services.length - completedServices}</div>
                        <div className="cta-stat-label">Serviços Restantes</div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="cta-stat">
                        <div className="cta-stat-number">{getNextLevelPoints()}</div>
                        <div className="cta-stat-label">Pontos p/ Próximo Nível</div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="cta-buttons-enhanced">
                  <Button 
                    as={Link}
                    to="/services"
                    variant="success" 
                    size="lg" 
                    className="me-3 cta-button-primary"
                  >
                    <BsEye className="me-2" />
                    Explorar Todos os Serviços
                  </Button>
                  <Button 
                    as={Link}
                    to="/orcamentos"
                    variant="warning" 
                    size="lg"
                    className="cta-button-secondary"
                  >
                    <BsCheckCircleFill className="me-2" />
                    Solicitar Orçamento
                  </Button>
                </div>
                <div className="cta-additional-info mt-4">
                  <small className="text-muted">
                    💡 <strong>Dica:</strong> Visite a página de serviços para descobrir detalhes completos 
                    e desbloquear novos badges automaticamente!
                  </small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Details Modal */}
      <Modal 
        show={showServiceModal} 
        onHide={() => setShowServiceModal(false)} 
        size="lg" 
        centered
        className="service-details-modal"
      >
        <Modal.Header className={`bg-${selectedService?.color || 'primary'} text-white`}>
          <Modal.Title className="d-flex align-items-center">
            <span className="me-3">{selectedService?.icon}</span>
            {selectedService?.title}
          </Modal.Title>
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Close"
            onClick={() => setShowServiceModal(false)}
          ></button>
        </Modal.Header>
        <Modal.Body>
          {selectedService && (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Badge bg={selectedService.color} className="service-category-badge">
                  {selectedService.category}
                </Badge>
                <Badge bg={selectedService.completed ? 'success' : 'secondary'}>
                  {selectedService.completed ? selectedService.level : 'Bloqueado'}
                </Badge>
              </div>
              <p className="service-description mb-4">{selectedService.description}</p>
              
              {selectedService.completed && (
                <div className="service-rewards mb-4">
                  <h6 className="fw-bold">Recompensas Desbloqueadas:</h6>
                  <div className="d-flex align-items-center">
                    <BsStar className="text-warning me-2" />
                    <span>{selectedService.points} pontos</span>
                    <Badge bg={selectedService.color} className="ms-3">
                      Badge {selectedService.level}
                    </Badge>
                  </div>
                  {selectedService.unlockDate && (
                    <small className="text-muted d-block mt-2">
                      Desbloqueado em: {new Date(selectedService.unlockDate).toLocaleDateString('pt-BR')}
                    </small>
                  )}
                </div>
              )}
              
              {!selectedService.completed && (
                <div className="service-unlock-info">
                  <h6 className="fw-bold">Como Desbloquear:</h6>
                  <p className="text-muted">
                    Visite nossa página de serviços e explore os detalhes deste serviço 
                    para desbloqueá-lo automaticamente.
                  </p>
                  {selectedService.progress > 0 && (
                    <div className="unlock-progress">
                      <div className="d-flex justify-content-between mb-2">
                        <span>Progresso de Desbloqueio</span>
                        <span>{selectedService.progress}%</span>
                      </div>
                      <ProgressBar variant={selectedService.color} now={selectedService.progress} />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowServiceModal(false)}>
            Fechar
          </Button>
          <Button 
            as={Link}
            to="/services"
            variant={selectedService?.color || 'primary'}
            onClick={() => setShowServiceModal(false)}
          >
            Ver na Página de Serviços
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
