// BaseShipCell component types and interfaces
import { FleetUnit } from "../../FleetManagementTable.types";

export interface BaseShipCellProps {
  className?: string;
  ship: FleetUnit;
  onChange: (value: string) => void;
  baseShipName: string | undefined;
}
