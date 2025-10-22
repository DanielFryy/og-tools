"use client";

import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

import { TechLevelsProps as Props } from "./TechLevels.types";
import InfoTooltip from "@/components/global/InfoTooltip/InfoTooltip";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useIpmsStore } from "@/stores/ipms/ipms.store";

const TechLevels = (props: Props) => {
  const { className } = props;
  const enemyArmorTechLevel = useIpmsStore(state => state.enemyArmorTechLevel);
  const weaponTechLevel = useIpmsStore(state => state.weaponTechLevel);
  const missileSiloLevel = useIpmsStore(state => state.missileSiloLevel);
  const setEnemyArmorTechLevel = useIpmsStore(state => state.setEnemyArmorTechLevel);
  const setWeaponTechLevel = useIpmsStore(state => state.setWeaponTechLevel);
  const setMissileSiloLevel = useIpmsStore(state => state.setMissileSiloLevel);

  const enemyArmorTechLevelChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const numValue = e.target.valueAsNumber;
    setEnemyArmorTechLevel(isNaN(numValue) ? 0 : Math.max(0, numValue));
  };

  const weaponTechLevelChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const numValue = e.target.valueAsNumber;
    setWeaponTechLevel(isNaN(numValue) ? 0 : Math.max(0, numValue));
  };

  const missileSiloLevelChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const numValue = e.target.valueAsNumber;
    setMissileSiloLevel(isNaN(numValue) ? 0 : Math.max(0, numValue));
  };

  return (
    <Card className={twMerge("TechLevels", className)}>
      <CardHeader>
        <CardTitle>Technology Levels</CardTitle>
        <CardDescription>Enter the relevant technology levels for accurate calculations</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Label htmlFor="enemy-armor" id="enemy-armor-label">
              Enemy Armor Technology
            </Label>
            <InfoTooltip id="enemy-armor-tooltip" ariaLabelledBy="enemy-armor-label">
              Each level increases defense hull by 10%
            </InfoTooltip>
          </div>
          <Input
            id="enemy-armor"
            type="number"
            min="0"
            value={enemyArmorTechLevel}
            onChange={enemyArmorTechLevelChangeHandler}
            placeholder="0"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Label htmlFor="your-weapons" id="your-weapons-label">
              Your Weapons Technology
            </Label>
            <InfoTooltip id="your-weapons-tooltip" ariaLabelledBy="your-weapons-label">
              Each level increases IPM damage by 10%
            </InfoTooltip>
          </div>
          <Input
            id="your-weapons"
            type="number"
            min="0"
            value={weaponTechLevel}
            onChange={weaponTechLevelChangeHandler}
            placeholder="0"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Label htmlFor="missile-silo" id="missile-silo-label">
              Missile Silo Level
            </Label>
            <InfoTooltip id="missile-silo-tooltip" ariaLabelledBy="missile-silo-label">
              It would determine how many missiles can be launched per round (level * 5).
            </InfoTooltip>
          </div>
          <Input
            id="missile-silo"
            type="number"
            min="0"
            value={missileSiloLevel}
            onChange={missileSiloLevelChangeHandler}
            placeholder="0"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TechLevels;
