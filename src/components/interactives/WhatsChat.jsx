import React, { useState } from "react";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import imgProfilePicture from "../../assets/imgs/about/profile.jpg";
import "../../../src/index.css";
import content from "../../content/content";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function WhatsChat({ Chat }) {
  const [chatVisible, setChatVisible] = useState(true);

  const handleChatClose = () => {
    // Oculta o chat e permite que a notificação reapareça
    setChatVisible(false);

    // Reaparece o chat para mostrar a notificação
    setTimeout(() => {
      setChatVisible(true);
    }, 1000); 
  };

  return (
    <div className="">
      {Chat && chatVisible ? (
        <FloatingWhatsApp
          className="bg-red-900 p-[200px]"
          style={{ padding: "10px", background: "black", position: "relative" }}
          status="w-3"
          chatboxHeight="auto"
          phoneNumber={whatsappContactLink}
          notificationDelay={5}
          accountName="Dr. Lúcio Semenssato"
          avatar={imgProfilePicture}
          initialMessageByServer="Gostaria de falar com um Advogado Trabalhista agora mesmo? Clique abaixo 👇"
          initialMessageByClient="Hello! I found your contact on your website. I would like to chat with you about..."
          statusMessage="Disponível"
          startChatText="Falar no whatsapp"
          tooltipText={
            <p className="text-paragraph4">
              Gostaria de falar com um Advogado Trabalhista agora mesmo?
            </p>
          }
          allowEsc={true}
          onClose={handleChatClose}
        />
      ) : (
        <a
          href={whatsappContactLink}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-chat whatsapp-redirect"
        >
          <FloatingWhatsApp
            phoneNumber={whatsappContactLink}
            accountName="Dr. Lúcio Semenssato"
            notificationDelay={5}
            tooltipText={
              <p className="text-paragraph4">
                Gostaria de falar com um Advogado Trabalhista agora mesmo?
              </p>
            }
            avatar={imgProfilePicture}
            chatboxHeight={0}
          />
        </a>
      )}
    </div>
  );
}
