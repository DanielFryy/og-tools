"use client";

import { twMerge } from "tailwind-merge";

import { planetSlots } from "./SlotSelect.helpers";
import { SlotSelectProps as Props } from "./SlotSelect.types";
import InfoTooltip from "@/components/global/InfoTooltip/InfoTooltip";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePlanetSizeStore } from "@/stores/planet-size/planet-size.store";

const SlotSelect = (props: Props) => {
  const { className } = props;
  const planetSlot = usePlanetSizeStore(state => state.planetSlot);
  const setPlanetSlot = usePlanetSizeStore(state => state.setPlanetSlot);
  const currentSlotData = planetSlots.find(s => s.slot === Number.parseInt(planetSlot || "8", 10));
  const { bonus } = currentSlotData ?? {};

  return (
    <Card className={twMerge("SlotSelect", className)}>
      <CardHeader>
        <CardTitle>Planet Slot</CardTitle>
        <CardDescription>Select the planet slot position (1-15)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Label htmlFor="slot-select" id="slot-select-label">
              Planet Slot
            </Label>
            <InfoTooltip id="slot-select-tooltip" ariaLabelledBy="slot-select-label">
              <p>Slot 8 has the most fields; slots further from the center have fewer.</p>
            </InfoTooltip>
          </div>
          <Select value={planetSlot || "8"} onValueChange={setPlanetSlot}>
            <SelectTrigger className="w-full" size="sm" id="slot-select">
              <SelectValue placeholder="Select planet slot" />
            </SelectTrigger>
            <SelectContent>
              {planetSlots.map(slot => (
                <SelectItem key={slot.slot} value={slot.slot.toString()}>
                  Slot {slot.slot} ({slot.minFields}-{slot.maxFields} fields)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {bonus ? <div className="text-xs text-green-600 dark:text-green-400">{bonus}</div> : null}
        </div>
      </CardContent>
    </Card>
  );
};

export default SlotSelect;
