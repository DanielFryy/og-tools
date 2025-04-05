// AmountCell component types and interfaces
import { FleetUnit } from "../../FleetManagementTable.types";

export interface AmountCellProps {
  className?: string;
  ship: FleetUnit;
  onChange: (fleetName: string, value: number) => void;
  baseShipName: string | undefined;
}
