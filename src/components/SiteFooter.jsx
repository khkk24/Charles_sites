import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { 
  BsEnvelope, BsPhone, BsGeoAlt, BsWhatsapp, 
  BsFacebook, BsInstagram, BsLinkedin, BsHeart 
} from 'react-icons/bs';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import getImagePath from '../utils/imagePaths';
import '../styles/SiteFooter.css';

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    address: 'Av. Mal. Floriano Peixoto, 9986 - Boqueirão, Curitiba - PR, 81670-000',
    phone: '(41) 3045-9287',
    email: 'servicos@engenigmainstalacoeseletricas.com',
    whatsapp: '5541995226237'
  };

  // Services matching the ones from Services.jsx
  const services = [
    { name: 'Instalações Elétricas Residenciais', path: '/services', anchor: '#servico-1' },
    { name: 'Sistemas Fotovoltaicos', path: '/services', anchor: '#servico-2' },
    { name: 'Automação Residencial', path: '/services', anchor: '#servico-3' },
    { name: 'Segurança Eletrônica', path: '/services', anchor: '#servico-4' },
    { name: 'SPDA (Para-raios)', path: '/services', anchor: '#servico-5' },
    { name: 'Prevenção a Incêndio', path: '/services', anchor: '#servico-6' },
    { name: 'Instalações Industriais', path: '/services', anchor: '#servico-7' },
    { name: 'Manutenção Elétrica', path: '/services', anchor: '#servico-8' },
    { name: 'Projeto Elétrico', path: '/services', anchor: '#servico-9' },
    { name: 'Laudos e Inspeções', path: '/services', anchor: '#servico-10' },
    { name: 'Iluminação LED', path: '/services', anchor: '#servico-11' },
    { name: 'Quadros Elétricos', path: '/services', anchor: '#servico-12' }
  ];

  // Updated quick links matching the actual project structure
  const quickLinks = [
    { name: 'Início', path: '/' },
    { name: 'Nossos Serviços', path: '/services' },
    { name: 'Quem Somos', path: '/quem-somos' },
    { name: 'Solicitar Orçamento', path: '/orcamentos' },
    { name: 'Contato', path: '/contact' },
    { name: 'Ouvidoria', path: '/ouvidoria' }
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de conhecer mais sobre os serviços da ENGENIGMA.');
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <footer className="site-footer">
      {/* Main Footer Content */}
      <div className="footer-content py-5">
        <Container>
          <Row>
            {/* Company Info */}
            <Col lg={3} md={6} className="mb-4">
              <div className="footer-section">
                <h5 className="footer-title">ENGENIGMA</h5>
                <p className="footer-description">
                  Especialistas em Instalações Elétricas, Energia Solar e Segurança Eletrônica. 
                  Oferecemos soluções completas com qualidade e segurança desde 2021.
                </p>
                <div className="company-info">
                  <div className="info-item">
                    <BsGeoAlt className="info-icon" />
                    <span>{contactInfo.address}</span>
                  </div>
                  <div className="info-item">
                    <BsPhone className="info-icon" />
                    <div className="d-flex flex-column">
                      <a href="tel:+554130459287" className="text-decoration-none text-light">
                        (41) 3045-9287
                      </a>
                      <a href="tel:+5541995226237" className="text-decoration-none text-light">
                        (41) 995226237
                      </a>
                    </div>
                  </div>
                  <div className="info-item">
                    <BsEnvelope className="info-icon" />
                    <span>{contactInfo.email}</span>
                  </div>
                </div>
              </div>
            </Col>

            {/* Services */}
            <Col lg={3} md={6} className="mb-4">
              <div className="footer-section">
                <h6 className="footer-subtitle">Nossos Serviços</h6>
                <Nav className="footer-nav flex-column">
                  {services.slice(0, 8).map((service, index) => (
                    <Link 
                      key={index} 
                      to={service.path}
                      className="footer-link text-decoration-none"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link 
                    to="/services"
                    className="footer-link text-decoration-none fw-bold mt-2"
                  >
                    Ver Todos os Serviços →
                  </Link>
                </Nav>
              </div>
            </Col>

            {/* Quick Links */}
            <Col lg={2} md={6} className="mb-4">
              <div className="footer-section">
                <h6 className="footer-subtitle">Links Rápidos</h6>
                <Nav className="footer-nav flex-column">
                  {quickLinks.map((link, index) => (
                    <LinkContainer key={index} to={link.path}>
                      <Nav.Link className="footer-link">
                        {link.name}
                      </Nav.Link>
                    </LinkContainer>
                  ))}
                </Nav>
              </div>
            </Col>

            {/* Contact & Social */}
            <Col lg={4} md={6} className="mb-4">
              <div className="footer-section">
                <h6 className="footer-subtitle">Entre em Contato</h6>
                <p className="contact-description">
                  Solicite um orçamento gratuito e sem compromisso. 
                  Nossa equipe está pronta para atender você.
                </p>
                
                <div className="social-media mb-3">
                  <h6 className="social-title">Siga-nos</h6>
                  <div className="social-links">
                    <button 
                      className="social-btn whatsapp" 
                      onClick={openWhatsApp}
                      aria-label="WhatsApp"
                    >
                      <BsWhatsapp />
                    </button>
                    <button className="social-btn facebook" aria-label="Facebook">
                      <BsFacebook />
                    </button>
                    <button className="social-btn instagram" aria-label="Instagram">
                      <BsInstagram />
                    </button>
                    <button className="social-btn linkedin" aria-label="LinkedIn">
                      <BsLinkedin />
                    </button>
                  </div>
                </div>

                <div className="newsletter">
                  <h6 className="newsletter-title">Newsletter</h6>
                  <p className="newsletter-description">
                    Receba dicas e novidades sobre Instalações Elétricas
                  </p>
                  <div className="newsletter-form">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Seu e-mail"
                        aria-label="E-mail para newsletter"
                      />
                      <button className="btn btn-primary" type="button">
                        Inscrever
                      </button>
                    </div>
                  </div>
                </div>

                {/* Company Gallery */}
                <div className="mt-4">
                  <h6 className="footer-subtitle">Nossos Projetos</h6>
                  <div className="footer-gallery">
                    <div className="gallery-item">
                      <img 
                        src={getImagePath("/images/engenigma-brand-1.jpg")}
                        alt="Projeto ENGENIGMA 1" 
                        className="gallery-image"
                      />
                      <div className="gallery-overlay">
                        <small>Instalações Profissionais</small>
                      </div>
                    </div>
                    <div className="gallery-item">
                      <img 
                        src={getImagePath("/images/engenigma-brand-2.jpg")}
                        alt="Projeto ENGENIGMA 2" 
                        className="gallery-image"
                      />
                      <div className="gallery-overlay">
                        <small>Equipe Especializada</small>
                      </div>
                    </div>
                  </div>
                  <p className="gallery-description">
                    Veja alguns dos nossos trabalhos realizados com excelência e qualidade.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Legal Footer */}
      <div className="footer-legal py-4">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="company-legal">
                <strong>ENGENIGMA Instalações Elétricas & Manutenção LTDA - ME</strong>
                <br />
                <small>CNPJ: 41.379.006/0001-07 | Fundada em Março de 2021</small>
              </div>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="copyright">
                <p className="mb-0">
                  © {currentYear} ENGENIGMA. Todos os direitos reservados.
                </p>
                {/* <p className="mb-0">
                  <small>
                    Feito com <BsHeart className="text-danger" /> em Curitiba, PR
                  </small>
                </p> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Legal Links */}
      <div className="footer-bottom py-2">
        <Container>
          <Row>
            <Col className="text-center">
              <div className="legal-links">
                <Nav className="justify-content-center">
                  <Nav.Link href="#" className="legal-link">Política de Privacidade</Nav.Link>
                  <Nav.Link href="#" className="legal-link">Termos de Uso</Nav.Link>
                  <Nav.Link href="#" className="legal-link">Cookies</Nav.Link>
                </Nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default SiteFooter;
