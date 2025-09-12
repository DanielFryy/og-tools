"use client";

import { ChevronsUpDown } from "lucide-react";
import { useId, useState } from "react";
import { twMerge } from "tailwind-merge";

import { CalculationsProps as Props } from "./Calculations.types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Calculations = (props: Props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();
  const toggleLabel = isOpen ? "Collapse calculation details" : "Expand calculation details";

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className={twMerge("Calculations", className)}>
        <CardHeader className="flex justify-between gap-2 items-center">
          <div className="flex flex-col gap-1">
            <CardTitle>Calculation Formula</CardTitle>
            <CardDescription>How the planet fields are calculated</CardDescription>
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
        <CollapsibleContent id={contentId}>
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
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default Calculations;
