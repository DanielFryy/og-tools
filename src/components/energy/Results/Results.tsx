"use client";

import { Zap } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { ResultsProps as Props } from "./Results.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEnergyStore } from "@/stores/energy/energy.store";

const Results = (props: Props) => {
  const { className } = props;
  const baseEnergy = useEnergyStore(state => state.baseEnergy);
  const totalEnergy = useEnergyStore(state => state.totalEnergy);

  return (
    <Card className={twMerge("Results", className)}>
      <CardHeader>
        <CardTitle>Energy Production</CardTitle>
        <CardDescription>Calculated energy output from your fusion reactor</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="text-center p-6 border rounded-lg bg-muted/30">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="h-6 w-6 text-yellow-500" />
            <span className="text-lg font-medium">Base Energy</span>
          </div>
          <div className="text-3xl font-bold text-primary">{baseEnergy.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground mt-1">Energy per hour</div>
        </div>

        <div className="text-center p-6 border rounded-lg bg-primary/10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="h-6 w-6 text-yellow-500" />
            <span className="text-lg font-medium">Total Energy</span>
          </div>
          <div className="text-4xl font-bold text-primary">{Math.floor(totalEnergy).toLocaleString()}</div>
          <div className="text-sm text-muted-foreground mt-1">Energy per hour (with bonuses)</div>
        </div>

        {totalEnergy > baseEnergy && (
          <div className="flex flex-col gap-1 text-center p-4 border rounded-lg bg-green-50 dark:bg-green-950/20">
            <div className="text-lg font-medium text-green-700 dark:text-green-400">
              Bonus Energy: +{(totalEnergy - baseEnergy).toLocaleString()}
            </div>
            <div className="text-sm text-green-600 dark:text-green-500">
              {(((totalEnergy - baseEnergy) / baseEnergy) * 100).toFixed(3)}% increase
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Results;
