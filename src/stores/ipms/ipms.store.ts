import { create } from "zustand";
import { persist } from "zustand/middleware";

import { initialState } from "./ipms.store.helpers";
import { IpmsStore } from "./ipms.store.types";

export const useIpmsStore = create<IpmsStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      setEnemyArmorTechLevel: level => {
        set({ enemyArmorTechLevel: level });
      },
      setMissileSiloLevel: level => {
        set({ missileSiloLevel: level });
      },
      setWeaponTechLevel: level => {
        set({ weaponTechLevel: level });
      },
      setAmount: (unitName, amount) => {
        const { units } = get();
        const updatedUnits = units.map(unit => {
          if (unit.name !== unitName) return unit;
          return { ...unit, amount };
        });
        set({ units: updatedUnits });
      },
      setResult: result => {
        set({ result });
      },
      reset: config => {
        const { exclude = [] } = config ?? {};
        const partialState = { ...initialState };
        for (const key of exclude) {
          delete partialState[key];
        }
        set(state => ({ ...state, ...partialState }));
      }
    }),
    {
      name: "ipms",
      partialize: state => {
        const { result, ...rest } = state;
        return rest;
      }
    }
  )
);
