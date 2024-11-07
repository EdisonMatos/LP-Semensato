import LpDistrato from "../../../content/LpDistrato";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function WhyUs({}) {
  return (
    <>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            miniTitle={LpDistrato.whyUs.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={LpDistrato.whyUs.sectionHeader.title}
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={LpDistrato.whyUs.cards.card1.icon}
              title={LpDistrato.whyUs.cards.card1.title}
              description={LpDistrato.whyUs.cards.card1.description}
            />
            <FeatureCardLP
              icon={LpDistrato.whyUs.cards.card2.icon}
              title={LpDistrato.whyUs.cards.card2.title}
              description={LpDistrato.whyUs.cards.card2.description}
            />
            <FeatureCardLP
              icon={LpDistrato.whyUs.cards.card3.icon}
              title={LpDistrato.whyUs.cards.card3.title}
              description={LpDistrato.whyUs.cards.card3.description}
            />
            <FeatureCardLP
              icon={LpDistrato.whyUs.cards.card4.icon}
              title={LpDistrato.whyUs.cards.card4.title}
              description={LpDistrato.whyUs.cards.card4.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
