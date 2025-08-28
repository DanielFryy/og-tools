// Energy store helper functions and data
import { CalculationParams, EnergyStore } from "./energy.store.types";
import { OmitFunctionProperties } from "@/types/Utils.types";

export const initialState: OmitFunctionProperties<EnergyStore> = {
  baseEnergy: 0,
  totalEnergy: 0,
  fusionReactorLevel: 0,
  energyTechLevel: 0,
  disruptionChamberLevel: 0,
  highPerformanceTransformerLevel: 0,
  itemBonus: "0",
  lifeformTechBonus: 0,
  engineerBonus: false,
  commandingStaffBonus: false,
  allianceBonus: false
} as const;

export const calculateBaseEnergy = (fusionReactorLevel: number, energyTechLevel: number) => {
  if (fusionReactorLevel <= 0) return 0;

  // Base Energy Formula: 30 × [Fusion Reactor Level] × (1.05 + [Energy Technology Level] × 0.01) ^ [Fusion Reactor Level]
  return Math.floor(30 * fusionReactorLevel * Math.pow(1.05 + energyTechLevel * 0.01, fusionReactorLevel));
};

export const calculateTotalEnergy = (params: CalculationParams) => {
  const { baseEnergy, fusionReactorLevel, energyTechLevel, itemBonus, lifeformTechBonus, engineerBonus } = params;
  const { commandingStaffBonus, allianceBonus, disruptionChamberLevel, highPerformanceTransformerLevel } = params;

  // To build a fusion reactor it's necessary to have at least 1 Energy Technology Level
  if (fusionReactorLevel <= 0 || energyTechLevel < 1) return 0;

  // Bonus initialization
  let bonus = 0;

  // Item bonus
  const parsedItemBonus = Number.parseFloat(itemBonus);
  const itemBonusPercent = Number.isFinite(parsedItemBonus) ? parsedItemBonus / 100 : 0;
  bonus += baseEnergy * itemBonusPercent;

  // Disruption Chamber bonus (1.5% per level)
  const disruptionChamberBonusPercent = (disruptionChamberLevel * 1.5) / 100;
  bonus += baseEnergy * disruptionChamberBonusPercent;

  // High Performance Transformer bonus (1% per level)
  const highPerformanceTransformerBonusPercent = (highPerformanceTransformerLevel * 1) / 100;
  bonus += baseEnergy * highPerformanceTransformerBonusPercent;

  // Lifeform tech bonus
  const lifeformBonusPercent = lifeformTechBonus / 100;
  bonus += baseEnergy * lifeformBonusPercent;

  // Engineer bonus (10%)
  if (engineerBonus) bonus += baseEnergy * 0.1;

  // Commanding Staff bonus (2%)
  if (commandingStaffBonus) bonus += baseEnergy * 0.02;

  // Alliance bonus (5%)
  if (allianceBonus) bonus += baseEnergy * 0.05;

  return baseEnergy + bonus;
};

export const getCalculationParams = (state: EnergyStore, overrides: Partial<EnergyStore> = {}): CalculationParams => {
  const { baseEnergy, fusionReactorLevel, energyTechLevel, itemBonus, allianceBonus, lifeformTechBonus } = state;
  const { engineerBonus, commandingStaffBonus, disruptionChamberLevel, highPerformanceTransformerLevel } = state;

  return {
    baseEnergy,
    fusionReactorLevel,
    energyTechLevel,
    itemBonus,
    allianceBonus,
    lifeformTechBonus,
    engineerBonus,
    commandingStaffBonus,
    disruptionChamberLevel,
    highPerformanceTransformerLevel,
    ...overrides
  };
};
