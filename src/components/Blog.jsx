import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Blog = () => {
  const { darkMode } = useContext(ThemeContext);

  const blogPosts = [
    {
      id: 1,
      title: "Inovações em Instalações Elétricas para 2024",
      excerpt: "Descubra as principais tendências e tecnologias que estão revolucionando as instalações elétricas.",
      date: "15 de Janeiro, 2024",
      category: "Instalações",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Energia Solar: Investimento que Vale a Pena",
      excerpt: "Como a energia solar pode reduzir significativamente seus custos de energia elétrica.",
      date: "10 de Janeiro, 2024",
      category: "Energia Solar",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Segurança Eletrônica: Protegendo seu Patrimônio",
      excerpt: "A importância dos sistemas de segurança eletrônica na proteção residencial e comercial.",
      date: "5 de Janeiro, 2024",
      category: "Segurança",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "SPDA: Sistema de Proteção contra Descargas Atmosféricas",
      excerpt: "Como proteger sua edificação contra raios e descargas atmosféricas.",
      date: "28 de Dezembro, 2023",
      category: "SPDA",
      readTime: "4 min"
    },
    {
      id: 5,
      title: "Manutenção Elétrica Preventiva: Evitando Problemas",
      excerpt: "A importância da manutenção regular para prevenir acidentes e panes elétricas.",
      date: "20 de Dezembro, 2023",
      category: "Manutenção",
      readTime: "8 min"
    },
    {
      id: 6,
      title: "Automação Residencial: O Futuro está Aqui",
      excerpt: "Como a automação pode tornar sua casa mais inteligente e eficiente.",
      date: "15 de Dezembro, 2023",
      category: "Automação",
      readTime: "6 min"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Instalações': 'primary',
      'Energia Solar': 'success',
      'Segurança': 'warning',
      'SPDA': 'danger',
      'Manutenção': 'info',
      'Automação': 'secondary'
    };
    return colors[category] || 'secondary';
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <h1 className={`text-center mb-5 ${darkMode ? 'text-light' : 'text-dark'}`}>
            Blog Engenigma
          </h1>
          
          <Row className="mb-5">
            <Col lg={8} className="mx-auto">
              <p className={`text-center lead ${darkMode ? 'text-light' : 'text-muted'}`}>
                Fique por dentro das últimas novidades, tendências e insights do mundo das 
                instalações elétricas e energia solar. Nosso blog traz conteúdo especializado 
                para profissionais e clientes que buscam informação de qualidade.
              </p>
            </Col>
          </Row>

          <Row>
            {blogPosts.map((post) => (
              <Col lg={6} key={post.id} className="mb-4">
                <Card className={`h-100 ${darkMode ? 'bg-dark text-light' : ''} shadow-sm`}>
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-3">
                      <Badge bg={getCategoryColor(post.category)} className="me-2">
                        {post.category}
                      </Badge>
                      <small className={darkMode ? 'text-light' : 'text-muted'}>
                        {post.readTime} de leitura
                      </small>
                    </div>
                    
                    <h4 className="mb-3">{post.title}</h4>
                    
                    <p className={`mb-3 ${darkMode ? 'text-light' : 'text-muted'}`}>
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <small className={darkMode ? 'text-light' : 'text-muted'}>
                        {post.date}
                      </small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="mt-5">
            <Col lg={8} className="mx-auto">
              <Card className={`text-center ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
                <Card.Body className="py-4">
                  <h4>Quer receber nossos artigos?</h4>
                  <p className="mb-3">
                    Assine nossa newsletter e receba conteúdo exclusivo sobre engenharia elétrica e inovação.
                  </p>
                  <div className="d-flex justify-content-center">
                    <input 
                      type="email" 
                      className={`form-control me-2 ${darkMode ? 'bg-secondary text-light' : ''}`}
                      placeholder="Seu email aqui..." 
                      style={{ maxWidth: '300px' }}
                    />
                    <button className="btn btn-primary">Assinar</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
