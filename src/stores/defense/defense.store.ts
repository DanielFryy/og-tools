import { create } from "zustand";
import { persist } from "zustand/middleware";

import { initialState } from "./defense.store.helpers";
import { DefenseStore } from "./defense.store.types";

export const useDefenseStore = create<DefenseStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      setEnabled: unitName => {
        const { units } = get();
        const updatedUnits = units.map(unit => {
          const { name, enabled } = unit;
          if (name !== unitName) return unit;
          return { ...unit, enabled: !enabled };
        });
        set({ units: updatedUnits });
      },
      setBaseUnit: unitName => {
        const { units, reset } = get();
        const baseUnit = units.find(unit => unit.name === unitName);
        if (!baseUnit) return;
        reset();
        set({ baseUnit });
      },
      setRatio: (unitName, ratio) => {
        set(state => {
          const { units, baseUnit } = state;
          if (!baseUnit) return state;
          const { amount: baseUnitAmount } = baseUnit;
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
        set(state => ({ ...state, ...initialState }));
      }
    }),
    { name: "defenses" }
  )
);
