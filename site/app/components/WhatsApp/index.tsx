import React from "react";
import Image from "next/image";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5531987425572"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-20 h-20 bg-green-500 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <Image
        src="/wpp.svg"
        alt="WhatsApp"
        width={80}
        height={80}
      />
    </a>
  );
};

export default WhatsAppButton;
