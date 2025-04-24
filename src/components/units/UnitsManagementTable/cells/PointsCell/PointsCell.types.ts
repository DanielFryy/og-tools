// PointsCell component types and interfaces
import { EnhancedDefense } from "@/stores/defense/defense.store.types";
import { EnhancedShip } from "@/stores/ship/ship.store.types";

export interface PointsCellProps {
  className?: string;
  unit: Omit<EnhancedShip | EnhancedDefense, "ratio">;
  isFree?: boolean;
}
