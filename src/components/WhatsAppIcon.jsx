import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  return (
    <a href="https://wa.me/971527451803" className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={40} />
    </a>
  );
};

export default WhatsAppIcon;
