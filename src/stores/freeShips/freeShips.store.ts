import { create } from "zustand";
import { persist } from "zustand/middleware";

import { initialState } from "./freeShips.store.helpers";
import { FreeShipsStore } from "./freeShips.store.types";

export const useFreeShipsStore = create<FreeShipsStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      setAmount: (unitName, amount) => {
        const { units } = get();
        const updatedUnits = units.map(unit => {
          if (unit.name !== unitName) return unit;
          return { ...unit, amount };
        });
        set({ units: updatedUnits });
      },
      reset: () => {
        set(state => ({ ...state, ...initialState }));
      }
    }),
    { name: "freeShips" }
  )
);
