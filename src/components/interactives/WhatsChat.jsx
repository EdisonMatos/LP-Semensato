import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import imgProfilePicture from "../../assets/imgs/about/profile.jpg";
import "../../../src/index.css";
import content from "../../content/content";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

// eslint-disable-next-line react/prop-types
export default function WhatsChat({ Chat }) {
  return (
    <div className="">
      {Chat ? (
        <FloatingWhatsApp
          className="bg-red-900 p-[200px]"
          style={{ padding: "10px", background: "black", position: "relative" }} // Alinhamento relativo
          status="w-3"
          chatboxHeight="auto"
          phoneNumber={whatsappContactLink}
          notificationDelay={5}
          accountName="Dr. Lúcio Semenssato"
          avatar={imgProfilePicture}
          initialMessageByServer="Gostaria de falar com um Advogado Trabalhista agora mesmo?"
          initialMessageByClient="Hello! I found your contact on your website. I would like to chat with you about..."
          statusMessage="Disponível"
          startChatText="Falar no whatsapp"
          tooltipText={
            <p className="text-paragraph4">Gostaria de falar com um Advogado Trabalhista agora
                mesmo?</p>
          }
          allowEsc={true}
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
            avatar={imgProfilePicture}
            tooltipText={
              <p className="text-paragraph4">
                Gostaria de falar com um Advogado Trabalhista agora
                mesmo?{" "}
              </p>
            }
            chatboxHeight={0}
          />
        </a>
      )}
    </div>
  );
}
