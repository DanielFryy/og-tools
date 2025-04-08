// AmountCell component types and interfaces
import { EnhancedDefense } from "@/stores/defense/defense.store.types";
import { EnhancedShip } from "@/stores/ship/ship.store.types";

export interface AmountCellProps {
  className?: string;
  unit: EnhancedShip | EnhancedDefense;
  onChange: (fleetName: string, value: number) => void;
  baseUnitName: string | undefined;
}
