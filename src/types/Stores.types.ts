// Stores types and interfaces
import { Defense } from "./Defense.types";
import { Ship } from "./Ship.types";

export type BaseUnit<T> = T extends "ship" ? Ship : T extends "defense" ? Defense : never;

export type EnhancedUnit<T = "ship" | "defense"> = BaseUnit<T> & {
  enabled: boolean;
  amount: number;
  ratio: number;
};

export type UnitStore<T> = {
  units: T[];
  baseUnit: T | null;
  setEnabled: (unitName: string) => void;
  setBaseUnit: (unitName: string) => void;
  setRatio: (unitName: string, ratio: number) => void;
  setAmount: (unitName: string, amount: number) => void;
  reset: () => void;
};
