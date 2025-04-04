// BaseShipCell component types and interfaces
import { FleetUnit } from "../../FleetManagementTable.types";

export interface BaseShipCellProps {
  className?: string;
  fleetUnit: FleetUnit;
  onChange: (value: string) => void;
  baseShipName: string | null;
}
