// ResourceCell component types and interfaces
import { EnhancedDefense } from "@/stores/defense/defense.store.types";
import { EnhancedShip } from "@/stores/ship/ship.store.types";

export interface ResourceCellProps {
  className?: string;
  unit: EnhancedShip | EnhancedDefense;
  resourceType: "metal" | "crystal" | "deuterium";
}
