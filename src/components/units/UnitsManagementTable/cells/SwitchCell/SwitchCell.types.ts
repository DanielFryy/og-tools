// SwitchCell component types and interfaces
import { EnhancedDefense } from "@/stores/defense/defense.store.types";
import { EnhancedShip } from "@/stores/ship/ship.store.types";

export interface SwitchCellProps {
  className?: string;
  unit: Omit<EnhancedShip | EnhancedDefense, "ratio">;
  onChange: (unitName: string) => void;
  baseUnitName: string | undefined;
}
