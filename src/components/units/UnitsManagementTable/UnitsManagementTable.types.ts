// UnitsManagementTable component types and interfaces
import { EnhancedDefense } from "@/stores/defense/defense.store.types";
import { EnhancedShip } from "@/stores/ship/ship.store.types";

export interface UnitsManagementTableProps {
  className?: string;
  units: EnhancedShip[] | EnhancedDefense[];
  baseUnitName: string | undefined;
  onEnableChange: (unitName: string) => void;
  onBaseUnitChange: (unitName: string) => void;
  onAmountChange: (unitName: string, amount: number) => void;
  onRatioChange?: (unitName: string, ratio: string) => void;
  title: string;
  withRatio?: boolean;
}
