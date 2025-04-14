// ShipStore helper functions and data
import { ShipStore } from "./ship.store.types";
import { CONSTANTS } from "@/config/constants";
import { OmitFunctionProperties } from "@/types/Utils.types";

const { COMBAT: UNITS } = CONSTANTS.SHIPS;

export const initialState: OmitFunctionProperties<ShipStore> = {
  units: UNITS.map(unit => ({ ...unit, amount: 0, ratio: 0, enabled: true })),
  baseUnit: null
} as const;
