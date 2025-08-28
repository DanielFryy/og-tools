"use client";

import { RotateCcw } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { InputsSectionProps as Props } from "./InputsSection.types";
import BasicParameters from "../BasicParameters/BasicParameters";
import Bonuses from "../Bonuses/Bonuses";
import LifeformStructures from "../LifeformStructures/LifeformStructures";
import { Button } from "@/components/ui/button";
import { useEnergyStore } from "@/stores/energy/energy.store";

const InputsSection = (props: Props) => {
  const { className } = props;
  const reset = useEnergyStore(state => state.reset);

  return (
    <div className={twMerge("InputsSection flex flex-col gap-6", className)}>
      <BasicParameters />
      <LifeformStructures />
      <Bonuses />
      <Button onClick={reset} variant="outline" size="lg" className="w-full bg-transparent">
        <RotateCcw className="h-4 w-4 mr-2" />
        Reset All Fields
      </Button>
    </div>
  );
};

export default InputsSection;
