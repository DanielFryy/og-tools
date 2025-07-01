// IpmsStore types and interfaces
import { EnhancedDefense } from "../defense/defense.store.types";
import { OmitFunctionProperties } from "@/types/Utils.types";

export type IpmsStore = {
  units: EnhancedDefense[];
  enemyArmorTechLevel: number;
  weaponTechLevel: number;
  result: number;
  setEnemyArmorTechLevel: (level: number) => void;
  setWeaponTechLevel: (level: number) => void;
  setAmount: (unitName: string, amount: number) => void;
  setResult: (result: number) => void;
  reset: (config?: ResetConfig) => void;
};

interface ResetConfig {
  exclude: (keyof OmitFunctionProperties<IpmsStore>)[];
}
