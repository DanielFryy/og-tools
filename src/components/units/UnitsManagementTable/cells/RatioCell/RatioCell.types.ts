// RatioCell component types and interfaces
import { EnhancedDefense } from "@/stores/defense/defense.store.types";
import { EnhancedShip } from "@/stores/ship/ship.store.types";

export interface RatioCellProps {
  className?: string;
  unit: EnhancedShip | EnhancedDefense;
  onChange?: (unitName: string, value: string) => void;
  baseUnitName: string | undefined;
}
