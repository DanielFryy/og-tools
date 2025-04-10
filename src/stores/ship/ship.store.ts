import { create } from "zustand";
import { persist } from "zustand/middleware";

import { initialState } from "./ship.store.helpers";
import { ShipStore } from "./ship.store.types";
import { calculateUnitsDistribution } from "@/utils/global.utils";

export const useShipStore = create<ShipStore>()(
  persist(
    (set, get) => ({
      ...initialState,
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
          const updatedUnits = calculateUnitsDistribution(updatedBaseUnit, units);

          return { baseUnit: updatedBaseUnit, units: updatedUnits };
        });
      },
      reset: () => {
        set(state => ({ ...state, ...initialState }));
      }
    }),
    { name: "ships" }
  )
);
