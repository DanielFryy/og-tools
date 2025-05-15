"use client";

import { RecycleIcon, Info } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { RecyclersNeededPanelProps as Props } from "./RecyclersNeededPanel.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import useNumberFormatter from "@/hooks/useNumberFormatter";
import { calculateTotals } from "@/lib/utils";
import { useGlobalsStore } from "@/stores/globals/globals.store";
import { useRecyclersStore } from "@/stores/recyclers/recyclers.store";

const RecyclersNeededPanel = (props: Props) => {
  const { className } = props;
  const staticShips = useRecyclersStore(state => state.units);
  const recyclerCapacity = useRecyclersStore(state => state.recyclerCargoCapacity);
  const setRecyclerCargoCapacity = useRecyclersStore(state => state.setRecyclerCargoCapacity);
  const debrisPercentage = useRecyclersStore(state => state.debrisFieldPercentage);
  const setDebrisPercentage = useRecyclersStore(state => state.setDebrisFieldPercentage);
  const isDeuteriumIncluded = useRecyclersStore(state => state.isDeuteriumIncluded);
  const setIsDeuteriumIncluded = useRecyclersStore(state => state.setIsDeuteriumIncluded);
  const formatNumber = useNumberFormatter();
  const selectedPlayerClass = useGlobalsStore(state => state.selectedPlayerClass);
  const { type: playerClassType = "Collector" } = selectedPlayerClass ?? {};
  const totals = calculateTotals(staticShips, playerClassType, true);
  const debrisField = {
    metal: Math.floor(totals.metal * (debrisPercentage / 100)),
    crystal: Math.floor(totals.crystal * (debrisPercentage / 100)),
    deuterium: isDeuteriumIncluded ? Math.floor(totals.deuterium * (debrisPercentage / 100)) : 0,
    total: 0
  };
  debrisField.total = debrisField.metal + debrisField.crystal + debrisField.deuterium;
  const requiredRecyclers = Math.ceil(debrisField.total / recyclerCapacity);

  const debrisPercentageChangeHandler = (value: number[]) => {
    setDebrisPercentage(value[0]);
  };

  const handleRecyclerCapacityChange = (value: string) => {
    const numValue = Number.parseInt(value, 10);
    const newCapacity = isNaN(numValue) || numValue < 0 ? 0 : numValue;
    setRecyclerCargoCapacity(newCapacity);
  };

  return (
    <Card className={twMerge("RecyclersNeededPanel", className)}>
      <CardHeader>
        <CardTitle>Recyclers Needed</CardTitle>
        <CardDescription>Calculation of recyclers needed to harvest the debris field</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <Label htmlFor="debris-percentage" className="text-sm font-medium flex items-center gap-1">
                Debris field percentage
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Percentage of resources that go to the debris field</p>
                  </TooltipContent>
                </Tooltip>
              </Label>
              <span className="text-sm">{debrisPercentage}%</span>
            </div>
            <Slider
              id="debris-percentage"
              defaultValue={[debrisPercentage]}
              max={100}
              onValueChange={debrisPercentageChangeHandler}
            />
          </div>

          <div className="flex items-center gap-2">
            <Switch id="include-deuterium" checked={isDeuteriumIncluded} onCheckedChange={setIsDeuteriumIncluded} />
            <Label htmlFor="include-deuterium" className="flex items-center gap-1">
              Include deuterium in debris field
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Some servers include deuterium in the debris field, others don't</p>
                </TooltipContent>
              </Tooltip>
            </Label>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <Label htmlFor="recycler-capacity" className="text-sm font-medium flex items-center gap-1">
                Recycler capacity
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Cargo capacity of each recycler</p>
                  </TooltipContent>
                </Tooltip>
              </Label>
            </div>
            <Input
              id="recycler-capacity"
              type="number"
              min={0}
              value={recyclerCapacity}
              onChange={e => handleRecyclerCapacityChange(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <div className="border rounded-md p-4 bg-muted/30 flex flex-col gap-2">
          <h3 className="text-lg font-medium">Debris Field</h3>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-4 gap-2">
              <div>
                <div className="text-sm text-muted-foreground">Metal</div>
                <div className="font-medium">{formatNumber(debrisField.metal)}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Crystal</div>
                <div className="font-medium">{formatNumber(debrisField.crystal)}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Deuterium</div>
                <div className="font-medium">{formatNumber(debrisField.deuterium)}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Total</div>
                <div className="font-medium">{formatNumber(debrisField.total)}</div>
              </div>
            </div>
            <Separator />
            <div className="">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <RecycleIcon className="h-5 w-5 text-primary" />
                  <span className="font-medium">Required recyclers:</span>
                </div>
                <div className="text-2xl font-bold">{requiredRecyclers}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecyclersNeededPanel;
