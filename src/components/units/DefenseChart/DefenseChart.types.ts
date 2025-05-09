// DefenseChart component types and interfaces
import { EnhancedDefense } from "@/stores/defense/defense.store.types";
import { FreeEnhancedDefense } from "@/stores/freeDefenses/freeDefenses.store.types";
import { FreeEnhancedShip } from "@/stores/freeShips/freeShips.store.types";
import { EnhancedShip } from "@/stores/ship/ship.store.types";

export interface DefenseChartProps {
  className?: string;
  units: EnhancedShip[] | EnhancedDefense[] | FreeEnhancedShip[] | FreeEnhancedDefense[];
}
