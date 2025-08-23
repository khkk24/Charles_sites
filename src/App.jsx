import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import SiteNavbar from './components/SiteNavbar';
import Home from './components/Home';
import Services from './components/Services';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import QuemSomos from './components/QuemSomos';
import Orcamentos from './components/Orcamentos';
import Blog from './components/Blog';
import Ouvidoria from './components/Ouvidoria';
import Equipe from './components/Equipe';
import SiteFooter from './components/SiteFooter';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <SiteNavbar />
        <main style={{ paddingTop: '80px', minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/orcamentos" element={<Orcamentos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ouvidoria" element={<Ouvidoria />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </Router>
    </ThemeProvider>
  );
}