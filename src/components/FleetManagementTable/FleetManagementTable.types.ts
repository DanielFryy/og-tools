// FleetManagementTable component types and interfaces
import { Ship } from "@/stores/fleet/fleet.store.types";

export interface FleetManagementTableProps {
  className?: string;
}

export interface FleetUnit extends Ship {
  amount: number;
  ratio: number;
}
