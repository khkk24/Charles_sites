import React, { useState, useEffect } from 'react';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { BsWhatsapp, BsX } from 'react-icons/bs';
import '../styles/WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  const whatsappNumber = '5541999999999';
  const defaultMessage = 'Olá! Gostaria de solicitar um orçamento para serviços elétricos.';

  useEffect(() => {
    // Mostrar o botão após 3 segundos
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Parar a pulsação após 10 segundos
    const pulseTimer = setTimeout(() => {
      setShowPulse(false);
    }, 10000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent(defaultMessage);
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
    
    // Parar a pulsação após clicar
    setShowPulse(false);
  };

  const hideButton = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const tooltip = (
    <Tooltip id="whatsapp-tooltip">
      Fale conosco no WhatsApp!<br />
      <small>Resposta rápida garantida</small>
    </Tooltip>
  );

  return (
    <div className="whatsapp-float">
      {/* Botão de fechar */}
      <Button
        variant="outline-secondary"
        size="sm"
        className="whatsapp-close"
        onClick={hideButton}
        aria-label="Fechar WhatsApp"
      >
        <BsX size={16} />
      </Button>

      {/* Botão principal do WhatsApp */}
      <OverlayTrigger
        placement="left"
        delay={{ show: 250, hide: 400 }}
        overlay={tooltip}
      >
        <Button
          variant="success"
          className={`whatsapp-btn ${showPulse ? 'pulse' : ''}`}
          onClick={openWhatsApp}
          size="lg"
          aria-label="Falar no WhatsApp"
        >
          <BsWhatsapp size={28} />
          
          {/* Indicador de mensagem */}
          <span className="whatsapp-indicator">
            <span className="indicator-dot"></span>
          </span>
          
          {/* Texto do botão (visível apenas em telas maiores) */}
          <span className="whatsapp-text d-none d-md-inline">
            WhatsApp
          </span>
        </Button>
      </OverlayTrigger>

      {/* Mensagem de introdução (aparece apenas nas primeiras vezes) */}
      {showPulse && (
        <div className="whatsapp-intro">
          <div className="intro-bubble">
            <p className="mb-1">
              <strong>🔧 Precisa de ajuda?</strong>
            </p>
            <small>
              Fale conosco no WhatsApp e receba um orçamento rápido!
            </small>
            <div className="intro-arrow"></div>
          </div>
        </div>
      )}

      {/* Botões de ação rápida */}
      <div className="quick-actions">
        <div className="action-btn" data-message="Gostaria de um orçamento para instalação elétrica">
          <span className="action-text">💡 Orçamento</span>
        </div>
        <div className="action-btn" data-message="Preciso de manutenção elétrica urgente">
          <span className="action-text">🚨 Emergência</span>
        </div>
        <div className="action-btn" data-message="Tenho interesse em energia solar">
          <span className="action-text">☀️ Energia Solar</span>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
