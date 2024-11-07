import LpDistrato from "../../../content/LpDistrato";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function FeaturesLP({ className }) {
  return (
    <>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            miniTitle={LpDistrato.features.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={LpDistrato.features.sectionHeader.title}
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={LpDistrato.features.cards.card1.icon}
              title={LpDistrato.features.cards.card1.title}
              description={LpDistrato.features.cards.card1.description}
            />
            <FeatureCardLP
              icon={LpDistrato.features.cards.card2.icon}
              title={LpDistrato.features.cards.card2.title}
              description={LpDistrato.features.cards.card2.description}
            />
            <FeatureCardLP
              icon={LpDistrato.features.cards.card3.icon}
              title={LpDistrato.features.cards.card3.title}
              description={LpDistrato.features.cards.card3.description}
            />
            <FeatureCardLP
              icon={LpDistrato.features.cards.card4.icon}
              title={LpDistrato.features.cards.card4.title}
              description={LpDistrato.features.cards.card4.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
