import BackToTopButton from "../components/interactives/BackToTopButton";
import LPFloatingWhatsappButton from "../components/interactives/LPFloatingWhatsappButton";
import WhatsChat from "../components/interactives/WhatsChat";
import AboutParalaxeLP from "../components/sections/ladingPage/AboutParalaxeLP";
import ContactLP from "../components/sections/ladingPage/ContactLP";
import CtaLP from "../components/sections/ladingPage/CtaLP";
import FeaturesLP from "../components/sections/ladingPage/FeaturesLP";
import FooterLP from "../components/sections/ladingPage/FooterLP";
import HeroLP from "../components/sections/ladingPage/HeroLP";
import WhyUs from "../components/sections/ladingPage/WhyUs";

export default function Pensao() {
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
