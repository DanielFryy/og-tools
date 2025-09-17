"use client";

import { Globe } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { ResultsProps as Props } from "./Results.types";
import { planetSlots } from "../SlotSelect/SlotSelect.helpers";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { usePlanetSizeStore } from "@/stores/planet-size/planet-size.store";

const Results = (props: Props) => {
  const { className } = props;
  const planetSlot = usePlanetSizeStore(state => state.planetSlot);
  const discovererClassBonus = usePlanetSizeStore(state => state.discovererClassBonus);
  const researchersAllianceBonus = usePlanetSizeStore(state => state.researchersAllianceBonus);
  const kaeleshLevel = usePlanetSizeStore(state => state.kaeleshDiscovererEnhancementLevel);
  const universeBonus = usePlanetSizeStore(state => state.universeBonus);
  const currentSlotData = planetSlots.find(s => s.slot === Number.parseInt(planetSlot || "8", 10));

  const getTotalDiameterBonus = (): number => {
    let totalBonus = 0;
    if (discovererClassBonus) {
      totalBonus += 10;
      if (kaeleshLevel > 0) totalBonus += kaeleshLevel * 0.2;
    }
    if (researchersAllianceBonus) totalBonus += 5;
    return totalBonus;
  };

  const calculateModifiedFields = (originalFields: number): number => {
    const diameter = Math.ceil(Math.sqrt(originalFields) * 1000);
    let multiplier = 1;
    if (discovererClassBonus) {
      let bonus = 0.1;
      if (kaeleshLevel > 0) bonus += kaeleshLevel * 0.002;
      multiplier += bonus;
    }
    if (researchersAllianceBonus) multiplier += 0.05;
    const modifiedDiameter = Math.floor(diameter * multiplier);
    return Math.floor(Math.pow(modifiedDiameter / 1000, 2));
  };

  if (!currentSlotData) return null;

  const baseMin = currentSlotData.minFields;
  const baseAvg = Math.round((currentSlotData.minFields + currentSlotData.maxFields) / 2);
  const baseMax = currentSlotData.maxFields;

  const modifiedMin = calculateModifiedFields(baseMin) + universeBonus;
  const modifiedAvg = calculateModifiedFields(baseAvg) + universeBonus;
  const modifiedMax = calculateModifiedFields(baseMax) + universeBonus;

  const avgTemp = Math.round((currentSlotData.minTemp + currentSlotData.maxTemp) / 2);

  return (
    <Card className={twMerge("Results flex flex-col gap-6", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5" />
          Planet Slot {currentSlotData.slot} Results
        </CardTitle>
        <CardDescription>
          {`Field estimates with ${getTotalDiameterBonus() > 0 ? `+${getTotalDiameterBonus().toFixed(1)}% diameter bonus` : "no bonuses"}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-muted-foreground">Base Values (No Bonuses)</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 border rounded-lg bg-muted/30">
                <div className="text-2xl font-bold">{baseMin}</div>
                <div className="text-sm text-muted-foreground">Minimum</div>
              </div>
              <div className="text-center p-3 border rounded-lg bg-muted/30">
                <div className="text-2xl font-bold">{baseAvg}</div>
                <div className="text-sm text-muted-foreground">Average</div>
              </div>
              <div className="text-center p-3 border rounded-lg bg-muted/30">
                <div className="text-2xl font-bold">{baseMax}</div>
                <div className="text-sm text-muted-foreground">Maximum</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-primary">Modified Values (With Bonuses)</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 border rounded-lg bg-primary/10">
                <div className="text-2xl font-bold text-primary">{modifiedMin}</div>
                <div className="text-sm text-muted-foreground">Minimum</div>
                {modifiedMin !== baseMin ? (
                  <div className="text-xs text-green-600 dark:text-green-400">+{modifiedMin - baseMin}</div>
                ) : null}
              </div>
              <div className="text-center p-3 border rounded-lg bg-primary/10">
                <div className="text-2xl font-bold text-primary">{modifiedAvg}</div>
                <div className="text-sm text-muted-foreground">Average</div>
                {modifiedAvg !== baseAvg ? (
                  <div className="text-xs text-green-600 dark:text-green-400">+{modifiedAvg - baseAvg}</div>
                ) : null}
              </div>
              <div className="text-center p-3 border rounded-lg bg-primary/10">
                <div className="text-2xl font-bold text-primary">{modifiedMax}</div>
                <div className="text-sm text-muted-foreground">Maximum</div>
                {modifiedMax !== baseMax ? (
                  <div className="text-xs text-green-600 dark:text-green-400">+{modifiedMax - baseMax}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t pt-2">
            <h4 className="font-medium text-muted-foreground">Planet Temperature</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{currentSlotData.minTemp}°C</div>
                <div className="text-sm text-muted-foreground">Minimum</div>
              </div>
              <div className="text-center p-3 border rounded-lg bg-yellow-50 dark:bg-yellow-950/20">
                <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400">{avgTemp}°C</div>
                <div className="text-sm text-muted-foreground">Average</div>
              </div>
              <div className="text-center p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                <div className="text-xl font-bold text-red-600 dark:text-red-400">{currentSlotData.maxTemp}°C</div>
                <div className="text-sm text-muted-foreground">Maximum</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Results;
