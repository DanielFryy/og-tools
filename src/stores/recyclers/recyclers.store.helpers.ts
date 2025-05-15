// Recyclers store helper functions and data
import { RecyclersStore } from "./recyclers.store.types";
import { CONSTANTS, RECYCLER } from "@/config/constants";
import { OmitFunctionProperties } from "@/types/Utils.types";

const { STATIC: UNITS } = CONSTANTS.SHIPS;

export const initialState: OmitFunctionProperties<RecyclersStore> = {
  units: UNITS.map(unit => ({ ...unit, amount: 0, enabled: true })),
  debrisFieldPercentage: 50,
  isDeuteriumIncluded: false,
  recyclerCargoCapacity: RECYCLER.cargoCapacity
} as const;
