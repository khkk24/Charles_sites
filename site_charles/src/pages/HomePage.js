import React from 'react';

import Header from '../components/organisms/Header';
import Service from '../components/organisms/ServicesSection'
import Footer from '../components/organisms/Footer';
import AboutSection from '../components/organisms/AboutSection';
import ClientsSection from '../components/organisms/ClientsSection';
import Contact from '../components/organisms/ContactSection';

const HomePage = () => {
  return (
    <>

        <Header />
        <main>
          <AboutSection />
          <Service />
          <ClientsSection />
          <Contact />
        </main>
        <Footer />

    </>
  );
};

export default HomePage;
