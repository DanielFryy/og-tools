// ShipStore types and interfaces
import { Ship } from "@/types/Ship.types";

export interface EnhancedShip extends Ship {
  enabled: boolean;
  amount: number;
  ratio: number;
}

export type ShipStore = {
  units: EnhancedShip[];
  baseUnit: EnhancedShip | null;
  setEnabled: (unitName: string) => void;
  setBaseUnit: (unitName: string) => void;
  setRatio: (unitName: string, ratio: number) => void;
  setAmount: (unitName: string, amount: number) => void;
  reset: () => void;
};
