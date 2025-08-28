"use client";

import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

import { LifeformStructuresProps as Props } from "./LifeformStructures.types";
import InfoTooltip from "@/components/global/InfoTooltip/InfoTooltip";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEnergyStore } from "@/stores/energy/energy.store";

const LifeformStructures = (props: Props) => {
  const { className } = props;
  const disruptionChamberLevel = useEnergyStore(state => state.disruptionChamberLevel);
  const highPerformanceTransformerLevel = useEnergyStore(state => state.highPerformanceTransformerLevel);
  const setDisruptionChamberLevel = useEnergyStore(state => state.setDisruptionChamberLevel);
  const setHighPerformanceTransformerLevel = useEnergyStore(state => state.setHighPerformanceTransformerLevel);

  const disruptionChamberLevelChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const n = Math.floor(e.currentTarget.valueAsNumber);
    setDisruptionChamberLevel(Number.isFinite(n) ? Math.max(0, n) : 0);
  };

  const highPerformanceTransformerLevelChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const n = Math.floor(e.currentTarget.valueAsNumber);
    setHighPerformanceTransformerLevel(Number.isFinite(n) ? Math.max(0, n) : 0);
  };

  return (
    <Card className={twMerge("LifeformStructures", className)}>
      <CardHeader>
        <CardTitle>Lifeform Structures</CardTitle>
        <CardDescription>Enter the levels of energy-boosting lifeform structures</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <Label htmlFor="disruption-chamber" id="disruption-chamber-label">
                Disruption Chamber (Rock'tal)
              </Label>
              <InfoTooltip id="disruption-chamber-tooltip" ariaLabelledBy="disruption-chamber-label">
                <p>Each level provides +1.5% energy bonus.</p>
              </InfoTooltip>
            </div>
            <Input
              id="disruption-chamber"
              type="number"
              min="0"
              value={disruptionChamberLevel}
              onChange={disruptionChamberLevelChangeHandler}
              placeholder="0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <Label htmlFor="high-performance-transformer" id="high-performance-transformer-label">
                High-Performance Transformer (Mechas)
              </Label>
              <InfoTooltip
                id="high-performance-transformer-tooltip"
                ariaLabelledBy="high-performance-transformer-label"
              >
                <p>Each level provides +1% energy bonus. This bonus counts as a lifeform bonus.</p>
              </InfoTooltip>
            </div>
            <Input
              id="high-performance-transformer"
              type="number"
              min="0"
              value={highPerformanceTransformerLevel}
              onChange={highPerformanceTransformerLevelChangeHandler}
              placeholder="0"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LifeformStructures;
