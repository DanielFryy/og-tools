// DefenseStore helper functions and data
import { DefenseStore } from "./defense.store.types";
import { CONSTANTS } from "@/config/constants";
import { OmitFunctionProperties } from "@/types/Utils.types";

const { ENHANCED: UNITS } = CONSTANTS.DEFENSES;

export const initialState: OmitFunctionProperties<DefenseStore> = {
  units: UNITS.map(unit => ({ ...unit, amount: 0, ratio: 0, enabled: true })),
  baseUnit: null
} as const;
