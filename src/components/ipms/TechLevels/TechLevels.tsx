"use client";

import { Info } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { TechLevelsProps as Props } from "./TechLevels.types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useIpmsStore } from "@/stores/ipms/ipms.store";

const TechLevels = (props: Props) => {
  const { className } = props;
  const enemyArmorTechLevel = useIpmsStore(state => state.enemyArmorTechLevel);
  const weaponTechLevel = useIpmsStore(state => state.weaponTechLevel);
  const setEnemyArmorTechLevel = useIpmsStore(state => state.setEnemyArmorTechLevel);
  const setWeaponTechLevel = useIpmsStore(state => state.setWeaponTechLevel);

  return (
    <Card className={twMerge("TechLevels", className)}>
      <CardHeader>
        <CardTitle>Technology Levels</CardTitle>
        <CardDescription>Enter the relevant technology levels for accurate calculations</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="enemy-armor" className="flex items-center gap-1">
            Enemy Armor Technology
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Each level increases defense hull by 10%</p>
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            id="enemy-armor"
            type="number"
            min="0"
            value={enemyArmorTechLevel}
            onChange={e => setEnemyArmorTechLevel(Math.max(0, Number.parseInt(e.target.value) || 0))}
            placeholder="0"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="your-weapons" className="flex items-center gap-1">
            Your Weapons Technology
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Each level increases IPM damage by 10%</p>
              </TooltipContent>
            </Tooltip>
          </Label>
          <Input
            id="your-weapons"
            type="number"
            min="0"
            value={weaponTechLevel}
            onChange={e => setWeaponTechLevel(Math.max(0, Number.parseInt(e.target.value) || 0))}
            placeholder="0"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TechLevels;
