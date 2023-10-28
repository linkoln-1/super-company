import React from "react";
import Image from "next/image";
import whatsapp from "../../../public/assets/Icon/whatsapp.svg";
import telegram from "../../../public/assets/Icon/telegram.svg";

export const ContactIcons: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <a
        href="https://wa.me/1234567890?..."
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-block hover:text-blue-300 no-underline"
        aria-label="Contact via WhatsApp"
      >
        +66 680 126 38 48
      </a>
      <span>
        <Image src={whatsapp} alt="WhatsApp Icon" />
      </span>
      <span>
        <Image src={telegram} alt="Telegram Icon" />
      </span>
    </div>
  );
};
