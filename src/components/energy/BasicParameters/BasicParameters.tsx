"use client";

import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

import { BasicParametersProps as Props } from "./BasicParameters.types";
import InfoTooltip from "@/components/global/InfoTooltip/InfoTooltip";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEnergyStore } from "@/stores/energy/energy.store";

const BasicParameters = (props: Props) => {
  const { className } = props;
  const fusionReactorLevel = useEnergyStore(state => state.fusionReactorLevel);
  const energyTechLevel = useEnergyStore(state => state.energyTechLevel);
  const setFusionReactorLevel = useEnergyStore(state => state.setFusionReactorLevel);
  const setEnergyTechLevel = useEnergyStore(state => state.setEnergyTechLevel);

  const fusionReactorLevelChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const n = Math.floor(e.currentTarget.valueAsNumber);
    setFusionReactorLevel(Number.isFinite(n) ? Math.max(0, n) : 0);
  };

  const energyTechLevelChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const n = Math.floor(e.currentTarget.valueAsNumber);
    setEnergyTechLevel(Number.isFinite(n) ? Math.max(0, n) : 0);
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
            <div className="flex items-center gap-1">
              <Label htmlFor="fusion-level" id="fusion-level-label">
                Fusion Reactor Level
              </Label>
              <InfoTooltip id="disruption-chamber-tooltip" ariaLabelledBy="fusion-level-label">
                <p>The level of your Fusion Reactor building</p>
              </InfoTooltip>
            </div>
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
            <div className="flex items-center gap-1">
              <Label htmlFor="energy-tech" id="energy-tech-label">
                Energy Technology Level
              </Label>
              <InfoTooltip id="energy-tech-tooltip" ariaLabelledBy="energy-tech-label">
                <p>Your Energy Technology research level</p>
              </InfoTooltip>
            </div>
            <Input
              id="energy-tech"
              type="number"
              min="1"
              value={energyTechLevel}
              onChange={energyTechLevelChangeHandler}
              placeholder="1"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicParameters;
