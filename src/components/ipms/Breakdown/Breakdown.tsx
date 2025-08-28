"use client";

import { ChevronsUpDown } from "lucide-react";
import { useId, useState } from "react";
import { twMerge } from "tailwind-merge";

import { BreakdownProps as Props } from "./Breakdown.types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { INTERPLANETARY_MISSILES } from "@/config/constants";
import { useIpmsStore } from "@/stores/ipms/ipms.store";

const { weaponPower: WP } = INTERPLANETARY_MISSILES;

const Breakdown = (props: Props) => {
  const { className } = props;
  const enemyArmorTechLevel = useIpmsStore(state => state.enemyArmorTechLevel);
  const weaponTechLevel = useIpmsStore(state => state.weaponTechLevel);
  const units = useIpmsStore(state => state.units);
  const result = useIpmsStore(state => state.result);
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();
  const toggleLabel = isOpen ? "Collapse breakdown details" : "Expand breakdown details";

  const calculateIPMDamage = () => {
    const baseDamage = WP;
    const weaponsTechBonus = weaponTechLevel * 0.1;
    return Math.floor(baseDamage * (1 + weaponsTechBonus));
  };

  const calculateDefenseHull = (cost: number) => {
    const armorTechBonus = enemyArmorTechLevel * 0.1;
    const baseHull = cost / 10;
    return Math.floor(baseHull * (1 + armorTechBonus));
  };

  const results = units
    .map(unit => {
      const { name, amount, cost } = unit;
      const { metal, crystal, deuterium } = cost;
      const hullPerUnit = calculateDefenseHull(metal + crystal + deuterium);
      const defenseHull = calculateDefenseHull(hullPerUnit);
      const ipmPerUnit = Math.ceil(defenseHull / calculateIPMDamage());
      const totalIPM = ipmPerUnit * amount;

      return {
        name,
        hullPerUnit,
        amount,
        ipmPerUnit,
        totalIPM
      };
    })
    .filter(item => item.amount > 0);

  if (!result) return null;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className={twMerge("Breakdown", className)}>
        <CardHeader className="flex justify-between gap-2 items-center">
          <div className="flex flex-col gap-1">
            <CardTitle>Detailed Breakdown</CardTitle>
            <CardDescription>IPM requirements per defense type</CardDescription>
          </div>
          <CollapsibleTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8"
              aria-controls={contentId}
              aria-expanded={isOpen}
            >
              <ChevronsUpDown aria-hidden="true" focusable="false" />
              <span className="sr-only">{toggleLabel}</span>
            </Button>
          </CollapsibleTrigger>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="flex flex-col gap-3">
            {results.map(item => (
              <div key={item.name} className="flex items-center justify-between p-3 border rounded-lg gap-2">
                <div className="flex flex-col">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.amount} x {item.hullPerUnit.toLocaleString()} hull = {item.ipmPerUnit} IPM each
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold">{item.totalIPM.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">IPMs needed</div>
                </div>
              </div>
            ))}
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default Breakdown;
