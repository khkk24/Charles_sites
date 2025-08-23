import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Engenigma Instalações Elétricas", 
  description = "Especialistas em instalações elétricas, energia solar e segurança eletrônica em Curitiba, PR. Orçamento gratuito!", 
  keywords = "instalações elétricas, energia solar, segurança eletrônica, SPDA, Curitiba, manutenção elétrica",
  image = "/og-image.jpg",
  url = window.location.href 
}) => {
  const siteTitle = "Engenigma Instalações Elétricas & Manutenção";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Engenigma Instalações Elétricas" />
      <meta name="language" content="pt-BR" />
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
    </Helmet>
  );
};

export default SEO;
