"use client";

import { twMerge } from "tailwind-merge";

import { InputsSectionProps as Props } from "./InputsSection.types";
import Bonuses from "../Bonuses/Bonuses";
import Calculations from "../Calculations/Calculations";
import SlotSelect from "../SlotSelect/SlotSelect";

const InputsSection = (props: Props) => {
  const { className } = props;

  return (
    <div className={twMerge("InputsSection flex flex-col gap-6", className)}>
      <SlotSelect />
      <Bonuses />
      <Calculations />
    </div>
  );
};

export default InputsSection;
