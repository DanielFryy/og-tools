// AmountCell component types and interfaces
import { FleetUnit } from "../../FleetManagementTable.types";

export interface AmountCellProps {
  className?: string;
  fleetUnit: FleetUnit;
  onChange: (value: string, fleetName: string) => void;
  baseShipName: string | null;
}
