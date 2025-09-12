"use client";

import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { BreakdownProps as Props } from "./Breakdown.types";
import { planetSlots } from "../SlotSelect/SlotSelect.helpers";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { usePlanetSizeStore } from "@/stores/planet-size/planet-size.store";

const Breakdown = (props: Props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const planetSlot = usePlanetSizeStore(state => state.planetSlot);
  const discovererClassBonus = usePlanetSizeStore(state => state.discovererClassBonus);
  const researchersAllianceBonus = usePlanetSizeStore(state => state.researchersAllianceBonus);
  const kaeleshLevel = usePlanetSizeStore(state => state.kaeleshDiscovererEnhancementLevel);
  const universeBonus = usePlanetSizeStore(state => state.universeBonus);

  const currentSlotData = planetSlots.find(s => s.slot === Number.parseInt(planetSlot || "4", 10));
  if (!currentSlotData) return null;

  const totalBonusPercent = (() => {
    let total = 0;
    if (discovererClassBonus) total += 10 + kaeleshLevel * 0.2;
    if (researchersAllianceBonus) total += 5;
    return total;
  })();

  const baseAvg = Math.round((currentSlotData.minFields + currentSlotData.maxFields) / 2);
  const baseDiameter = Math.ceil(Math.sqrt(baseAvg) * 1000);
  const appliedMultiplier = 1 + totalBonusPercent / 100;
  const modifiedDiameter = Math.floor(baseDiameter * appliedMultiplier);
  const fieldsAfterBonuses = Math.floor(Math.pow(modifiedDiameter / 1000, 2));
  const finalAvg = fieldsAfterBonuses + universeBonus;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className={twMerge("Breakdown", className)}>
        <CardHeader className="flex justify-between gap-2 items-center">
          <div className="flex flex-col gap-1">
            <CardTitle>Calculation Breakdown</CardTitle>
            <CardDescription>Step-by-step calculation for the average value</CardDescription>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <ChevronsUpDown />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="flex flex-col gap-3 text-sm">
            <div>
              <div className="font-medium">Original Fields (Average):</div>
              <div className="text-muted-foreground">{baseAvg} fields</div>
            </div>
            <div>
              <div className="font-medium">Step 1 - Convert to Diameter:</div>
              <div className="text-muted-foreground">
                ceil(sqrt({baseAvg}) x 1000) = {baseDiameter} km
              </div>
            </div>
            <div>
              <div className="font-medium">Step 2 - Apply Bonuses:</div>
              <div className="text-muted-foreground">
                {baseDiameter} x {appliedMultiplier.toFixed(3)} = {modifiedDiameter} km
              </div>
            </div>
            <div>
              <div className="font-medium">Step 3 - Convert to Fields:</div>
              <div className="text-muted-foreground">
                floor(({modifiedDiameter} ÷ 1000)²) = {fieldsAfterBonuses} fields
              </div>
            </div>
            {universeBonus !== 0 ? (
              <div>
                <div className="font-medium">Step 4 - Apply Universe Bonus:</div>
                <div className="text-muted-foreground">
                  {fieldsAfterBonuses} + {universeBonus} = {finalAvg} fields
                </div>
              </div>
            ) : null}
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default Breakdown;
