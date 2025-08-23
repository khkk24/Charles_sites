import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BsLinkedin, BsEnvelope } from 'react-icons/bs';

const Equipe = () => {
  const { darkMode } = useContext(ThemeContext);

  const teamMembers = [
    {
      id: 1,
      name: "Mahutin Charles Géraud ABAMI",
      position: "Fundador & CEO",
      department: "Direção Executiva",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Engenheiro fundador da ENGENIGMA com mais de 10 anos de experiência em instalações elétricas e energia solar. Especialista em projetos de alta complexidade.",
      specialties: ["Gestão Executiva", "Projetos Complexos", "Energia Solar", "Inovação"],
      education: "Engenharia Elétrica - UFPR",
      experience: "10+ anos",
      email: "charles@engenigma.com.br",
      linkedin: "charles-abami"
    },
    {
      id: 2,
      name: "Ana Carolina Mendes",
      position: "Diretora Técnica",
      department: "Engenharia",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Engenheira especialista em sistemas de alta tensão e automação industrial. Responsável pela supervisão técnica de todos os projetos.",
      specialties: ["Alta Tensão", "Automação", "Supervisão Técnica", "NR-10"],
      education: "Engenharia Elétrica - PUC-PR",
      experience: "8+ anos",
      email: "ana.mendes@engenigma.com.br",
      linkedin: "ana-mendes"
    },
    {
      id: 3,
      name: "Roberto Silva Santos",
      position: "Engenheiro Sênior",
      department: "Projetos",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Especialista em projetos elétricos residenciais e comerciais. Responsável pelo desenvolvimento de soluções inovadoras em energia sustentável.",
      specialties: ["Projetos Elétricos", "CAD", "Energia Sustentável", "CREA-PR"],
      education: "Engenharia Elétrica - UTFPR",
      experience: "7+ anos",
      email: "roberto.santos@engenigma.com.br",
      linkedin: "roberto-santos"
    },
    {
      id: 4,
      name: "Mariana Costa Lima",
      position: "Coordenadora de Qualidade",
      department: "Qualidade & Segurança",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Responsável pela implementação de sistemas de qualidade e segurança. Especialista em normas técnicas e certificações.",
      specialties: ["ISO 9001", "Segurança do Trabalho", "Normas ABNT", "Auditoria"],
      education: "Engenharia de Segurança - PUCPR",
      experience: "6+ anos",
      email: "mariana.lima@engenigma.com.br",
      linkedin: "mariana-lima"
    },
    {
      id: 5,
      name: "Lucas Fernandes Oliveira",
      position: "Especialista em Energia Solar",
      department: "Energia Renovável",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Engenheiro especializado em sistemas fotovoltaicos e energia renovável. Líder em projetos de sustentabilidade energética.",
      specialties: ["Energia Fotovoltaica", "Microinversores", "Sustentabilidade", "ANEEL"],
      education: "Engenharia Elétrica - UFSC",
      experience: "5+ anos",
      email: "lucas.oliveira@engenigma.com.br",
      linkedin: "lucas-oliveira"
    },
    {
      id: 6,
      name: "Fernanda Rodrigues",
      position: "Gerente Comercial",
      department: "Vendas & Marketing",
      photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Responsável pela estratégia comercial e relacionamento com clientes. Especialista em desenvolvimento de negócios e parcerias estratégicas.",
      specialties: ["Vendas Técnicas", "CRM", "Negociação", "Marketing Digital"],
      education: "Administração - FGV",
      experience: "8+ anos",
      email: "fernanda.rodrigues@engenigma.com.br",
      linkedin: "fernanda-rodrigues"
    },
    {
      id: 7,
      name: "Carlos Eduardo Pereira",
      position: "Técnico Especialista",
      department: "Operações",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Técnico sênior com vasta experiência em instalações industriais e manutenção preventiva. Especialista em sistemas de proteção.",
      specialties: ["Instalações Industriais", "SPDA", "Manutenção", "NR-10"],
      education: "Técnico em Eletrotécnica - SENAI",
      experience: "12+ anos",
      email: "carlos.pereira@engenigma.com.br",
      linkedin: "carlos-pereira"
    },
    {
      id: 8,
      name: "Juliana Santos Machado",
      position: "Coordenadora de Projetos",
      department: "Gestão de Projetos",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Especialista em gestão de projetos e metodologias ágeis. Responsável pelo planejamento e execução de projetos complexos.",
      specialties: ["Project Management", "Scrum", "Cronogramas", "PMI"],
      education: "Engenharia de Produção - UFPR",
      experience: "6+ anos",
      email: "juliana.machado@engenigma.com.br",
      linkedin: "juliana-machado"
    },
    {
      id: 9,
      name: "André Luiz Barbosa",
      position: "Especialista em Automação",
      department: "Tecnologia",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Engenheiro especializado em automação predial e industrial. Responsável pela implementação de sistemas inteligentes e IoT.",
      specialties: ["Automação Predial", "IoT", "Redes Industriais", "SCADA"],
      education: "Engenharia de Controle - UTFPR",
      experience: "7+ anos",
      email: "andre.barbosa@engenigma.com.br",
      linkedin: "andre-barbosa"
    },
    {
      id: 10,
      name: "Patricia Almeida Costa",
      position: "Analista Financeira",
      department: "Financeiro",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Responsável pela gestão financeira e análise de viabilidade de projetos. Especialista em custos e orçamentos de obras elétricas.",
      specialties: ["Análise Financeira", "Orçamentos", "Custos", "Excel Avançado"],
      education: "Ciências Contábeis - UFPR",
      experience: "5+ anos",
      email: "patricia.costa@engenigma.com.br",
      linkedin: "patricia-costa"
    }
  ];

  const getDepartmentColor = (department) => {
    const colors = {
      'Direção Executiva': 'danger',
      'Engenharia': 'primary',
      'Projetos': 'info',
      'Qualidade & Segurança': 'warning',
      'Energia Renovável': 'success',
      'Vendas & Marketing': 'secondary',
      'Operações': 'dark',
      'Gestão de Projetos': 'primary',
      'Tecnologia': 'info',
      'Financeiro': 'success'
    };
    return colors[department] || 'secondary';
  };

  return (
    <div className="team-page">
      <style jsx>{`
        .team-page {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 60px 0;
        }
        
        .team-member-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
          height: 100%;
        }
        
        .team-member-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        
        .member-photo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #fff;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }
        
        .member-photo:hover {
          transform: scale(1.05);
        }
        
        .member-header {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          text-align: center;
          padding: 40px 20px 60px;
          position: relative;
        }
        
        .member-photo-container {
          margin-top: -60px;
          position: relative;
          z-index: 3;
        }
        
        .member-body {
          padding: 20px 25px;
        }
        
        .specialty-badge {
          font-size: 0.75rem;
          margin: 2px;
          padding: 4px 8px;
          border-radius: 15px;
          transition: all 0.2s ease;
        }
        
        .specialty-badge:hover {
          transform: scale(1.05);
        }
        
        .contact-links {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 15px;
        }
        
        .contact-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
          color: white;
        }
        
        .contact-link.linkedin {
          background: #0077b5;
        }
        
        .contact-link.email {
          background: #ea4335;
        }
        
        .contact-link:hover {
          transform: scale(1.1);
          color: white;
        }
        
        .page-header {
          text-align: center;
          color: white;
          margin-bottom: 60px;
        }
        
        .page-title {
          font-size: 3.5rem;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          margin-bottom: 20px;
        }
        
        .page-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .stats-section {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 50px;
          text-align: center;
          color: white;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffd700;
          transition: all 0.3s ease;
        }
        
        .stat-number:hover {
          transform: scale(1.1);
        }
        
        .stat-label {
          font-size: 1rem;
          opacity: 0.9;
        }
        
        @media (max-width: 768px) {
          .page-title {
            font-size: 2.5rem;
          }
          
          .member-photo {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>

      <Container>
        <div className="page-header">
          <h1 className="page-title">Nossa Equipe</h1>
          <p className="page-subtitle">
            Conheça os profissionais especializados que fazem da ENGENIGMA uma referência 
            em soluções elétricas e energia sustentável
          </p>
        </div>

        <div className="stats-section">
          <Row>
            <Col md={3} className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Profissionais</div>
            </Col>
            <Col md={3} className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Anos de Experiência</div>
            </Col>
            <Col md={3} className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Projetos Concluídos</div>
            </Col>
            <Col md={3} className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfação</div>
            </Col>
          </Row>
        </div>

        <Row>
          {teamMembers.map((member, index) => (
            <Col lg={6} xl={4} key={member.id} className="mb-5">
              <Card className="team-member-card">
                <div className="member-header">
                  <h4 style={{ position: 'relative', zIndex: 2 }}>{member.name}</h4>
                  <Badge bg={getDepartmentColor(member.department)} className="mb-2">
                    {member.department}
                  </Badge>
                  <h5 style={{ position: 'relative', zIndex: 2, opacity: 0.9 }}>
                    {member.position}
                  </h5>
                </div>
                
                <div className="member-photo-container text-center">
                  <img 
                    src={member.photo}
                    alt={member.name}
                    className="member-photo"
                    loading="lazy"
                  />
                </div>
                
                <div className="member-body">
                  <p className="text-muted mb-3" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {member.description}
                  </p>
                  
                  <div className="mb-3">
                    <strong className="text-primary">Especialidades:</strong>
                    <div className="mt-2">
                      {member.specialties.map((specialty, index) => (
                        <Badge 
                          key={index}
                          bg="light" 
                          text="dark"
                          className="specialty-badge"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="row mb-3">
                    <div className="col-6">
                      <small className="text-muted">
                        <strong>Formação:</strong><br/>
                        {member.education}
                      </small>
                    </div>
                    <div className="col-6">
                      <small className="text-muted">
                        <strong>Experiência:</strong><br/>
                        {member.experience}
                      </small>
                    </div>
                  </div>
                  
                  <div className="contact-links">
                    <a 
                      href={`mailto:${member.email}`} 
                      className="contact-link email"
                      title="Email"
                    >
                      <BsEnvelope size={18} />
                    </a>
                    <a 
                      href={`https://linkedin.com/in/${member.linkedin}`} 
                      className="contact-link linkedin"
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Equipe;
