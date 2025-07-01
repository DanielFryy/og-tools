// Ipms store helper functions and data
import { IpmsStore } from "./ipms.store.types";
import { CONSTANTS } from "@/config/constants";
import { OmitFunctionProperties } from "@/types/Utils.types";

const { ALL: UNITS } = CONSTANTS.DEFENSES;

export const initialState: OmitFunctionProperties<IpmsStore> = {
  units: UNITS.map(unit => ({ ...unit, amount: 0, ratio: 0, enabled: true })),
  enemyArmorTechLevel: 0,
  weaponTechLevel: 0,
  result: 0
} as const;
