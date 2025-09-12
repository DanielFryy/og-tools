"use client";

import { twMerge } from "tailwind-merge";

import { CalculationsProps as Props } from "./Calculations.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Calculations = (props: Props) => {
  const { className } = props;

  return (
    <Card className={twMerge("Calculations", className)}>
      <CardHeader>
        <CardTitle>Calculation Formula</CardTitle>
        <CardDescription>How the planet fields are calculated</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 text-sm">
        <div className="flex flex-col gap-1">
          <div className="font-medium">Step 1 - Fields to Diameter:</div>
          <div className="text-muted-foreground font-mono text-xs bg-muted p-2 rounded">
            Diameter = ceil(sqrt(Fields) x 1000)
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-medium">Step 2 - Apply Modifiers:</div>
          <div className="text-muted-foreground">Multiply diameter by total bonus percentage</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-medium">Step 3 - Diameter to Fields:</div>
          <div className="text-muted-foreground font-mono text-xs bg-muted p-2 rounded">
            Fields = floor((ModifiedDiameter ÷ 1000)²)
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Calculations;
