import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import imgProfilePicture from "../../assets/imgs/about/profile.jpg";

export default function WhatsChat() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="5514998101526" // Required
        notificationDelay={5}
        accountName="Dr. Lúcio Semenssato" // Optional
        avatar={imgProfilePicture} // Optional
        initialMessageByServer="Olá! Tudo bem? Gostaria de falar comigo agora mesmo? Clique no botão abaixo 👇" // Optional
        initialMessageByClient="Hello! I found your contact on your website. I would like to chat with you about..." // Optional
        statusMessage="Disponível" // Optional
        startChatText="Falar no whatsapp" // Optional
        tooltipText=<p className="text-paragraph4">
          Atendimento
          <strong> 24h</strong>
        </p> // Optional
        allowEsc={true} // Optional
        // Explore all available props below
      />
    </div>
  );
}
