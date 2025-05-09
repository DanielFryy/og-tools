import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { EnhancedDefense } from "@/stores/defense/defense.store.types";
import { FreeEnhancedDefense } from "@/stores/freeDefenses/freeDefenses.store.types";
import { FreeEnhancedShip } from "@/stores/freeShips/freeShips.store.types";
import { EnhancedShip } from "@/stores/ship/ship.store.types";
import { PlayerClassType } from "@/types/Global.types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateTotals = (
  units: EnhancedShip[] | EnhancedDefense[] | FreeEnhancedShip[] | FreeEnhancedDefense[],
  playerClassType: PlayerClassType,
  isFree: boolean
) => {
  const totals = units.reduce(
    (acc, unit) => {
      const { name, amount: unitAmount, cost, enabled } = unit;
      const isReaper = name === "Reaper";
      const isPathfinder = name === "Pathfinder";
      const cantBuildReaper = isReaper && playerClassType !== "General";
      const cantBuildPathfinder = isPathfinder && playerClassType !== "Discoverer";
      const res = {
        amount: acc.amount + unitAmount,
        metal: acc.metal + cost.metal * unitAmount,
        crystal: acc.crystal + cost.crystal * unitAmount,
        deuterium: acc.deuterium + cost.deuterium * unitAmount
      };
      if (isFree) return res;
      if (cantBuildReaper || cantBuildPathfinder || !enabled) return acc;

      return res;
    },
    { amount: 0, metal: 0, crystal: 0, deuterium: 0 }
  );

  return totals;
};
