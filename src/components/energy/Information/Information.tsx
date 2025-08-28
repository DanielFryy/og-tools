"use client";

import { ChevronsUpDown } from "lucide-react";
import { useState, useId } from "react";
import { twMerge } from "tailwind-merge";

import { InformationProps as Props } from "./Information.types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Information = (props: Props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();
  const toggleLabel = isOpen ? "Collapse information details" : "Expand information details";

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className={twMerge("Information", className)}>
        <CardHeader className="flex justify-between gap-2 items-center">
          <div className="flex flex-col gap-1">
            <CardTitle>Information</CardTitle>
            <CardDescription>About fusion reactor energy production</CardDescription>
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
              <div className="font-medium">Fusion Reactor:</div>
              <div className="text-muted-foreground">
                Produces energy by consuming deuterium. Higher levels and energy technology significantly increase
                output.
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-medium">Bonuses:</div>
              <div className="text-muted-foreground">
                All bonuses are applied cumulatively to the base energy production. Items and officers can significantly
                boost your energy output.
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-medium">Note:</div>
              <div className="text-muted-foreground">
                This calculator shows gross energy production. Remember that fusion reactors also consume deuterium to
                operate.
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default Information;
