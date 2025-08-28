"use client";

import { Info } from "lucide-react";
import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

import { LifeformStructuresProps as Props } from "./LifeformStructures.types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useEnergyStore } from "@/stores/energy/energy.store";

const LifeformStructures = (props: Props) => {
  const { className } = props;
  const disruptionChamberLevel = useEnergyStore(state => state.disruptionChamberLevel);
  const highPerformanceTransformerLevel = useEnergyStore(state => state.highPerformanceTransformerLevel);
  const setDisruptionChamberLevel = useEnergyStore(state => state.setDisruptionChamberLevel);
  const setHighPerformanceTransformerLevel = useEnergyStore(state => state.setHighPerformanceTransformerLevel);

  const disruptionChamberLevelChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const numValue = parseFloat(e.target.value);
    setDisruptionChamberLevel(isNaN(numValue) ? 0 : Math.max(0, numValue));
  };

  const highPerformanceTransformerLevelChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const numValue = parseFloat(e.target.value);
    setHighPerformanceTransformerLevel(isNaN(numValue) ? 0 : Math.max(0, numValue));
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
            <Label htmlFor="disruption-chamber" className="flex items-center gap-1">
              Disruption Chamber (Rock'tal)
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help min-h-4 min-w-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Each level provides +1.5% energy bonus</p>
                </TooltipContent>
              </Tooltip>
            </Label>
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
            <Label htmlFor="high-performance-transformer" className="flex items-center gap-1">
              High-Performance Transformer (Mechas)
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help min-h-4 min-w-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Each level provides +1% energy bonus. This bonus counts as a lifeform bonus</p>
                </TooltipContent>
              </Tooltip>
            </Label>
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
