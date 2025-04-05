import { create } from "zustand";

import { FleetStore } from "./fleet.store.types";
import { fleet } from "@/components/FleetManagementTable/FleetManagementTable.helpers";

export const useFleetStore = create<FleetStore>((set, get) => ({
  fleetUnits: fleet.map(ship => ({ ...ship, amount: 0, ratio: 0 })),
  baseShip: null,
  setBaseShip: shipName => {
    const { fleetUnits } = get();
    if (!shipName) {
      set({
        baseShip: null,
        fleetUnits: fleetUnits.map(unit => ({ ...unit, amount: 0 }))
      });
    } else {
      const baseShip = fleetUnits.find(unit => unit.name === shipName);
      if (!baseShip) return;

      set({
        baseShip,
        fleetUnits: fleetUnits.map(unit => {
          const { name, ratio = 0 } = unit;
          if (name === shipName) return unit;
          const calculatedAmount = Math.floor(baseShip.amount * ratio);
          return { ...unit, amount: calculatedAmount };
        })
      });
    }
  },
  setAmount: (shipName, amount) => {
    set(state => {
      const { fleetUnits, baseShip } = state;
      if (!baseShip) return state;
      const { name: baseShipName } = baseShip;

      return {
        baseShip: baseShipName === shipName ? { ...baseShip, amount } : baseShip,
        fleetUnits: fleetUnits.map(unit => {
          const { name, ratio = 0 } = unit;
          if (name === shipName) return { ...unit, amount };
          const calculatedAmount = Math.floor(amount * ratio);
          return { ...unit, amount: calculatedAmount };
        })
      };
    });
  },
  setRatio: (shipName, ratio) => {
    set(state => {
      const { fleetUnits, baseShip } = state;
      const { amount: baseShipAmount = 0 } = baseShip ?? {};

      return {
        fleetUnits: fleetUnits.map(unit => {
          const { name } = unit;
          const calculatedAmount = Math.floor(baseShipAmount * ratio);
          console.log("setRatio", name, ratio, baseShip, calculatedAmount);

          if (name === shipName) return { ...unit, ratio, amount: calculatedAmount };
          return unit;
        })
      };
    });
  },
  resetAmounts: () => {
    set(state => ({
      fleetUnits: state.fleetUnits.map(unit => ({ ...unit, amount: 0 }))
    }));
  }
}));
