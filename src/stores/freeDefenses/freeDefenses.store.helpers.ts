// FreeDefensesStore store helper functions and data
import { FreeDefensesStore } from "./freeDefenses.store.types";
import { CONSTANTS } from "@/config/constants";
import { OmitFunctionProperties } from "@/types/Utils.types";

const { ENHANCED: UNITS } = CONSTANTS.DEFENSES;

export const initialState: OmitFunctionProperties<FreeDefensesStore> = {
  units: UNITS.map(unit => ({ ...unit, amount: 0, enabled: true }))
} as const;
