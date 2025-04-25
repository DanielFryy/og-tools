// UnitsManagementTable component types and interfaces
import { EnhancedDefense } from "@/stores/defense/defense.store.types";
import { FreeEnhancedDefense } from "@/stores/freeDefenses/freeDefenses.store.types";
import { FreeEnhancedShip } from "@/stores/freeShips/freeShips.store.types";
import { EnhancedShip } from "@/stores/ship/ship.store.types";

export interface UnitsManagementTableProps {
  className?: string;
  units: EnhancedShip[] | EnhancedDefense[] | FreeEnhancedShip[] | FreeEnhancedDefense[];
  baseUnitName?: string;
  onEnableChange?: (unitName: string) => void;
  onBaseUnitChange?: (unitName: string) => void;
  onAmountChange: (unitName: string, amount: number) => void;
  onRatioChange?: (unitName: string, ratio: number) => void;
  title: string;
  isFree?: boolean;
}
