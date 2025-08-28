// EnergyStore types and interfaces
import { OmitFunctionProperties } from "@/types/Utils.types";

export type EnergyStore = {
  baseEnergy: number;
  totalEnergy: number;
  fusionReactorLevel: number;
  energyTechLevel: number;
  disruptionChamberLevel: number;
  highPerformanceTransformerLevel: number;
  itemBonus: ItemBonus;
  lifeformTechBonus: number;
  engineerBonus: boolean;
  commandingStaffBonus: boolean;
  allianceBonus: boolean;
  setFusionReactorLevel: (level: number) => void;
  setEnergyTechLevel: (level: number) => void;
  setDisruptionChamberLevel: (level: number) => void;
  setHighPerformanceTransformerLevel: (level: number) => void;
  setItemBonus: (bonus: ItemBonus) => void;
  setLifeformTechBonus: (bonus: number) => void;
  setEngineerBonus: (enabled: boolean) => void;
  setCommandingStaffBonus: (enabled: boolean) => void;
  setAllianceBonus: (enabled: boolean) => void;
  reset: () => void;
};

export type CalculationParams = Omit<OmitFunctionProperties<EnergyStore>, "totalEnergy">;

export type ItemBonus = "0" | "20" | "40" | "60" | "80";
