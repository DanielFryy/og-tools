// ResourceCell component types and interfaces
import { FleetUnit } from "../../FleetManagementTable.types";

export interface ResourceCellProps {
  className?: string;
  ship: FleetUnit;
  resourceType: "metal" | "crystal" | "deuterium";
}
