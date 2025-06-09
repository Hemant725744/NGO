import { useEffect, useRef } from 'react';
import { Tooltip } from 'bootstrap';
import WH from "../Whatsapp/Whatsapp.png"
import "../Whatsapp/Whatsapp.css";

const WhatsAppButton = () => {
  const phoneNumber = "7385304050";
  const countryCode = "91";
  const tooltipRef = useRef(null);
  const tooltipInstance = useRef(null);

  // Initialize Bootstrap tooltip
  useEffect(() => {
    if (tooltipRef.current) {
      tooltipInstance.current = new Tooltip(tooltipRef.current, {
        placement: 'left',  // Changed to left since button is on right
        title: 'Chat with us on WhatsApp',
        trigger: 'hover focus'
      });
    }

    return () => {
      if (tooltipInstance.current) {
        tooltipInstance.current.dispose();
      }
    };
  }, []);

  return (
    <div className="whatsapp-container">
      <a
        ref={tooltipRef}
        href={`https://wa.me/${countryCode}${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
      >
        <img
          src={WH}
          alt="WhatsApp"
          width="40"
          height="40"
          className="whatsapp-icon"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;