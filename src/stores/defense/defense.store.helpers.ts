// DefenseStore helper functions and data
import { CONSTANTS } from "@/config/constants";

const { DEFENSES: UNITS } = CONSTANTS;

export const initialState = {
  units: UNITS.map(unit => ({ ...unit, amount: 0, ratio: "0" })),
  baseUnit: null
} as const;
