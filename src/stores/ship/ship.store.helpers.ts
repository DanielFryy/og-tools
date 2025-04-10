// ShipStore helper functions and data
import { CONSTANTS } from "@/config/constants";

const { COMBAT: UNITS } = CONSTANTS.SHIPS;

export const initialState = {
  units: UNITS.map(unit => ({ ...unit, amount: 0, ratio: 0, enabled: true })),
  baseUnit: null
} as const;
