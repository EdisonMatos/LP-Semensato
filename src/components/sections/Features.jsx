import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import ServicesModal from "./ServicesModal";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import MoreFeaturesModal from "./MoreFeaturesModal";
import IconButtonFeatureCard from "../cards/IconButtonFeatureCard";
import Button from "../interactives/Button";

export default function Features({ modal }) {
  return (
    <div>
      <SectionArea id="service" className="squares">
        <SectionShapeDiv
          shapeDivArrow={false}
          shapeColor="text-bgSectionDark"
          paddingbot={false}
        />
        <SectionHeader
          className="text-center"
          miniTitle={content.texts.features.miniTag}
          sectionHeaderTitle={content.texts.features.title}
          sectionHeaderSubtitle={content.texts.features.subtitle}
          color="dark"
        />

        <SectionWrapper>
          <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
            <div className="flex flex-wrap items-center justify-center w-full gap-[40px]">
              <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                <IconButtonFeatureCard
                  icon={content.texts.features.card1.icon}
                  title={content.texts.features.card1.title}
                  paragraph={content.texts.features.card1.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
                <Button size="small" label="Saber Mais" />
              </MotionDivDownToUp>
              <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                <IconButtonFeatureCard
                  icon={content.texts.features.card1.icon}
                  title={content.texts.features.card1.title}
                  paragraph={content.texts.features.card1.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
                <Button size="small" label="Saber Mais" />
              </MotionDivDownToUp>{" "}
              <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                <IconButtonFeatureCard
                  icon={content.texts.features.card1.icon}
                  title={content.texts.features.card1.title}
                  paragraph={content.texts.features.card1.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
                <Button size="small" label="Saber Mais" />
              </MotionDivDownToUp>{" "}
              <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                <IconButtonFeatureCard
                  icon={content.texts.features.card1.icon}
                  title={content.texts.features.card1.title}
                  paragraph={content.texts.features.card1.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
                <Button size="small" label="Saber Mais" />
              </MotionDivDownToUp>{" "}
              <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                <IconButtonFeatureCard
                  icon={content.texts.features.card1.icon}
                  title={content.texts.features.card1.title}
                  paragraph={content.texts.features.card1.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
                <Button size="small" label="Saber Mais" />
              </MotionDivDownToUp>{" "}
              <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                <IconButtonFeatureCard
                  icon={content.texts.features.card1.icon}
                  title={content.texts.features.card1.title}
                  paragraph={content.texts.features.card1.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
                <Button size="small" label="Saber Mais" />
              </MotionDivDownToUp>{" "}
              <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                <IconButtonFeatureCard
                  icon={content.texts.features.card1.icon}
                  title={content.texts.features.card1.title}
                  paragraph={content.texts.features.card1.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
                <Button size="small" label="Saber Mais" />
              </MotionDivDownToUp>{" "}
              <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                <IconButtonFeatureCard
                  icon={content.texts.features.card1.icon}
                  title={content.texts.features.card1.title}
                  paragraph={content.texts.features.card1.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
                <Button size="small" label="Saber Mais" />
              </MotionDivDownToUp>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
