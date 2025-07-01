"use client";

import { Calculator, RotateCcw } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { CallToActionProps as Props } from "./CallToAction.types";
import { Button } from "@/components/ui/button";
import { INTERPLANETARY_MISSILES } from "@/config/constants";
import { useIpmsStore } from "@/stores/ipms/ipms.store";

const { weaponPower: WP } = INTERPLANETARY_MISSILES;

const CallToAction = (props: Props) => {
  const { className } = props;
  const enemyArmorTechLevel = useIpmsStore(state => state.enemyArmorTechLevel);
  const weaponTechLevel = useIpmsStore(state => state.weaponTechLevel);
  const units = useIpmsStore(state => state.units);
  const setResult = useIpmsStore(state => state.setResult);
  const reset = useIpmsStore(state => state.reset);

  const calculateIPMNeeded = () => {
    const ipmDamage = WP * (1 + weaponTechLevel / 10);
    const { ipmsRequired, ABMs } = units.reduce(
      (acc, unit) => {
        const { cost, amount } = unit;
        const { metal, crystal } = cost;
        if ("subType" in unit && unit.subType === "anti-ballistic") acc.ABMs += amount;
        else {
          const hull = ((metal + crystal) / 10) * (1 + enemyArmorTechLevel / 10);
          acc.ipmsRequired += (amount * hull) / ipmDamage;
        }
        return acc;
      },
      { ipmsRequired: 0, ABMs: 0 }
    );
    const totalIPMs = Math.ceil(ipmsRequired) + ABMs;
    setResult(totalIPMs);
  };

  const resetHandler = () => {
    reset({ exclude: ["enemyArmorTechLevel", "weaponTechLevel"] });
  };

  return (
    <div className={twMerge("CallToAction flex gap-3", className)}>
      <Button onClick={calculateIPMNeeded} className="flex-1" size="lg">
        <Calculator className="h-4 w-4 mr-2" />
        Calculate IPM Requirements
      </Button>
      <Button onClick={resetHandler} variant="outline" size="lg">
        <RotateCcw className="h-4 w-4 mr-2" />
        Reset
      </Button>
    </div>
  );
};

export default CallToAction;
