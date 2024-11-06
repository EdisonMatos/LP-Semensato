import React from "react";
import CustomTag from "../util/CustomTag";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function ButtonCustom({
  icon,
  label,
  onClick,
  buttonLink,
  className,
  textclassName,
  size,
  sizeFeatures,
  gap,
  removeTarget,
  removeAnchor,
  tagName,
  color = "bg-ctaButtons",
  animation = true,
}) {
  if (size === "small") {
    sizeFeatures = "rounded-full px-[18px] py-[10px]";
    textclassName = "text-paragraph3 font-secondFont";
    gap = "gap-[10px]";
  } else {
    sizeFeatures = "rounded-full px-[30px] py-[16px]";
    textclassName = "text-paragraph4 font-secondFont";
    gap = "gap-[20px]";
  }

  const Animation = animation ? MotionDivDownToUp : "div";

  const CustomTagName = removeAnchor ? "div" : tagName || "a";

  return (
    <CustomTag
      tagName={CustomTagName}
      {...(removeTarget ? {} : { target: "_blank" })}
      {...(removeAnchor ? {} : { href: buttonLink })}
      className=""
    >
      <Animation>
        <button
          onClick={onClick}
          className={`flex ${className} ${sizeFeatures} flex-row items-center justify-around transition ${color} text-white hover:scale-110`}
        >
          <div className={`flex items-center text-center ${gap} min-h-[24px]`}>
            <div className="">{icon}</div>
            <p className={`flex items-center ${textclassName}`}>{label}</p>
          </div>
        </button>
      </Animation>
    </CustomTag>
  );
}
