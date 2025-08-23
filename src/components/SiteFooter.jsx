import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { 
  BsEnvelope, BsPhone, BsGeoAlt, BsWhatsapp, 
  BsFacebook, BsInstagram, BsLinkedin, BsHeart 
} from 'react-icons/bs';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/SiteFooter.css';

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    address: 'Curitiba, PR - Brasil',
    phone: '(41) 3045-9287',
    email: 'servicos@engenigmainstalacoeseletricas.com',
    whatsapp: '5541995226237'
  };

  const services = [
    'Instalações Elétricas',
    'Manutenção Elétrica',
    'Sistemas Fotovoltaicos',
    'Segurança Eletrônica',
    'SPDA'
  ];

  const quickLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/services' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Contato', path: '/contact' }
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de conhecer mais sobre os serviços da Engenigma.');
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <footer className="site-footer">
      {/* Main Footer Content */}
      <div className="footer-content py-5">
        <Container>
          <Row>
            {/* Company Info */}
            <Col lg={4} md={6} className="mb-4">
              <div className="footer-section">
                <h5 className="footer-title">Engenigma</h5>
                <p className="footer-description">
                  Especialistas em instalações elétricas, energia solar e segurança eletrônica. 
                  Oferecemos soluções completas com qualidade e segurança desde 2021.
                </p>
                <div className="company-info">
                  <div className="info-item">
                    <BsGeoAlt className="info-icon" />
                    <span>{contactInfo.address}</span>
                  </div>
                  <div className="info-item">
                    <BsPhone className="info-icon" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="info-item">
                    <BsEnvelope className="info-icon" />
                    <span>{contactInfo.email}</span>
                  </div>
                </div>
              </div>
            </Col>

            {/* Services */}
            <Col lg={2} md={6} className="mb-4">
              <div className="footer-section">
                <h6 className="footer-subtitle">Serviços</h6>
                <Nav className="footer-nav flex-column">
                  {services.map((service, index) => (
                    <Nav.Link key={index} className="footer-link">
                      {service}
                    </Nav.Link>
                  ))}
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
                    Receba dicas e novidades sobre instalações elétricas
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
              </div>
            </Col>

            {/* Company Gallery */}
            <Col lg={3} md={6} className="mb-4">
              <div className="footer-section">
                <h6 className="footer-subtitle">Nossos Projetos</h6>
                <div className="footer-gallery">
                  <div className="gallery-item">
                    <img 
                      src="/images/engenigma-brand-1.jpg" 
                      alt="Projeto Engenigma 1" 
                      className="gallery-image"
                    />
                    <div className="gallery-overlay">
                      <small>Instalações Profissionais</small>
                    </div>
                  </div>
                  <div className="gallery-item">
                    <img 
                      src="/images/engenigma-brand-2.jpg" 
                      alt="Projeto Engenigma 2" 
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
                <strong>Engenigma Instalações Elétricas & Manutenção LTDA - ME</strong>
                <br />
                <small>CNPJ: 41.379.006/0001-07 | Fundada em Março de 2021</small>
              </div>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="copyright">
                <p className="mb-0">
                  © {currentYear} Engenigma. Todos os direitos reservados.
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
