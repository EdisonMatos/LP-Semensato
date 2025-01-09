import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import imgProfilePicture from "../../assets/imgs/about/profile.jpg";
import "../../../src/index.css";
import { infos } from "../../content/content";

const whatsNumber = `${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}`;

export default function WhatsChat({ Chat }) {
  return (
    <div>
      {Chat ? (
        <FloatingWhatsApp
          status="w-3"
          chatboxHeight="auto"
          phoneNumber={whatsNumber}
          notification={true}
          notificationDelay={5}
          notificationLoop={2}
          accountName={infos.name}
          avatar={imgProfilePicture}
          initialMessageByServer={infos.whatsChatDefaultMessage}
          initialMessageByClient={infos.whatsappDefaultMessage}
          statusMessage="Disponível"
          startChatText="Falar no whatsapp"
          tooltipText={
            <p className="text-paragraph4">
              Disponível <strong>24h</strong>
            </p>
          }
          allowEsc={true}
          className=""
        />
      ) : (
        <a
          href={whatsappContactLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-redirect"
        >
          <FloatingWhatsApp
            phoneNumber={whatsappContactLink}
            accountName="Dr. Lúcio Semenssato"
            avatar={imgProfilePicture}
            tooltipText={
              <p className="text-paragraph4">
                Atendimento<strong> 24h</strong>
              </p>
            }
            chatboxHeight={0}
          />
        </a>
      )}
    </div>
  );
}
