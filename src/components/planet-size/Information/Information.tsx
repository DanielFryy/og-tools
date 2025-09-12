"use client";

import { ChevronsUpDown } from "lucide-react";
import { useId, useState } from "react";
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
            <CardDescription>About planet fields and bonuses</CardDescription>
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
              <div className="font-medium">Planet Slots:</div>
              <div className="text-muted-foreground">
                Planets closer to the sun (lower slot numbers) have more fields. Slot 4 is often considered optimal for
                balance.
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-medium">Discoverer Class:</div>
              <div className="text-muted-foreground">
                Provides +10% planet diameter, which translates to more building fields. Can be enhanced with Kaelesh
                technology.
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-medium">Researchers Alliance:</div>
              <div className="text-muted-foreground">
                Alliance type that provides +5% planet diameter bonus to all members.
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-medium">Kaelesh Enhancement:</div>
              <div className="text-muted-foreground">
                Lifeform technology that enhances the Discoverer class bonus by +0.2% per level (max 100 levels = +20%
                enhancement).
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-medium">Planet Temperature:</div>
              <div className="text-muted-foreground">
                Planets closer to the sun have higher temperatures, which affects solar satellite energy production and
                deuterium synthesis efficiency.
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default Information;
