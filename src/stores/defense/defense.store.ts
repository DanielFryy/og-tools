import { create } from "zustand";

import { DefenseStore } from "./defense.store.types";
import { CONSTANTS } from "@/config/constants";
// import { calculateUnitsDistribution } from "@/utils/global.utils";

const { DEFENSES: UNITS } = CONSTANTS;

export const useDefenseStore = create<DefenseStore>((set, get) => ({
  units: UNITS.map(unit => ({ ...unit, amount: 0, ratio: "0" })),
  baseUnit: null,
  setBaseUnit: unitName => {
    const { units, reset } = get();
    const baseUnit = units.find(unit => unit.name === unitName);
    if (!baseUnit) return;
    // // Calculate the new ship distribution
    reset();
    set({ baseUnit });
  },
  setRatio: (unitName, ratio) => {
    set(state => {
      const { units, baseUnit } = state;
      if (!baseUnit) return state;
      const { amount: baseUnitAmount } = baseUnit;
      // Calculate the new unit distribution
      const updatedUnits = units.map(unit => {
        if (unit.name !== unitName) return unit;
        return { ...unit, amount: Math.floor(baseUnitAmount * +ratio), ratio };
      });
      return { units: updatedUnits };
    });
  },
  setAmount: (unitName, amount) => {
    set(state => {
      const { units, baseUnit } = state;
      if (!baseUnit) return state;
      const { name: baseUnitName } = baseUnit;
      // Update the base unit
      const updatedBaseUnit = baseUnitName === unitName ? { ...baseUnit, amount } : baseUnit;
      // Calculate the new unit distribution
      const updatedUnits = units.map(unit => {
        if (unit.name === baseUnitName) return { ...unit, amount };
        return { ...unit, amount: Math.floor(amount * +unit.ratio) };
      });
      return { baseUnit: updatedBaseUnit, units: updatedUnits };
    });
  },
  reset: () => {
    set(state => ({ units: UNITS.map(unit => ({ ...unit, amount: 0, ratio: "0" })) }));
  }
}));
