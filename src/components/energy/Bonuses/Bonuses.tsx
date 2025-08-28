"use client";

import { Info } from "lucide-react";
import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

import { BonusesProps as Props } from "./Bonuses.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectItem } from "@/components/ui/select";
import { SelectContent } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import { SelectTrigger } from "@/components/ui/select";
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useEnergyStore } from "@/stores/energy/energy.store";

const Bonuses = (props: Props) => {
  const { className } = props;
  const itemBonus = useEnergyStore(state => state.itemBonus);
  const lifeformTechBonus = useEnergyStore(state => state.lifeformTechBonus);
  const engineerBonus = useEnergyStore(state => state.engineerBonus);
  const commandingStaffBonus = useEnergyStore(state => state.commandingStaffBonus);
  const allianceBonus = useEnergyStore(state => state.allianceBonus);
  const setItemBonus = useEnergyStore(state => state.setItemBonus);
  const setLifeformTechBonus = useEnergyStore(state => state.setLifeformTechBonus);
  const setEngineerBonus = useEnergyStore(state => state.setEngineerBonus);
  const setCommandingStaffBonus = useEnergyStore(state => state.setCommandingStaffBonus);
  const setAllianceBonus = useEnergyStore(state => state.setAllianceBonus);

  const lifeformTechBonusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const numValue = parseFloat(e.target.value);
    setLifeformTechBonus(isNaN(numValue) ? 0 : Math.max(0, numValue));
  };

  return (
    <Card className={twMerge("Bonuses", className)}>
      <CardHeader>
        <CardTitle>Bonuses</CardTitle>
        <CardDescription>Select any bonuses that apply to your energy production</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="item-bonus" className="flex items-center gap-1">
            Bonus from Items
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Energy bonus from items like Energy Booster</p>
              </TooltipContent>
            </Tooltip>
          </Label>
          <Select value={itemBonus} onValueChange={setItemBonus}>
            <SelectTrigger className="w-full" size="sm">
              <SelectValue placeholder="Select item bonus" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">None (0%)</SelectItem>
              <SelectItem value="20">Bronze Booster (20%)</SelectItem>
              <SelectItem value="40">Silver Booster (40%)</SelectItem>
              <SelectItem value="60">Gold Booster (60%)</SelectItem>
              <SelectItem value="80">Platinum Booster (80%)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="lifeform-bonus" className="flex items-center gap-1">
            Lifeform Tech Bonus (%)
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Energy bonus from lifeform technologies (can be decimal like 7.5)</p>
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            id="lifeform-bonus"
            type="number"
            min="0"
            step="0.1"
            value={lifeformTechBonus}
            onChange={lifeformTechBonusChangeHandler}
            placeholder="0"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Switch id="engineer-bonus" checked={engineerBonus} onCheckedChange={setEngineerBonus} />
            <Label htmlFor="engineer-bonus" className="flex items-center gap-1">
              Engineer Bonus (+10%)
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Energy bonus from having an Engineer officer</p>
                </TooltipContent>
              </Tooltip>
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="commanding-staff-bonus"
              checked={commandingStaffBonus}
              onCheckedChange={setCommandingStaffBonus}
            />
            <Label htmlFor="commanding-staff-bonus" className="flex items-center gap-1">
              Commanding Staff Bonus (+2%)
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>The bonus from the engineer is also applied</p>
                </TooltipContent>
              </Tooltip>
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Switch id="commanding-staff-bonus" checked={allianceBonus} onCheckedChange={setAllianceBonus} />
            <Label htmlFor="commanding-staff-bonus" className="flex items-center gap-1">
              Traders Alliance Bonus (+5%)
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Energy bonus from being in a Traders alliance</p>
                </TooltipContent>
              </Tooltip>
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Bonuses;
