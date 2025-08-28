"use client";

import { Info } from "lucide-react";
import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

import { BasicParametersProps as Props } from "./BasicParameters.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useEnergyStore } from "@/stores/energy/energy.store";

const BasicParameters = (props: Props) => {
  const { className } = props;
  const fusionReactorLevel = useEnergyStore(state => state.fusionReactorLevel);
  const energyTechLevel = useEnergyStore(state => state.energyTechLevel);
  const setFusionReactorLevel = useEnergyStore(state => state.setFusionReactorLevel);
  const setEnergyTechLevel = useEnergyStore(state => state.setEnergyTechLevel);

  const fusionReactorLevelChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const numValue = parseInt(e.target.value, 10);
    setFusionReactorLevel(isNaN(numValue) ? 0 : Math.max(0, numValue));
  };

  const energyTechLevelChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const numValue = parseInt(e.target.value, 10);
    setEnergyTechLevel(isNaN(numValue) ? 0 : Math.max(0, numValue));
  };

  return (
    <Card className={twMerge("BasicParameters", className)}>
      <CardHeader>
        <CardTitle>Basic Parameters</CardTitle>
        <CardDescription>Enter your fusion reactor and technology levels</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <Label htmlFor="fusion-level" className="flex items-center gap-1">
              Fusion Reactor Level
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help min-h-4 min-w-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>The level of your Fusion Reactor building</p>
                </TooltipContent>
              </Tooltip>
            </Label>
            <Input
              id="fusion-level"
              type="number"
              min="0"
              value={fusionReactorLevel}
              onChange={fusionReactorLevelChangeHandler}
              placeholder="0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="energy-tech" className="flex items-center gap-1">
              Energy Technology Level
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help min-h-4 min-w-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Your Energy Technology research level</p>
                </TooltipContent>
              </Tooltip>
            </Label>
            <Input
              id="energy-tech"
              type="number"
              min="0"
              value={energyTechLevel}
              onChange={energyTechLevelChangeHandler}
              placeholder="0"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicParameters;
