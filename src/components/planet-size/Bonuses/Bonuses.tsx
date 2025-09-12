"use client";

import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

import { BonusesProps as Props } from "./Bonuses.types";
import InfoTooltip from "@/components/global/InfoTooltip/InfoTooltip";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { usePlanetSizeStore } from "@/stores/planet-size/planet-size.store";

const Bonuses = (props: Props) => {
  const { className } = props;
  const discovererClassBonus = usePlanetSizeStore(state => state.discovererClassBonus);
  const setDiscovererClassBonus = usePlanetSizeStore(state => state.setDiscovererClassBonus);
  const researchersAllianceBonus = usePlanetSizeStore(state => state.researchersAllianceBonus);
  const setResearchersAllianceBonus = usePlanetSizeStore(state => state.setResearchersAllianceBonus);
  const kaeleshDiscovererEnhancementLevel = usePlanetSizeStore(state => state.kaeleshDiscovererEnhancementLevel);
  const setKaeleshDiscovererEnhancementLevel = usePlanetSizeStore(state => state.setKaeleshDiscovererEnhancementLevel);
  const universeBonus = usePlanetSizeStore(state => state.universeBonus);
  const setUniverseBonus = usePlanetSizeStore(state => state.setUniverseBonus);

  const kaeleshLevelChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const n = Math.floor(e.target.valueAsNumber);
    setKaeleshDiscovererEnhancementLevel(Number.isFinite(n) ? Math.max(0, n) : 0);
  };

  const universeBonusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const n = Math.floor(e.target.valueAsNumber);
    setUniverseBonus(Number.isFinite(n) ? Math.max(0, n) : 0);
  };

  return (
    <Card className={twMerge("Bonuses", className)}>
      <CardHeader>
        <CardTitle>Bonuses</CardTitle>
        <CardDescription>Select class and alliance bonuses that affect planet diameter</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Switch id="discoverer-class" checked={discovererClassBonus} onCheckedChange={setDiscovererClassBonus} />
          <div className="flex items-center gap-1">
            <Label htmlFor="discoverer-class" id="discoverer-class-label">
              Discoverer Class (+10% diameter)
            </Label>
            <InfoTooltip id="discoverer-class-tooltip" ariaLabelledBy="discoverer-class-label">
              Discoverer class provides +10% planet diameter bonus
            </InfoTooltip>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Switch
            id="researchers-alliance"
            checked={researchersAllianceBonus}
            onCheckedChange={setResearchersAllianceBonus}
          />
          <div className="flex items-center gap-1">
            <Label htmlFor="researchers-alliance" id="researchers-alliance-label">
              Researchers Alliance (+5% diameter)
            </Label>
            <InfoTooltip id="researchers-alliance-tooltip" ariaLabelledBy="researchers-alliance-label">
              Researchers alliance provides +5% planet diameter bonus to all members.
            </InfoTooltip>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Label htmlFor="kaelesh-level" id="kaelesh-level-label">
              Kaelesh Discoverer Enhancement Level
            </Label>
            <InfoTooltip id="kaelesh-level-tooltip" ariaLabelledBy="kaelesh-level-label">
              Each level adds +0.2% enhancement to the Discoverer bonus. Only works with Discoverer class.
            </InfoTooltip>
          </div>
          <Input
            id="kaelesh-level"
            type="number"
            min="0"
            step={1}
            value={kaeleshDiscovererEnhancementLevel}
            onChange={kaeleshLevelChangeHandler}
            placeholder="0"
            disabled={!discovererClassBonus}
          />
          {discovererClassBonus && kaeleshDiscovererEnhancementLevel > 0 ? (
            <p className="text-sm text-muted-foreground">
              Enhanced Discoverer bonus: {10 + kaeleshDiscovererEnhancementLevel * 0.2}%
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Label htmlFor="universe-bonus" id="universe-bonus-label">
              Universe Bonus (fields)
            </Label>
            <InfoTooltip id="universe-bonus-tooltip" ariaLabelledBy="universe-bonus-label">
              Additional fields added directly to the final result. This varies by universe settings.
            </InfoTooltip>
          </div>
          <Input
            id="universe-bonus"
            type="number"
            min="0"
            step={1}
            value={universeBonus}
            onChange={universeBonusChangeHandler}
            placeholder="0"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Bonuses;
