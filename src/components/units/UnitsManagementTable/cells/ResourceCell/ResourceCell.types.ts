// ResourceCell component types and interfaces
import { EnhancedDefense } from "@/stores/defense/defense.store.types";
import { EnhancedShip } from "@/stores/ship/ship.store.types";

export interface ResourceCellProps {
  className?: string;
  unit: Omit<EnhancedShip | EnhancedDefense, "ratio">;
  resourceType: "metal" | "crystal" | "deuterium";
  isFree?: boolean;
}
