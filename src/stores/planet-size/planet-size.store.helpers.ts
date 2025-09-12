// Planet size store helper functions and data
import { PlanetSizeStore } from "./planet-size.store.types";
import { OmitFunctionProperties } from "@/types/Utils.types";

export const initialState: OmitFunctionProperties<PlanetSizeStore> = {
  planetSlot: "8",
  discovererClassBonus: false,
  researchersAllianceBonus: false,
  kaeleshDiscovererEnhancementLevel: 0,
  universeBonus: 0
} as const;
