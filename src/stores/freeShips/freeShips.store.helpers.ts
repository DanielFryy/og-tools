// FreeShipsStore store helper functions and data
import { FreeShipsStore } from "./freeShips.store.types";
import { CONSTANTS } from "@/config/constants";
import { OmitFunctionProperties } from "@/types/Utils.types";

const { ALL: UNITS } = CONSTANTS.SHIPS;

export const initialState: OmitFunctionProperties<FreeShipsStore> = {
  units: UNITS.map(unit => ({ ...unit, amount: 0, enabled: true }))
} as const;
