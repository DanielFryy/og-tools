"use client";

import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

import { BonusesProps as Props } from "./Bonuses.types";
import InfoTooltip from "@/components/global/InfoTooltip/InfoTooltip";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectItem } from "@/components/ui/select";
import { SelectContent } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import { SelectTrigger } from "@/components/ui/select";
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useEnergyStore } from "@/stores/energy/energy.store";

const Bonuses = (props: Props) => {
  const { className } = props;
  const itemBonus = useEnergyStore(state => state.itemBonus);
  const lifeformTechBonus = useEnergyStore(state => state.lifeformTechBonus);
  const engineerBonus = useEnergyStore(state => state.engineerBonus);
  const commandingStaffBonus = useEnergyStore(state => state.commandingStaffBonus);
  const allianceBonus = useEnergyStore(state => state.allianceBonus);
  const classBonus = useEnergyStore(state => state.classBonus);
  const setItemBonus = useEnergyStore(state => state.setItemBonus);
  const setLifeformTechBonus = useEnergyStore(state => state.setLifeformTechBonus);
  const setEngineerBonus = useEnergyStore(state => state.setEngineerBonus);
  const setCommandingStaffBonus = useEnergyStore(state => state.setCommandingStaffBonus);
  const setAllianceBonus = useEnergyStore(state => state.setAllianceBonus);
  const setClassBonus = useEnergyStore(state => state.setClassBonus);

  const lifeformTechBonusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const numValue = e.target.valueAsNumber;
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
          <div className="flex items-center gap-1">
            <Label htmlFor="item-bonus" id="item-bonus-label">
              Bonus from Items
            </Label>
            <InfoTooltip id="item-bonus-tooltip" ariaLabelledBy="item-bonus-label">
              Energy bonus from items like Energy Booster
            </InfoTooltip>
          </div>
          <Select value={itemBonus} onValueChange={setItemBonus}>
            <SelectTrigger className="w-full" size="sm" id="item-bonus">
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
          <div className="flex items-center gap-1">
            <Label htmlFor="lifeform-bonus" id="lifeform-bonus-label">
              Lifeform Tech Bonus (%)
            </Label>
            <InfoTooltip id="lifeform-bonus-tooltip" ariaLabelledBy="lifeform-bonus-label">
              Energy bonus from lifeform technologies (can be decimal like 7.5)
            </InfoTooltip>
          </div>
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
            <div className="flex items-center gap-1">
              <Label htmlFor="engineer-bonus" id="engineer-bonus-label">
                Engineer Bonus (+10%)
              </Label>
              <InfoTooltip id="engineer-bonus-tooltip" ariaLabelledBy="engineer-bonus-label">
                Energy bonus from having an Engineer officer
              </InfoTooltip>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              id="commanding-staff-bonus"
              checked={commandingStaffBonus}
              onCheckedChange={setCommandingStaffBonus}
            />
            <div className="flex items-center gap-1">
              <Label htmlFor="commanding-staff-bonus" id="commanding-staff-bonus-label">
                Commanding Staff Bonus (+2%)
              </Label>
              <InfoTooltip id="commanding-staff-bonus-tooltip" ariaLabelledBy="commanding-staff-bonus-label">
                The bonus from the engineer is also applied
              </InfoTooltip>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="class-bonus" checked={classBonus} onCheckedChange={setClassBonus} />
            <div className="flex items-center gap-1">
              <Label htmlFor="class-bonus" id="class-bonus-label">
                Collector Class Bonus (+10%)
              </Label>
              <InfoTooltip id="class-bonus-tooltip" ariaLabelledBy="class-bonus-label">
                Energy bonus from being in the Collector class
              </InfoTooltip>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="alliance-bonus" checked={allianceBonus} onCheckedChange={setAllianceBonus} />
            <div className="flex items-center gap-1">
              <Label htmlFor="alliance-bonus" id="alliance-bonus-label">
                Traders Alliance Bonus (+5%)
              </Label>
              <InfoTooltip id="alliance-bonus-tooltip" ariaLabelledBy="alliance-bonus-label">
                Energy bonus from being in a Traders alliance
              </InfoTooltip>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Bonuses;
