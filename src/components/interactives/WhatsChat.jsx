// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import imgProfilePicture from "../../assets/imgs/about/profile.jpg";
import "../../../src/index.css";
import content from "../../content/content";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

// eslint-disable-next-line react/prop-types
export default function WhatsChat({ Chat }) {
  const [chatVisible, setChatVisible] = useState(true);
  const [resetKey, setResetKey] = useState(0); // Chave para reiniciar o FloatingWhatsApp no redirecionamento

  
  const handleChatClose = () => {
    setChatVisible(false);

   
    setTimeout(() => {
      setChatVisible(true);
      setResetKey((prev) => prev + 1);
    }, 1000);
  };

  // Função para redirecionar com reaparecimento do chat
  const handleLinkClick = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do link que redireciona apenas
    setChatVisible(false);

   
    window.open(whatsappContactLink, "_blank");

    // Força o reset do Floating ao retornar para a aba do site novamente
    setTimeout(() => {
      setChatVisible(true);
      setResetKey((prev) => prev + 1); // Reinicia o componente
    }, 1000);
  };

  // Detecta o retorno para a aba do site
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setChatVisible(true); // Reaparece o chat ao voltar para a aba
        setResetKey((prev) => prev + 1); // Força reinicialização do componente
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="">
      {Chat && chatVisible ? (
        <FloatingWhatsApp
          key={resetKey} // Força a reinicialização do componente
          className="bg-red-900 p-[200px]"
          style={{ padding: "10px", background: "black", position: "relative" }}
          status="w-3"
          chatboxHeight="auto"
          phoneNumber={whatsappContactLink}
          notificationDelay={5} // Reinicia a notificação após retorno
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
          onClick={handleLinkClick}
        >
          <FloatingWhatsApp
            key={resetKey} // Força a reinicialização do componente
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
