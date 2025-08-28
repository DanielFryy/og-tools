import { create } from "zustand";
import { persist } from "zustand/middleware";

import { calculateBaseEnergy, calculateTotalEnergy, initialState } from "./energy.store.helpers";
import { EnergyStore } from "./energy.store.types";

export const useEnergyStore = create<EnergyStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      setFusionReactorLevel: (level: number) => {
        const { energyTechLevel, itemBonus, lifeformTechBonus, engineerBonus, commandingStaffBonus } = get();
        const { allianceBonus, disruptionChamberLevel, highPerformanceTransformerLevel } = get();
        const baseEnergy = calculateBaseEnergy(level, energyTechLevel);
        const params1 = { baseEnergy, fusionReactorLevel: level, energyTechLevel, itemBonus, allianceBonus };
        const params2 = { lifeformTechBonus, engineerBonus, commandingStaffBonus, disruptionChamberLevel };
        const params = { ...params1, ...params2, highPerformanceTransformerLevel };
        const totalEnergy = calculateTotalEnergy(params);
        set({ fusionReactorLevel: level, baseEnergy, totalEnergy });
      },
      setEnergyTechLevel: (level: number) => {
        const { fusionReactorLevel, itemBonus, lifeformTechBonus, engineerBonus, commandingStaffBonus } = get();
        const { allianceBonus, disruptionChamberLevel, highPerformanceTransformerLevel } = get();
        const baseEnergy = calculateBaseEnergy(fusionReactorLevel, level);
        const params1 = { baseEnergy, fusionReactorLevel, energyTechLevel: level, itemBonus, allianceBonus };
        const params2 = { lifeformTechBonus, engineerBonus, commandingStaffBonus, disruptionChamberLevel };
        const params = { ...params1, ...params2, highPerformanceTransformerLevel };
        const totalEnergy = calculateTotalEnergy(params);
        set({ energyTechLevel: level, baseEnergy, totalEnergy });
      },
      setDisruptionChamberLevel: (level: number) => {
        const { fusionReactorLevel, energyTechLevel, itemBonus, lifeformTechBonus, engineerBonus } = get();
        const { baseEnergy, commandingStaffBonus, allianceBonus, highPerformanceTransformerLevel } = get();
        const params1 = { baseEnergy, fusionReactorLevel, energyTechLevel, itemBonus, allianceBonus };
        const params2 = { lifeformTechBonus, engineerBonus, commandingStaffBonus, disruptionChamberLevel: level };
        const params = { ...params1, ...params2, highPerformanceTransformerLevel };
        const totalEnergy = calculateTotalEnergy(params);
        set({ disruptionChamberLevel: level, totalEnergy });
      },
      setHighPerformanceTransformerLevel: (level: number) => {
        const { fusionReactorLevel, energyTechLevel, itemBonus, lifeformTechBonus, engineerBonus } = get();
        const { baseEnergy, commandingStaffBonus, allianceBonus, disruptionChamberLevel } = get();
        const params1 = { baseEnergy, fusionReactorLevel, energyTechLevel, itemBonus, allianceBonus };
        const params2 = { lifeformTechBonus, engineerBonus, commandingStaffBonus, disruptionChamberLevel };
        const params = { ...params1, ...params2, highPerformanceTransformerLevel: level };
        const totalEnergy = calculateTotalEnergy(params);
        set({ highPerformanceTransformerLevel: level, totalEnergy });
      },
      setItemBonus: (bonus: string) => {
        const { fusionReactorLevel, energyTechLevel, lifeformTechBonus, engineerBonus, commandingStaffBonus } = get();
        const { baseEnergy, allianceBonus, disruptionChamberLevel, highPerformanceTransformerLevel } = get();
        const params1 = { baseEnergy, fusionReactorLevel, energyTechLevel, itemBonus: bonus, allianceBonus };
        const params2 = { lifeformTechBonus, engineerBonus, commandingStaffBonus, disruptionChamberLevel };
        const params = { ...params1, ...params2, highPerformanceTransformerLevel };
        const totalEnergy = calculateTotalEnergy(params);
        set({ itemBonus: bonus, totalEnergy });
      },
      setLifeformTechBonus: (bonus: number) => {
        const { fusionReactorLevel, energyTechLevel, itemBonus, engineerBonus, commandingStaffBonus } = get();
        const { baseEnergy, allianceBonus, disruptionChamberLevel, highPerformanceTransformerLevel } = get();
        const params1 = { baseEnergy, fusionReactorLevel, energyTechLevel, itemBonus, allianceBonus };
        const params2 = { lifeformTechBonus: bonus, engineerBonus, commandingStaffBonus, disruptionChamberLevel };
        const params = { ...params1, ...params2, highPerformanceTransformerLevel };
        const totalEnergy = calculateTotalEnergy(params);
        set({ lifeformTechBonus: bonus, totalEnergy });
      },
      setEngineerBonus: (enabled: boolean) => {
        const { fusionReactorLevel, energyTechLevel, itemBonus, lifeformTechBonus, commandingStaffBonus } = get();
        const { baseEnergy, allianceBonus, disruptionChamberLevel, highPerformanceTransformerLevel } = get();
        const params1 = { baseEnergy, fusionReactorLevel, energyTechLevel, itemBonus, lifeformTechBonus };
        const params2 = { engineerBonus: enabled, commandingStaffBonus, allianceBonus, disruptionChamberLevel };
        if (enabled) {
          const params = { ...params1, ...params2, highPerformanceTransformerLevel };
          const totalEnergy = calculateTotalEnergy(params);
          set({ engineerBonus: enabled, totalEnergy });
        } else {
          const params = { ...params1, ...params2, commandingStaffBonus: false, highPerformanceTransformerLevel };
          const totalEnergy = calculateTotalEnergy(params);
          set({ engineerBonus: enabled, commandingStaffBonus: false, totalEnergy });
        }
      },
      setCommandingStaffBonus: (enabled: boolean) => {
        const { fusionReactorLevel, energyTechLevel, itemBonus, lifeformTechBonus, engineerBonus } = get();
        const { baseEnergy, allianceBonus, disruptionChamberLevel, highPerformanceTransformerLevel } = get();
        const params1 = { baseEnergy, fusionReactorLevel, energyTechLevel, itemBonus, lifeformTechBonus };
        const params2 = { engineerBonus, commandingStaffBonus: enabled, allianceBonus, disruptionChamberLevel };
        if (enabled) {
          const params = { ...params1, ...params2, engineerBonus: true, highPerformanceTransformerLevel };
          const totalEnergy = calculateTotalEnergy(params);
          set({ engineerBonus: true, commandingStaffBonus: enabled, totalEnergy });
        } else {
          const params = { ...params1, ...params2, highPerformanceTransformerLevel };
          const totalEnergy = calculateTotalEnergy(params);
          set({ commandingStaffBonus: enabled, totalEnergy });
        }
      },
      setAllianceBonus: (enabled: boolean) => {
        const { fusionReactorLevel, energyTechLevel, itemBonus, lifeformTechBonus, engineerBonus, baseEnergy } = get();
        const { commandingStaffBonus, disruptionChamberLevel, highPerformanceTransformerLevel } = get();
        const params1 = { baseEnergy, fusionReactorLevel, energyTechLevel, itemBonus, allianceBonus: enabled };
        const params2 = { lifeformTechBonus, engineerBonus, commandingStaffBonus, disruptionChamberLevel };
        const params = { ...params1, ...params2, highPerformanceTransformerLevel };
        const totalEnergy = calculateTotalEnergy(params);
        set({ allianceBonus: enabled, totalEnergy });
      },
      reset: () => {
        set(state => ({ ...state, ...initialState }));
      }
    }),
    { name: "energy-store" }
  )
);
