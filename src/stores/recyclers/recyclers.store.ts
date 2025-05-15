import { create } from "zustand";
import { persist } from "zustand/middleware";

import { initialState } from "./recyclers.store.helpers";
import { RecyclersStore } from "./recyclers.store.types";

export const useRecyclersStore = create<RecyclersStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      setDebrisFieldPercentage: percentage => {
        set({ debrisFieldPercentage: percentage });
      },
      setIsDeuteriumIncluded: isIncluded => {
        set({ isDeuteriumIncluded: isIncluded });
      },
      setRecyclerCargoCapacity: capacity => {
        set({ recyclerCargoCapacity: capacity });
      },
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
    { name: "staticShips" }
  )
);
