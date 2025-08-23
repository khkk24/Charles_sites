import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge, Button } from 'react-bootstrap';
import { 
  BsLightning, BsSun, BsShield, BsTools, BsUmbrella, 
  BsTrophy, BsStar, BsCheckCircleFill, BsLock 
} from 'react-icons/bs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import SEO from './SEO';
import '../styles/Dashboard.css';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  const [userLevel, setUserLevel] = useState(1);
  const [totalPoints, setTotalPoints] = useState(750);
  const [completedServices, setCompletedServices] = useState(3);

  const services = [
    {
      id: 1,
      title: 'Instalações Elétricas',
      icon: <BsLightning size={30} />,
      completed: true,
      points: 250,
      level: 'Expert',
      color: 'primary',
      description: 'Badge desbloqueado! Você conhece nossos serviços de instalações elétricas.'
    },
    {
      id: 2,
      title: 'Manutenção Elétrica',
      icon: <BsTools size={30} />,
      completed: true,
      points: 200,
      level: 'Avançado',
      color: 'success',
      description: 'Badge desbloqueado! Você entende a importância da manutenção preventiva.'
    },
    {
      id: 3,
      title: 'Sistemas Fotovoltaicos',
      icon: <BsSun size={30} />,
      completed: true,
      points: 300,
      level: 'Master',
      color: 'warning',
      description: 'Badge desbloqueado! Você está alinhado com a sustentabilidade.'
    },
    {
      id: 4,
      title: 'Segurança Eletrônica',
      icon: <BsShield size={30} />,
      completed: false,
      points: 250,
      level: 'Expert',
      color: 'danger',
      description: 'Badge bloqueado. Explore nossos sistemas de segurança para desbloquear.'
    },
    {
      id: 5,
      title: 'SPDA',
      icon: <BsUmbrella size={30} />,
      completed: false,
      points: 300,
      level: 'Master',
      color: 'info',
      description: 'Badge bloqueado. Conheça nossa proteção atmosférica para desbloquear.'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Primeiro Contato',
      description: 'Visitou o site da Engenigma',
      icon: <BsStar />,
      unlocked: true,
      date: '2025-01-01'
    },
    {
      id: 2,
      title: 'Explorador',
      description: 'Visitou todas as páginas do site',
      icon: <BsTrophy />,
      unlocked: false,
      date: null
    },
    {
      id: 3,
      title: 'Interessado',
      description: 'Solicitou orçamento',
      icon: <BsCheckCircleFill />,
      unlocked: false,
      date: null
    }
  ];

  // Dados para o gráfico de pizza
  const doughnutData = {
    labels: ['Instalações Elétricas', 'Energia Solar', 'Manutenção', 'Segurança', 'SPDA'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          '#0d6efd',
          '#ffc107',
          '#198754',
          '#dc3545',
          '#0dcaf0'
        ],
        borderColor: '#ffffff',
        borderWidth: 2
      }
    ]
  };

  // Dados para o gráfico de barras
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Projetos Concluídos',
        data: [12, 19, 15, 25, 22, 30],
        backgroundColor: '#0d6efd',
        borderColor: '#0d6efd',
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  const progressPercentage = (completedServices / services.length) * 100;

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
        description="Dashboard gamificado da Engenigma. Explore nossos serviços, desbloqueie badges e acompanhe estatísticas de projetos elétricos."
        keywords="dashboard engenigma, gamificação, badges elétricos, estatísticas projetos"
      />
      
      {/* Header Section */}
      <section className="dashboard-header py-5">
        <Container>
          <Row>
            <Col>
              <div className="user-profile scale-element">
                <h1 className="dashboard-title">
                  <BsTrophy className="me-2 text-warning" />
                  Dashboard Engenigma
                </h1>
                <p className="dashboard-subtitle">
                  Acompanhe sua jornada de descoberta dos nossos serviços
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-4">
        <Container>
          <Row>
            <Col md={3} className="mb-3">
              <Card className="stat-card scale-element">
                <Card.Body className="text-center">
                  <div className="stat-number">{userLevel}</div>
                  <div className="stat-label">Nível Atual</div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
              <Card className="stat-card scale-element">
                <Card.Body className="text-center">
                  <div className="stat-number">{totalPoints}</div>
                  <div className="stat-label">Pontos Totais</div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
              <Card className="stat-card scale-element">
                <Card.Body className="text-center">
                  <div className="stat-number">{completedServices}</div>
                  <div className="stat-label">Serviços Conhecidos</div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
              <Card className="stat-card scale-element">
                <Card.Body className="text-center">
                  <div className="stat-number">{Math.round(progressPercentage)}%</div>
                  <div className="stat-label">Progresso</div>
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

      {/* Services Badges */}
      <section className="badges-section py-4">
        <Container>
          <Row>
            <Col>
              <h3 className="section-title mb-4 scale-element">Badges de Serviços</h3>
            </Col>
          </Row>
          <Row>
            {services.map((service) => (
              <Col lg={4} md={6} className="mb-4" key={service.id}>
                <Card className={`badge-card scale-element ${service.completed ? 'completed' : 'locked'}`}>
                  <Card.Body className="text-center">
                    <div className={`badge-icon mb-3 ${service.completed ? '' : 'grayscale'}`}>
                      {service.completed ? service.icon : <BsLock size={30} />}
                    </div>
                    <Card.Title className="badge-title">
                      {service.title}
                      {service.completed && (
                        <BsCheckCircleFill className="ms-2 text-success" size={16} />
                      )}
                    </Card.Title>
                    <div className="badge-level mb-2">
                      <Badge 
                        bg={service.completed ? service.color : 'secondary'} 
                        className="level-badge"
                      >
                        {service.completed ? service.level : 'Bloqueado'}
                      </Badge>
                    </div>
                    <Card.Text className="badge-description">
                      {service.description}
                    </Card.Text>
                    {service.completed && (
                      <div className="badge-points">
                        <BsStar className="text-warning me-1" />
                        {service.points} pontos
                      </div>
                    )}
                    {!service.completed && (
                      <Button variant="outline-primary" size="sm" className="unlock-btn">
                        Explorar para Desbloquear
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Charts Section */}
      <section className="charts-section py-4">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <Card className="chart-card scale-element">
                <Card.Header>
                  <h5 className="mb-0">Distribuição de Serviços</h5>
                </Card.Header>
                <Card.Body>
                  <div style={{ height: '300px', position: 'relative' }}>
                    <Doughnut data={doughnutData} options={chartOptions} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="chart-card scale-element">
                <Card.Header>
                  <h5 className="mb-0">Projetos Mensais (2024)</h5>
                </Card.Header>
                <Card.Body>
                  <div style={{ height: '300px', position: 'relative' }}>
                    <Bar data={barData} options={chartOptions} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section py-4">
        <Container>
          <Row>
            <Col>
              <h3 className="section-title mb-4 scale-element">Conquistas</h3>
            </Col>
          </Row>
          <Row>
            {achievements.map((achievement) => (
              <Col md={4} className="mb-3" key={achievement.id}>
                <Card className={`achievement-card scale-element ${achievement.unlocked ? 'unlocked' : 'locked'}`}>
                  <Card.Body className="d-flex align-items-center">
                    <div className={`achievement-icon me-3 ${achievement.unlocked ? 'text-warning' : 'text-muted'}`}>
                      {achievement.icon}
                    </div>
                    <div className="achievement-info">
                      <h6 className="achievement-title mb-1">{achievement.title}</h6>
                      <small className="achievement-description">{achievement.description}</small>
                      {achievement.unlocked && achievement.date && (
                        <div className="achievement-date">
                          <small className="text-muted">Desbloqueado em {achievement.date}</small>
                        </div>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="dashboard-cta py-5">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <div className="cta-content scale-element">
                <h2>Continue sua Jornada!</h2>
                <p>
                  Explore mais sobre nossos serviços e desbloqueie novos badges. 
                  Quanto mais você conhecer, mais pontos e conquistas você ganhará!
                </p>
                <div className="cta-buttons">
                  <Button variant="primary" size="lg" className="me-3">
                    Explorar Serviços
                  </Button>
                  <Button variant="outline-primary" size="lg">
                    Solicitar Orçamento
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

export default Dashboard;
