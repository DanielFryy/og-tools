"use client";

import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { BreakdownProps as Props } from "./Breakdown.types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useEnergyStore } from "@/stores/energy/energy.store";

const Breakdown = (props: Props) => {
  const { className } = props;
  const baseEnergy = useEnergyStore(state => state.baseEnergy);
  const totalEnergy = useEnergyStore(state => state.totalEnergy);
  const fusionReactorLevel = useEnergyStore(state => state.fusionReactorLevel);
  const energyTechLevel = useEnergyStore(state => state.energyTechLevel);
  const disruptionChamberLevel = useEnergyStore(state => state.disruptionChamberLevel);
  const highPerformanceTransformerLevel = useEnergyStore(state => state.highPerformanceTransformerLevel);
  const itemBonus = useEnergyStore(state => state.itemBonus);
  const lifeformTechBonus = useEnergyStore(state => state.lifeformTechBonus);
  const engineerBonus = useEnergyStore(state => state.engineerBonus);
  const commandingStaffBonus = useEnergyStore(state => state.commandingStaffBonus);
  const allianceBonus = useEnergyStore(state => state.allianceBonus);
  const [isOpen, setIsOpen] = useState(false);
  const itemBonusValue = (() => {
    const n = parseFloat(itemBonus);
    return isNaN(n) ? 0 : n;
  })();
  const disruptionChamberBonus = disruptionChamberLevel * 1.5;
  const lifeformBonus = lifeformTechBonus + highPerformanceTransformerLevel;
  const showAppliedBonuses =
    disruptionChamberBonus > 0 ||
    lifeformBonus > 0 ||
    itemBonusValue > 0 ||
    engineerBonus ||
    commandingStaffBonus ||
    allianceBonus;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className={twMerge("Breakdown", className)}>
        <CardHeader className="flex justify-between gap-2 items-center">
          <div className="flex flex-col gap-1">
            <CardTitle>Calculation Breakdown</CardTitle>
            <CardDescription>How your energy production is calculated</CardDescription>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <ChevronsUpDown />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex flex-col gap-1">
                <div className="font-medium">Base Formula:</div>
                <div className="text-muted-foreground font-mono text-xs bg-muted p-2 rounded">
                  30 x {fusionReactorLevel} x (1.05 + {energyTechLevel} x 0.01)^{fusionReactorLevel}
                </div>
              </div>
              {showAppliedBonuses ? (
                <div className="flex flex-col gap-2">
                  <div className="font-medium">Applied Bonuses:</div>
                  <div className="flex flex-col gap-1 text-muted-foreground">
                    {itemBonusValue > 0 ? (
                      <div>
                        • Item Bonus: +{itemBonusValue}% = {(baseEnergy * (itemBonusValue / 100)).toLocaleString()}
                      </div>
                    ) : null}
                    {lifeformBonus > 0 ? (
                      <div>
                        • Lifeform Tech: +{lifeformBonus}% = {(baseEnergy * (lifeformBonus / 100)).toLocaleString()}
                      </div>
                    ) : null}
                    {engineerBonus ? <div>• Engineer: +10% = {(baseEnergy * (1 / 10)).toLocaleString()}</div> : null}
                    {commandingStaffBonus ? (
                      <div>• Commanding Staff: +2% = {(baseEnergy * (2 / 100)).toLocaleString()}</div>
                    ) : null}
                    {allianceBonus ? (
                      <div>• Alliance Bonus: +5% = {(baseEnergy * (5 / 100)).toLocaleString()}</div>
                    ) : null}
                    {disruptionChamberBonus > 0 ? (
                      <div>
                        • Disruption Chamber: +{disruptionChamberBonus}% ={" "}
                        {(baseEnergy * (disruptionChamberBonus / 100)).toLocaleString()}
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
              <div className="pt-2 border-t">
                <div className="font-medium">Result:</div>
                <div className="text-muted-foreground">
                  Base: {baseEnergy.toLocaleString()} → Total: {totalEnergy.toLocaleString()}
                </div>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default Breakdown;
