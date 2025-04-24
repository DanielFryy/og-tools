// FreeShipsStore types and interfaces
import { EnhancedShip } from "../ship/ship.store.types";

export type FreeEnhancedShip = Omit<EnhancedShip, "ratio">;

export type FreeShipsStore = {
  units: FreeEnhancedShip[];
  setAmount: (unitName: string, amount: number) => void;
  reset: () => void;
};
