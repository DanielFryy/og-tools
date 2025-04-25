// FreeDefensesStore types and interfaces
import { EnhancedDefense } from "../defense/defense.store.types";

export type FreeEnhancedDefense = Omit<EnhancedDefense, "ratio">;

export type FreeDefensesStore = {
  units: FreeEnhancedDefense[];
  setAmount: (unitName: string, amount: number) => void;
  reset: () => void;
};
