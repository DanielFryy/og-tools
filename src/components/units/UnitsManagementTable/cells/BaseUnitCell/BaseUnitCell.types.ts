// BaseUnitCell component types and interfaces
import { Unit } from "@/types/Unit.types";

export interface BaseUnitCellProps {
  className?: string;
  unit: Unit;
  onChange: (value: string) => void;
  baseUnitName: string | undefined;
}
