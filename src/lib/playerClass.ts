import { PlayerClassType } from "@/types/Global.types";

export const isUnitAvailableForPlayerClass = (unitName: string, playerClassType: PlayerClassType) => {
  if (playerClassType === "All") return true;
  if (unitName === "Reaper") return playerClassType === "General";
  if (unitName === "Pathfinder") return playerClassType === "Discoverer";

  return true;
};
