import { create } from "zustand";

import { calculateFleetDistribution, combatShips } from "./fleet.store.helpers";
import { FleetStore } from "./fleet.store.types";

export const useFleetStore = create<FleetStore>((set, get) => ({
  fleetUnits: combatShips.map(ship => ({ ...ship, amount: 0, ratio: 0 })),
  baseShip: null,
  setBaseShip: shipName => {
    const { fleetUnits } = get();
    if (!shipName) {
      set({ baseShip: null, fleetUnits: fleetUnits.map(unit => ({ ...unit, amount: 0 })) });
    } else {
      const baseShip = fleetUnits.find(unit => unit.name === shipName);
      if (!baseShip) return;
      // Calculate the new fleet distribution
      const updatedFleetUnits = calculateFleetDistribution(baseShip, fleetUnits);
      set({ baseShip, fleetUnits: updatedFleetUnits });
    }
  },
  setAmount: (shipName, amount) => {
    set(state => {
      const { fleetUnits, baseShip } = state;
      if (!baseShip) return state;
      const { name: baseShipName } = baseShip;

      // Update the base ship
      const updatedBaseShip = baseShipName === shipName ? { ...baseShip, amount } : baseShip;

      // Calculate the new fleet distribution
      const updatedFleetUnits = calculateFleetDistribution(updatedBaseShip, fleetUnits);

      return { baseShip: updatedBaseShip, fleetUnits: updatedFleetUnits };
    });
  },
  resetAmounts: () => {
    set(state => ({ fleetUnits: state.fleetUnits.map(unit => ({ ...unit, amount: 0 })) }));
  }
}));
