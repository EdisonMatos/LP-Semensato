import BackToTopButton from "../components/interactives/BackToTopButton";
import LPFloatingWhatsappButton from "../components/interactives/LPFloatingWhatsappButton";
import WhatsChat from "../components/interactives/WhatsChat";
import AboutParalaxeLP from "../components/sections/LpDistrato/AboutParalaxeLP";
import ContactLP from "../components/sections/LpDistrato/ContactLP";
import CtaLP from "../components/sections/LpDistrato/CtaLP";
import FeaturesLP from "../components/sections/LpDistrato/FeaturesLP";
import FooterLP from "../components/sections/LpDistrato/FooterLP";
import HeroLP from "../components/sections/LpDistrato/HeroLP";
import WhyUs from "../components/sections/LpDistrato/WhyUs";

export default function Distrato() {
  return (
    <div>
      <HeroLP />
      <FeaturesLP />
      <AboutParalaxeLP />
      <WhyUs />
      <CtaLP />
      <ContactLP />
      <FooterLP />
      <WhatsChat />
      {/* <LPFloatingWhatsappButton /> */}
      <BackToTopButton />
    </div>
  );
}
