"use client";

import { twMerge } from "tailwind-merge";

import { CalculationsProps as Props } from "./Calculations.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIpmsStore } from "@/stores/ipms/ipms.store";

const Calculations = (props: Props) => {
  const { className } = props;
  const enemyArmorTechLevel = useIpmsStore(state => state.enemyArmorTechLevel);
  const weaponTechLevel = useIpmsStore(state => state.weaponTechLevel);
  const result = useIpmsStore(state => state.result);

  const calculateIPMDamage = () => {
    const baseDamage = 12000;
    const weaponsTechBonus = weaponTechLevel * 0.1;
    return Math.floor(baseDamage * (1 + weaponsTechBonus));
  };

  if (!result) return null;

  return (
    <Card className={twMerge("Calculations", className)}>
      <CardHeader>
        <CardTitle>Calculation Details</CardTitle>
        <CardDescription>How the calculations are performed</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="text-sm flex flex-col gap-1">
          <div className="font-medium">IPM Damage:</div>
          <div className="text-muted-foreground">
            Base: 12,000 + {weaponTechLevel * 10}% (Weapons Tech) = {calculateIPMDamage().toLocaleString()}
          </div>
        </div>
        <div className="text-sm flex flex-col gap-1">
          <div className="font-medium">Defense Hull:</div>
          <div className="text-muted-foreground">Base Hull + {enemyArmorTechLevel * 10}% (Armor Tech)</div>
        </div>
        <div className="text-sm flex flex-col gap-1">
          <div className="font-medium">IPMs per Defense:</div>
          <div className="text-muted-foreground">Ceiling(Defense Hull ÷ IPM Damage)</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Calculations;
