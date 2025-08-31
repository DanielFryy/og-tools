import { create } from "zustand";
import { persist } from "zustand/middleware";

import { calculateBaseEnergy, calculateTotalEnergy, getCalculationParams, initialState } from "./energy.store.helpers";
import { EnergyStore } from "./energy.store.types";

export const useEnergyStore = create<EnergyStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      setFusionReactorLevel: level => {
        const { energyTechLevel } = get();
        const baseEnergy = calculateBaseEnergy(level, energyTechLevel);
        const overrides = { fusionReactorLevel: level, baseEnergy };
        const params = getCalculationParams(get(), overrides);
        const totalEnergy = calculateTotalEnergy(params);
        set({ ...overrides, totalEnergy });
      },
      setEnergyTechLevel: level => {
        const { fusionReactorLevel } = get();
        const baseEnergy = calculateBaseEnergy(fusionReactorLevel, level);
        const overrides = { energyTechLevel: level, baseEnergy };
        const params = getCalculationParams(get(), overrides);
        const totalEnergy = calculateTotalEnergy(params);
        set({ ...overrides, totalEnergy });
      },
      setDisruptionChamberLevel: level => {
        const overrides = { disruptionChamberLevel: level };
        const params = getCalculationParams(get(), overrides);
        const totalEnergy = calculateTotalEnergy(params);
        set({ ...overrides, totalEnergy });
      },
      setHighPerformanceTransformerLevel: level => {
        const overrides = { highPerformanceTransformerLevel: level };
        const params = getCalculationParams(get(), overrides);
        const totalEnergy = calculateTotalEnergy(params);
        set({ ...overrides, totalEnergy });
      },
      setItemBonus: bonus => {
        const overrides = { itemBonus: bonus };
        const params = getCalculationParams(get(), overrides);
        const totalEnergy = calculateTotalEnergy(params);
        set({ ...overrides, totalEnergy });
      },
      setLifeformTechBonus: bonus => {
        const overrides = { lifeformTechBonus: bonus };
        const params = getCalculationParams(get(), overrides);
        const totalEnergy = calculateTotalEnergy(params);
        set({ ...overrides, totalEnergy });
      },
      setEngineerBonus: enabled => {
        if (enabled) {
          const overrides = { engineerBonus: enabled };
          const params = getCalculationParams(get(), overrides);
          const totalEnergy = calculateTotalEnergy(params);
          set({ ...overrides, totalEnergy });
        } else {
          // Disabling engineer bonus requires disabling commanding staff bonus since it's part of the same system
          const overrides = { engineerBonus: enabled, commandingStaffBonus: false };
          const params = getCalculationParams(get(), overrides);
          const totalEnergy = calculateTotalEnergy(params);
          set({ ...overrides, totalEnergy });
        }
      },
      setCommandingStaffBonus: enabled => {
        if (enabled) {
          // The engineer is part of the commanding staff so we need to enable both
          const overrides = { commandingStaffBonus: enabled, engineerBonus: true };
          const params = getCalculationParams(get(), overrides);
          const totalEnergy = calculateTotalEnergy(params);
          set({ ...overrides, totalEnergy });
        } else {
          const overrides = { commandingStaffBonus: enabled };
          const params = getCalculationParams(get(), overrides);
          const totalEnergy = calculateTotalEnergy(params);
          set({ ...overrides, totalEnergy });
        }
      },
      setAllianceBonus: enabled => {
        const overrides = { allianceBonus: enabled };
        const params = getCalculationParams(get(), overrides);
        const totalEnergy = calculateTotalEnergy(params);
        set({ ...overrides, totalEnergy });
      },
      setClassBonus: enabled => {
        const overrides = { classBonus: enabled };
        const params = getCalculationParams(get(), overrides);
        const totalEnergy = calculateTotalEnergy(params);
        set({ ...overrides, totalEnergy });
      },
      reset: () => {
        set(state => ({ ...state, ...initialState }));
      }
    }),
    { name: "energy-store" }
  )
);
