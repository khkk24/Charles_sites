import React from "react";
import { Button } from "react-bootstrap";
import WhatsappLogo from '../../images/whatsapp-svgrepo-com.svg';

const WhatsAppButton = ({ phoneNumber, message }) => {
  // Encoder le message pour l'URL
  const encodedMessage = encodeURIComponent(message);

  // URL de redirection vers WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Button
        variant="light"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        style={{
            backgroundColor: '#25D366',
            borderRadius: '50%',
            padding: '0px',
            position: 'fixed', // Position fixe pour rester visible
            bottom: '20px',    // Distance du bas
            right: '20px',     // Distance de la droite
            zIndex: '1000',    // S'assurer que le bouton est au-dessus d'autres éléments
        }}
    >
      <img src={WhatsappLogo} alt="WhatsApp" style={{ width: '70px', height: '70px' }} /> 
    </Button>
  );
};

export default WhatsAppButton;
